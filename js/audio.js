/**
 * Motor d'Àudio i Síntesi de Veu (Web Speech API + Web Audio API)
 * Funciona 100% en local sense necessitat de connexió a cap servidor.
 * Velocitat adaptada a l'alumnat d'acollida (0.85x per facilitar la discriminació fonètica).
 */

const AudioManager = {
  synth: window.speechSynthesis || null,
  audioCtx: null,
  voices: [],

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

  /**
   * Pronuncia un text en la llengua indicada
   * @param {string} text Text a pronunciar
   * @param {string} lang Codi de llengua ('ca', 'es', 'fr', 'en', 'ar')
   * @param {number} rate Velocitat (per defecte 0.88 per a comprensió pedagògica)
   */
  speak(text, lang = 'ca', rate = 0.88) {
    if (!this.synth) {
      console.warn("La síntesi de veu no està disponible en aquest navegador.");
      return;
    }

    // Atura qualsevol pronunciació anterior
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Mapa de codis de llengua BCP 47
    const langMap = {
      ca: ['ca-ES', 'ca'],
      es: ['es-ES', 'es'],
      fr: ['fr-FR', 'fr'],
      en: ['en-GB', 'en-US', 'en'],
      ar: ['ar-SA', 'ar-XA', 'ar-EG', 'ar']
    };

    const targetLocales = langMap[lang] || [lang];
    utterance.lang = targetLocales[0];

    // Cerca de la veu més adient disponible al sistema operatiu
    if (this.voices.length === 0) {
      this.loadVoices();
    }

    const matchedVoice = this.voices.find(voice => 
      targetLocales.some(loc => voice.lang.toLowerCase().startsWith(loc.toLowerCase()))
    );

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    this.synth.speak(utterance);
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
      // Arpegi positiu Do - Mi - Sol
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
