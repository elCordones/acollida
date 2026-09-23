# Aula d'Acollida Digital - Estat i Documentació del Projecte

## 1. Descripció i Especificacions del Projecte
- **Objectiu principal**: Aplicació web autònoma, multilingüe i accessible dissenyada per a l'acollida d'alumnat nouvingut a Educació Primària. Facilita l'adquisició inicial de vocabulari i expressions funcionals (BICS) mitjançant bastiment lingüístic multilingüe i síntesi de veu autònoma.
- **Públic destinatari**: Alumnat nouvingut d'Educació Primària, docents d'Aules d'Acollida i mestres d'Educació Especial / SIEI.
- **Llengües integrades**: 
  - Català (Llengua d'aprenentatge / Meta)
  - 6 Llengües pont de suport: Castellà (🇪🇸), Francès (🇫🇷), Anglès (🇬🇧), Àrab (🇲🇦, suport natiu RTL i transliteració fonètica), Ucraïnès (🇺🇦) i Xinès (🇨🇳).
- **Stack tecnològic**:
  - HTML5 semàntic i accessible (WCAG / DUA)
  - CSS3 modern responsive (suport tàctil, flexbox/grid, RTL natiu, impressió `@media print`)
  - JavaScript natiu pur (sense dependències de servidors ni llibreries externes)
  - Web Speech API + Paquets d'Àudio Natiu Local (342 fitxers MP3 en total: àrab, ucraïnès i xinès)
  - Web Audio API (efectes acústics generatius de reforç positiu)
  - LocalStorage (persistència local de sessió)
  - Service Worker / PWA (estratègia mixta de memòria cau per a funcionament 100% fora de línia)
- **Llicenciament (segons skill `apps-escolars`)**:
  - Autoria: David Cordones (2026)
  - Codi: AGPL v3
  - Contingut educatiu: Creative Commons Reconeixement-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)

---

