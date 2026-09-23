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
- **Estat general**: Totalment funcional, auditat i publicat a GitHub Pages (Versió 1.6 DUA Speed Rate & Memory Game).
- **Funcionalitats completades**:
  - [x] Matriu de vocabulari inicial amb 27 conceptes i frases en 5 idiomes (CA, ES, FR, EN, AR).
  - [x] Motor de veu integrat en local amb Web Speech API i efectes sonors sintètics DUA.
  - [x] Mode "Descobreix 🎧" amb targetes interactives, àudio doble i frase model.
  - [x] Mode "Reptes 🎯" diversificat amb subnavegació d'activitats:
    - [x] **Repte auditiu**: discriminació oral (escolta la paraula i selecciona la imatge correcta).
    - [x] **Joc de parelles (Memory 🃏)**: associació manipulativa de la imatge amb la paraula escrita en català, amb reproducció de so en girar la carta i celebració en completar totes les parelles.
  - [x] **Control de velocitat de veu DUA (🐢 A poc a poc / 🐇 Normal)**:
    - Commutador directe a la capçalera (`#speed-toggle-btn`).
    - Reducció del ritme de parla a `0.68x` a la síntesi vocal i `0.76x` als fitxers MP3 per facilitar la discriminació fonètica de l'alumnat nouvingut.
    - Persistència de la preferència a `localStorage`.
  - [x] Persistència automàtica de la sessió a `localStorage`.
  - [x] Generador i exportador de full de càlcul `.CSV` codificat en UTF-8 BOM per a Excel / Google Sheets.
  - [x] Generador de "Passaport d'Aprenentatge" en format diploma visual i preparat per a imprimir / PDF.
  - [x] Auditoria de seguretat aplicada: protecció contra injeccions XSS al DOM (`escapeHTML`) i protecció contra injeccions de fórmules al CSV (`sanitizeCSV`).
  - [x] Auditoria d'accessibilitat: marcadors ARIA, `:focus-visible` per a navegació amb teclat a les targetes i joc de Memory.
  - [x] Favicon visual, representatiu i minimalista en format SVG (`favicon.svg`) integrat a la pestanya.
  - [x] Peu de pàgina oficial de llicenciament segons l'estàndard actualitzat `apps-escolars` (resumit, contingut i no invasiu).
  - [x] Suport dual complet per a **Mode Fosc / Clar**: detecció automàtica per defecte del dispositiu/sistema operatiu (`prefers-color-scheme`) i commutador manual a la capçalera amb persistència.
  - [x] Disseny responsive revisat i optimitzat per a tauletes d'aula i telèfons intel·ligents (touch targets >= 48px, graelles adaptatives i impressió forçada en blanc/negre).
  - [x] Auditoria i correcció integral de contrastos (WCAG AAA): corregit l'error sintàctic del selector de llengua actiu (`.lang-btn.active`), estandarditzats tots els colors via tokens CSS semàntics i eliminats estils inline amb colors fixos a tota l'aplicació.
  - [x] Paquet complet de veus en àrab: 54 arxius d'àudio MP3 natius locals (`audio/ar/*.mp3`) per a totes les paraules i frases model.
  - [x] Correcció integral de la reproducció d'àudio a GitHub Pages (v1.5) amb resolució canònica d'URLs, `referrerPolicy = "no-referrer"` i cache busting.
- **Punt exacte on ens hem quedat**:
  - L'aplicació compta amb suport DUA avançat de discriminació fonètica (velocitat adaptable) i dos modes de reptes autònoms (auditiu i memòria visual/lectora).
- **Decisions tècniques i incidències conegudes**:
  - Les cartes del joc Memory utilitzen estils CSS 3D (`transform-style: preserve-3d`) amb suport complet de navegació per teclat (`tabindex="0"`, tecles Retorn i Espai).
  - La velocitat lenta (0.76x / 0.68x) s'aplica tant a l'element HTML5 Audio natiu com a la Web Speech API per oferir coherència total.

---

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Ampliar el banc de vocabulari amb nous àmbits d'acollida (Menjador escolar i aliments/al·lèrgies, La roba i el temps atmosfèric, El barri i la ciutat).
  - [ ] Pas 2: Integrar manifest PWA i Service Worker per a instal·lació d'aplicació nativa i suport 100% offline a tauletes de centre.
  - [ ] Pas 3: Incorporar opció de descàrrega i impressió de Flashcards de vocabulari per retolar l'aula d'acollida física.
- **Millores futures i backlog**:
  - [ ] Suport per a noves llengües pont freqüents a les aules catalanes (Amazic, Urdú, Ucraïnès, Xinès, Panjabi).
  - [ ] Possibilitat que el docent afegeixi vocabulari personalitzat des d'un panell d'administració senzill.
  - [ ] Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
