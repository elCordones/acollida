/**
 * Motor d'Àudio Híbrid i Resilient (Web Speech API + Àudio Natiu Local + Web Audio API)
 * 
 * Estratègia en 3 nivells:
 * 1. Fitxers d'àudio MP3 natius locals d'alta qualitat (inclòs suport natiu complet per a Àrab).
 * 2. Síntesi vocal Web Speech API del navegador (Català, Castellà, etc.).
 * 3. Fallback d'àudio en línia d'alta fidelitat per a llengües no instal·lades al sistema operatiu.
 */

const AudioManager = {
  synth: window.speechSynthesis || null,
  audioCtx: null,
  voices: [],
  currentAudio: null,
  isSlowSpeed: false,

  init() {
    try {
      const savedSpeed = localStorage.getItem("acollida_speed");
      if (savedSpeed === "slow") {
        this.isSlowSpeed = true;
      }
    } catch (e) {
      console.warn("No s'ha pogut llegir la preferència de velocitat:", e);
    }
    this.updateSpeedUI();

    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  },

  toggleSpeed() {
    this.isSlowSpeed = !this.isSlowSpeed;
    try {
      localStorage.setItem("acollida_speed", this.isSlowSpeed ? "slow" : "normal");
    } catch (e) {
      console.warn("No s'ha pogut desar la velocitat:", e);
    }
    this.updateSpeedUI();
    // Breu anunci auditiu informatiu
    this.speak(this.isSlowSpeed ? "A poc a poc" : "Normal", "ca");
  },

  updateSpeedUI() {
    const btn = document.getElementById("speed-toggle-btn");
    if (btn) {
      btn.textContent = this.isSlowSpeed ? "🐢" : "🐇";
      const title = this.isSlowSpeed 
        ? "Velocitat de veu: A poc a poc 🐢 (Clica per a normal 🐇)" 
        : "Velocitat de veu: Normal 🐇 (Clica per a lenta 🐢)";
      btn.setAttribute("title", title);
      btn.setAttribute("aria-label", title);
    }
  },

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  },

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  hasVoiceForLang(lang) {
    if (!this.synth || !this.voices || this.voices.length === 0) return false;
    const langMap = {
      ca: ['ca-ES', 'ca'],
      es: ['es-ES', 'es'],
      fr: ['fr-FR', 'fr'],
      en: ['en-GB', 'en-US', 'en'],
      ar: ['ar-SA', 'ar-XA', 'ar-EG', 'ar'],
      uk: ['uk-UA', 'uk'],
      zh: ['zh-CN', 'zh-TW', 'zh-HK', 'zh'],
      ro: ['ro-RO', 'ro'],
      ur: ['ur-PK', 'ur-IN', 'ur']
    };
    const targetLocales = langMap[lang] || [lang];
    return this.voices.some(v => 
      targetLocales.some(loc => v.lang && v.lang.toLowerCase().startsWith(loc.toLowerCase()))
    );
  },

  /**
   * Atura qualsevol so en curs (síntesi de veu i àudios MP3)
   */
  stopAll() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  },

  /**
   * Resol una ruta relativa a una URL absoluta canònica compatible amb GitHub Pages,
   * servidors locals i obertura directa de fitxers (file:///).
   */
  getAudioUrl(relativePath) {
    if (!relativePath) return '';
    if (/^(https?:|data:|blob:)/i.test(relativePath)) {
      return relativePath;
    }
    const cleanPath = relativePath.replace(/^(\.\/|\/)/, '');
    try {
      const url = new URL(window.location.href);
      let baseDir;
      if (url.hostname.endsWith('github.io')) {
        // A GitHub Pages, el primer segment és el nom del repositori (/acollida/)
        const parts = url.pathname.split('/').filter(Boolean);
        const repo = parts[0] || '';
        baseDir = url.origin + '/' + repo + '/';
      } else if (url.protocol === 'file:') {
        return cleanPath;
      } else {
        let p = url.pathname;
        if (!p.endsWith('/')) {
          const idx = p.lastIndexOf('/');
          p = p.substring(0, idx + 1);
        }
        baseDir = url.origin + p;
      }
      return new URL(cleanPath, baseDir).href;
    } catch (e) {
      return cleanPath;
    }
  },

  /**
   * Reprodueix un fitxer d'àudio amb gestió d'errors i suport per a referer buit
   */
  playAudioFile(src, onFallback) {
    this.stopAll();

    const resolvedSrc = this.getAudioUrl(src);
    const audio = new Audio();
    // Bloquegem l'enviament de la capçalera Referer per permetre el fallback de serveis externs
    audio.referrerPolicy = 'no-referrer';
    audio.preload = 'auto';
    audio.src = resolvedSrc;
    audio.playbackRate = this.isSlowSpeed ? 0.76 : 1.0;
    this.currentAudio = audio;

    let fallbackCalled = false;
    const triggerFallback = (reason) => {
      if (fallbackCalled) return;
      fallbackCalled = true;
      console.warn("Fallback d'àudio activat per a:", resolvedSrc, reason);
      if (typeof onFallback === 'function') {
        onFallback();
      }
    };

    audio.onerror = (e) => {
      triggerFallback(e);
    };

    audio.onended = () => {
      if (this.currentAudio === audio) {
        this.currentAudio = null;
      }
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // Si l'àudio s'ha interromput per una nova petició de l'usuari (pause()), no fem fallback
        if (err.name === 'AbortError') {
          return;
        }
        triggerFallback(err);
      });
    }
  },

  /**
   * Pronuncia un text o reprodueix el seu àudio dedicat
   * @param {string} text Text a pronunciar
   * @param {string} lang Codi de llengua ('ca', 'es', 'fr', 'en', 'ar')
   * @param {string|null} localAudioPath Ruta d'arxiu MP3 local si existeix
   * @param {number|null} rate Velocitat de parla (si és null, s'adapta al mode DUA lenta/normal)
   */
  speak(text, lang = 'ca', localAudioPath = null, rate = null) {
    this.stopAll();

    const effectiveRate = (rate !== null && rate !== undefined)
      ? rate
      : (this.isSlowSpeed ? 0.68 : 0.88);

    // 1. Si tenim un fitxer d'àudio dedicat (ex: paquet local d'àrab), prioritzem-lo
    if (localAudioPath) {
      this.playAudioFile(localAudioPath, () => {
        // Fallback automàtic si el fitxer local no es troba
        this.speakWithSynthesisOrOnline(text, lang, effectiveRate);
      });
      return;
    }

    // 2. Si no hi ha fitxer local, emprem síntesi nativa o fallback en línia
    this.speakWithSynthesisOrOnline(text, lang, effectiveRate);
  },

  speakWithSynthesisOrOnline(text, lang, rate = 0.88) {
    // Si el navegador disposa de veu nativa instal·lada per a aquesta llengua
    if (this.synth && this.hasVoiceForLang(lang)) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1.0;

      const langMap = {
        ca: ['ca-ES', 'ca'],
        es: ['es-ES', 'es'],
        fr: ['fr-FR', 'fr'],
        en: ['en-GB', 'en-US', 'en'],
        ar: ['ar-SA', 'ar-XA', 'ar-EG', 'ar'],
        uk: ['uk-UA', 'uk'],
        zh: ['zh-CN', 'zh-TW', 'zh-HK', 'zh'],
        ro: ['ro-RO', 'ro'],
        ur: ['ur-PK', 'ur-IN', 'ur']
      };

      const targetLocales = langMap[lang] || [lang];
      utterance.lang = targetLocales[0];

      const matchedVoice = this.voices.find(voice => 
        targetLocales.some(loc => voice.lang && voice.lang.toLowerCase().startsWith(loc.toLowerCase()))
      );

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onerror = () => {
        // Si falla la veu nativa, saltem a l'àudio en línia
        this.playOnlineTTS(text, lang);
      };

      this.synth.speak(utterance);
    } else {
      // 3. Fallback d'àudio en línia d'alta fidelitat
      this.playOnlineTTS(text, lang);
    }
  },

  playOnlineTTS(text, lang) {
    const cleanText = text.trim();
    if (!cleanText) return;
    const ttsLang = lang === 'zh' ? 'zh-CN' : lang;
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${ttsLang}&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
    this.playAudioFile(url);
  },

  /**
   * Genera un to acústic d'èxit (Chime alegre) mitjançant síntesi pura d'ona
   */
  playSuccessSound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.log("Audio not enabled yet:", e);
    }
  },

  /**
   * Genera un to suau de reintent no punitiu
   */
  playRetrySound() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(329.63, now); // E4
      osc.frequency.setValueAtTime(293.66, now + 0.15); // D4

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.log("Audio not enabled yet:", e);
    }
  }
};

