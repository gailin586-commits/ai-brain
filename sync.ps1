# AI Shared Brain PowerShell 一键同步脚本
$ErrorActionPreference = "Stop"

Set-Location -Path $PSScriptRoot

Write-Host "🧠 [AI Shared Brain] 检查同步状态..." -ForegroundColor Cyan

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ [错误] 未检测到 Git，请先安装 Git 并配置到环境变量。" -ForegroundColor Red
    exit 1
}

try {
    Write-Host "📥 正在拉取远程更新 (git pull --rebase)..." -ForegroundColor Yellow
    git pull --rebase

    Write-Host "📝 正在暂存改动 (git add .)..." -ForegroundColor Yellow
    git add .

    $status = git status --porcelain
    if ($status) {
        $timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
        $commitMsg = "Auto-sync brain: $timestamp"
        Write-Host "💾 正在提交改动 ($commitMsg)..." -ForegroundColor Yellow
        git commit -m $commitMsg

        Write-Host "🚀 正在推送到远程 GitHub 仓库..." -ForegroundColor Yellow
        git push
        Write-Host "✅ [成功] 个人数字大脑已成功同步到 GitHub!" -ForegroundColor Green
    } else {
        Write-Host "✨ [最新] 暂无新改动，远程已是最新状态。" -ForegroundColor Green
    }
} catch {
    Write-Host "⚠️ 同步过程发生异常: $_" -ForegroundColor Red
}
