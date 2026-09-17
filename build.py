#!/usr/bin/env python3
"""Baut autemos.html + autemos_en_*.js aus src/.

Aufruf:  python3 build.py
"""
import re, json, os, sys

SRC = 'src'
reg = json.load(open(f'{SRC}/modules.json', encoding='utf-8'))
modules = reg['modules']
shell = open(f'{SRC}/shell.html', encoding='utf-8').read()

SECTION_TITLES = {'management': 'Management', 'project': 'Project',
                  'settings': 'Settings', 'deployment': 'Deployment'}

def read(mid, name):
    p = f'{SRC}/modules/{mid}/{name}'
    return open(p, encoding='utf-8').read() if os.path.exists(p) else ''

def sections_of(html):
    """IDs der doc-sections (fuer EN-Zuordnung und Erst-Anker)."""
    out = []
    for m in re.finditer(r'<section\b[^>]*>', html):
        if 'doc-section' in m.group(0):
            i = re.search(r'id="([^"]+)"', m.group(0))
            if i:
                out.append(i.group(1))
    return out

def anchors_of(html):
    """Alle anspringbaren IDs im Modul (Sektionen + h2/h3-Unteranker)."""
    seen, out = set(), []
    for m in re.finditer(r'\bid="([^"]+)"', html):
        if m.group(1) not in seen:
            seen.add(m.group(1)); out.append(m.group(1))
    return out

errors = []
for m in modules:
    m['de'] = read(m['id'], 'de.html')
    m['nav'] = read(m['id'], 'nav.html')
    m['sections'] = sections_of(m['de'])
    m['ids'] = anchors_of(m['de'])
    if not m['sections']:
        errors.append(f"{m['id']}: keine Sektionen in de.html")

# ── Konsistenzprüfungen ───────────────────────────────────────────
seen = {}
for m in modules:
    for sid in m['sections']:
        if sid in seen:
            errors.append(f"doppelte Sektions-ID '{sid}' in {seen[sid]} und {m['id']}")
        seen[sid] = m['id']
    navlinks = re.findall(r'href="#([^"]+)"', m['nav'])
    missing = [l for l in navlinks if l not in m['ids']]
    if missing:
        errors.append(f"{m['id']}: Nav-Links ohne Sektion: {missing}")
    if f'id="nav-{m["id"]}"' not in m['nav']:
        errors.append(f"{m['id']}: nav.html hat kein id=\"nav-{m['id']}\"")

if errors:
    print('BUILD FEHLGESCHLAGEN:')
    for e in errors:
        print('  -', e)
    sys.exit(1)

# ── 1. Module-Switcher ────────────────────────────────────────────
tabs = ['<div class="module-switcher">']
for sec in ['management', 'project', 'settings', 'deployment']:
    ms = [m for m in modules if m['section'] == sec]
    if not ms:
        continue
    tabs.append(f'  <div class="module-section" data-section="{sec}">')
    tabs.append(f'    <button class="module-section-header" onclick="toggleSection(\'{sec}\')">')
    tabs.append(f'      <span>{SECTION_TITLES[sec]}</span><span class="module-section-arrow">▾</span>')
    tabs.append('    </button>')
    tabs.append('    <div class="module-section-items">')
    for m in ms:
        active = ' active-workflows' if m['id'] == 'workflows' else ''
        tabs.append(f'      <button class="module-tab{active}" id="tab-{m["id"]}" '
                    f'onclick="switchModule(\'{m["id"]}\')">'
                    f'<span class="module-tab-dot"></span>{m["label"]}</button>')
    tabs.append('    </div>')
    tabs.append('  </div>')
tabs.append('</div>')

# ── 2. Nav-Gruppen und Modul-Inhalte ──────────────────────────────
navs = '\n\n'.join(m['nav'].rstrip() for m in modules)
contents = '\n\n'.join(
    f'<div id="module-{m["id"]}" class="module-content"'
    + ('>' if m['id'] == 'workflows' else ' style="display:none">')
    + '\n' + m['de'].rstrip() + '\n</div>'
    for m in modules)

# ── 3. JS ─────────────────────────────────────────────────────────
def js_list(ids):
    return ','.join(f"'{i}'" for i in ids)

sets = '\n'.join(f"const {m['id'].upper()}_IDS = new Set([{js_list(m['ids'])}]);"
                 for m in modules)

