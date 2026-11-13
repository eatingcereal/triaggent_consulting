#!/usr/bin/env python3
"""Update mobile styles inside the bundled homepage; retain all runtime assets."""
import json,re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
p=root/'index.html';s=p.read_text()
m=re.search(r'(<script[^>]*type="__bundler/template"[^>]*>)(.*?)(</script>)',s,re.S)
if not m: raise SystemExit('Bundled template missing')
t=json.loads(m[2]);css=(root/'components/mobile-layout.css').read_text()
block='<style id="triaggent-mobile-layout">\n'+css+'</style>'
nav=(root/'components/mobile-navigation.html').read_text().strip()
t=re.sub(r'<!-- mobile-navigation:start -->.*?<!-- mobile-navigation:end -->',lambda _:nav,t,count=1,flags=re.S)
t,n=re.subn(r'<style id="triaggent-mobile-layout">.*?</style>',lambda _:block,t,count=1,flags=re.S)
if n!=1: raise SystemExit('Mobile style block missing; no files changed')
p.write_text(s[:m.start(2)]+json.dumps(t,ensure_ascii=False).replace('</','<\\/')+s[m.end(2):])
print('Updated responsive homepage styles')
