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
- **Estat general**: Totalment funcional, auditat i actualitzat (Versió 2.0 Suport Integral Multilingüe: 6 Llengües Pont, 10 Categories i 342 Àudios Natius).
- **Funcionalitats completades**:
  - [x] **Integració de 6 Llengües Pont Oficials d'Acollida**:
    - [x] Castellà (🇪🇸), Francès (🇫🇷), Anglès (🇬🇧), Àrab (🇲🇦), Ucraïnès (🇺🇦) i Xinès (🇨🇳).
    - [x] Selector d'idioma gràfic actualitzat a la pantalla de benvinguda amb visualització de banderes.
    - [x] Insígnia d'alumne a la capçalera amb la bandera de la llengua de suport activa.
    - [x] Traducció íntegra de la interfície d'usuari (UI), títols i descripcions de les 10 categories, i les 57 paraules amb les seves respectives frases model en les 6 llengües.
  - [x] **Paquet complet d'àudios natius locals (342 fitxers MP3 en total)**:
    - [x] `audio/ar/`: 114 fitxers MP3 en àrab (paraules i frases).
    - [x] `audio/uk/`: 114 fitxers MP3 en ucraïnès (paraules i frases).
    - [x] `audio/zh/`: 114 fitxers MP3 en xinès (paraules i frases).
    - [x] Síntesi de veu Web Speech API i Google TTS com a doble fallback d'alta fidelitat.
  - [x] **Matriu de vocabulari ampliada a 10 categories i 57 conceptes complets amb frases model**:
    - [x] 1. Urgències i comunicació bàsica (🚨)
    - [x] 2. L'escola i el material d'aula (✏️)
    - [x] 3. El pati i els jocs de relació (⚽)
    - [x] 4. La casa i la família (🏡)
    - [x] 5. El cos, la salut i les emocions (❤️)
    - [x] 6. El menjador escolar i els aliments (🍽️)
    - [x] 7. La roba i el temps atmosfèric (🧥)
    - [x] 8. Els nombres, el temps i el calendari escolar (🔢)
    - [x] 9. El barri, la ciutat i els transports (🚌)
    - [x] 10. Les rutines escolars i accions d'aula (⏰)
  - [x] **Arquitectura PWA (Progressive Web App) i Suport 100% Offline**:
    - [x] Manifest web (`manifest.json`) amb icones de 192x192 i 512x512 per a instal·lació d'aplicació nativa a pantalles d'inici (iOS, Android, Chromebooks).
    - [x] Service Worker (`sw.js`) actualitzat a memòria cau `acollida-cache-v2.0` amb estratègia Stale-While-Revalidate per a l'App Shell i Cache-First per als fitxers d'àudio.
    - [x] Cache-busting de versions (`?v=2.0`) a `index.html` per forçar actualització immediata dels recursos als navegadors.
  - [x] **Generador de Flashcards de Vocabulari per a Retolació d'Aula**:
    - [x] Suport automàtic per a les 10 categories temàtiques i les 6 llengües pont.
    - [x] Vista prèvia de targetes de mida gran amb imatge, paraula en català, traducció a la llengua pont i línia de tall per a tisores.
    - [x] Estils d'impressió optimitzats (`@media print`) en quadrícula de 2 columnes per a paper A4 en blanc i negre estalvi de tinta per retolar els objectes de l'aula física.
  - [x] Motor de veu integrat en local amb Web Speech API i efectes sonors sintètics DUA.
  - [x] Mode "Descobreix 🎧" amb targetes interactives, àudio doble i frase model.
  - [x] Mode "Reptes 🎯" diversificat: Repte auditiu i Joc de parelles (Memory 🃏).
  - [x] **Control de velocitat de veu DUA (🐢 A poc a poc / 🐇 Normal)** a la capçalera.
  - [x] Persistència automàtica de la sessió a `localStorage`.
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
  - Aplicació consolidada a la versió 2.0 amb 6 llengües pont, 10 categories, 57 conceptes, 342 àudios locals i suport 100% autònom offline.
- **Decisions tècniques i incidències conegudes**:
  - El Service Worker empra la versió `acollida-cache-v2.0` que neteja automàticament qualsevol memòria anterior i assegura que les tauletes tinguin sempre els recursos actualitzats.
  - Les Flashcards s'adapten automàticament a qualsevol de les 6 llengües pont seleccionades.

---

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Panell docent d'edició per afegir paraules o imatges pròpies del centre escolar (desades a `localStorage`).
  - [ ] Pas 2: Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
- **Millores futures i backlog**:
  - [ ] Panell docent per afegir vocabulari personalitzat des d'un entorn senzill.
  - [ ] Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
