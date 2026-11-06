#!/usr/bin/env python3
"""data/cafes/_new_*.json を animals[0] のファイルへ統合する。
重複（同id・同名・同住所）は入れずに表示。--apply で書き込み、無指定は確認だけ。"""
import json, glob, re, sys, collections
apply = "--apply" in sys.argv
norm_addr = lambda s: re.sub(r"[\s　\-−－‐ー]|丁目|番地?|号", "", s)
norm_name = lambda s: re.sub(r"[\s　（）()・【】\[\]]", "", s).lower()
main = {}
for p in sorted(glob.glob("data/cafes/*.json")):
    if "/_" in p:
        continue
    main[p] = json.load(open(p, encoding="utf-8"))
ids = {c["id"] for v in main.values() for c in v}
names = {norm_name(c["name"]): c["id"] for v in main.values() for c in v}
addrs = {norm_addr(c["address"])[:14]: c["id"] for v in main.values() for c in v}
added = collections.Counter()
skipped = []
for p in sorted(glob.glob("data/cafes/_new_*.json")):
    for c in json.load(open(p, encoding="utf-8")):
        why = None
        if c["id"] in ids:
            why = "同id"
        elif norm_name(c["name"]) in names:
            why = "同名 " + names[norm_name(c["name"])]
        elif norm_addr(c["address"])[:14] in addrs:
            print("注意（同じ建物か）:", c["name"], "<->", addrs[norm_addr(c["address"])[:14]])
        if why:
            skipped.append((p.split("/")[-1], c["name"], why))
            continue
        target = "data/cafes/%s.json" % c["animals"][0]
        if target not in main:
            skipped.append((p.split("/")[-1], c["name"], "不明なカテゴリ " + c["animals"][0]))
            continue
        main[target].append(c)
        ids.add(c["id"])
        names[norm_name(c["name"])] = c["id"]
        addrs[norm_addr(c["address"])[:14]] = c["id"]
        added[target.split("/")[-1]] += 1
print("追加:", dict(added), "合計", sum(added.values()))
for s in skipped:
    print("見送り:", s)
if apply:
    for p, v in main.items():
        with open(p, "w", encoding="utf-8") as f:
            json.dump(v, f, ensure_ascii=False, indent=2)
            f.write("\n")
    print("書き込み済み")
