@echo off
REM Double-click this file (Windows) to run the Cheesy Bites website locally.
cd /d "%~dp0"
echo.
echo   Cheesy Bites website running at: http://localhost:8080
echo   Close this window to stop.
echo.
start "" http://localhost:8080
python -m http.server 8080 || py -m http.server 8080
pause
