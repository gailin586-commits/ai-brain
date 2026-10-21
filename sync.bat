@echo off
setlocal
set "PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%"

cd /d "%~dp0"
echo ========================================
echo [AI Shared Brain] Syncing to GitHub...
echo ========================================

git add .
git diff-index --quiet HEAD --
if %errorlevel% neq 0 (
    git commit -m "Auto-sync brain: %date% %time%"
)

git pull --rebase origin main
git push origin main

echo.
echo ========================================
echo [Done] Brain sync completed successfully!
echo ========================================
timeout /t 2 >nul
