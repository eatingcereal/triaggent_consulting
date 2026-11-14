#!/usr/bin/env python3
"""Update the project card inside the website's JSON-encoded HTML bundle."""
import argparse
import contextlib
import json
import os
import re
import shutil
import tempfile
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]


def write_atomically(path, text):
    """Replace path in one step, so a failed write never leaves a partial page behind."""
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=path.name + '.', suffix='.tmp')
    try:
        with os.fdopen(fd, 'w', encoding='utf-8', newline='') as f:
            f.write(text)
        shutil.copymode(path, tmp)
        os.replace(tmp, path)
    except BaseException:
        with contextlib.suppress(OSError):  # copymode may have made it read-only
            os.chmod(tmp, 0o600)
            os.unlink(tmp)
        raise


parser = argparse.ArgumentParser()
parser.add_argument('--demo-url', default='https://agenticagent.triaggent.com/')
args = parser.parse_args()
parsed = urlparse(args.demo_url)
if parsed.scheme != 'https' or not parsed.hostname or any(c in args.demo_url for c in '\"\'<>'):
    parser.error('Use an absolute HTTPS URL without HTML delimiters')
page = ROOT / 'index.html'
with page.open(encoding='utf-8', newline='') as f:
    source = f.read()
pattern = r'(<script[^>]*type="__bundler/template"[^>]*>)(.*?)(</script>)'
match = re.search(pattern, source, re.S)
if not match:
    raise SystemExit('Expected bundled HTML template was not found; no files changed')
template = json.loads(match[2])
card = (ROOT / 'components/notebooklm-example.html').read_text(encoding='utf-8').replace('{{DEMO_URL}}', args.demo_url)
start, end = '<!-- notebooklm-example:start -->', '<!-- notebooklm-example:end -->'
block = start + '\n' + card + '\n' + end + '\n'
if start in template:
    template = re.sub(re.escape(start) + r'.*?' + re.escape(end) + r'\n?', lambda _: block, template, count=1, flags=re.S)
else:
    marker = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:1000px;margin:0 auto">'
    portfolio_start = template.find('<div id="portfolio"')
    position = template.find(marker, portfolio_start) if portfolio_start >= 0 else -1
    if position < 0:
        raise SystemExit('Expected portfolio grid was not found; no files changed')
    grid = marker.replace('<div ', '<div class="nlm-project-grid" ', 1).replace('repeat(3,1fr)', 'repeat(2,1fr)')
    template = template[:position] + template[position:].replace(marker, grid + '\n' + block, 1)
encoded = json.dumps(template, ensure_ascii=False).replace('</', '<\\/')
updated = source[:match.start(2)] + encoded + source[match.end(2):]
# Decode the result again before writing it. Embedded runtime assets are untouched.
result = re.search(pattern, updated, re.S)
if not result or json.loads(result[2]).count('id="notebooklm-example"') != 1:
    raise SystemExit('Updated page did not contain exactly one project card; no files changed')
write_atomically(page, updated)
print('Updated NotebookLM project example:', args.demo_url)
