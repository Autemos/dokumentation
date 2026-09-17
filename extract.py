#!/usr/bin/env python3
"""Zerlegt autemos.html verlustfrei in src/ (shell + Module)."""
import re, json, os, shutil, sys

SRC = 'autemos.html'
OUT = 'src'
s = open(SRC, encoding='utf-8').read()

# ── Hilfsfunktion: passendes </div> zu einem <div ...> finden ──────
def div_block(text, start):
    """start = Index von '<div'. Liefert (start, end) inkl. </div>."""
    i, depth = start, 0
    tag = re.compile(r'</?div\b', re.I)
    while True:
        m = tag.search(text, i)
        if not m:
            raise ValueError('unbalanced div')
        if m.group(0).lower().startswith('</'):
            depth -= 1
            if depth == 0:
                return start, m.end() + len('>')
        else:
            depth += 1
        i = m.end()

def cut(text, needle):
    i = text.index(needle)
    a, b = div_block(text, i)
    return text[a:b], a, b

# ── 1. Modul-Reihenfolge + Sektionen aus dem Module-Switcher ──────
switcher, sw_a, sw_b = cut(s, '<div class="module-switcher">')
modules = []
for msec in re.finditer(r'<div class="module-section" data-section="([a-z]+)">(.*?)(?=\n  <div class="module-section"|\Z)',
                        switcher, re.S):
    section = msec.group(1)
    for tab in re.finditer(r'<button class="module-tab[^"]*" id="tab-([a-z]+)"[^>]*>'
                           r'<span class="module-tab-dot"></span>(.*?)</button>', msec.group(2)):
        modules.append({'id': tab.group(1), 'label': tab.group(2), 'section': section})

# ── 2. MODULE_META-Labels (Suchergebnis-Badges) ───────────────────
meta_src = re.search(r'const MODULE_META = \[(.*?)\];', s, re.S).group(1)
meta = {m.group(1): m.group(2).strip()
        for m in re.finditer(r"\{ id: '([a-z]+)',\s*label: '([^']*)'", meta_src)}
for m in modules:
    m['searchLabel'] = meta.get(m['id'], m['label'])

# ── 3. Sektions-IDs je Modul (aus den IDS-Sets) ───────────────────
ids_sets = {}
for m in re.finditer(r"const ([A-Z]+)_IDS = new Set\(\[(.*?)\]\);", s, re.S):
    ids_sets[m.group(1).lower()] = [x.strip().strip("'\"")
                                     for x in m.group(2).split(',') if x.strip()]

os.makedirs(OUT, exist_ok=True)
shutil.rmtree(f'{OUT}/modules', ignore_errors=True)

# ── 4. Pro Modul: Content, Nav, CSS herausschneiden ───────────────
shell = s
removals = []   # (start, end, placeholder)

for m in modules:
    mid = m['id']
    d = f'{OUT}/modules/{mid}'
    os.makedirs(d, exist_ok=True)

    # Content
    blk, a, b = cut(s, f'<div id="module-{mid}" class="module-content"')
    inner = re.sub(r'^<div id="module-[a-z]+" class="module-content"[^>]*>\n?', '', blk)
    inner = re.sub(r'</div>$', '', inner).rstrip() + '\n'
    open(f'{d}/de.html', 'w', encoding='utf-8').write(inner)
    removals.append((a, b, mid, 'content'))

    # Nav
    nblk, na, nb = cut(s, f'id="nav-{mid}"')
    nstart = s.rindex('<div', 0, s.index(f'id="nav-{mid}"'))
    nblk, na, nb = (s[nstart:div_block(s, nstart)[1]], nstart, div_block(s, nstart)[1])
    open(f'{d}/nav.html', 'w', encoding='utf-8').write(nblk.rstrip() + '\n')
    removals.append((na, nb, mid, 'nav'))

    # Section-IDs
    m['sections'] = ids_sets.get(mid, [])
    found = [mm.group(1) for mm in re.finditer(r'<section\b[^>]*>', inner)
             if 'doc-section' in mm.group(0)
             for mm in [re.search(r'id="([^"]+)"', mm.group(0))] if mm]
    m['sectionsInFile'] = found