/**
 * VoiceLab: Laboratori de Veu «Escolta't i Repeteix» per a l'autoavaluació fonètica (DUA)
 * 100% autònom, privat (memòria RAM volàtil), resilient a iOS/Safari i Android/Chromebook.
 */
const VoiceLab = {
  mediaRecorder: null,
  activeStream: null,
  activeWordId: null,
  recordedAudios: new Map(), // wordId -> { blob, url, timestamp }
  currentPlayback: null,
  maxRecordSeconds: 6, // Aturada de seguretat automàtica per no deixar el micròfon obert
  autoStopTimer: null,

  /**
   * Comprova si el navegador i el dispositiu suporten l'enregistrament d'àudio
   */
  isSupported() {
    return !!(
      typeof navigator !== "undefined" &&
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === "function" &&
      typeof window !== "undefined" &&
      window.MediaRecorder
    );
  },

  /**
   * Detecta el tipus MIME i còdec òptim per al dispositiu actual
   * (audio/webm a Chrome/Android vs audio/mp4 a Safari/iOS iPad)
   */
  getSupportedMimeType() {
    if (!window.MediaRecorder) return "";
    const candidateTypes = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/aac',
      ''
    ];
    for (const type of candidateTypes) {
      if (type === '' || MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return '';
  },

  /**
   * Inicia la gravació de veu per a una paraula concreta
   */
  async startRecording(wordId, onTick, onFinish, onError) {
    if (!this.isSupported()) {
      if (onError) onError("unsupported");
      return;
    }

    // Atura qualsevol gravació o reproducció prèvia
    this.stopPlayback();
    this.stopRecording();

    try {
      // Petició del micròfon amb filtres natius d'aula (cancel·lació de ressò i supressió de soroll)
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      this.activeStream = stream;
      this.activeWordId = wordId;

      const mimeType = this.getSupportedMimeType();
      const options = mimeType ? { mimeType } : {};
      
      const recorder = new MediaRecorder(stream, options);
      this.mediaRecorder = recorder;
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        // Alliberament de maquinari immediat (apagar el micròfon físic per privacitat i bateria)
        if (this.activeStream) {
          this.activeStream.getTracks().forEach(track => track.stop());
          this.activeStream = null;
        }

        const blobType = mimeType || (recorder.mimeType || 'audio/webm');
        const blob = new Blob(chunks, { type: blobType });

        // Revocar URL anterior si existia per no consumir memòria RAM
        if (this.recordedAudios.has(wordId)) {
          const old = this.recordedAudios.get(wordId);
          if (old && old.url) URL.revokeObjectURL(old.url);
        }

        const audioUrl = URL.createObjectURL(blob);
        this.recordedAudios.set(wordId, {
          blob,
          url: audioUrl,
          timestamp: Date.now()
        });

        this.mediaRecorder = null;
        this.activeWordId = null;

        if (onFinish) onFinish(wordId, audioUrl);
      };

      recorder.start();

      // Compte enrere visual
      let secondsLeft = this.maxRecordSeconds;
      if (onTick) onTick(secondsLeft);

      if (this.autoStopTimer) clearInterval(this.autoStopTimer);
      this.autoStopTimer = setInterval(() => {
        secondsLeft--;
        if (onTick) onTick(secondsLeft);
        if (secondsLeft <= 0) {
          this.stopRecording();
        }
      }, 1000);

    } catch (err) {
      console.warn("Error en accedir al micròfon:", err);
      if (this.activeStream) {
        this.activeStream.getTracks().forEach(track => track.stop());
        this.activeStream = null;
      }
      this.mediaRecorder = null;
      this.activeWordId = null;

      let errType = "unknown";
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        errType = "permission_denied";
      } else if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
        errType = "no_device";
      } else if (err.name === "SecurityError") {
        errType = "insecure_context";
      }

      if (onError) onError(errType, err);
    }
  },

  /**
   * Atura manualment o automàticament la gravació en curs
   */
  stopRecording() {
    if (this.autoStopTimer) {
      clearInterval(this.autoStopTimer);
      this.autoStopTimer = null;
    }
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      try {
        this.mediaRecorder.stop();
      } catch (e) {
        console.warn("Error aturant MediaRecorder:", e);
      }
    }
    if (this.activeStream) {
      this.activeStream.getTracks().forEach(track => track.stop());
      this.activeStream = null;
    }
  },

  isRecording(wordId) {
    if (wordId) {
      return this.activeWordId === wordId && this.mediaRecorder && this.mediaRecorder.state === "recording";
    }
    return !!(this.mediaRecorder && this.mediaRecorder.state === "recording");
  },

  hasRecording(wordId) {
    return this.recordedAudios.has(wordId);
  },

  /**
   * Reprodueix l'àudio gravat per l'alumne
   */
  playRecording(wordId, onStart, onEnd) {
    this.stopPlayback();
    const item = this.recordedAudios.get(wordId);
    if (!item || !item.url) return;

    try {
      const audio = new Audio(item.url);
      this.currentPlayback = audio;

      audio.onplay = () => {
        if (onStart) onStart();
      };
      audio.onended = () => {
        this.currentPlayback = null;
        if (onEnd) onEnd();
      };
      audio.onerror = (e) => {
        console.warn("Error reproduint gravació pròpia:", e);
        this.currentPlayback = null;
        if (onEnd) onEnd();
      };

      audio.play().catch(e => {
        console.warn("Error en play():", e);
        this.currentPlayback = null;
        if (onEnd) onEnd();
      });
    } catch (e) {
      console.warn("Excepció creant àudio:", e);
      if (onEnd) onEnd();
    }
  },

  stopPlayback() {
    if (this.currentPlayback) {
      try {
        this.currentPlayback.pause();
        this.currentPlayback.currentTime = 0;
      } catch (e) {}
      this.currentPlayback = null;
    }
  },

  deleteRecording(wordId) {
    if (this.recordedAudios.has(wordId)) {
      const old = this.recordedAudios.get(wordId);
      if (old && old.url) {
        URL.revokeObjectURL(old.url);
      }
      this.recordedAudios.delete(wordId);
    }
  },

  clearAll() {
    this.stopRecording();
    this.stopPlayback();
    for (const [id, item] of this.recordedAudios.entries()) {
      if (item && item.url) URL.revokeObjectURL(item.url);
    }
    this.recordedAudios.clear();
  }
};

// Inicialització automàtica
if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', () => {
    AudioManager.init();
  });
}
