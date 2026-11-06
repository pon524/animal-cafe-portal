#!/bin/bash
# Codex の画像生成で、動物のドット絵をまとめて作る。
#   bash tools/pixel_images.sh art/pixel/プロンプト一覧.tsv   (各行: 保存先<TAB>内容)
# 既に保存先があるものは飛ばす。1枚あたり1〜3分。
C=/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin/codex
STYLE="画風: 32×32ピクセル相当のレトロゲーム風ドット絵（ピクセルアート）。輪郭は1ピクセルの濃い茶色（#5a3a22）の線、色数は8色程度、ベタ塗り、アンチエイリアスなし、グラデーションなし、ハイライトは目に白い1ピクセルだけ。顔は画面の中央に大きく、上下左右に余白を1〜2割。背景は単色の薄いクリーム色（#FFF6E8）。文字・枠・影・透かしは入れない。正方形1:1。同じシリーズの他の動物と並べても揃って見えるように、輪郭の太さと余白の取り方を同じにする。"
while IFS=$'\t' read -r out desc; do
  [ -z "$out" ] && continue
  if [ -f "$out" ]; then echo "あり: $out"; continue; fi
  mkdir -p "$(dirname "$out")"
  echo "生成中: $out"
  "$C" exec --skip-git-repo-check -s workspace-write < /dev/null \
    "画像生成ツールを使って、次の画像を1枚作り、$out に保存してください。コードは書かず、画像生成ツールを使うこと。保存したら、ファイルのパスだけを答えること。
内容: $desc
$STYLE" > /dev/null 2>&1
  [ -f "$out" ] && echo "完了: $out" || echo "失敗: $out"
done < "$1"
