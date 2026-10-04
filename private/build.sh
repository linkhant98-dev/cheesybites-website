#!/bin/bash
# Builds the PRIVATE Investment & Profit Guide PDFs (Myanmar + English).
# These contain real prices and profit estimates: share only with serious leads.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for L in my en; do
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
    --virtual-time-budget=15000 --print-to-pdf="Cheesy-Bites-Investment-Guide-$L.pdf" "file://$(pwd)/investment-guide.html?lang=$L" 2>/dev/null
  echo "Built private/Cheesy-Bites-Investment-Guide-$L.pdf"
done
