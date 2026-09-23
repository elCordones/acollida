/**
 * Lògica de l'Aplicació - Aula d'Acollida Digital
 * Gestiona l'estat de l'alumne, el multilingüisme, les activitats interactives i el registre de progrés.
 */

const App = {
  state: {
    studentName: "",
    bridgeLang: "es", // es, fr, en, ar
    currentCategory: null,
    currentMode: "discover", // discover | practice
    practiceType: "listen", // listen | memory
    startTime: null,
    discoveredWords: new Set(),
    quizAnswers: [],
    customVocabulary: []
  },

  // --- MÈTODES DE SEGURETAT I UTILITATS (SECURITY-AND-HARDENING) ---
  escapeHTML(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  sanitizeCSV(val) {
    if (val === null || val === undefined) return "";
    let str = String(val).trim();
    if (/^[=\+\-@\t\r]/.test(str)) {
      str = "'" + str;
    }
    return str.replace(/"/g, '""');
  },

  // --- GESTIÓ DEL VOCABULARI PERSONALITZAT (ESPAI DOCENT) ---
  loadCustomVocabulary() {
    try {
      const saved = localStorage.getItem("acollida_custom_vocab");
      this.state.customVocabulary = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(this.state.customVocabulary)) {
        this.state.customVocabulary = [];
      }
    } catch (e) {
      console.warn("Error carregant vocabulari personalitzat:", e);
      this.state.customVocabulary = [];
    }
  },

  saveCustomVocabulary() {
    try {
      localStorage.setItem("acollida_custom_vocab", JSON.stringify(this.state.customVocabulary));
    } catch (e) {
      console.warn("Error desant vocabulari personalitzat:", e);
    }
  },

  getAllVocabulary() {
    const custom = Array.isArray(this.state.customVocabulary) ? this.state.customVocabulary : [];
    return [...ACOLLIDA_DATA.vocabulary, ...custom];
  },

  getCategoryWords(catId) {
    return this.getAllVocabulary().filter(v => v.categoria === catId);
  },

  getWord(wordId) {
    return this.getAllVocabulary().find(v => v.id === wordId);
  },

  init() {
    this.loadCustomVocabulary();
    this.restoreFromStorage();
    this.renderInitialScreen();
    this.attachGlobalEvents();
  },

  // --- PERSISTÈNCIA A LOCALSTORAGE ---
  saveToStorage() {
    const dataToSave = {
      studentName: this.state.studentName,
      bridgeLang: this.state.bridgeLang,
      startTime: this.state.startTime ? this.state.startTime.toISOString() : null,
      discoveredWords: Array.from(this.state.discoveredWords),
      quizAnswers: this.state.quizAnswers
    };
    try {
      localStorage.setItem("acollida_session", JSON.stringify(dataToSave));
    } catch (e) {
      console.warn("No s'ha pogut desar a localStorage:", e);
    }
  },

  restoreFromStorage() {
    try {
      const saved = localStorage.getItem("acollida_session");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.studentName) this.state.studentName = parsed.studentName;
        if (parsed.bridgeLang) this.state.bridgeLang = parsed.bridgeLang;
        if (parsed.startTime) this.state.startTime = new Date(parsed.startTime);
        if (parsed.discoveredWords) this.state.discoveredWords = new Set(parsed.discoveredWords);
        if (parsed.quizAnswers) this.state.quizAnswers = parsed.quizAnswers;
      }
    } catch (e) {
      console.warn("Error en restaurar la sessió prèvia:", e);
    }
  },

  clearSession() {
    localStorage.removeItem("acollida_session");
    this.state.studentName = "";
    this.state.bridgeLang = "es";
    this.state.currentCategory = null;
    this.state.currentMode = "discover";
    this.state.practiceType = "listen";
    this.state.startTime = null;
    this.state.discoveredWords = new Set();
    this.state.quizAnswers = [];
    this.renderInitialScreen();
  },

  // --- GESTIÓ D'EVENTS GLOBALS ---
  attachGlobalEvents() {
    // Gestió del canvi de llengua de suport
    document.addEventListener("click", (e) => {
      const langBtn = e.target.closest(".lang-btn");
      if (langBtn) {
        document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
        langBtn.classList.add("active");
        this.state.bridgeLang = langBtn.dataset.lang;

        // Si som a la pantalla de benvinguda, actualitzem els textos dinàmicament conservant el nom
        const nameInput = document.getElementById("student-name");
        if (nameInput) {
          this.state.studentName = nameInput.value;
          this.renderInitialScreen();
        }
      }
    });
  },

  // --- RENDERITZACIÓ DE PANTALLES ---
  renderInitialScreen() {
    const mainWrapper = document.getElementById("main-wrapper");
    const userBadge = document.getElementById("user-badge");

    if (this.state.studentName && this.state.startTime) {
      // Si ja hi ha una sessió activa
      this.updateHeaderBadge();
      this.renderCategoriesView();
      return;
    }

    userBadge.style.display = "none";
    mainWrapper.innerHTML = `
      <div class="welcome-screen">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌟</div>
        <h2>${ACOLLIDA_DATA.ui.appTitle[this.state.bridgeLang] || ACOLLIDA_DATA.ui.appTitle.ca}</h2>
        <p class="subtitle">${ACOLLIDA_DATA.ui.appSubtitle[this.state.bridgeLang] || ACOLLIDA_DATA.ui.appSubtitle.ca}</p>

        <form class="config-form" id="session-form" onsubmit="App.handleStartSession(event)">
          <div class="form-group">
            <label for="student-name">
              <span>👤 ${ACOLLIDA_DATA.ui.studentNameLabel[this.state.bridgeLang] || "El teu nom:"}</span>
            </label>
            <input 
              type="text" 
              id="student-name" 
              class="form-input" 
              placeholder="Ex: Fatima, Omar, Lucas..." 
              required
              autocomplete="off"
              value="${this.escapeHTML(this.state.studentName || '')}"
            />
          </div>

          <div class="form-group">
            <label>
              <span>🌍 ${ACOLLIDA_DATA.ui.bridgeLangLabel[this.state.bridgeLang] || "La teva llengua de suport:"}</span>
            </label>
            <div class="lang-selector-grid">
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'es' ? 'active' : ''}" data-lang="es">
                <span class="flag">🇪🇸</span>
                <span class="name">Castellano</span>
              </button>
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'fr' ? 'active' : ''}" data-lang="fr">
                <span class="flag">🇫🇷</span>
                <span class="name">Français</span>
              </button>
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'en' ? 'active' : ''}" data-lang="en">
                <span class="flag">🇬🇧</span>
                <span class="name">English</span>
              </button>
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'ar' ? 'active' : ''}" data-lang="ar">
                <span class="flag">🇲🇦</span>
                <span class="name arabic-text">العربية</span>
              </button>
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'uk' ? 'active' : ''}" data-lang="uk">
                <span class="flag">🇺🇦</span>
                <span class="name">Українська</span>
              </button>
              <button type="button" class="lang-btn ${this.state.bridgeLang === 'zh' ? 'active' : ''}" data-lang="zh">
                <span class="flag">🇨🇳</span>
                <span class="name">中文</span>
              </button>
            </div>
          </div>

          <button type="submit" class="btn-primary" style="margin-top: 1rem;">
            <span>🚀 ${ACOLLIDA_DATA.ui.startSessionBtn[this.state.bridgeLang] || "Comença la sessió"}</span>
          </button>
        </form>
      </div>
    `;
  },

  handleStartSession(e) {
    e.preventDefault();
    const nameInput = document.getElementById("student-name");
    const name = nameInput.value.trim();
    if (!name) return;

    this.state.studentName = name;
    if (!this.state.startTime) {
      this.state.startTime = new Date();
    }
    this.saveToStorage();
    this.updateHeaderBadge();
    this.renderCategoriesView();

    // Salutació inicial amb síntesi de veu en català
    AudioManager.speak(`Hola ${name}! Benvingut a l'aula d'acollida.`);
  },

  updateHeaderBadge() {
    const userBadge = document.getElementById("user-badge");
    const userNameSpan = document.getElementById("user-name-display");
    if (userBadge && userNameSpan) {
      const flags = { es: "🇪🇸", fr: "🇫🇷", en: "🇬🇧", ar: "🇲🇦", uk: "🇺🇦", zh: "🇨🇳" };
      const flag = flags[this.state.bridgeLang] || "🌍";
      userNameSpan.innerHTML = `${this.escapeHTML(this.state.studentName)} <span title="Llengua de suport: ${this.state.bridgeLang.toUpperCase()}" style="font-size: 1.1em; margin-left: 0.25rem;">${flag}</span>`;
      userBadge.style.display = "flex";
    }
  },

  // --- VISTA DE TEMES I CATEGORIES ---
  renderCategoriesView() {
    this.state.currentCategory = null;
    const mainWrapper = document.getElementById("main-wrapper");
    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";

    let cardsHtml = ACOLLIDA_DATA.categories.map(cat => {
      const titleBridge = cat.titol[lang] || cat.titol.es;
      const descBridge = cat.descripcio[lang] || cat.descripcio.es;

      // Comptar paraules completades
      const totalWords = this.getCategoryWords(cat.id).length;
      const doneWords = this.getCategoryWords(cat.id).filter(v => this.state.discoveredWords.has(v.id)).length;

      return `
        <div class="category-card" style="--cat-color: ${cat.color}" onclick="App.openCategory('${cat.id}')">
          <div class="cat-icon">${cat.icon}</div>
          <h3 class="cat-title-ca">${cat.titol.ca}</h3>
          <p class="cat-title-bridge ${isArabic ? 'arabic-text' : ''}">${titleBridge}</p>
          <p class="cat-desc ${isArabic ? 'arabic-text' : ''}">${descBridge}</p>
          <div style="margin-top: 1rem; font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">
            Progrés: ${doneWords} / ${totalWords} paraules
          </div>
        </div>
      `;
    }).join("");

    mainWrapper.innerHTML = `
      <div class="section-header">
        <div>
          <h2 class="section-title">Temes d'Aprenentatge</h2>
          <p style="color: var(--text-muted);">Tria un tema per començar a descobrir vocabulari i practicar:</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn-secondary" onclick="App.showTeacherPanel()" title="Espai docent: gestionar vocabulari propi de l'escola">
            🏫 Espai Docent
          </button>
          <button class="btn-secondary" onclick="App.showFinishModal()">
            📄 ${ACOLLIDA_DATA.ui.finishSessionBtn[lang] || "Finalitza i Descarrega"}
          </button>
        </div>
      </div>
      <div class="categories-grid">
        ${cardsHtml}
      </div>
    `;
  },

  // --- VISTA DETALLADA DEL TEMA (DESCOBREIX & REPTES) ---
  openCategory(catId) {
    this.state.currentCategory = catId;
    this.initMemoryGame();
    this.renderCategoryContent();
  },

  setPracticeType(type) {
    this.state.practiceType = type;
    if (type === 'memory') {
      this.initMemoryGame();
    }
    this.renderCategoryContent();
  },

  setMode(mode) {
    this.state.currentMode = mode;
    this.renderCategoryContent();
  },

  renderCategoryContent() {
    const cat = ACOLLIDA_DATA.categories.find(c => c.id === this.state.currentCategory);
    if (!cat) return;

    const mainWrapper = document.getElementById("main-wrapper");
    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";
    const words = this.getCategoryWords(cat.id);

    mainWrapper.innerHTML = `
      <div class="topic-top-bar">
        <button class="btn-secondary" onclick="App.renderCategoriesView()">
          ⬅️ ${ACOLLIDA_DATA.ui.changeCategoryBtn[lang] || "Tornar"}
        </button>

        <div style="text-align: center;">
          <h2 style="font-size: 1.35rem; color: var(--text-main);">
            ${cat.icon} ${cat.titol.ca}
          </h2>
          <span style="font-size: 0.95rem; color: var(--text-muted);" class="${isArabic ? 'arabic-text' : ''}">
            ${cat.titol[lang] || ''}
          </span>
        </div>

        <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
          <button class="btn-secondary" onclick="App.showFlashcardsModal()" title="Imprimir targetes de vocabulari d'aquest tema">
            🖨️ Targetes
          </button>
          <div class="tabs-container">
            <button 
              class="tab-btn ${this.state.currentMode === 'discover' ? 'active' : ''}" 
              onclick="App.setMode('discover')">
              ${ACOLLIDA_DATA.ui.modeDiscover[lang] || "Descobreix 🎧"}
            </button>
            <button 
              class="tab-btn ${this.state.currentMode === 'practice' ? 'active' : ''}" 
              onclick="App.setMode('practice')">
              ${ACOLLIDA_DATA.ui.modePractice[lang] || "Reptes 🎯"}
            </button>
          </div>
        </div>
      </div>

      <div id="mode-content-container">
        ${this.state.currentMode === 'discover' ? this.renderDiscoverCards(words) : this.renderPracticeArea(words)}
      </div>
    `;
  },

  // --- MODE DESCOBREIX: TARGETES LÈXIQUES AMB ÀUDIO ---
  renderDiscoverCards(words) {
    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";

    return `
      <div class="vocab-grid">
        ${words.map(w => {
          const bridgeWord = w[lang] || w.es;
          const phonetic = (lang === 'ar' && w.ar_fonetica) ? `<div class="card-phonetic">Pronunciació: ${w.ar_fonetica}</div>` : '';
          const phraseCa = w.frase_model ? w.frase_model.ca : '';
          const phraseBridge = (w.frase_model && w.frase_model[lang]) ? w.frase_model[lang] : '';

          return `
            <div class="vocab-card" id="card-${w.id}">
              <div class="card-img-wrap">
                <span class="emoji-fallback">${w.icon}</span>
              </div>
              <div class="card-word-ca">${w.ca}</div>
              <div class="card-word-bridge ${isArabic ? 'arabic-text' : ''}">${bridgeWord}</div>
              ${phonetic}

              <div class="card-audio-actions">
                <button class="btn-speak" onclick="App.listenWord('${w.id}', 'ca')">
                  🔊 Català
                </button>
                <button class="btn-speak btn-speak-bridge" onclick="App.listenWord('${w.id}', '${lang}')">
                  🎧 ${lang.toUpperCase()}
                </button>
              </div>

              ${phraseCa ? `
                <div class="card-phrase-box">
                  <p class="phrase-ca">
                    <span>💬 "${phraseCa}"</span>
                    <button 
                      style="background:none; border:none; cursor:pointer; font-size: 1rem;" 
                      title="Escolta la frase en català"
                      aria-label="Escolta la frase en català"
                      onclick="App.listenPhrase('${w.id}', 'ca')">🔊</button>
                  </p>
                  <p class="phrase-bridge ${isArabic ? 'arabic-text' : ''}">
                    <span>${phraseBridge}</span>
                    <button 
                      style="background:none; border:none; cursor:pointer; font-size: 1rem; margin-inline-start: 0.35rem;" 
                      title="Escolta la frase en ${lang.toUpperCase()}"
                      aria-label="Escolta la frase en ${lang.toUpperCase()}"
                      onclick="App.listenPhrase('${w.id}', '${lang}')">🎧</button>
                  </p>
                </div>
              ` : ''}
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  listenWord(wordId, lang) {
    const item = this.getWord(wordId);
    if (!item) return;

    this.state.discoveredWords.add(wordId);
    this.saveToStorage();

    const textToSpeak = lang === 'ca' ? item.ca : (item[lang] || item.es);
    // Si la llengua disposa de fitxers d'àudio natius locals (ar, uk, zh), els prioritzem
    const localAudio = (lang === 'ar' || lang === 'uk' || lang === 'zh')
      ? `audio/${lang}/${item.id}.mp3`
      : null;

    AudioManager.speak(textToSpeak, lang, localAudio);

    // Feedback visual a la targeta
    const card = document.getElementById(`card-${wordId}`);
    if (card) {
      card.style.borderColor = "var(--primary-color)";
      card.classList.add("playing-audio");
      setTimeout(() => { 
        card.style.borderColor = ""; 
        card.classList.remove("playing-audio");
      }, 700);
    }
  },

  listenPhrase(wordId, lang) {
    const item = this.getWord(wordId);
    if (!item || !item.frase_model) return;

    const textToSpeak = lang === 'ca' ? item.frase_model.ca : (item.frase_model[lang] || item.frase_model.es);
    const localAudio = (lang === 'ar' || lang === 'uk' || lang === 'zh')
      ? `audio/${lang}/${item.id}_frase.mp3`
      : null;

    AudioManager.speak(textToSpeak, lang, localAudio);
  },

  // --- MODE PRÀCTICA / REPTES AUTOAVALUATIUS ---
  renderPracticeArea(words) {
    const lang = this.state.bridgeLang;
    const type = this.state.practiceType || "listen";

    return `
      <div class="practice-container">
        <div class="practice-subnav" role="tablist" aria-label="Tipus de repte">
          <button 
            class="subnav-btn ${type === 'listen' ? 'active' : ''}" 
            onclick="App.setPracticeType('listen')"
            role="tab"
            aria-selected="${type === 'listen'}">
            🎧 ${ACOLLIDA_DATA.ui.challengeListenTitle[lang] || "Repte auditiu"}
          </button>
          <button 
            class="subnav-btn ${type === 'memory' ? 'active' : ''}" 
            onclick="App.setPracticeType('memory')"
            role="tab"
            aria-selected="${type === 'memory'}">
            🃏 ${ACOLLIDA_DATA.ui.challengeMemoryTitle[lang] || "Joc de parelles (Memory)"}
          </button>
        </div>

        ${type === 'listen' ? this.renderListenChallenge(words) : this.renderMemoryGame(words)}
      </div>
    `;
  },

  // --- REPTE AUDITIU: ESCOLTA I TRIA ---
  renderListenChallenge(words) {
    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";

    // Triem una paraula aleatòria com a repte
    const targetWord = words[Math.floor(Math.random() * words.length)];

    // Triem 3 distractors
    const otherWords = words.filter(w => w.id !== targetWord.id);
    const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    // Guardem el repte actual en memòria
    this.currentChallenge = {
      targetId: targetWord.id,
      answered: false
    };

    return `
      <div class="practice-header">
        <h3>🎯 ${ACOLLIDA_DATA.ui.challengeListenTitle[lang] || "Repte auditiu"}</h3>
        <p class="${isArabic ? 'arabic-text' : ''}">
          ${ACOLLIDA_DATA.ui.challengeListenInstr[lang] || "Clica l'altaveu i selecciona la imatge corresponent:"}
        </p>
      </div>

      <div class="challenge-box">
        <button class="big-speaker-btn" onclick="App.playChallengeAudio('${targetWord.id}')" title="Escolta la paraula en català" aria-label="Escolta la paraula en català">
          🔊
        </button>
        <span style="font-weight: 600; color: var(--text-muted);">(Fes clic per escoltar)</span>

        <div class="challenge-options-grid">
          ${options.map(opt => `
            <button 
              class="option-btn" 
              id="opt-${opt.id}" 
              onclick="App.checkOption('${opt.id}', '${targetWord.id}')">
              <span class="opt-icon">${opt.icon}</span>
              <span class="opt-text">${opt.ca}</span>
            </button>
          `).join("")}
        </div>

        <div id="feedback-box" class="feedback-banner"></div>

        <div id="next-challenge-wrap" style="display: none; margin-top: 1rem;">
          <button class="btn-primary" onclick="App.nextChallenge()">
            Següent repte ➡️
          </button>
        </div>
      </div>
    `;
  },

  playChallengeAudio(wordId) {
    const item = this.getWord(wordId);
    if (item) {
      AudioManager.speak(item.ca, 'ca');
    }
  },

  checkOption(selectedId, targetId) {
    if (this.currentChallenge.answered) return;

    const feedbackBox = document.getElementById("feedback-box");
    const nextWrap = document.getElementById("next-challenge-wrap");
    const isCorrect = (selectedId === targetId);

    // Registre de l'intent
    this.state.quizAnswers.push({
      wordId: targetId,
      selectedId: selectedId,
      isCorrect: isCorrect,
      timestamp: new Date().toISOString()
    });
    this.saveToStorage();

    const selectedBtn = document.getElementById(`opt-${selectedId}`);

    if (isCorrect) {
      this.currentChallenge.answered = true;
      if (selectedBtn) selectedBtn.classList.add("correct");
      AudioManager.playSuccessSound();

      feedbackBox.className = "feedback-banner success";
      feedbackBox.innerHTML = `🌟 ${ACOLLIDA_DATA.ui.wellDone[this.state.bridgeLang] || "Molt bé! Felicitats!"}`;
      nextWrap.style.display = "block";
    } else {
      if (selectedBtn) {
        selectedBtn.classList.add("wrong");
        setTimeout(() => selectedBtn.classList.remove("wrong"), 600);
      }
      AudioManager.playRetrySound();

      feedbackBox.className = "feedback-banner retry";
      feedbackBox.innerHTML = `💪 ${ACOLLIDA_DATA.ui.tryAgain[this.state.bridgeLang] || "Torna-ho a provar!"}`;
    }
  },

  nextChallenge() {
    this.renderCategoryContent();
  },

  // --- JOC DE PARELLES (MEMORY GAME) ---
  initMemoryGame() {
    const catWords = this.getCategoryWords(this.state.currentCategory);
    if (!catWords.length) return;

    // Seleccionem fins a 4 paraules per generar 8 cartes (4 parelles)
    const shuffled = [...catWords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(4, shuffled.length));

    const cards = [];
    selected.forEach(item => {
      // Carta tipus icona
      cards.push({
        id: `mem_icon_${item.id}`,
        wordId: item.id,
        type: 'icon',
        icon: item.icon,
        ca: item.ca,
        flipped: false,
        matched: false
      });
      // Carta tipus paraula escrita
      cards.push({
        id: `mem_word_${item.id}`,
        wordId: item.id,
        type: 'word',
        icon: item.icon,
        ca: item.ca,
        flipped: false,
        matched: false
      });
    });

    cards.sort(() => 0.5 - Math.random());

    this.memoryGame = {
      cards: cards,
      selectedCards: [],
      matchedPairs: 0,
      totalPairs: selected.length,
      isLocked: false
    };
  },

  renderMemoryGame(words) {
    if (!this.memoryGame || !this.memoryGame.cards || !this.memoryGame.cards.length) {
      this.initMemoryGame();
    }

    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";
    const mg = this.memoryGame;
    const isFinished = mg.matchedPairs >= mg.totalPairs && mg.totalPairs > 0;

    return `
      <div class="practice-header">
        <h3>🃏 ${ACOLLIDA_DATA.ui.challengeMemoryTitle[lang] || "Joc de parelles (Memory)"}</h3>
        <p class="${isArabic ? 'arabic-text' : ''}">
          ${ACOLLIDA_DATA.ui.challengeMemoryInstr[lang] || "Gira dues targetes per associar la imatge amb la paraula en català:"}
        </p>
        <div id="memory-score-display" style="margin-top: 0.6rem; font-weight: 700; color: var(--primary-color);">
          Parelles trobades: ${mg.matchedPairs} / ${mg.totalPairs}
        </div>
      </div>

      <div class="memory-grid" id="memory-grid">
        ${mg.cards.map((card, idx) => `
          <div 
            class="memory-card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}" 
            id="mcard-${card.id}"
            onclick="App.flipMemoryCard('${card.id}')"
            onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.flipMemoryCard('${card.id}');}"
            tabindex="0"
            role="button"
            aria-label="${card.flipped || card.matched ? (card.type === 'icon' ? 'Imatge ' + card.ca : 'Paraula ' + card.ca) : 'Targeta oculta ' + (idx + 1)}">
            <div class="memory-card-face memory-card-back">
              🎒
            </div>
            <div class="memory-card-face memory-card-front">
              ${card.type === 'icon' 
                ? `<span class="memory-card-icon">${card.icon}</span>` 
                : `<span class="memory-card-word">${card.ca}</span>`}
            </div>
          </div>
        `).join("")}
      </div>

      ${isFinished ? `
        <div class="memory-victory-box">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🌟🎉👏</div>
          <h4 style="font-size: 1.3rem; color: #10b981; margin-bottom: 0.5rem;">
            ${ACOLLIDA_DATA.ui.memoryWellDone[lang] || "Fantàstic! Has trobat totes les parelles!"}
          </h4>
          <button class="btn-primary" onclick="App.restartMemoryGame()" style="margin-top: 1rem;">
            ${ACOLLIDA_DATA.ui.playAgainBtn[lang] || "Jugar una altra partida 🔄"}
          </button>
        </div>
      ` : ''}
    `;
  },

  flipMemoryCard(cardId) {
    const mg = this.memoryGame;
    if (!mg || mg.isLocked) return;

    const card = mg.cards.find(c => c.id === cardId);
    if (!card || card.flipped || card.matched) return;

    // Gira la targeta
    card.flipped = true;
    mg.selectedCards.push(card);

    // Pronunciem la paraula en català per reforçar el so
    AudioManager.speak(card.ca, 'ca');

    // Actualitzem l'element al DOM
    const el = document.getElementById(`mcard-${card.id}`);
    if (el) el.classList.add("flipped");

    if (mg.selectedCards.length === 2) {
      const [c1, c2] = mg.selectedCards;
      if (c1.wordId === c2.wordId) {
        // Parella correcta!
        c1.matched = true;
        c2.matched = true;
        mg.matchedPairs++;
        mg.selectedCards = [];

        this.state.discoveredWords.add(c1.wordId);
        this.state.quizAnswers.push({
          wordId: c1.wordId,
          selectedId: c2.wordId,
          isCorrect: true,
          timestamp: new Date().toISOString()
        });
        this.saveToStorage();

        setTimeout(() => {
          const el1 = document.getElementById(`mcard-${c1.id}`);
          const el2 = document.getElementById(`mcard-${c2.id}`);
          if (el1) el1.classList.add("matched");
          if (el2) el2.classList.add("matched");
          AudioManager.playSuccessSound();

          if (mg.matchedPairs >= mg.totalPairs) {
            this.renderCategoryContent();
          } else {
            const scoreDisplay = document.getElementById("memory-score-display");
            if (scoreDisplay) {
              scoreDisplay.textContent = `Parelles trobades: ${mg.matchedPairs} / ${mg.totalPairs}`;
            }
          }
        }, 300);
      } else {
        // No coincideixen
        mg.isLocked = true;
        setTimeout(() => {
          AudioManager.playRetrySound();
        }, 350);

        setTimeout(() => {
          c1.flipped = false;
          c2.flipped = false;
          mg.selectedCards = [];
          mg.isLocked = false;
          const el1 = document.getElementById(`mcard-${c1.id}`);
          const el2 = document.getElementById(`mcard-${c2.id}`);
          if (el1) el1.classList.remove("flipped");
          if (el2) el2.classList.remove("flipped");
        }, 1100);
      }
    }
  },

  restartMemoryGame() {
    this.initMemoryGame();
    this.renderCategoryContent();
  },

  // --- GENERADOR DE FLASHCARDS D'AULA IMPRIMIBLES (RETOLACIÓ FÍSICA) ---
  showFlashcardsModal() {
    const cat = ACOLLIDA_DATA.categories.find(c => c.id === this.state.currentCategory);
    if (!cat) return;

    const words = this.getCategoryWords(cat.id);
    const lang = this.state.bridgeLang;
    const isArabic = lang === "ar";

    const cardsHtml = words.map(w => {
      const bridgeWord = w[lang] || w.es;
      const phonetic = (lang === 'ar' && w.ar_fonetica) ? `<div class="flashcard-phonetic">(${w.ar_fonetica})</div>` : '';

      return `
        <div class="flashcard-item">
          <div class="flashcard-icon">${w.icon}</div>
          <div class="flashcard-word-ca">${w.ca}</div>
          <div class="flashcard-word-bridge ${isArabic ? 'arabic-text' : ''}">${bridgeWord}</div>
          ${phonetic}
          <div class="flashcard-footer-cut">✂️ Retalla per la línia discontínua • Aula d'Acollida</div>
        </div>
      `;
    }).join("");

    const modalHtml = `
      <div class="modal-overlay" id="flashcards-modal" role="dialog" aria-modal="true" aria-labelledby="modal-flashcards-title">
        <div class="modal-content" style="max-width: 900px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <div>
              <h3 id="modal-flashcards-title" style="font-size: 1.4rem; color: var(--text-heading); margin-bottom: 0.25rem;">
                🖨️ Targetes de Vocabulari (Flashcards) per a l'Aula
              </h3>
              <p style="color: var(--text-muted); font-size: 0.9rem;">
                Tema: <strong>${cat.icon} ${cat.titol.ca}</strong> • Ideals per retolar l'aula física o fer jocs manipulatius
              </p>
            </div>
            <button class="btn-secondary" onclick="App.closeModal()" aria-label="Tancar finestra">✖️</button>
          </div>

          <div class="flashcards-sheet">
            ${cardsHtml}
          </div>

          <div class="modal-actions" style="margin-top: 1.5rem;">
            <button class="btn-primary" onclick="window.print()" aria-label="Imprimir les targetes en PDF o paper">
              🖨️ Imprimeix les Targetes (PDF)
            </button>
            <button class="btn-secondary" onclick="App.closeModal()" aria-label="Tancar finestra">
              Tancar ✖️
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("modal-container").innerHTML = modalHtml;
  },

  // --- FINALITZACIÓ DE SESSIÓ, INFORME CSV I PASSAPORT IMPRIMIBLE ---
  showFinishModal() {
    const totalDiscovered = this.state.discoveredWords.size;
    const totalQuiz = this.state.quizAnswers.length;
    const correctQuiz = this.state.quizAnswers.filter(q => q.isCorrect).length;
    const accuracy = totalQuiz > 0 ? Math.round((correctQuiz / totalQuiz) * 100) : 0;

    const wordsMastered = Array.from(this.state.discoveredWords).map(id => {
      const item = this.getWord(id);
      return item ? `<span class="word-badge">${item.icon} ${item.ca}</span>` : '';
    }).join("");

    const nowFormatted = new Date().toLocaleDateString('ca-ES', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });

    const modalHtml = `
      <div class="modal-overlay" id="finish-modal" role="dialog" aria-modal="true" aria-labelledby="modal-student-title">
        <div class="modal-content">
          <div class="passport-certificate">
            <div class="passport-header">
              <h3 id="modal-student-title">🎓 Passaport d'Aprenentatge - Aula d'Acollida</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem;">Generalitat de Catalunya • Servei Educatiu</p>
            </div>

            <div class="passport-student-name">
              ${this.escapeHTML(this.state.studentName || 'Alumne')}
            </div>
            <p style="color: var(--text-main); font-weight: 500;">
              Ha completat satisfactòriament la seva sessió de suport lingüístic el dia <strong>${nowFormatted}</strong>.
            </p>

            <div class="passport-metrics">
              <div class="metric-item">
                <div class="num">${totalDiscovered}</div>
                <div class="lbl">Paraules treballades</div>
              </div>
              <div class="metric-item">
                <div class="num">${accuracy}%</div>
                <div class="lbl">Precisió en reptes</div>
              </div>
              <div class="metric-item">
                <div class="num">${correctQuiz} / ${totalQuiz}</div>
                <div class="lbl">Encerts als jocs</div>
              </div>
            </div>

            <h4 style="font-size: 1rem; color: var(--text-heading); margin-bottom: 0.5rem;">Vocabulari adquirit en aquesta sessió:</h4>
            <div class="passport-words-list">
              ${wordsMastered || '<span style="color: var(--text-muted);">Cap paraula registrada encara.</span>'}
            </div>

            <div style="margin-top: 2rem; border-top: 1px dashed var(--border-color); padding-top: 1rem; display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted);">
              <span>Segell de l'Aula d'Acollida: ⭐⭐⭐</span>
              <span>Signatura del/de la docent: _______________</span>
            </div>
          </div>

          <div class="modal-actions">
            <button class="btn-primary" onclick="window.print()" aria-label="Imprimir el passaport en PDF o paper">
              🖨️ Imprimeix el Passaport (PDF)
            </button>
            <button class="btn-secondary" onclick="App.exportCSV()" aria-label="Descarregar les dades en full de càlcul">
              📥 Descarrega Full de Càlcul (.CSV)
            </button>
            <button class="btn-secondary" onclick="App.closeModal()" aria-label="Tancar la finestra">
              Tancar ✖️
            </button>
          </div>
        </div>
      </div>
    `;

    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = modalHtml;
  },

  closeModal() {
    document.getElementById("modal-container").innerHTML = "";
  },

  // Exportador de dades CSV compatible amb Excel i Google Sheets
  exportCSV() {
    const rawStudent = this.state.studentName || "Alumne";
    const safeStudentFilename = rawStudent.replace(/[^a-zA-Z0-9àèéíòóúçñÀÈÉÍÒÓÚÇÑ_\-]/g, '_').slice(0, 30) || "Alumne";
    const dateStr = new Date().toISOString().split('T')[0];
    const filename = `Acollida_${safeStudentFilename}_${dateStr}.csv`;

    // Capçaleres amb BOM UTF-8 per garantir que caràcters catalans i àrabs s'obrin bé a Excel
    let csvContent = "\uFEFF";
    csvContent += "REGISTRE DE SESSIÓ - AULA D'ACOLLIDA\n";
    csvContent += `Alumne/a;${this.sanitizeCSV(this.state.studentName)}\n`;
    csvContent += `Llengua de suport;${this.sanitizeCSV(this.state.bridgeLang)}\n`;
    csvContent += `Data de la sessió;${dateStr}\n`;
    csvContent += `Hora d'inici;${this.state.startTime ? this.state.startTime.toLocaleTimeString() : ''}\n\n`;

    csvContent += "VOCABULARI EXPLORAT\n";
    csvContent += "ID;Categoria;Català;Llengua Pont\n";
    this.state.discoveredWords.forEach(id => {
      const item = this.getWord(id);
      if (item) {
        const bridgeWord = item[this.state.bridgeLang] || item.es;
        csvContent += `"${item.id}";"${item.categoria}";"${item.ca}";"${bridgeWord}"\n`;
      }
    });

    csvContent += "\nRESULTATS DELS REPTES I JOCS\n";
    csvContent += "Data/Hora;Paraula Objectiu;Opció Escollida;Correcte\n";
    this.state.quizAnswers.forEach(q => {
      const target = this.getWord(q.wordId);
      const selected = this.getWord(q.selectedId);
      csvContent += `"${q.timestamp}";"${target ? target.ca : q.wordId}";"${selected ? selected.ca : q.selectedId}";"${q.isCorrect ? 'SÍ' : 'NO'}"\n`;
    });

    // Descàrrega directa del fitxer
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // --- ESPAI DOCENT: GESTIÓ DE VOCABULARI PERSONALITZAT DE L'ESCOLA ---
  showTeacherPanel() {
    this.loadCustomVocabulary();
    const modalContainer = document.getElementById("modal-container");
    const lang = this.state.bridgeLang;
    const customList = this.state.customVocabulary || [];

    const categoryOptions = ACOLLIDA_DATA.categories.map(c => `
      <option value="${c.id}">${c.icon} ${c.titol.ca}</option>
    `).join("");

    const itemsHtml = customList.length ? customList.map(item => {
      const bridgeWord = item[lang] || item.es || "";
      const cat = ACOLLIDA_DATA.categories.find(c => c.id === item.categoria);
      const catName = cat ? `${cat.icon} ${cat.titol.ca}` : item.categoria;

      return `
        <div class="teacher-vocab-item" id="titem-${item.id}">
          <div class="teacher-vocab-info">
            <span class="teacher-vocab-icon">${item.icon || '🏫'}</span>
            <div class="teacher-vocab-texts">
              <span class="teacher-vocab-ca">${this.escapeHTML(item.ca)}</span>
              <span class="teacher-vocab-bridge">${this.escapeHTML(bridgeWord)}</span>
              <span class="teacher-vocab-cat-badge">${catName}</span>
            </div>
          </div>
          <div class="teacher-item-actions">
            <button class="btn-icon-action" onclick="AudioManager.speak('${this.escapeHTML(item.ca).replace(/'/g, "\\'")}', 'ca')" title="Escolta la pronunciació en català" aria-label="Escolta en català">🔊</button>
            <button class="btn-icon-action" onclick="App.openEditCustomWord('${item.id}')" title="Edita aquesta paraula" aria-label="Edita paraula">✏️</button>
            <button class="btn-icon-action danger" onclick="App.deleteCustomWord('${item.id}')" title="Elimina aquesta paraula" aria-label="Elimina paraula">🗑️</button>
          </div>
        </div>
      `;
    }).join("") : `
      <div class="teacher-empty-state">
        <div class="icon">🏫</div>
        <h4 style="color: var(--text-heading); font-size: 1.15rem; margin-bottom: 0.35rem;">Cap paraula pròpia afegida encara</h4>
        <p>Afegeix els espais, serveis o objectes de la vostra escola per adaptar l'aplicació a la realitat del vostre centre.</p>
      </div>
    `;

    modalContainer.innerHTML = `
      <div class="modal-overlay" id="teacher-modal" role="dialog" aria-modal="true" aria-labelledby="modal-teacher-title">
        <div class="modal-content" style="max-width: 840px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
              <h3 id="modal-teacher-title" style="font-size: 1.35rem; color: var(--text-heading); margin-bottom: 0.2rem;">
                🏫 Espai Docent: Vocabulari de l'Escola
              </h3>
              <p style="color: var(--text-muted); font-size: 0.88rem;">
                Crea, edita i comparteix paraules i espais propis del centre escolar.
              </p>
            </div>
            <button class="btn-secondary" onclick="App.closeModal()" aria-label="Tancar finestra">✖️</button>
          </div>

          <div class="teacher-toolbar">
            <button class="teacher-btn-action primary" onclick="App.toggleCustomWordForm()">
              ➕ Nova Paraula / Espai
            </button>
            <button class="teacher-btn-action" onclick="App.exportCustomVocabularyJSON()">
              💾 Exporta (.JSON)
            </button>
            <button class="teacher-btn-action" onclick="document.getElementById('import-json-input').click()">
              📂 Importa (.JSON)
            </button>
            <input type="file" id="import-json-input" accept=".json" style="display: none;" onchange="App.handleImportJSON(event)">
            ${customList.length ? `
              <button class="teacher-btn-action" onclick="App.clearAllCustomVocabulary()" style="color: #ef4444; margin-left: auto;">
                🗑️ Netejar tot
              </button>
            ` : ''}
          </div>

          <!-- Formulari d'afegir/editar (ocult per defecte) -->
          <div id="teacher-form-wrap" style="display: none;" class="teacher-form-card">
            <h4 id="teacher-form-title" style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 0.85rem;">
              ➕ Afegir nova paraula o espai
            </h4>
            <form id="custom-word-form" onsubmit="App.handleSaveCustomWord(event)">
              <input type="hidden" id="custom-word-id" value="">
              
              <div class="teacher-form-grid">
                <div class="teacher-form-group">
                  <label for="c-ca">Paraula en català *</label>
                  <input type="text" id="c-ca" placeholder="Ex: L'hort escolar, La consergeria..." required autocomplete="off">
                </div>

                <div class="teacher-form-group">
                  <label for="c-cat">Categoria</label>
                  <select id="c-cat">
                    ${categoryOptions}
                  </select>
                </div>

                <div class="teacher-form-group">
                  <label for="c-icon">Icona / Emoji</label>
                  <input type="text" id="c-icon" placeholder="🏫" value="🏫" maxlength="4" style="text-align: center; font-size: 1.25rem;">
                  <div class="emoji-pills-row">
                    ${['🏫', '📚', '🌱', '🔔', '🚪', '🧑‍🏫', '🏀', '🎨', '🔬', '💻', '🧃', '🥪', '🌳', '🚌'].map(em => `
                      <button type="button" class="emoji-pill" onclick="App.setFormEmoji('${em}')">${em}</button>
                    `).join("")}
                  </div>
                </div>
              </div>

              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin: 0.75rem 0 0.4rem;">
                Traduccions a les llengües de suport:
              </div>
              <div class="teacher-form-grid">
                <div class="teacher-form-group">
                  <label for="c-es">Castellà (ES)</label>
                  <input type="text" id="c-es" placeholder="El huerto escolar">
                </div>
                <div class="teacher-form-group">
                  <label for="c-fr">Francès (FR)</label>
                  <input type="text" id="c-fr" placeholder="Le potager de l'école">
                </div>
                <div class="teacher-form-group">
                  <label for="c-en">Anglès (EN)</label>
                  <input type="text" id="c-en" placeholder="The school garden">
                </div>
                <div class="teacher-form-group">
                  <label for="c-ar">Àrab (AR)</label>
                  <input type="text" id="c-ar" placeholder="حديقة المدرسة" dir="rtl" class="arabic-text">
                </div>
                <div class="teacher-form-group">
                  <label for="c-uk">Ucraïnès (UK)</label>
                  <input type="text" id="c-uk" placeholder="Шкільний город">
                </div>
                <div class="teacher-form-group">
                  <label for="c-zh">Xinès (ZH)</label>
                  <input type="text" id="c-zh" placeholder="学校菜园">
                </div>
              </div>

              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin: 0.75rem 0 0.4rem;">
                Frase model d'ús escolar:
              </div>
              <div class="teacher-form-grid">
                <div class="teacher-form-group">
                  <label for="c-frase-ca">Frase en català</label>
                  <input type="text" id="c-frase-ca" placeholder="Ex: Avui anem a l'hort a regar.">
                </div>
                <div class="teacher-form-group">
                  <label for="c-frase-bridge">Frase en la llengua de suport</label>
                  <input type="text" id="c-frase-bridge" placeholder="Ex: Hoy vamos al huerto a regar.">
                </div>
              </div>

              <div style="display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" class="btn-secondary" onclick="App.toggleCustomWordForm(false)">Cancel·lar</button>
                <button type="submit" class="btn-primary" style="padding: 0.55rem 1.25rem; font-size: 0.95rem;">💾 Desar Paraula</button>
              </div>
            </form>
          </div>

          <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.6rem;">
            Llista de paraules de l'escola (${customList.length}):
          </div>

          <div class="teacher-vocab-items" id="teacher-vocab-list">
            ${itemsHtml}
          </div>

          <div class="modal-actions" style="margin-top: 1.25rem;">
            <button class="btn-primary" onclick="App.closeModal()">
              Tanca l'Espai Docent
            </button>
          </div>
        </div>
      </div>
    `;
  },

  toggleCustomWordForm(forceState) {
    const wrap = document.getElementById("teacher-form-wrap");
    if (!wrap) return;
    const shouldShow = (typeof forceState === "boolean") ? forceState : (wrap.style.display === "none");
    wrap.style.display = shouldShow ? "block" : "none";
    if (shouldShow) {
      document.getElementById("teacher-form-title").textContent = "➕ Afegir nova paraula o espai";
      document.getElementById("custom-word-id").value = "";
      document.getElementById("c-ca").value = "";
      document.getElementById("c-icon").value = "🏫";
      document.getElementById("c-es").value = "";
      document.getElementById("c-fr").value = "";
      document.getElementById("c-en").value = "";
      document.getElementById("c-ar").value = "";
      document.getElementById("c-uk").value = "";
      document.getElementById("c-zh").value = "";
      document.getElementById("c-frase-ca").value = "";
      document.getElementById("c-frase-bridge").value = "";
      document.getElementById("c-ca").focus();
    }
  },

  setFormEmoji(emoji) {
    const input = document.getElementById("c-icon");
    if (input) {
      input.value = emoji;
    }
  },

  openEditCustomWord(id) {
    const item = (this.state.customVocabulary || []).find(w => w.id === id);
    if (!item) return;

    this.toggleCustomWordForm(true);
    document.getElementById("teacher-form-title").textContent = "✏️ Edita paraula o espai";
    document.getElementById("custom-word-id").value = item.id;
    document.getElementById("c-ca").value = item.ca || "";
    document.getElementById("c-cat").value = item.categoria || "centre";
    document.getElementById("c-icon").value = item.icon || "🏫";
    document.getElementById("c-es").value = item.es || "";
    document.getElementById("c-fr").value = item.fr || "";
    document.getElementById("c-en").value = item.en || "";
    document.getElementById("c-ar").value = item.ar || "";
    document.getElementById("c-uk").value = item.uk || "";
    document.getElementById("c-zh").value = item.zh || "";
    document.getElementById("c-frase-ca").value = item.frase_model ? (item.frase_model.ca || "") : "";
    document.getElementById("c-frase-bridge").value = item.frase_model ? (item.frase_model.es || item.frase_model[this.state.bridgeLang] || "") : "";
  },

  handleSaveCustomWord(e) {
    e.preventDefault();
    const id = document.getElementById("custom-word-id").value.trim();
    const ca = document.getElementById("c-ca").value.trim();
    if (!ca) return;

    const categoria = document.getElementById("c-cat").value;
    const icon = document.getElementById("c-icon").value.trim() || "🏫";
    const es = document.getElementById("c-es").value.trim() || ca;
    const fr = document.getElementById("c-fr").value.trim() || es;
    const en = document.getElementById("c-en").value.trim() || es;
    const ar = document.getElementById("c-ar").value.trim() || es;
    const uk = document.getElementById("c-uk").value.trim() || es;
    const zh = document.getElementById("c-zh").value.trim() || es;

    const fraseCa = document.getElementById("c-frase-ca").value.trim();
    const fraseBridge = document.getElementById("c-frase-bridge").value.trim();

    const wordObj = {
      id: id || ("cust_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4)),
      categoria: categoria,
      icon: icon,
      ca: ca,
      es: es,
      fr: fr,
      en: en,
      ar: ar,
      uk: uk,
      zh: zh,
      frase_model: {
        ca: fraseCa || ca,
        es: fraseBridge || es,
        fr: fraseBridge || fr,
        en: fraseBridge || en,
        ar: fraseBridge || ar,
        uk: fraseBridge || uk,
        zh: fraseBridge || zh
      },
      isCustom: true
    };

    if (id) {
      const idx = this.state.customVocabulary.findIndex(w => w.id === id);
      if (idx >= 0) {
        this.state.customVocabulary[idx] = wordObj;
      } else {
        this.state.customVocabulary.push(wordObj);
      }
    } else {
      this.state.customVocabulary.push(wordObj);
    }

    this.saveCustomVocabulary();
    this.showTeacherPanel();

    if (this.state.currentCategory) {
      this.renderCategoryContent();
    } else if (this.state.studentName) {
      this.renderCategoriesView();
    }
  },

  deleteCustomWord(id) {
    if (!confirm("Vols eliminar aquesta paraula personalitzada?")) return;
    this.state.customVocabulary = (this.state.customVocabulary || []).filter(w => w.id !== id);
    this.saveCustomVocabulary();
    this.showTeacherPanel();

    if (this.state.currentCategory) {
      this.renderCategoryContent();
    } else if (this.state.studentName) {
      this.renderCategoriesView();
    }
  },

  clearAllCustomVocabulary() {
    if (!confirm("Segur que vols esborrar TOTES les paraules personalitzades de l'escola? Aquesta acció no es pot desfer.")) return;
    this.state.customVocabulary = [];
    this.saveCustomVocabulary();
    this.showTeacherPanel();

    if (this.state.currentCategory) {
      this.renderCategoryContent();
    } else if (this.state.studentName) {
      this.renderCategoriesView();
    }
  },

  exportCustomVocabularyJSON() {
    const data = this.state.customVocabulary || [];
    if (!data.length) {
      alert("Encara no hi ha cap paraula personalitzada per exportar. Afegeix-ne una primer!");
      return;
    }
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `vocabulari_escola_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  handleImportJSON(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (!Array.isArray(imported)) {
          alert("El fitxer no conté un format de vocabulari vàlid (ha de ser una llista JSON).");
          return;
        }

        const validItems = imported.filter(item => item && typeof item.ca === "string" && typeof item.categoria === "string");
        if (!validItems.length) {
          alert("No s'han trobat elements de vocabulari vàlids al fitxer.");
          return;
        }

        // Fusió amb les dades existents
        const current = this.state.customVocabulary || [];
        validItems.forEach(newItem => {
          if (!newItem.id) {
            newItem.id = "cust_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4);
          }
          newItem.isCustom = true;
          const idx = current.findIndex(w => w.id === newItem.id);
          if (idx >= 0) {
            current[idx] = newItem;
          } else {
            current.push(newItem);
          }
        });

        this.state.customVocabulary = current;
        this.saveCustomVocabulary();
        this.showTeacherPanel();

        if (this.state.currentCategory) {
          this.renderCategoryContent();
        } else if (this.state.studentName) {
          this.renderCategoriesView();
        }

        alert(`S'han importat correctament ${validItems.length} paraules de l'escola!`);
      } catch (err) {
        console.error("Error analitzant el fitxer JSON:", err);
        alert("Error en llegir el fitxer JSON: Comprova que el fitxer sigui vàlid.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }
};

/**
 * Gestor de Tema (Mode Fosc / Clar)
 * Per defecte utilitza la preferència del sistema/dispositiu (prefers-color-scheme).
 * Permet a l'usuari commutar manualment i desa la preferència a localStorage.
 */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem("acollida_theme");
    if (saved === "dark" || saved === "light") {
      this.applyTheme(saved, false);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.applyTheme(prefersDark ? "dark" : "light", false);
    }

    // Escoltar canvis dinàmics del sistema operatiu si l'usuari no ha forçat un tema manual
    try {
      if (window.matchMedia) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
          if (!localStorage.getItem("acollida_theme")) {
            this.applyTheme(e.matches ? "dark" : "light", false);
          }
        });
      }
    } catch (err) {
      console.warn("matchMedia listener no suportat:", err);
    }
  },

  applyTheme(theme, save = true) {
    document.documentElement.setAttribute("data-theme", theme);
    if (save) {
      localStorage.setItem("acollida_theme", theme);
    }
    this.updateIcon(theme);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || 
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    this.applyTheme(next, true);
  },

  updateIcon(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      const titleText = theme === "dark" ? "Activar mode clar" : "Activar mode fosc";
      btn.setAttribute("title", titleText);
      btn.setAttribute("aria-label", titleText);
    }
  }
};

// Inicialització en carregar la pàgina
window.addEventListener("DOMContentLoaded", () => {
  ThemeManager.init();
  App.init();
});

