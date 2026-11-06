#!/usr/bin/env python3
"""art/pixel/<id>.png（Codex 生成の原本、約1200px）を site/img/pixel/<id>.png（表示用、384px）に書き出す。
使い方: ~/ClaudeCode/.venv/bin/python tools/pixel_export.py [--size 384]
PIL が要る（~/ClaudeCode/.venv にある）。_ で始まるファイルは飛ばす。test_ も飛ばす。
"""
import sys, pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "art" / "pixel"
DST = ROOT / "site" / "img" / "pixel"
size = 384
if "--size" in sys.argv:
    size = int(sys.argv[sys.argv.index("--size") + 1])
DST.mkdir(parents=True, exist_ok=True)
n = 0
for p in sorted(SRC.glob("*.png")):
    if p.name.startswith(("_", "test_")):
        continue
    im = Image.open(p).convert("RGB")
    # 正方形に切り出して縮小。ドットの縁を保つため BOX で縮小
    w, h = im.size
    s = min(w, h)
    im = im.crop(((w - s) // 2, (h - s) // 2, (w - s) // 2 + s, (h - s) // 2 + s))
    im = im.resize((size, size), Image.BOX)
    im = im.quantize(colors=48, method=Image.Quantize.MEDIANCUT)  # PNG-8 で軽くする
    out = DST / p.name
    im.save(out, optimize=True)
    n += 1
    print("wrote", out, out.stat().st_size // 1024, "KB")
print(n, "files")
