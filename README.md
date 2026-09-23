# 🎒 Aula d'Acollida Digital (Suport Lingüístic i Social)

Aplicació web autònoma, multilingüe i accessible dissenyada per a l'acollida d'alumnat nouvingut a **Educació Primària**. Basada en els criteris psicopedagògics dels **Quaderns de Suport Lingüístic i Social (SLS)** i els recursos d'acollida de la **XTEC** (Generalitat de Catalunya).

---

## 🌟 Característiques Principals

1. **Llengua d'aprenentatge (Meta):** Català (`ca-ES`).
2. **Llengües de suport inicial (Pont):**
   * 🇪🇸 Castellà
   * 🇫🇷 Francès
   * 🇬🇧 Anglès
   * 🇲🇦 Àrab (amb suport tipogràfic natiu de dreta a esquerra **RTL** i transliteració fonètica).
3. **Seqüència Pedagògica DUA:**
   * **Mode Descobreix 🎧:** Targetes visuals amb àudio en català i en la llengua de suport, acompanyades de microestructures i frases útils de comunicació diària (*BICS*).
   * **Mode Reptes 🎯:** Minijocs de discriminació auditiva i reconeixement visual amb reforç positiu immediat i acústica no punitiva.
4. **100% Autònoma i Local:**
   * Utilitza la **Web Speech API** del propi navegador per a la síntesi vocal (sense dependència de servidors ni costos d'API).
   * Funciona sense connexió a internet un cop carregada.
5. **Avaluació Formativa i Seguiment:**
   * Persistència automàtica de la sessió a la memòria local (`localStorage`).
   * **Full CSV descarregable:** Compatible amb Microsoft Excel i Google Sheets (amb codificació UTF-8 BOM per a caràcters catalans i àrabs).
   * **Passaport d'Aprenentatge (PDF/Imprimible):** Document visual en format diploma per a motivar l'infant i afegir a la seva carpeta d'aprenentatge.

---

## 🚀 Com Utilitzar l'Aplicació

### Opció A: Execució en Local (Immediata)
1. Ves a la carpeta on hi ha els fitxers.
2. Fes **doble clic sobre el fitxer `index.html`**. S'obrirà automàticament al teu navegador preferit (Google Chrome, Microsoft Edge, Safari o Firefox).
3. *Consell:* Per gaudir de la millor qualitat de veu en català i àrab, es recomana utilitzar Google Chrome o Microsoft Edge, ja que incorporen veus naturals d'alta qualitat.

### Opció B: Publicació a GitHub Pages (Per utilitzar en tauletes d'escola)
1. Puja els fitxers a un repositori de **GitHub** (per exemple `aula-acollida-digital`).
2. Al teu repositori, ves a **Settings** > **Pages**.
3. A la secció *Branch*, selecciona la branca `main` (carpeta `/root`) i fes clic a **Save**.
4. En menys d'un minut tindràs un enllaç públic gratuït (ex: `https://el-teu-usuari.github.io/aula-acollida-digital/`) que podràs obrir des de qualsevol tauleta de l'escola sense instal·lar res.

---

## 📁 Estructura del Projecte

```
Alumne Nouvingut/
├── index.html          # Interfície principal accessible
├── css/
│   └── style.css       # Estils DUA, suport RTL (àrab) i format d'impressió
├── js/
│   ├── data.js         # Matriu de dades multilingüe (fàcilment ampliable)
│   ├── audio.js        # Motor de so i síntesi de veu Web Speech API
│   └── app.js          # Lògica d'interacció, reptes i exportació de dades
└── README.md           # Guia d'ús i documentació pedagògica
```

---

## ✏️ Com Afegir Nous Vocabularis o Idiomes

Totes les paraules, categories i frases estan centralitzades a [`js/data.js`](js/data.js).

Per afegir una nova paraula a qualsevol tema, només cal afegir un bloc com aquest dins de la llista `vocabulary`:

```javascript
{
  id: "esc_regle",
  categoria: "escola",
  icon: "📏",
  ca: "El regle",
  es: "La regla",
  fr: "La règle",
  en: "The ruler",
  ar: "المسطرة",
  ar_fonetica: "Al-mistara",
  frase_model: {
    ca: "Puc mesurar amb el regle.",
    es: "Puedo medir con la regla.",
    fr: "Je peux mesurer avec la règle.",
    en: "I can measure with the ruler.",
    ar: "يمكنني القياس بالمسطرة."
  }
}
```