# ── 5. EN-Übersetzungen je Modul ──────────────────────────────────
en_all = {}
en_files = sorted([f for f in os.listdir('.') if re.match(r'autemos_en_.*\.js$', f)])
import subprocess, tempfile
node_src = "global.window={};" + "".join(
    f"require('./{f}');" for f in en_files) + "process.stdout.write(JSON.stringify(window.TRANSLATIONS_EN));"
en_all = json.loads(subprocess.run(['node', '-e', node_src], capture_output=True,
                                   text=True, check=True).stdout)

for m in modules:
    d = f'{OUT}/modules/{m["id"]}'
    parts = []
    for sid in m['sectionsInFile']:
        if sid in en_all:
            parts.append(f'<section class="doc-section" id="{sid}">'
                         + en_all[sid] + '</section>')
    open(f'{d}/en.html', 'w', encoding='utf-8').write('\n'.join(parts) + '\n')
    m['enCount'] = len(parts)

# ── 6. Shell bauen: Blöcke durch Platzhalter ersetzen ─────────────
removals.sort(key=lambda r: -r[0])
shell = s
seen = set()
for a, b, mid, kind in removals:
    ph = '{{MODULE_CONTENT}}' if kind == 'content' else '{{NAV_GROUPS}}'
    if ph in seen:
        shell = shell[:a] + shell[b:]
    else:
        shell = shell[:a] + ph + shell[b:]
        seen.add(ph)
shell = shell[:sw_a] + '{{MODULE_TABS}}' + shell[sw_b:]

# JS-Regionen ersetzen
# Region A: IDS-Sets + currentModule (getNavLinks bleibt in der Shell!)
a1 = shell.index('const WORKFLOWS_IDS = new Set(')
a2 = shell.index('function getNavLinks(')
shell = shell[:a1] + '{{MODULE_JS_SETS}}\n\n' + shell[a2:]
# Region B: switchModule
b1 = shell.index('function switchModule(')
b2 = shell.index('function updateActiveNav(')
shell = shell[:b1] + '{{MODULE_JS_SWITCH}}\n\n' + shell[b2:]

fm_a = shell.index('function findModuleId(sectionId) {')
fm_b = shell.index('\n}', shell.index("return 'workflows';", fm_a)) + 2
shell = shell[:fm_a] + '{{MODULE_JS_FINDMODULE}}' + shell[fm_b:]

rf_a = shell.index('function routeFromHash() {')
rf_b = shell.index('\n}\n', shell.index("updateActiveNav('overview')", rf_a)) if False else None
# routeFromHash endet vor 'window.addEventListener('
rf_b = shell.index("window.addEventListener('hashchange'", rf_a)
shell = shell[:rf_a] + '{{MODULE_JS_ROUTE}}\n\n' + shell[rf_b:]

mm_a = shell.index('const MODULE_META = [')
mm_b = shell.index('];', mm_a) + 3
shell = shell[:mm_a] + '{{MODULE_JS_META}}\n' + shell[mm_b:]

mts_a = shell.index('const MODULE_TO_SECTION = {')
mts_b = shell.index('};', mts_a) + 3
shell = shell[:mts_a] + '{{MODULE_JS_TO_SECTION}}\n' + shell[mts_b:]

# EN-Script-Tags durch Platzhalter ersetzen
_blk = re.search(r'(<script src="\./autemos_en[^"]*\.js"></script>\n)+', shell)
shell = shell[:_blk.start()] + '{{EN_SCRIPTS}}\n' + shell[_blk.end():]

open(f'{OUT}/shell.html', 'w', encoding='utf-8').write(shell)

for m in modules:
    m.pop('sectionsInFile', None)
    m.pop('sections', None)
json.dump({'modules': modules}, open(f'{OUT}/modules.json', 'w', encoding='utf-8'),
          indent=2, ensure_ascii=False)

print(f'{len(modules)} Module extrahiert')
print(f'shell.html: {len(shell):,} Zeichen (vorher {len(s):,})')
for m in modules:
    d = f'{OUT}/modules/{m["id"]}'
    de = len(open(f'{d}/de.html',encoding='utf-8').read())
    en = len(open(f'{d}/en.html',encoding='utf-8').read())
    print(f'  {m["id"]:<18} de {de:>7,}  en {en:>7,}  ({m["enCount"]} Sektionen EN)')
