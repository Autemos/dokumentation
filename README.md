# Autemos Product Documentation

Static HTML product documentation for the Autemos test automation platform. Bilingual (Deutsch / English), with built-in chatbot search.

## 📦 What's Inside

| Item | Description |
|---|---|
| `autemos.html` | The main documentation file (single-page) |
| `autemos_favicon.svg` | Favicon |
| `autemos_bot.png` | "ask Autemos" chatbot avatar |
| `autemos_en*.js` | English translations (21 files, dynamically loaded) |
| `autemos_*` / `Pages_Module_Assets` / `Test_Scheduler_Documentation` (folders) | All module screenshots |

**Total**: 1 HTML + 1 SVG + 1 PNG + 21 JS files + 17 image folders

## 🚀 Deployment

The whole project is **static** — no server, no build step, no dependencies. You can host it on any web server or static hosting service.

### Option 1 — Static hosting (recommended)
Upload the entire folder to:
- **Nginx / Apache** — point document root at this folder
- **Netlify / Vercel** — drag & drop the folder
- **GitHub Pages** — push as a repo, enable Pages
- **AWS S3 / Azure Blob / Cloudflare Pages** — bucket / container with static website hosting
- **IIS** — copy to `wwwroot` and serve directly

### Option 2 — Internal corporate web server
- Set `autemos.html` as the entry point (or rename it to `index.html`)
- Ensure the server serves `.js`, `.png`, `.svg` with correct MIME types (most do by default)
- No SSL terminations or proxies required

### Option 3 — Local testing
Open `autemos.html` directly in a browser (works without any server) — note that the chatbot's keyword search needs the JS files to load from the same folder, which works fine via `file://` in modern browsers.

For a quick local server during testing:
```bash
# Python 3
python -m http.server 8080
# Node (npx)
npx serve .
```

Then open `http://localhost:8080/autemos.html`.

## 🌐 Features

- **Bilingual** — DE / EN toggle in header (top-right). State persisted in localStorage.
- **Sidebar Navigation** — Collapsible groups (Management / Project / Settings / Deployment). State persisted.
- **Module Switching** — 18 modules, each with their own sub-navigation.
- **Cross-module Search** — Magnifier in header searches all modules in both languages.
- **"ask Autemos" Chatbot** — Floating widget bottom-right. Client-side keyword search across all 209 sections.
- **No external CDN dependencies** for content — only Google Fonts (Inter). Self-contained otherwise.

## 🛠️ Maintenance

### Updating screenshots
Replace files inside the relevant `autemos_*` folder using the same filenames.

### Updating text content
- **German**: edit `autemos.html` directly.
- **English**: edit the corresponding `autemos_en_*.js` file. Section content is keyed by section ID (e.g. `"recorder-overview"`).

### Adding a new module
1. Add module tab button in sidebar (`<button class="module-tab" id="tab-NAME">`)
2. Add CSS for new color (badge / dot / active state)
3. Add nav-group `<div class="nav-group hidden" id="nav-NAME">`
4. Add module content `<div id="module-NAME" class="module-content">`
5. Update JS routing: `NAME_IDS` Set, `switchModule`, `findModuleId`, `MODULE_META`, `MODULE_TO_SECTION`
6. Create English translation file `autemos_en_NAME.js` and add `<script>` tag

## 📝 Browser Support

Modern browsers only (Chrome 105+, Firefox 121+, Safari 15.4+, Edge 105+). Uses CSS `:has()` selector and modern JS.

## 📊 Stats

- 18 documented modules
- 209 translated sections
- 224+ referenced assets (images, JS files, favicons)
- ~11,400 lines of HTML (incl. inline CSS / JS)
- Single-file deployable
