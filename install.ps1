$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "      Installing ktnaOS Spicetify       " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# 1. Find Spicetify directory
$spicetifyConfig = (spicetify -c)
if (-not $spicetifyConfig) {
    Write-Host "Error: Spicetify is not installed or not in PATH." -ForegroundColor Red
    exit 1
}
$spicetifyDir = Split-Path -Parent $spicetifyConfig

$themeDir = Join-Path $spicetifyDir "Themes\ktnaOS"
$extDir = Join-Path $spicetifyDir "Extensions"
$snippetsGlobalDir = Join-Path $spicetifyDir "Snippets"

if (-not (Test-Path $themeDir)) { New-Item -ItemType Directory -Force -Path $themeDir | Out-Null }
if (-not (Test-Path $extDir)) { New-Item -ItemType Directory -Force -Path $extDir | Out-Null }
if (-not (Test-Path $snippetsGlobalDir)) { New-Item -ItemType Directory -Force -Path $snippetsGlobalDir | Out-Null }

# 2. Download from Github
$repoUrl = "https://github.com/mat2cute/ktnaOS/archive/refs/heads/main.zip"
$tempZip = Join-Path $env:TEMP "ktnaos_theme.zip"
$tempExtract = Join-Path $env:TEMP "ktnaos_theme_extract"

Write-Host "Downloading latest ktnaOS release..." -ForegroundColor Yellow
Invoke-WebRequest -Uri $repoUrl -OutFile $tempZip
if (Test-Path $tempExtract) { Remove-Item $tempExtract -Recurse -Force }
Expand-Archive -Path $tempZip -DestinationPath $tempExtract -Force

$sourceDir = Join-Path $tempExtract "ktnaOS-main"

# 3. Copy files to correct locations
Write-Host "Deploying theme files..." -ForegroundColor Yellow
Copy-Item -Path "$sourceDir\*" -Destination $themeDir -Recurse -Force
Copy-Item -Path "$sourceDir\ktnaos.js" -Destination $extDir -Force
if (Test-Path "$sourceDir\snippets") {
    Copy-Item -Path "$sourceDir\snippets\*.css" -Destination $snippetsGlobalDir -Force
}

# 4. Clean up temp files
Remove-Item $tempZip -Force
Remove-Item $tempExtract -Recurse -Force

# 5. Apply Spicetify configuration
Write-Host "Applying Spicetify configurations..." -ForegroundColor Yellow
spicetify config current_theme ktnaOS
spicetify config extensions ktnaos.js
spicetify apply

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Installation Complete! Enjoy ktnaOS  " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
