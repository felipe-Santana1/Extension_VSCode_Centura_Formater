# Guia de Uso - Extensão Gupta APL Language Support

## ✅ Extensão Instalada com Sucesso!

A extensão Gupta APL Language Support foi instalada e está pronta para uso.

## 🚀 Como Usar

### 1. Reiniciar o VS Code
Feche e abra o VS Code novamente para que a extensão seja carregada.

### 2. Abrir um Arquivo .apl
- Abra seu arquivo `abatnc.apl` ou qualquer outro arquivo `.apl`
- A extensão será ativada automaticamente

### 3. Formatar o Código

#### Opção A: Atalho de Teclado
- Pressione `Shift + Alt + F`
- O documento inteiro será formatado instantaneamente

#### Opção B: Comando do Menu
- Pressione `Ctrl + Shift + P`
- Digite "Gupta APL: Formatar Documento"
- Pressione Enter

#### Opção C: Menu de Contexto
- Clique com o botão direito no arquivo
- Selecione "Gupta APL: Formatar Documento"

### 4. Ocultar/Mostrar Diretivas .head

#### Opção A: Atalho de Teclado (NOVO!)
- Pressione `Ctrl + Shift + H`
- As diretivas `.head` serão ocultadas/exibidas alternadamente

#### Opção B: Comando do Menu
- Pressione `Ctrl + Shift + P`
- Digite "Gupta APL: Ocultar/Mostrar Diretivas .head"
- Pressione Enter

#### Opção C: Menu de Contexto
- Clique com o botão direito no arquivo
- Selecione "Gupta APL: Ocultar/Mostrar Diretivas .head"

### 5. Formatar Apenas uma Seleção
- Selecione o código que deseja formatar
- Clique com botão direito e escolha "Gupta APL: Formatar Seleção"

## 🎨 Funcionalidades Ativas

### ✓ Syntax Highlighting
- Diretivas `.head` em roxo
- Palavras-chave (`Set`, `Call`, `Return`) em azul  
- Tipos de dados (`Number`, `Boolean`) em ciano
- Variáveis destacadas

### ✓ Formatação Automática
- `.head 1` = sem indentação
- `.head 2` = 1 nível de indentação (4 espaços)
- `.head 3` = 2 níveis de indentação (8 espaços)
- `.head 4` = 3 níveis de indentação (12 espaços)
- E assim por diante...

### ✓ Ocultar/Mostrar .head (NOVO!)
- Atalho `Ctrl + Shift + H` para alternar
- Visualização limpa sem as diretivas `.head`
- Indentação hierárquica preservada
- Estado independente por arquivo

### ✓ Code Folding
- Clique nos ícones de seta ao lado das linhas `.head +`
- Permite recolher seções inteiras do código
- Facilita a navegação em arquivos grandes

## 📝 Exemplo de Transformação

**ANTES (código original):**
```apl
.head 2 +  Internal Functions
.head 3 +  Function: iDlg_abatnc !__Exported
.head 4 -  Description:
.head 4 +  Returns
.head 5 -  Number:
.head 4 +  Parameters
.head 5 -  Window Handle: par_hWnd_tela
```

**DEPOIS (formatado pela extensão):**
```apl
.head 2 + Internal Functions
    .head 3 + Function: iDlg_abatnc !__Exported
        .head 4 - Description:
        .head 4 + Returns
            .head 5 - Number:
        .head 4 + Parameters
            .head 5 - Window Handle: par_hWnd_tela
```

**COM .HEAD OCULTO (Ctrl+Shift+H):**
```apl
Internal Functions
    Function: iDlg_abatnc !__Exported
        Description:
        Returns
            Number:
        Parameters
            Window Handle: par_hWnd_tela
```

## 🛠️ Resolução de Problemas

### A extensão não aparece?
1. Verifique se o VS Code foi reiniciado
2. Confirme que o arquivo tem extensão `.apl`
3. Verifique nas extensões instaladas (Ctrl+Shift+X)

### A formatação não funciona?
1. Certifique-se de que o arquivo está salvo
2. Verifique se o arquivo contém diretivas `.head`
3. Tente usar o comando completo via Ctrl+Shift+P

### Syntax highlighting não aparece?
1. Feche e reabra o arquivo `.apl`
2. No canto inferior direito, clique no tipo de arquivo e selecione "Gupta APL"

## 📋 Arquivo de Teste

Use o arquivo `exemplo-teste.apl` incluído na extensão para testar todas as funcionalidades.

---

**Desenvolvido especificamente para arquivos .apl do Gupta Team Developer**
**Versão: 1.0.0**
