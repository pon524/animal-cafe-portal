#!/usr/bin/env python3
"""店舗データの機械チェック。標準ライブラリのみ。
使い方: python3 tools/check.py [--urls]   (--urls で公式URLの生存も確認。1件ずつ間をあけて HEAD/GET)
見るもの: JSON構文、必須項目、id の形と重複、店名の重複、features の語彙、予約制の付け方、
price_level の範囲、checked の日付、作業中の文言（要確認など）、animals の id。"""
import json, re, sys, time, glob, subprocess, urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VOCAB = {"抱っこOK","ふれあいOK","えさやり体験","保護動物","駅近","ドリンク込み","子ども可","予約制","貸切可","写真OK","英語対応","時間無制限プランあり","里親募集","複数の動物"}
REQ = ["id","name","animals","prefecture","area","address","access","url","price","price_level","hours","closed","reservation","features","description","checked","source_note"]
BAD = re.compile(r"要確認|参照|TODO|暫定|仮|\?\?|未確認")
animals = {a["id"] for a in json.load(open(ROOT/"data/animals.json", encoding="utf-8"))}
errs, warns = [], []
ids, names = {}, {}
cafes = []
for p in sorted((ROOT/"data/cafes").glob("*.json")):
    if p.name.startswith("_"): continue
    try:
        arr = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        errs.append(f"{p.name}: JSON が読めない: {e}"); continue
    for c in arr:
        tag = f"{p.name}:{c.get('id','?')}"
        for k in REQ:
            if k not in c or c[k] in ("", None) and k != "image":
                errs.append(f"{tag}: {k} が空")
        cid = c.get("id","")
        if not re.fullmatch(r"[a-z]+-[a-z]+-[a-z0-9-]+", cid): errs.append(f"{tag}: id の形が違う")
        if cid in ids: errs.append(f"{tag}: id 重複（{ids[cid]}）")
        ids[cid] = p.name
        nm = re.sub(r"\s+", "", c.get("name",""))
        if nm in names: warns.append(f"{tag}: 店名が {names[nm]} と同じ")
        names[nm] = p.name
        an = c.get("animals") or []
        if not an or an[0] != p.stem: errs.append(f"{tag}: animals の先頭がファイル名 {p.stem} と違う")
        for a in an:
            if a not in animals: errs.append(f"{tag}: 知らない動物 {a}")
        for f in c.get("features", []):
            if f not in VOCAB: errs.append(f"{tag}: 語彙にない feature「{f}」")
        if ("予約制" in c.get("features", [])) != (c.get("reservation") == "必須"):
            errs.append(f"{tag}: 予約制 と reservation=「{c.get('reservation')}」が合わない")
        if c.get("reservation") not in ("不要","推奨","必須"): errs.append(f"{tag}: reservation の値")
        if c.get("price_level") not in (1,2,3,4): errs.append(f"{tag}: price_level")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(c.get("checked",""))): errs.append(f"{tag}: checked の形")
        for k in ("access","closed","hours","price"):
            if BAD.search(str(c.get(k,""))): warns.append(f"{tag}: {k} に作業中の文「{c[k]}」")
        d = c.get("description","")
        if len(d) < 40: warns.append(f"{tag}: description が短い（{len(d)}字）")
        if not str(c.get("url","")).startswith("http"): errs.append(f"{tag}: url")
        cafes.append(c)
print(f"{len(cafes)} 店 / エラー {len(errs)} / 注意 {len(warns)}")
for e in errs: print("ERR ", e)
for w in warns: print("WARN", w)
if "--urls" in sys.argv:
    print("--- URL 生存確認 ---")
    bad = 0
    for c in cafes:
        u = c["url"]
        # curl を使う（python の ssl が古い環境でも TLS1.3 のサイトを開けるように）。日本語の URL は quote する
        q = urllib.parse.quote(u, safe=":/?&=%#@+,;~-._")
        r = subprocess.run(["curl", "-s", "-o", "/dev/null", "-L", "--max-time", "20", "-A", "Mozilla/5.0 (link check for doubutsu-cafe zukan)", "-w", "%{http_code}", q], capture_output=True, text=True)
        code = int(r.stdout) if r.stdout.strip().isdigit() else f"ERR {r.stdout.strip() or r.returncode}"
        if code != 200:
            bad += 1; print(f"URL  {c['id']}: {code} {u}")
        time.sleep(1.0)
    print(f"URL 不通/要確認 {bad} 件")
sys.exit(1 if errs else 0)
