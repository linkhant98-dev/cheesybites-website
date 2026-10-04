#!/bin/bash
# Rebuilds the franchise brochure PDFs from brochure/brochure.html.
# Run from anywhere:  bash brochure/build.sh   (needs Google Chrome)
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="assets/brochure"
mkdir -p "$OUT"
SRC="file://$(pwd)/brochure/brochure.html"
for L in en my; do
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
    --virtual-time-budget=15000 --print-to-pdf="$OUT/cheesy-bites-franchise-$L.pdf" "$SRC?lang=$L" 2>/dev/null
  echo "Built $OUT/cheesy-bites-franchise-$L.pdf"
done
