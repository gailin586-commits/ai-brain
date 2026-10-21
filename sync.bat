@echo off
chcp 65001 >nul
echo [AI Shared Brain] 正在同步到 GitHub...

cd /d "%~dp0"

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Git 命令，请先安装 Git 并配置环境变量。
    pause
    exit /b 1
)

echo -> 正在拉取远程更新 (git pull)...
git pull --rebase

echo -> 正在暂存所有改动 (git add .)...
git add .

for /f "tokens=1-4 delims=/ " %%a in ('date /t') do (set mydate=%%a-%%b-%%c)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (set mytime=%%a:%%b)
set commit_msg=Auto-sync: %mydate% %mytime%

echo -> 正在提交 (git commit)...
git commit -m "%commit_msg%"

echo -> 正在推送到 GitHub (git push)...
git push

if %errorlevel% equ 0 (
    echo [成功] 个人数字大脑已成功同步至 GitHub!
) else (
    echo [提示] 推送完成或无新改动需推送。
)

echo.
timeout /t 3 >nul