## 2. Estat Actual i Punt de Control (Darrera sessió: 2026-09-23)
- **Estat general**: Totalment funcional, auditat i actualitzat (Versió 2.1 Espai Docent: Personalització de Vocabulari Escolar, Exportació/Importació JSON i 11 Categories).
- **Funcionalitats completades**:
  - [x] **Panell Docent de Gestió de Vocabulari Escolar (`🏫 Espai Docent`)**:
    - [x] Accés ràpid des de la capçalera (botó `🏫`) i des de la vista principal de temes.
    - [x] Formulari interactiu per afegir noves paraules i espais amb selecció d'emoji visual ràpid, categoria, traduccions a les 6 llengües pont i frases model.
    - [x] Accions d'edició (`✏️`), eliminació (`🗑️`) i prova d'àudio (`🔊`) en temps real.
    - [x] **Exportació / Importació JSON**: Eina de col·laboració per desar `vocabulari_escola.json` i compartir-lo fàcilment entre docents, aules i tauletes del centre.
    - [x] **Integració transparent**: Les paraules personalitzades s'integren automàticament a "Descobreix 🎧", "Reptes 🎯", "Joc de parelles (Memory 🃏)", Flashcards imprimibles i exportació de progrés.
  - [x] **11a Categoria Temàtica: "El nostre centre escolar" (🏫)**:
    - [x] Integrada a la matriu de dades per acollir els espais, serveis i projectes de l'escola.
    - [x] Dotada de 3 conceptes de referència inicials: La biblioteca (📚), L'hort escolar (🌱) i La consergeria (🔔) amb 18 nous fitxers MP3 descarregats.
    - [x] Total de vocabulari base ampliat a **60 conceptes clau** (més les paraules personalitzades il·limitades del centre).
  - [x] **Paquet complet d'àudios natius locals (360 fitxers MP3 en total)**:
    - [x] `audio/ar/`: 120 fitxers MP3 en àrab (paraules i frases).
    - [x] `audio/uk/`: 120 fitxers MP3 en ucraïnès (paraules i frases).
    - [x] `audio/zh/`: 120 fitxers MP3 en xinès (paraules i frases).
    - [x] Síntesi de veu Web Speech API i Google TTS com a doble fallback d'alta fidelitat.
  - [x] **Integració de 6 Llengües Pont Oficials d'Acollida**:
    - [x] Castellà (🇪🇸), Francès (🇫🇷), Anglès (🇬🇧), Àrab (🇲🇦), Ucraïnès (🇺🇦) i Xinès (🇨🇳).
    - [x] Selector d'idioma gràfic actualitzat a la pantalla de benvinguda amb visualització de banderes.
    - [x] Insígnia d'alumne a la capçalera amb la bandera de la llengua de suport activa.
    - [x] Traducció íntegra de la interfície d'usuari (UI), títols i descripcions de les 11 categories, i les 60 paraules amb les seves respectives frases model en les 6 llengües.
  - [x] **Arquitectura PWA (Progressive Web App) i Suport 100% Offline**:
    - [x] Manifest web (`manifest.json`) amb icones de 192x192 i 512x512 per a instal·lació d'aplicació nativa a pantalles d'inici (iOS, Android, Chromebooks).
    - [x] Service Worker (`sw.js`) actualitzat a memòria cau `acollida-cache-v2.1` amb estratègia Stale-While-Revalidate per a l'App Shell i Cache-First per als fitxers d'àudio.
    - [x] Cache-busting de versions (`?v=2.1`) a `index.html` per forçar actualització immediata dels recursos als navegadors.
  - [x] **Generador de Flashcards de Vocabulari per a Retolació d'Aula**:
    - [x] Suport automàtic per a les 11 categories temàtiques, vocabulari personalitzat i les 6 llengües pont.
    - [x] Vista prèvia de targetes de mida gran amb imatge, paraula en català, traducció a la llengua pont i línia de tall per a tisores.
    - [x] Estils d'impressió optimitzats (`@media print`) en quadrícula de 2 columnes per a paper A4 en blanc i negre estalvi de tinta per retolar els objectes de l'aula física.
  - [x] Motor de veu integrat en local amb Web Speech API i efectes sonors sintètics DUA.
  - [x] Mode "Descobreix 🎧" amb targetes interactives, àudio doble i frase model.
  - [x] Mode "Reptes 🎯" diversificat: Repte auditiu i Joc de parelles (Memory 🃏).
  - [x] **Control de velocitat de veu DUA (🐢 A poc a poc / 🐇 Normal)** a la capçalera.
  - [x] Persistència automàtica de la sessió i del vocabulari personalitzat a `localStorage`.
  - [x] Generador i exportador de full de càlcul `.CSV` codificat en UTF-8 BOM per a Excel / Google Sheets.
  - [x] Generador de "Passaport d'Aprenentatge" en format diploma visual i preparat per a imprimir / PDF.
  - [x] Auditoria de seguretat aplicada: protecció contra injeccions XSS al DOM (`escapeHTML`) i protecció contra injeccions de fórmules al CSV (`sanitizeCSV`).
  - [x] Auditoria d'accessibilitat: marcadors ARIA, `:focus-visible` per a navegació amb teclat.
  - [x] Favicon visual, representatiu i minimalista en format SVG (`favicon.svg`) integrat a la pestanya.
  - [x] Peu de pàgina oficial de llicenciament segons l'estàndard actualitzat `apps-escolars` (resumit, contingut i no invasiu).
  - [x] Suport dual complet per a **Mode Fosc / Clar**: detecció automàtica per defecte del dispositiu/sistema operatiu (`prefers-color-scheme`) i commutador manual.
  - [x] Disseny responsive revisat i optimitzat per a tauletes d'aula i telèfons intel·ligents (touch targets >= 48px, graelles adaptatives i impressió forçada en blanc/negre).
  - [x] Auditoria i correcció integral de contrastos (WCAG AAA).
- **Punt exacte on ens hem quedat**:
  - Aplicació consolidada a la versió 2.1 amb panell docent de gestió de vocabulari, importació/exportació JSON, 6 llengües pont, 11 categories, 60 conceptes de base i 360 àudios locals.
- **Decisions tècniques i incidències conegudes**:
  - El Service Worker empra la versió `acollida-cache-v2.1` que neteja automàticament qualsevol memòria anterior i assegura que les tauletes tinguin sempre els recursos actualitzats.
  - El vocabulari personalitzat es desa a `acollida_custom_vocab` a `localStorage` i és totalment compatible amb els jocs, flashcards i síntesi de veu.

---

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre (perfils d'alumnes, gràfiques de progressió i registre d'aula).
- **Millores futures i backlog**:
  - [ ] Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
  - [ ] Mode d'impressió de fitxes d'activitats d'aprenentatge en paper (unir amb fletxes, pintar, escriure).
