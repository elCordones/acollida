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
    startTime: null,
    discoveredWords: new Set(),
    quizAnswers: []
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

  init() {
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
      userNameSpan.textContent = this.state.studentName;
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
      const totalWords = ACOLLIDA_DATA.vocabulary.filter(v => v.categoria === cat.id).length;
      const doneWords = ACOLLIDA_DATA.vocabulary.filter(v => v.categoria === cat.id && this.state.discoveredWords.has(v.id)).length;

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
        <div>
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
    const words = ACOLLIDA_DATA.vocabulary.filter(v => v.categoria === cat.id);

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
                      title="Escolta la frase"
                      onclick="App.listenPhrase('${w.id}', 'ca')">🔊</button>
                  </p>
                  <p class="phrase-bridge ${isArabic ? 'arabic-text' : ''}">${phraseBridge}</p>
                </div>
              ` : ''}
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  listenWord(wordId, lang) {
    const item = ACOLLIDA_DATA.vocabulary.find(v => v.id === wordId);
    if (!item) return;

    this.state.discoveredWords.add(wordId);
    this.saveToStorage();

    const textToSpeak = lang === 'ca' ? item.ca : (item[lang] || item.es);
    // Si la llengua és àrab, emprem el fitxer d'àudio natiu local d'alta qualitat
    const localAudio = lang === 'ar' ? `audio/ar/${item.id}.mp3` : null;

    AudioManager.speak(textToSpeak, lang, localAudio);

    // Feedback visual a la targeta
    const card = document.getElementById(`card-${wordId}`);
    if (card) {
      card.style.borderColor = "#2563eb";
      setTimeout(() => { card.style.borderColor = ""; }, 600);
    }
  },

  listenPhrase(wordId, lang) {
    const item = ACOLLIDA_DATA.vocabulary.find(v => v.id === wordId);
    if (!item || !item.frase_model) return;

    const textToSpeak = lang === 'ca' ? item.frase_model.ca : (item.frase_model[lang] || item.frase_model.es);
    const localAudio = lang === 'ar' ? `audio/ar/${item.id}_frase.mp3` : null;

    AudioManager.speak(textToSpeak, lang, localAudio);
  },

  // --- MODE PRÀCTICA / REPTES AUTOAVALUATIUS ---
  renderPracticeArea(words) {
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
      <div class="practice-container">
        <div class="practice-header">
          <h3>🎯 ${ACOLLIDA_DATA.ui.challengeListenTitle[lang] || "Repte auditiu"}</h3>
          <p class="${isArabic ? 'arabic-text' : ''}">
            ${ACOLLIDA_DATA.ui.challengeListenInstr[lang] || "Clica l'altaveu i selecciona la imatge corresponent:"}
          </p>
        </div>

        <div class="challenge-box">
          <button class="big-speaker-btn" onclick="App.playChallengeAudio('${targetWord.id}')" title="Escolta">
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
      </div>
    `;
  },

  playChallengeAudio(wordId) {
    const item = ACOLLIDA_DATA.vocabulary.find(v => v.id === wordId);
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

  // --- FINALITZACIÓ DE SESSIÓ, INFORME CSV I PASSAPORT IMPRIMIBLE ---
  showFinishModal() {
    const totalDiscovered = this.state.discoveredWords.size;
    const totalQuiz = this.state.quizAnswers.length;
    const correctQuiz = this.state.quizAnswers.filter(q => q.isCorrect).length;
    const accuracy = totalQuiz > 0 ? Math.round((correctQuiz / totalQuiz) * 100) : 0;

    const wordsMastered = Array.from(this.state.discoveredWords).map(id => {
      const item = ACOLLIDA_DATA.vocabulary.find(v => v.id === id);
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
      const item = ACOLLIDA_DATA.vocabulary.find(v => v.id === id);
      if (item) {
        const bridgeWord = item[this.state.bridgeLang] || item.es;
        csvContent += `"${item.id}";"${item.categoria}";"${item.ca}";"${bridgeWord}"\n`;
      }
    });

    csvContent += "\nRESULTATS DELS REPTES I JOCS\n";
    csvContent += "Data/Hora;Paraula Objectiu;Opció Escollida;Correcte\n";
    this.state.quizAnswers.forEach(q => {
      const target = ACOLLIDA_DATA.vocabulary.find(v => v.id === q.wordId);
      const selected = ACOLLIDA_DATA.vocabulary.find(v => v.id === q.selectedId);
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

