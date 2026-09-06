# Script to set GitHub repository description and topics via GitHub REST API
# Requires GITHUB_TOKEN environment variable with repo admin scope

param (
    [string]$Repo = "mohammadkhizer/create-vibe-engineering-skill",
    [string]$Token = $env:GITHUB_TOKEN
)

if (-not $Token) {
    Write-Host "Error: GITHUB_TOKEN environment variable is not set." -ForegroundColor Red
    Write-Host "Usage: `$env:GITHUB_TOKEN='your_pat'; .\scripts\set-repo-metadata.ps1" -ForegroundColor Yellow
    exit 1
}

$headers = @{
    "Authorization" = "token $Token"
    "Accept"        = "application/vnd.github.v3+json"
}

# 1. Update Description
$descBody = @{
    description = "Operating rules & sub-skill CLI scaffolding for Node.js, MERN & AI integration codebases."
} | ConvertTo-Json

Write-Host "Updating repository description for $Repo..." -ForegroundColor Cyan
$descUri = "https://api.github.com/repos/$Repo"
try {
    $resDesc = Invoke-RestMethod -Uri $descUri -Method PATCH -Headers $headers -Body $descBody -ContentType "application/json"
    Write-Host "✔ Repository description set to: $($resDesc.description)" -ForegroundColor Green
} catch {
    Write-Host "✖ Failed to update description: $_" -ForegroundColor Red
}

# 2. Update Topics
$topics = @(
    "claude-skills",
    "ai-agents",
    "mern",
    "vibe-engineering-skill",
    "stack-guard",
    "developer-tools",
    "scaffolding",
    "code-governance"
)

$topicsBody = @{
    names = $topics
} | ConvertTo-Json

Write-Host "Updating repository topics for $Repo..." -ForegroundColor Cyan
$topicsUri = "https://api.github.com/repos/$Repo/topics"
$topicsHeaders = @{
    "Authorization" = "token $Token"
    "Accept"        = "application/vnd.github.mercy-preview+json"
}
try {
    $resTopics = Invoke-RestMethod -Uri $topicsUri -Method PUT -Headers $topicsHeaders -Body $topicsBody -ContentType "application/json"
    Write-Host "✔ Repository topics updated: $($resTopics.names -join ', ')" -ForegroundColor Green
} catch {
    Write-Host "✖ Failed to update topics: $_" -ForegroundColor Red
}
