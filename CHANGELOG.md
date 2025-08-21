# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-08-20

### ✨ Adicionado
- **Formatação automática** de arquivos `.apl` baseada em diretivas `.head`
- **Syntax highlighting** específico para linguagem Gupta Team Developer
- **Code folding** para recolher seções de código
- **Ocultar/Mostrar diretivas .head** para visualização limpa
- Comandos via menu de contexto e palette de comandos
- Atalhos de teclado:
  - `Shift+Alt+F` - Formatar documento
  - `Ctrl+Shift+H` - Ocultar/mostrar diretivas .head

### 🎨 Funcionalidades de Formatação
- Indentação automática baseada no nível das diretivas `.head`
- Preservação da hierarquia de código
- Formatação de documento completo ou seleção específica

### 🎯 Funcionalidades de Visualização
- Toggle para ocultar diretivas `.head` mantendo indentação
- Estado independente por arquivo
- Alternância instantânea entre modos de visualização

### 📁 Estrutura do Projeto
- Configuração completa de extensão VS Code
- Scripts de instalação automática
- Documentação detalhada em português
- Arquivo de exemplo para testes

### 🛠️ Arquivos Incluídos
- `src/extension.ts` - Código principal da extensão
- `syntaxes/gupta-apl.tmLanguage.json` - Definições de syntax highlighting
- `package.json` - Configuração da extensão
- `language-configuration.json` - Configuração da linguagem
- `README.md` - Documentação principal
- `GUIA-DE-USO.md` - Guia prático de uso
- `exemplo-teste.apl` - Arquivo de exemplo

## [Unreleased]

### 🚀 Planejado
- Suporte a mais tipos de arquivo Gupta
- Melhorias no syntax highlighting
- Integração com linting
- Suporte a snippets de código
- Melhorias na performance para arquivos grandes

---

**Legenda:**
- ✨ Adicionado - para novas funcionalidades
- 🔧 Alterado - para mudanças em funcionalidades existentes
- 🗑️ Removido - para funcionalidades removidas
- 🐛 Corrigido - para correções de bugs
- 🔒 Segurança - para vulnerabilidades
