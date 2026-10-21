@echo off
setlocal
set "PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%"

cd /d "%~dp0"
echo ========================================
echo [AI Shared Brain] Syncing to GitHub...
echo ========================================

git pull --rebase origin main
git add .
git commit -m "Auto-sync brain: %date% %time%"
git push origin main

echo.
echo [Done] Brain sync completed.
timeout /t 2 >nul
