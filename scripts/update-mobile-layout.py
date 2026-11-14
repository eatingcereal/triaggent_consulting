#!/usr/bin/env python3
"""Update mobile styles inside the bundled homepage; retain all runtime assets."""
import contextlib,json,os,re,shutil,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
def write_atomically(path,text):
    """Replace path in one step, so a failed write never leaves a partial page behind."""
    fd,tmp=tempfile.mkstemp(dir=path.parent,prefix=path.name+'.',suffix='.tmp')
    try:
        with os.fdopen(fd,'w',encoding='utf-8',newline='') as f: f.write(text)
        shutil.copymode(path,tmp);os.replace(tmp,path)
    except BaseException:
        with contextlib.suppress(OSError): os.chmod(tmp,0o600);os.unlink(tmp)  # copymode may have made it read-only
        raise
p=root/'index.html'
with p.open(encoding='utf-8',newline='') as f: s=f.read()
m=re.search(r'(<script[^>]*type="__bundler/template"[^>]*>)(.*?)(</script>)',s,re.S)
if not m: raise SystemExit('Bundled template missing')
t=json.loads(m[2]);css=(root/'components/mobile-layout.css').read_text(encoding='utf-8')
block='<style id="triaggent-mobile-layout">\n'+css+'</style>'
nav=(root/'components/mobile-navigation.html').read_text(encoding='utf-8').strip()
t=re.sub(r'<!-- mobile-navigation:start -->.*?<!-- mobile-navigation:end -->',lambda _:nav,t,count=1,flags=re.S)
t,n=re.subn(r'<style id="triaggent-mobile-layout">.*?</style>',lambda _:block,t,count=1,flags=re.S)
if n!=1: raise SystemExit('Mobile style block missing; no files changed')
write_atomically(p,s[:m.start(2)]+json.dumps(t,ensure_ascii=False).replace('</','<\\/')+s[m.end(2):])
print('Updated responsive homepage styles')
