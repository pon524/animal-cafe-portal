#!/usr/bin/env python3
"""店名や住所が近い店を一覧にする（別ファイルに同じ店が入っていないかの確認用）。
使い方: python3 tools/dupes.py"""
import json, glob, collections, re
rows = []
for p in sorted(glob.glob("data/cafes/*.json")):
    if "/_" in p:
        continue
    for c in json.load(open(p, encoding="utf-8")):
        rows.append((p.split("/")[-1], c["id"], c["name"], c["prefecture"], c["address"]))
print("total", len(rows))
print("by file:", dict(collections.Counter(r[0] for r in rows)))
print("prefs:", len(set(r[3] for r in rows)), dict(collections.Counter(r[3] for r in rows).most_common(12)))
norm = lambda s: re.sub(r"[\s　\-−－‐ー]|丁目|番地?|号", "", s)
by = collections.defaultdict(list)
for r in rows:
    by[norm(r[4])[:14]].append(r)
for k, v in by.items():
    if len(v) > 1 and len(set(x[2] for x in v)) > 1:
        print("同住所:", [(x[0], x[2]) for x in v])
nb = collections.defaultdict(list)
for r in rows:
    nb[re.sub(r"[\s　（）()・【】\[\]]", "", r[2]).lower()].append(r)
for k, v in nb.items():
    if len(v) > 1:
        print("同名:", [(x[0], x[1]) for x in v])