js_sets = sets + """

const MODULE_IDS = {
""" + ',\n'.join(f"  {m['id']}: {m['id'].upper()}_IDS" for m in modules) + """
};

const MODULE_FIRST_HASH = {
""" + ',\n'.join(f"  {m['id']}: '#{m['sections'][0]}'" for m in modules) + """
};

let currentModule = 'workflows';
"""

js_switch = """function switchModule(module, skipHash) {
  currentModule = module;

  Object.keys(MODULE_IDS).forEach(id => {
    document.getElementById('module-' + id).style.display = (id === module) ? '' : 'none';
    document.getElementById('nav-' + id).classList.toggle('hidden', id !== module);
    const tab = document.getElementById('tab-' + id);
    if (tab) tab.className = 'module-tab' + (id === module ? ' active-' + id : '');
  });

  // Update sidebar data attribute for CSS active-link color
  document.getElementById('sidebar').setAttribute('data-module', module);

  // Reconnect IntersectionObserver to visible sections
  reconnectObserver();

  // If switching via tab click, navigate to first section of that module
  if (!skipHash) {
    const firstHash = MODULE_FIRST_HASH[module] || '#overview';
    history.pushState(null, '', firstHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateActiveNav(firstHash.slice(1));
  }
}
"""

js_find = """function findModuleId(sectionId) {
  for (const id of Object.keys(MODULE_IDS)) {
    if (MODULE_IDS[id].has(sectionId)) return id;
  }
  return 'workflows';
}"""

js_route = """function routeFromHash() {
  const hash = location.hash.slice(1);
  if (!hash) {
    switchModule('workflows', true);
    updateActiveNav('overview');
    return;
  }
  const mod = findModuleId(hash);
  if (currentModule !== mod) switchModule(mod, true);
  updateActiveNav(hash);
}"""

js_meta = ('const MODULE_META = [\n'
           + ',\n'.join(f"  {{ id: '{m['id']}', label: '{m['searchLabel']}', cls: 'mod-{m['id']}' }}"
                        for m in modules)
           + '\n];\n')

js_to_section = ('const MODULE_TO_SECTION = { '
                 + ', '.join(f"{m['id']}:'{m['section']}'" for m in modules)
                 + ' };\n')

en_scripts = '\n'.join(f'<script src="./autemos_en_{m["id"]}.js"></script>' for m in modules)

# ── 4. Zusammensetzen ─────────────────────────────────────────────
out = shell
for ph, val in [('{{MODULE_TABS}}', '\n'.join(tabs)),
                ('{{NAV_GROUPS}}', navs),
                ('{{MODULE_CONTENT}}', contents),
                ('{{MODULE_JS_SETS}}', js_sets),
                ('{{MODULE_JS_SWITCH}}', js_switch),
                ('{{MODULE_JS_FINDMODULE}}', js_find),
                ('{{MODULE_JS_ROUTE}}', js_route),
                ('{{MODULE_JS_META}}', js_meta),
                ('{{MODULE_JS_TO_SECTION}}', js_to_section),
                ('{{EN_SCRIPTS}}', en_scripts)]:
    if ph not in out:
        print(f'FEHLER: Platzhalter {ph} fehlt in shell.html'); sys.exit(1)
    out = out.replace(ph, val)

open('autemos.html', 'w', encoding='utf-8').write(out)

# ── 5. EN-Dateien erzeugen (mit sicherem Escaping) ────────────────
def esc(t):
    return t.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

n_en = 0
for m in modules:
    en = read(m['id'], 'en.html')
    entries = []
    for mm in re.finditer(r'<section\b[^>]*id="([^"]+)"[^>]*>(.*?)</section>', en, re.S):
        entries.append(f'  "{mm.group(1)}": `{esc(mm.group(2))}`')
        n_en += 1
    body = ('window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {\n'
            + ',\n'.join(entries) + ',\n});\n')
    open(f'autemos_en_{m["id"]}.js', 'w', encoding='utf-8').write(body)

print(f'autemos.html: {len(out):,} Zeichen')
print(f'{len(modules)} Module, {sum(len(m["sections"]) for m in modules)} Sektionen DE, '
      f'{sum(len(m["ids"]) for m in modules)} Anker, {n_en} Sektionen EN')
