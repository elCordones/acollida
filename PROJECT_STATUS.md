# Aula d'Acollida Digital - Estat i Documentació del Projecte

## 1. Descripció i Especificacions del Projecte
- **Objectiu principal**: Aplicació web autònoma, multilingüe i accessible dissenyada per a l'acollida d'alumnat nouvingut a Educació Primària. Facilita l'adquisició inicial de vocabulari i expressions funcionals (BICS) mitjançant bastiment lingüístic multilingüe i síntesi de veu autònoma.
- **Públic destinatari**: Alumnat nouvingut d'Educació Primària, docents d'Aules d'Acollida i mestres d'Educació Especial / SIEI.
- **Llengües integrades**: 
  - Català (Llengua d'aprenentatge / Meta)
  - Castellà, Francès, Anglès i Àrab (amb suport natiu RTL i transliteració fonètica)
- **Stack tecnològic**:
  - HTML5 semàntic i accessible (WCAG / DUA)
  - CSS3 modern responsive (suport tàctil, flexbox/grid, RTL natiu, impressió `@media print`)
  - JavaScript natiu pur (sense dependències de servidors ni llibreries externes)
  - Web Speech API (síntesi de veu autònoma en català, castellà, francès, anglès i àrab)
  - Web Audio API (efectes acústics generatius de reforç positiu)
  - LocalStorage (persistència local de sessió)
- **Llicenciament (segons skill `apps-escolars`)**:
  - Autoria: David Cordones (2026)
  - Codi: AGPL v3
  - Contingut educatiu: Creative Commons Reconeixement-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)
- **Arquitectura i fitxers clau**:
  - `index.html`: Estructura principal, capçalera, contenidor dinàmic i peu de pàgina de llicenciament.
  - `css/style.css`: Sistema de disseny inclusiu, estils RTL, accessibilitat focus-visible i format diploma per a impressió/PDF.
  - `js/data.js`: Matriu de dades multilingüe amb 5 categories (Urgències, Escola, Pati, Casa, Emocions), lèxic, frases model i metadades.
  - `js/audio.js`: Controlador d'àudio i veu via Web Speech API i Web Audio API.
  - `js/app.js`: Màquina d'estats, modes d'exploració i jocs, protecció XSS/CSV injection i exportació de dades.
  - `README.md`: Guia d'ús per a docents i instruccions de publicació a GitHub Pages.

---

## 2. Estat Actual i Punt de Control (Darrera sessió: 2026-09-23)
- **Estat general**: Totalment funcional, auditat i publicat a GitHub Pages (Versió 1.5 Àudio Resilient & Cache Busting).
- **Funcionalitats completades**:
  - [x] Matriu de vocabulari inicial amb 27 conceptes i frases en 5 idiomes (CA, ES, FR, EN, AR).
  - [x] Motor de veu integrat en local amb Web Speech API i efectes sonors sintètics DUA.
  - [x] Mode "Descobreix 🎧" amb targetes interactives, àudio doble i frase model.
  - [x] Mode "Reptes 🎯" amb joc de discriminació auditiva i reforç positiu immediat.
  - [x] Persistència automàtica de la sessió a `localStorage`.
  - [x] Generador i exportador de full de càlcul `.CSV` codificat en UTF-8 BOM per a Excel / Google Sheets.
  - [x] Generador de "Passaport d'Aprenentatge" en format diploma visual i preparat per a imprimir / PDF.
  - [x] Auditoria de seguretat aplicada: protecció contra injeccions XSS al DOM (`escapeHTML`) i protecció contra injeccions de fórmules al CSV (`sanitizeCSV`).
  - [x] Auditoria d'accessibilitat: marcadors ARIA, `:focus-visible` per a navegació amb teclat.
  - [x] Favicon visual, representatiu i minimalista en format SVG (`favicon.svg`) integrat a la pestanya.
  - [x] Peu de pàgina oficial de llicenciament segons l'estàndard actualitzat `apps-escolars` (resumit, contingut i no invasiu).
  - [x] Suport dual complet per a **Mode Fosc / Clar**: detecció automàtica per defecte del dispositiu/sistema operatiu (`prefers-color-scheme`) i commutador manual a la capçalera amb persistència.
  - [x] Disseny responsive revisat i optimitzat per a tauletes d'aula i telèfons intel·ligents (touch targets >= 48px, graelles adaptatives i impressió forçada en blanc/negre).
  - [x] Auditoria i correcció integral de contrastos (WCAG AAA): corregit l'error sintàctic del selector de llengua actiu (`.lang-btn.active`), estandarditzats tots els colors via tokens CSS semàntics i eliminats estils inline amb colors fixos a tota l'aplicació.
  - [x] Paquet complet de veus en àrab: 54 arxius d'àudio MP3 natius locals (`audio/ar/*.mp3`) per a totes les paraules i frases model.
  - [x] Correcció integral de la reproducció d'àudio a GitHub Pages (v1.5):
    - Resolució canònica d'URLs relatives mitjançant `AudioManager.getAudioUrl`, tolerant rutes sense barra final a GitHub Pages (`/acollida` vs `/acollida/`).
    - Protecció `referrerPolicy = "no-referrer"` i `<meta name="referrer" content="no-referrer">` per evitar el bloqueig 404 del fallback remot de síntesi vocal.
    - Gestió d'errors d'àudio tolerant a `AbortError` (interrupcions voluntàries per clics repetits sense saltar a fallback erròniament).
    - Incorporació de cadenes de trencament de memòria cau (*cache busting* `?v=1.5`) a `index.html` per forçar la càrrega immediata de les darreres versions de scripts i estils als navegadors dels alumnes/docents.
    - Afegit botó d'escolta d'àudio dedicat també a les frases model en la llengua pont (`🎧`).
- **Punt exacte on ens hem quedat**:
  - L'aplicació compta amb àudio completament operatiu a GitHub Pages (`https://elcordones.github.io/acollida/`), garantit per a àrab i resta d'idiomes en qualsevol dispositiu o navegador.
- **Decisions tècniques i incidències conegudes**:
  - GitHub Pages emet per defecte capçaleres `Cache-Control: max-age=600`, motiu pel qual l'actualització de codi JS requereix paràmetres de versió `?v=...` per evitar que els navegadors executin fitxers en memòria cau obsolets.
  - Windows no disposa per defecte de veus en àrab a la Web Speech API; la inclusió dels MP3 locals a `audio/ar/` resol el problema al 100% sense dependre de la configuració de l'ordinador de l'escola.

---

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Incorporar nous modes de joc al mòdul de reptes (Ex: Repte de lectura i associació "Uneix la paraula", o construcció de la frase).
  - [ ] Pas 2: Ampliar el banc de vocabulari amb nous àmbits d'acollida (Ex: Menjador escolar i aliments, La roba i el temps atmosfèric, El barri i la ciutat).
  - [ ] Pas 3: Incorporar opció d'integrar pictogrames descarregats d'ARASAAC en local per a suport visual millorat si es desitja substituir els emojis vectorials.
- **Millores futures i backlog**:
  - [ ] Suport per a noves llengües pont freqüents a les aules catalanes (Amazic, Urdú, Ucraïnès, Xinès, Panjabi).
  - [ ] Possibilitat que el docent afegeixi vocabulari personalitzat des d'un panell d'administració senzill.
  - [ ] Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
