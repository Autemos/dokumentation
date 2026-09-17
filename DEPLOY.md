# Deployment — Autemos Dokumentation

Update des Repositories **autemos/dokumentation** (GitHub Pages).

Enthalten sind vier neue Feature-Dokumentationen sowie die Umstellung auf ein
Build-System. `autemos.html` und alle `autemos_en_*.js` sind ab sofort
**generierte Artefakte** und werden nicht mehr von Hand bearbeitet.

---

## 1. Inhalt dieses Pakets

| Pfad | Art | Beschreibung |
|---|---|---|
| `src/` | neu | Quelldateien: `shell.html`, `modules.json`, 21 Modulordner |
| `build.py` | neu | Erzeugt `autemos.html` + `autemos_en_*.js` aus `src/` |
| `extract.py` | neu | Einmalige Migration (nur zur Nachvollziehbarkeit, nicht mehr nötig) |
| `autemos.html` | ersetzt | Gebautes Artefakt |
| `autemos_en_*.js` | ersetzt / neu | 21 Dateien, eine pro Modul |
| `autemos_apicollection_screenshots/` | neu | 6 Screenshots |
| `autemos_jiraxray_screenshots/` | neu | 5 Screenshots |
| `autemos_pdfcompare_screenshots/` | neu | 9 Screenshots |
| `autemos_subworkflow_screenshots/` | neu | 6 Screenshots |
| `README.md` | ersetzt | Aktualisierte Kennzahlen und neue Arbeitsanweisung |

Die **17 bestehenden Bildordner** und `autemos_bot.png` sind **nicht** im Paket.
Sie bleiben unverändert im Repository und werden über relative Pfade weiterhin
gefunden. Das wurde getestet.

---

## 2. Vier Dateien müssen gelöscht werden

Diese Dateien werden vom neuen `autemos.html` nicht mehr eingebunden. Sie
richten keinen Schaden an, wären aber doppelt gepflegte Altlasten:

```
autemos_en.js                 # leerer Initialisierer, 148 Bytes
autemos_en_workflows_1.js     # zusammengeführt in autemos_en_workflows.js
autemos_en_workflows_2.js
autemos_en_workflows_3.js
```

---

## 3. Ablauf

```bash
git clone https://github.com/autemos/dokumentation.git
cd dokumentation
git checkout -b docs/features-2026-09

# Paket über den Repo-Root entpacken
unzip -o /pfad/zu/autemos_doku_uebergabe.zip -d .

# Altlasten entfernen
git rm autemos_en.js autemos_en_workflows_1.js autemos_en_workflows_2.js autemos_en_workflows_3.js

git add -A
git status          # erwartet: 97 neu, 14 geändert, 4 gelöscht
git commit -m "Docs: API Collections, Jira Xray, PDF Compare, Sub-Workflows + Build-System"
git push -u origin docs/features-2026-09
```

Danach Pull Request eröffnen und nach dem Merge auf `main` prüfen, dass
GitHub Pages die Seite neu ausgeliefert hat.

---

## 4. Prüfen vor dem Commit

`autemos.html` lokal im Browser öffnen (funktioniert ohne Server, `file://`
genügt) und stichprobenartig kontrollieren:

- Sidebar zeigt 21 Module, darunter API Collections, Jira Xray, PDF Compare
- Test Workflow enthält die Gruppe „Wiederverwendbare Workflows"
- Umschalten DE / EN funktioniert
- Bilder in einem **alten** Modul laden, z. B. Recorder oder Test Runs

Der letzte Punkt ist der wichtigste: er bestätigt, dass die bestehenden
Bildordner korrekt gefunden werden.

---

## 5. Ab jetzt: Änderungen an der Doku

`autemos.html` und `autemos_en_*.js` **nicht mehr direkt bearbeiten** — sie
werden beim nächsten Build überschrieben.

```bash
# Inhalt ändern
vi src/modules/<modul>/de.html      # bzw. en.html, nav.html

# Neu bauen
python3 build.py

# Ergebnis committen (Quellen + Artefakte)
git add src autemos.html autemos_en_*.js
```

`build.py` benötigt nur Python 3, keine Abhängigkeiten. Der Build bricht mit
Fehlermeldung ab bei doppelten Sektions-IDs, Navigationslinks ohne Ziel oder
fehlender `nav.html`.

Ein neues Modul anlegen: siehe Abschnitt „Adding a new module" in der
`README.md`.

---

## 6. Getestet

Vor der Auslieferung geprüft mit Headless-Chromium gegen ein frisch
geklontes Repository, über das dieses Paket entpackt wurde:

- 21 Module, alle per Tab und per Deeplink erreichbar
- 278 Anker, keiner ins Leere
- 259 Sektionen in Deutsch und Englisch, keine ohne Übersetzung
- alle 220 Bildreferenzen auflösbar, keine defekten Bilder
- keine JavaScript-Fehler
- zwei aufeinanderfolgende Builds erzeugen dieselbe Prüfsumme

**Bekannte Einschränkung, nicht neu:** Die Dokumentation ist nicht responsiv.
Bei 390 px Breite scrollt die Seite horizontal (`scrollWidth` 881 gegen
`clientWidth` 390), verursacht durch die 272 px breite fixierte Sidebar und die
Parametertabellen. Das war vor diesen Änderungen identisch und wurde nicht
verschlechtert, aber auch nicht behoben.
