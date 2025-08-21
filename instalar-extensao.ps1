# Script para instalar a extensão Gupta APL Language Support

Write-Host "Instalando a extensão Gupta APL Language Support..." -ForegroundColor Green

$extensionsPath = "$env:USERPROFILE\.vscode\extensions"
$targetPath = "$extensionsPath\gupta-apl-support"
$sourcePath = $PSScriptRoot

# Cria o diretório de extensões se não existir
if (!(Test-Path $extensionsPath)) {
    New-Item -ItemType Directory -Path $extensionsPath -Force
    Write-Host "Diretório de extensões criado: $extensionsPath" -ForegroundColor Yellow
}

# Remove instalação anterior se existir
if (Test-Path $targetPath) {
    Remove-Item -Path $targetPath -Recurse -Force
    Write-Host "Instalação anterior removida." -ForegroundColor Yellow
}

# Copia a extensão para o diretório de extensões
Copy-Item -Path $sourcePath -Destination $targetPath -Recurse -Force

Write-Host ""
Write-Host "Extensão instalada com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "Para usar a extensão:" -ForegroundColor Cyan
Write-Host "1. Reinicie o VS Code" -ForegroundColor White
Write-Host "2. Abra um arquivo .apl" -ForegroundColor White  
Write-Host "3. Use Shift+Alt+F para formatar ou" -ForegroundColor White
Write-Host "4. Use Ctrl+Shift+P e procure por 'Gupta APL: Formatar Documento'" -ForegroundColor White
Write-Host ""
Write-Host "Pressione qualquer tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
