#!/bin/bash
# Double-click this file (macOS) to run the Cheesy Bites website locally.
cd "$(dirname "$0")"
PORT=8080
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done
echo ""
echo "  🧀 Cheesy Bites website running at: http://localhost:$PORT"
echo "  Press Ctrl+C (or close this window) to stop."
echo ""
(sleep 1 && open "http://localhost:$PORT") &
python3 -m http.server $PORT
