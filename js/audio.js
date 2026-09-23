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

  init() {
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
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
      ar: ['ar-SA', 'ar-XA', 'ar-EG', 'ar']
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
   * Reprodueix un fitxer d'àudio
   */
  playAudioFile(src, onFallback) {
    this.stopAll();
    const audio = new Audio(src);
    this.currentAudio = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn("No s'ha pogut reproduir l'àudio:", src, err);
        if (typeof onFallback === 'function') {
          onFallback();
        }
      });
    }
  },

  /**
   * Pronuncia un text o reprodueix el seu àudio dedicat
   * @param {string} text Text a pronunciar
   * @param {string} lang Codi de llengua ('ca', 'es', 'fr', 'en', 'ar')
   * @param {string|null} localAudioPath Ruta d'arxiu MP3 local si existeix
   * @param {number} rate Velocitat de parla
   */
  speak(text, lang = 'ca', localAudioPath = null, rate = 0.88) {
    this.stopAll();

    // 1. Si tenim un fitxer d'àudio dedicat (ex: paquet local d'àrab), prioritzem-lo
    if (localAudioPath) {
      this.playAudioFile(localAudioPath, () => {
        // Fallback automàtic si el fitxer local no es troba
        this.speakWithSynthesisOrOnline(text, lang, rate);
      });
      return;
    }

    // 2. Si no hi ha fitxer local, emprem síntesi nativa o fallback en línia
    this.speakWithSynthesisOrOnline(text, lang, rate);
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
        ar: ['ar-SA', 'ar-XA', 'ar-EG', 'ar']
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
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
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

// Inicialització automàtica
if (typeof window !== "undefined") {
  window.addEventListener('DOMContentLoaded', () => {
    AudioManager.init();
  });
}
