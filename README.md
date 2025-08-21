# Gupta APL Language Support

[![GitHub](https://img.shields.io/github/license/felipe-Santana1/Extension_VSCode_Centura_Formater)](https://github.com/felipe-Santana1/Extension_VSCode_Centura_Formater/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/felipe-Santana1/Extension_VSCode_Centura_Formater)](https://github.com/felipe-Santana1/Extension_VSCode_Centura_Formater/releases)
[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Extension-blue)](https://marketplace.visualstudio.com/)

Esta extensão do VS Code fornece suporte completo para arquivos `.apl` do Gupta Team Developer (Centura), incluindo formatação automática, syntax highlighting, ocultação de diretivas `.head` e code folding.

## 🚀 Repositório GitHub

**Repositório:** [Extension_VSCode_Centura_Formater](https://github.com/felipe-Santana1/Extension_VSCode_Centura_Formater)

- 📋 **Issues:** Relate bugs ou solicite novas funcionalidades
- 🔄 **Pull Requests:** Contribua com melhorias
- 📖 **Documentação:** Guias detalhados e exemplos
- 🏷️ **Releases:** Downloads e changelog

## Funcionalidades

### 🎨 Syntax Highlighting
- Destaque específico para diretivas `.head`
- Cores diferenciadas para palavras-chave (`Set`, `Call`, `Return`, etc.)
- Identificação de tipos de dados (`Number`, `Boolean`, `Window Handle`)
- Destaque para variáveis e parâmetros

### 📐 Formatação Automática
- **Comando principal:** `Gupta APL: Formatar Documento`
- **Atalho:** `Shift+Alt+F`
- Indentação automática baseada no nível das diretivas `.head`
- Regra de indentação:
  - `.head 1` = nível 0 (sem indentação)
  - `.head 2` = nível 1 de indentação
  - `.head 3` = nível 2 de indentação
  - `.head 4` = nível 3 de indentação
  - E assim por diante...

### �️ Ocultar/Mostrar Diretivas .head
- **Comando:** `Gupta APL: Ocultar/Mostrar Diretivas .head`
- **Atalho:** `Ctrl+Shift+H`
- Permite ocultar as diretivas `.head` para visualização mais limpa
- Mantém a indentação hierárquica mesmo com `.head` oculto
- Estado independente por arquivo

### �📁 Code Folding
- Recolhimento de código baseado nas diretivas `.head +`
- Permite colapsar funções e seções inteiras
- Facilita a navegação em arquivos grandes

## Como Usar

### Instalação da Extensão

1. **Copie a pasta da extensão:**
   ```
   cp -r gupta-apl-extension ~/.vscode/extensions/
   ```

2. **Ou instale via VSIX:**
   - Compile a extensão: `npm run compile`
   - Package: `vsce package`
   - Instale: `code --install-extension gupta-apl-support-1.0.0.vsix`

### Formatação de Código

1. **Formatação completa do documento:**
   - Abra um arquivo `.apl`
   - Use `Ctrl+Shift+P` e procure por "Gupta APL: Formatar Documento"
   - Ou use o atalho `Shift+Alt+F`

2. **Formatação de seleção:**
   - Selecione o código que deseja formatar
   - Clique com botão direito e escolha "Gupta APL: Formatar Seleção"

### Ocultar/Mostrar Diretivas .head

1. **Toggle de visibilidade:**
   - Use `Ctrl+Shift+P` e procure por "Gupta APL: Ocultar/Mostrar Diretivas .head"
   - Ou use o atalho `Ctrl+Shift+H`
   - Clique com botão direito e escolha a opção no menu de contexto

2. **Visualização limpa:**
   - Com `.head` oculto, você verá apenas o conteúdo estrutural
   - A indentação hierárquica é preservada
   - Cada arquivo mantém seu próprio estado de visibilidade

### Exemplo de Formatação

**Antes:**
```apl
.head 2 +  Internal Functions
.head 3 +  Function: iDlg_abatnc !__Exported
.head 4 -  Description:
.head 4 +  Returns
.head 5 -  Number:
.head 4 +  Parameters
.head 5 -  Window Handle: par_hWnd_tela
.head 5 -  Number: par_nu_nf
```

**Depois (formatado):**
```apl
.head 2 + Internal Functions
    .head 3 + Function: iDlg_abatnc !__Exported
        .head 4 - Description:
        .head 4 + Returns
            .head 5 - Number:
        .head 4 + Parameters
            .head 5 - Window Handle: par_hWnd_tela
            .head 5 - Number: par_nu_nf
```

**Com .head oculto (`Ctrl+Shift+H`):**
```apl
Internal Functions
    Function: iDlg_abatnc !__Exported
        Description:
        Returns
            Number:
        Parameters
            Window Handle: par_hWnd_tela
            Number: par_nu_nf
```

## Desenvolvimento

### Requisitos
- Node.js 16+
- TypeScript 4.9+
- VS Code 1.74+

### Setup do Projeto
```bash
cd gupta-apl-extension
npm install
npm run compile
```

### Debugging
1. Abra a pasta da extensão no VS Code
2. Pressione `F5` para abrir uma nova janela de desenvolvimento
3. Abra um arquivo `.apl` para testar

## Estrutura do Projeto

```
gupta-apl-extension/
├── src/
│   └── extension.ts          # Código principal da extensão
├── syntaxes/
│   └── gupta-apl.tmLanguage.json  # Definições de syntax highlighting
├── package.json              # Configuração da extensão
├── tsconfig.json            # Configuração do TypeScript
├── language-configuration.json # Configuração da linguagem
└── README.md                # Este arquivo
```

## Contribuição

Contribuições são bem-vindas! Veja como contribuir:

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/SEU_USUARIO/Extension_VSCode_Centura_Formater.git`
3. **Crie uma branch**: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste
5. **Commit**: `git commit -m "Adiciona nova funcionalidade"`
6. **Push**: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request**

### Reportar Problemas

Encontrou um bug? [Abra uma issue](https://github.com/felipe-Santana1/Extension_VSCode_Centura_Formater/issues/new) com:
- Descrição detalhada do problema
- Arquivo `.apl` de exemplo (se possível)
- Versão do VS Code
- Sistema operacional

## Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
