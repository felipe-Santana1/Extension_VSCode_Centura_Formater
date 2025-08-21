# Extension VSCode Centura Formater

[![GitHub](https://img.shields.io/github/license/wendel-miguel/Extension_VSCode_Centura_Formater)](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/wendel-miguel/Extension_VSCode_Centura_Formater)](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/releases)
[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Extension-blue)](https://marketplace.visualstudio.com/)

Uma extensão poderosa para VS Code que oferece suporte completo para arquivos `.apl` do **Gupta Team Developer (Centura)**. Criada especificamente para desenvolvedores que trabalham com esta plataforma legacy, a extensão traz recursos modernos de edição para um ambiente de desenvolvimento mais produtivo.

## 🎯 O que faz esta extensão?

Esta extensão transforma o VS Code em um IDE completo para Gupta Team Developer, oferecendo:
- **Formatação inteligente** baseada na hierarquia de diretivas `.head`
- **Syntax highlighting** específico para a linguagem
- **Ocultação/exibição** de diretivas para código mais limpo
- **Code folding** para melhor organização
- **Atalhos personalizados** para produtividade

## 🚀 Repositório GitHub

**Repositório oficial:** [Extension_VSCode_Centura_Formater](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater)

- 📋 **Issues:** Relate bugs ou solicite novas funcionalidades
- 🔄 **Pull Requests:** Contribua com melhorias
- 📖 **Documentação:** Guias detalhados e exemplos
- 🏷️ **Releases:** Downloads e changelog
- ⭐ **Star o projeto** se ele foi útil para você!

## ✨ Funcionalidades Principais

### 🎨 Syntax Highlighting Avançado
- **Diretivas `.head`**: Destaque visual específico para identificação rápida
- **Palavras-chave**: Cores diferenciadas para `Set`, `Call`, `Return`, `If`, `While`, etc.
- **Tipos de dados**: Realce para `Number`, `Boolean`, `String`, `Window Handle`, `Date Time`
- **Variáveis e parâmetros**: Identificação visual clara de declarações
- **Comentários**: Estilo consistente para documentação

### 📐 Formatação Automática Inteligente
- **Comando principal:** `Gupta APL: Formatar Documento`
- **Atalho rápido:** `Shift+Alt+F` (padrão do VS Code)
- **Indentação hierárquica** baseada no nível das diretivas `.head`
- **Regras de formatação:**
  ```
  .head 1 → Nível 0 (margem esquerda)
  .head 2 → Nível 1 (4 espaços)
  .head 3 → Nível 2 (8 espaços)
  .head 4 → Nível 3 (12 espaços)
  .head N → Nível N-1 ((N-1) × 4 espaços)
  ```
- **Preservação de estrutura**: Mantém conteúdo e lógica intactos
- **Formatação de seleção**: Aplica formatação apenas ao texto selecionado

### 👁️ Modo de Visualização Limpa
- **Comando:** `Gupta APL: Ocultar/Mostrar Diretivas .head`
- **Atalho:** `Ctrl+Shift+H`
- **Funcionalidades:**
  - Oculta visualmente as diretivas `.head` mantendo apenas o conteúdo
  - Preserva toda a indentação hierárquica
  - Estado independente por arquivo aberto
  - Toggle instantâneo sem perda de dados
  - Menu de contexto (clique direito) para acesso rápido

### 📁 Code Folding Inteligente
- **Recolhimento automático** baseado em diretivas `.head +`
- **Colapso de funções** e seções inteiras
- **Navegação otimizada** em arquivos grandes
- **Estrutura visual** clara da hierarquia do código

## 🔧 Como Usar a Extensão

### 🚀 Instalação Rápida

#### Método 1: Clone e Instale (Recomendado)
```bash
# 1. Clone o repositório
git clone https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater.git

# 2. Navegue para a pasta
cd Extension_VSCode_Centura_Formater

# 3. Instale as dependências
npm install

# 4. Compile a extensão
npm run compile

# 5. Empacote e instale
npm run package
code --install-extension gupta-apl-support-1.0.0.vsix
```

#### Método 2: Instalação Manual
1. **Baixe o repositório** como ZIP
2. **Extraia** para uma pasta local
3. **Abra terminal** na pasta extraída
4. **Execute os comandos** do Método 1 (passos 3-5)

### 📝 Usando a Formatação

#### Formatação Completa do Documento
1. **Abra qualquer arquivo `.apl`** no VS Code
2. **Use um dos métodos:**
   - **Atalho:** `Shift+Alt+F` (mais rápido)
   - **Command Palette:** `Ctrl+Shift+P` → "Gupta APL: Formatar Documento"
   - **Menu:** Clique direito → "Gupta APL: Formatar Documento"

#### Formatação de Seleção
1. **Selecione** o trecho de código que deseja formatar
2. **Clique com botão direito** → "Gupta APL: Formatar Seleção"
3. **Apenas o código selecionado** será formatado

### 👁️ Modo Visualização Limpa

#### Como Ativar/Desativar
1. **Métodos de acesso:**
   - **Atalho rápido:** `Ctrl+Shift+H`
   - **Command Palette:** `Ctrl+Shift+P` → "Gupta APL: Ocultar/Mostrar Diretivas .head"
   - **Menu contexto:** Clique direito → "Ocultar/Mostrar Diretivas .head"

#### O que acontece?
- **Estado Oculto:** Você vê apenas o conteúdo sem as diretivas `.head`
- **Estado Visível:** Mostra o código completo com todas as diretivas
- **Indentação:** Sempre preservada, independente do estado
- **Por arquivo:** Cada arquivo mantém seu próprio estado de visibilidade

### 📊 Exemplo Prático de Transformação

#### ❌ Código Original (Não Formatado)
```apl
.head 2 +  Internal Functions
.head 3 +  Function: iDlg_abatnc !__Exported
.head 4 -  Description: Dialog principal do sistema de abatimento
.head 4 +  Returns
.head 5 -  Number: Código de retorno (0=sucesso, 1=erro)
.head 4 +  Parameters
.head 5 -  Window Handle: par_hWnd_tela
.head 5 -  Number: par_nu_nf
.head 5 -  String: par_str_operacao
Set bOk = SalTblFirst( hSqlCursor )
Call SalMessageBox( "Processando...", "Info", MB_Ok )
Return nRetCode
```

#### ✅ Após Formatação (`Shift+Alt+F`)
```apl
.head 2 + Internal Functions
    .head 3 + Function: iDlg_abatnc !__Exported
        .head 4 - Description: Dialog principal do sistema de abatimento
        .head 4 + Returns
            .head 5 - Number: Código de retorno (0=sucesso, 1=erro)
        .head 4 + Parameters
            .head 5 - Window Handle: par_hWnd_tela
            .head 5 - Number: par_nu_nf
            .head 5 - String: par_str_operacao
            Set bOk = SalTblFirst( hSqlCursor )
            Call SalMessageBox( "Processando...", "Info", MB_Ok )
            Return nRetCode
```

#### 🎯 Modo Visualização Limpa (`Ctrl+Shift+H`)
```apl
Internal Functions
    Function: iDlg_abatnc !__Exported
        Description: Dialog principal do sistema de abatimento
        Returns
            Number: Código de retorno (0=sucesso, 1=erro)
        Parameters
            Window Handle: par_hWnd_tela
            Number: par_nu_nf
            String: par_str_operacao
            Set bOk = SalTblFirst( hSqlCursor )
            Call SalMessageBox( "Processando...", "Info", MB_Ok )
            Return nRetCode
```

> **💡 Dica:** Use o modo de visualização limpa para apresentações ou revisões de código, onde o foco deve estar na lógica e não na estrutura de diretivas.

## 🛠️ Desenvolvimento e Contribuição

### Requisitos do Sistema
- **Node.js** 16.0 ou superior
- **TypeScript** 4.9 ou superior  
- **VS Code** 1.74 ou superior
- **Git** (para clonagem e contribuições)

### Setup Completo do Projeto
```bash
# Clone o repositório
git clone https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater.git

# Entre na pasta
cd Extension_VSCode_Centura_Formater

# Instale dependências
npm install

# Compile TypeScript
npm run compile

# Execute testes (se disponível)
npm test

# Empacote a extensão
npm run package
```

### 🐛 Debugging da Extensão
1. **Abra o projeto** no VS Code
2. **Pressione `F5`** para abrir uma nova janela de desenvolvimento
3. **Abra um arquivo `.apl`** na janela de desenvolvimento
4. **Teste as funcionalidades** em tempo real
5. **Console de Debug:** Abra o Developer Tools para ver logs

### 📁 Estrutura Detalhada do Projeto

```
Extension_VSCode_Centura_Formater/
├── 📁 src/
│   ├── extension.ts              # 🧠 Lógica principal da extensão
│   ├── formatter.ts              # 📐 Algoritmos de formatação
│   └── headDirectiveManager.ts   # 👁️ Gerenciamento de visibilidade
├── 📁 syntaxes/
│   └── gupta-apl.tmLanguage.json # 🎨 Definições de syntax highlighting
├── 📁 out/                       # 📦 Arquivos compilados (gerado)
├── package.json                  # ⚙️ Configuração da extensão
├── tsconfig.json                 # 🔧 Configuração TypeScript
├── language-configuration.json   # 🌐 Configuração da linguagem
├── .gitignore                    # 🚫 Arquivos ignorados pelo Git
├── .vscodeignore                 # 🚫 Arquivos ignorados no empacotamento
└── README.md                     # 📖 Este arquivo
```

## 📋 Comandos e Atalhos

| 🔧 Comando | ⌨️ Atalho | 📝 Descrição | 🎯 Contexto |
|------------|-----------|--------------|-------------|
| `Gupta APL: Formatar Documento` | `Shift+Alt+F` | Formata todo o documento ativo | Qualquer arquivo .apl |
| `Gupta APL: Formatar Seleção` | - | Formata apenas o texto selecionado | Texto selecionado em .apl |
| `Gupta APL: Ocultar/Mostrar Diretivas .head` | `Ctrl+Shift+H` | Toggle da visibilidade das diretivas | Qualquer arquivo .apl |

### 🎮 Acesso via Interface
- **Command Palette:** `Ctrl+Shift+P` → Digite o nome do comando
- **Menu Contexto:** Clique direito no editor → Selecione o comando
- **Atalhos:** Use as combinações de teclas diretamente

## 🤝 Como Contribuir

### 🌟 Formas de Contribuição
1. **⭐ Star o projeto** no GitHub
2. **🐛 Reportar bugs** através das Issues
3. **💡 Sugerir melhorias** e novas funcionalidades
4. **🔧 Contribuir com código** via Pull Requests
5. **📖 Melhorar documentação**
6. **🧪 Testar a extensão** e dar feedback

### 🔄 Fluxo de Contribuição
```bash
# 1. Fork o repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/Extension_VSCode_Centura_Formater.git

# 3. Crie uma branch para sua feature
git checkout -b feature/minha-nova-funcionalidade

# 4. Faça suas alterações e teste
npm run compile
# Teste no VS Code com F5

# 5. Commit suas mudanças
git add .
git commit -m "feat: Adiciona nova funcionalidade X"

# 6. Push para seu fork
git push origin feature/minha-nova-funcionalidade

# 7. Abra um Pull Request no repositório original
```

### 🐛 Reportando Problemas

Encontrou um bug? [**Abra uma Issue**](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/issues/new) incluindo:

- **📝 Descrição detalhada** do problema
- **📁 Arquivo `.apl` de exemplo** (se possível)
- **💻 Versão do VS Code** (`Help → About`)
- **🖥️ Sistema operacional** e versão
- **🔄 Passos para reproduzir** o erro
- **📸 Screenshots** (se aplicável)

## 🗺️ Roadmap e Próximas Funcionalidades

### 🚀 Versão Atual (v1.0.0)
- ✅ Formatação automática de código
- ✅ Syntax highlighting completo
- ✅ Ocultação/exibição de diretivas .head
- ✅ Code folding inteligente
- ✅ Atalhos de teclado personalizados

### 🎯 Próximas Versões

#### v1.1.0 - Produtividade
- [ ] **IntelliSense** para funções do Gupta Team Developer
- [ ] **Snippets** para estruturas comuns (.head, functions, etc.)
- [ ] **Auto-complete** para variáveis e parâmetros
- [ ] **Breadcrumbs** para navegação hierárquica

#### v1.2.0 - Qualidade de Código
- [ ] **Validação de sintaxe** em tempo real
- [ ] **Linting** para boas práticas do Gupta
- [ ] **Refactoring automático** (renomear variáveis, etc.)
- [ ] **Go to Definition** para funções e variáveis

#### v1.3.0 - Navegação e Análise
- [ ] **Outline view** estruturado por .head
- [ ] **Find All References** para símbolos
- [ ] **Symbol search** global no workspace
- [ ] **Call hierarchy** para funções

#### v2.0.0 - Recursos Avançados
- [ ] **Debugger integration** (se possível)
- [ ] **Project templates** para novos projetos
- [ ] **Build task integration**
- [ ] **Export to documentation** (HTML/PDF)

### 💡 Ideias Futuras
- [ ] **Live preview** de interfaces
- [ ] **Database schema** integration
- [ ] **Code metrics** e análise de complexidade
- [ ] **Team collaboration** features

> **🗳️ Sua opinião importa!** Vote nas funcionalidades que mais interessam através das [Issues do GitHub](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/issues).

## ⚖️ Licença

```
MIT License

Copyright (c) 2025 Wendel Miguel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Agradecimentos

- **Comunidade Gupta Team Developer** pelo feedback e sugestões
- **Contribuidores** que ajudaram a melhorar esta extensão
- **VS Code Team** pela excelente plataforma de extensões

---

<div align="center">

### 💖 Desenvolvido com paixão para a comunidade Gupta Team Developer / Centura

**🔗 Links Úteis:**
[GitHub](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater) • 
[Issues](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/issues) • 
[Releases](https://github.com/wendel-miguel/Extension_VSCode_Centura_Formater/releases)

**⭐ Se esta extensão foi útil, considere dar uma estrela no GitHub!**

</div>
