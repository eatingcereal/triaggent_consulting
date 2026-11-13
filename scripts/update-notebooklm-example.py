#!/usr/bin/env python3
"""Update the project card inside the website's JSON-encoded HTML bundle."""
import argparse
import json
import re
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--demo-url', default='https://notebooklm.triaggent.com/demo')
args = parser.parse_args()
parsed = urlparse(args.demo_url)
if parsed.scheme != 'https' or not parsed.hostname or any(c in args.demo_url for c in '\"\'<>'):
    parser.error('Use an absolute HTTPS URL without HTML delimiters')
page = ROOT / 'index.html'
source = page.read_text()
pattern = r'(<script[^>]*type="__bundler/template"[^>]*>)(.*?)(</script>)'
match = re.search(pattern, source, re.S)
if not match:
    raise SystemExit('Expected bundled HTML template was not found; no files changed')
template = json.loads(match[2])
card = (ROOT / 'components/notebooklm-example.html').read_text().replace('{{DEMO_URL}}', args.demo_url)
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
page.write_text(source[:match.start(2)] + encoded + source[match.end(2):])
# Decode the result again before reporting success. Embedded runtime assets are untouched.
result = re.search(pattern, page.read_text(), re.S)
assert json.loads(result[2]).count('id="notebooklm-example"') == 1
print('Updated NotebookLM project example:', args.demo_url)
