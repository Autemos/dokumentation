# Autemos Produktdokumentation

Statische HTML-Produktdokumentation für die Testautomatisierungsplattform Autemos. Zweisprachig (Deutsch / Englisch), mit integrierter Chatbot-Suche.

## 📦 Inhalt

| Datei / Ordner | Beschreibung |
|---|---|
| `autemos.html` | Hauptdatei der Dokumentation (Single-Page, generiert) |
| `autemos_favicon.svg` | Favicon |
| `autemos_bot.png` | Avatar des Chatbots „ask Autemos“ |
| `autemos_en_*.js` | Englische Übersetzungen (22 Dateien, generiert, eine pro Modul) |
| `autemos_*` / `Pages_Module_Assets` / `Test_Scheduler_Documentation` (Ordner) | Screenshots aller Module |
| `src/` | Quellen von `autemos.html` und `autemos_en_*.js` (wird nicht deployt) |
| `build.py` / `extract.py` | Build-Skript / Skript der einmaligen Migration (werden nicht deployt) |

**Gesamt**: 1 HTML + 1 SVG + 1 PNG + 22 JS-Dateien + 21 Bildordner. Nur `autemos.html` und die 22 JS-Dateien werden aus `src/` generiert; Screenshots, Favicon und Chatbot-Avatar werden direkt gepflegt.

## 🚀 Deployment

Die generierte Seite ist **statisch** — kein Server, keine Laufzeitabhängigkeiten. Sie wird mit `python3 build.py` aus `src/` gebaut (nur Python 3, keine Pakete; unter Windows `python build.py`), das `autemos.html` und `autemos_en_*.js` neu erzeugt. Das Ergebnis lässt sich auf jedem Webserver oder statischen Hosting-Dienst betreiben.

Die Build-Quellen `src/`, `build.py`, `extract.py` sowie `README.md`, `DEPLOY.md` und `.gitignore` werden von der Seite nicht benötigt und sollen nicht deployt werden.

### Option 1 — Statisches Hosting (empfohlen)
`python3 build.py` ausführen, dann den Ordner ohne die Build-Quellen hochladen:
- **Nginx / Apache** — Document Root auf diesen Ordner setzen
- **Netlify / Vercel** — Ordner per Drag & Drop hochladen
- **GitHub Pages** — für dieses Repository automatisiert, siehe unten
- **AWS S3 / Azure Blob / Cloudflare Pages** — Bucket / Container mit Static Website Hosting
- **IIS** — nach `wwwroot` kopieren und direkt ausliefern

**GitHub Pages:** Jeder Push auf `main` startet `.github/workflows/deploy-pages.yml`. Der Workflow führt `build.py` aus, kopiert die Seite ohne die Build-Quellen nach `_site/` und deployt sie. Die committeten `autemos.html` und `autemos_en_*.js` werden dabei durch den Build überschrieben. Schlägt der Build fehl, wird nichts deployt.

### Option 2 — Interner Webserver im Unternehmen
- `autemos.html` als Einstiegsseite festlegen (oder in `index.html` umbenennen)
- Sicherstellen, dass der Server `.js`, `.png` und `.svg` mit korrektem MIME-Type ausliefert (bei den meisten Servern Standard)
- Keine SSL-Terminierung und keine Proxys erforderlich

### Option 3 — Lokal testen
Nach Änderungen in `src/` `python3 build.py` ausführen, dann `autemos.html` direkt im Browser öffnen (funktioniert ohne Server). Die Stichwortsuche des Chatbots benötigt die JS-Dateien im selben Ordner; das funktioniert in modernen Browsern auch über `file://`.

Für einen schnellen lokalen Server zum Testen:
```bash
# Python 3
python -m http.server 8080
# Node (npx)
npx serve .
```

Anschliessend `http://localhost:8080/autemos.html` öffnen.

## 🌐 Funktionen

- **Zweisprachig** — Umschalter DE / EN oben rechts im Header. Die Auswahl wird im localStorage gespeichert.
- **Sidebar-Navigation** — Einklappbare Gruppen (Management / Project / Settings / Deployment). Der Zustand wird gespeichert.
- **Modulwechsel** — 22 Module mit jeweils eigener Unternavigation.
- **Modulübergreifende Suche** — Das Suchfeld mit Lupe im Header durchsucht alle Module in beiden Sprachen.
- **Chatbot „ask Autemos“** — Schwebendes Widget unten rechts. Clientseitige Stichwortsuche über alle 259 Sektionen.
- **Keine externen CDN-Abhängigkeiten** für Inhalte — nur Google Fonts (Inter). Ansonsten in sich geschlossen.

## 🛠️ Wartung

### Screenshots aktualisieren
Dateien im jeweiligen Bildordner unter gleichem Dateinamen ersetzen. Kein Build nötig.

### Texte ändern
Inhalte liegen unter `src/modules/<id>/` — `de.html` und `en.html` mit denselben
Sektions-IDs, die Sidebar-Navigation in `nav.html`. Nach der Änderung `python3 build.py` ausführen.

### Neues Modul anlegen
Die Doku wird aus `src/` generiert. `autemos.html` und `autemos_en_*.js` sind
**Build-Artefakte** und werden nicht von Hand bearbeitet.

```
src/
  shell.html            Rahmen (CSS, JS, Header, Chatbot) mit {{...}}-Platzhaltern
  modules.json          Registry: id, label, section, searchLabel
  modules/<id>/
    de.html             Deutscher Inhalt (die <section>-Blöcke)
    en.html             Englischer Inhalt, gleiche Sektions-IDs
    nav.html            Sidebar-Navigation des Moduls
```

1. `src/modules/<id>/` mit `de.html`, `en.html`, `nav.html` erstellen
2. Eintrag in `src/modules.json` ergänzen (`section`: management | project | settings | deployment)
3. Modulfarbe in `src/shell.html` ergänzen (6 CSS-Zeilen nach dem Muster `.badge-<id>` …)
4. `python3 build.py`

Alles Übrige wird generiert: Module-Switcher, Navigation, `<id>_IDS`, `switchModule`,
`findModuleId`, `routeFromHash`, `MODULE_META`, `MODULE_TO_SECTION` und die
`<script>`-Tags der EN-Dateien. Platzhalter wie `${orderNumber}` werden beim
Erzeugen der EN-Dateien automatisch escaped.

`build.py` bricht ab bei doppelten Sektions-IDs, Nav-Links ohne Ziel, fehlender `nav.html`
oder einer `de.html` ohne Sektionen.
`extract.py` erzeugt `src/` aus einer bestehenden `autemos.html` (einmalige Migration, benötigt Node.js).
Nicht erneut ausführen: es löscht `src/modules/` und erzeugt es aus `autemos.html` neu.

## 📝 Browser-Unterstützung

Nur moderne Browser (Chrome 105+, Firefox 121+, Safari 15.4+, Edge 105+). Verwendet den CSS-Selektor `:has()` und modernes JavaScript.

## 📊 Kennzahlen

- 21 dokumentierte Module
- 259 übersetzte Sektionen
- 251 referenzierte Assets (228 Screenshots, 21 JS-Dateien, Favicon, Chatbot-Avatar)
- ~12.600 Zeilen generiertes HTML (inkl. Inline-CSS / -JS)
