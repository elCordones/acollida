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
- **Estat general**: Totalment funcional, auditat i publicat a GitHub Pages (Versió 1.8 PWA Offline & Flashcards d'Aula).
- **Funcionalitats completades**:
  - [x] **Arquitectura PWA (Progressive Web App) i Suport 100% Offline**:
    - [x] Manifest web (`manifest.json`) amb icones de 192x192 i 512x512 per a instal·lació d'aplicació nativa a pantalles d'inici (iOS, Android, Chromebooks).
    - [x] Service Worker (`sw.js`) amb estratègia Stale-While-Revalidate per a l'App Shell i Cache-First per als fitxers d'àudio.
    - [x] Funcionament garantit a les escoles fins i tot quan cau la connexió Wi-Fi del centre o en mode avió a les tauletes.
  - [x] **Generador de Flashcards de Vocabulari per a Retolació d'Aula**:
    - [x] Botó directe `🖨️ Targetes` a la capçalera de cada tema.
    - [x] Vista prèvia de targetes de mida gran amb imatge, paraula en català, traducció a la llengua pont i línia de tall per a tisores.
    - [x] Estils d'impressió optimitzats (`@media print`) en quadrícula de 2 columnes per a paper A4 en blanc i negre estalvi de tinta per retolar els objectes de l'aula física.
  - [x] **Matriu de vocabulari ampliada (7 categories i 39 conceptes complets)**:
    - [x] 1. Urgències i comunicació bàsica (🚨)
    - [x] 2. L'escola i el material d'aula (✏️)
    - [x] 3. El pati i els jocs de relació (⚽)
    - [x] 4. La casa i la família (🏡)
    - [x] 5. El cos, la salut i les emocions (❤️)
    - [x] 6. El menjador escolar i els aliments (🍽️)
    - [x] 7. La roba i el temps atmosfèric (🧥)
  - [x] **Paquet complet d'àudio natiu local en àrab (78 fitxers MP3)** a `audio/ar/`.
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
  - Aplicació consolidada com a PWA completa, autònoma, multilingüe, accessible i amb suport manipulatiu tant digital com imprès.
- **Decisions tècniques i incidències conegudes**:
  - El Service Worker empra una versió de memòria cau `acollida-cache-v1.8` que neteja automàticament qualsevol memòria anterior i assegura que les tauletes tinguin sempre els recursos actualitzats.
  - Les Flashcards s'adapten automàticament a la llengua pont seleccionada per l'alumne o docent.

---

## 3. Full de Ruta d'Implementació (Roadmap / Propers Passos)
- **Tasques immediates per a la següent sessió**:
  - [ ] Pas 1: Suport per a noves llengües pont freqüents a les aules catalanes (Amazic, Urdú, Ucraïnès, Xinès, Panjabi).
  - [ ] Pas 2: Possibilitat que el docent afegeixi vocabulari personalitzat des d'un panell d'administració senzill.
  - [ ] Pas 3: Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
- **Millores futures i backlog**:
  - [ ] Suport per a noves llengües pont freqüents a les aules catalanes (Amazic, Urdú, Ucraïnès, Xinès, Panjabi).
  - [ ] Possibilitat que el docent afegeixi vocabulari personalitzat des d'un panell d'administració senzill.
  - [ ] Historial acumulatiu multisesió per fer el seguiment de l'evolució al llarg del trimestre.
