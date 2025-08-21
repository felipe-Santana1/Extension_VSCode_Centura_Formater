@echo off
echo Instalando a extensão Gupta APL Language Support...

REM Cria o diretório de extensões se não existir
if not exist "%USERPROFILE%\.vscode\extensions" (
    mkdir "%USERPROFILE%\.vscode\extensions"
)

REM Remove instalação anterior se existir
if exist "%USERPROFILE%\.vscode\extensions\gupta-apl-support" (
    rmdir /s /q "%USERPROFILE%\.vscode\extensions\gupta-apl-support"
)

REM Copia a extensão para o diretório de extensões
xcopy /s /e /i "%~dp0" "%USERPROFILE%\.vscode\extensions\gupta-apl-support"

echo.
echo Extensão instalada com sucesso!
echo.
echo Para usar a extensão:
echo 1. Reinicie o VS Code
echo 2. Abra um arquivo .apl
echo 3. Use Shift+Alt+F para formatar ou
echo 4. Use Ctrl+Shift+P e procure por "Gupta APL: Formatar Documento"
echo.
pause
