import * as vscode from 'vscode';

/**
 * Interface para representar uma linha do arquivo APL
 */
interface AplLine {
    original: string;
    headLevel?: number;
    isHeadDirective: boolean;
    foldingSymbol?: '+' | '-';
    content: string;
    indentLevel: number;
}

/**
 * Mapa para controlar o estado de visibilidade das diretivas .head por documento
 */
const headVisibilityState = new Map<string, boolean>();

/**
 * Classe para gerenciar a visibilidade das diretivas .head
 */
class HeadDirectiveManager {
    
    /**
     * Alterna a visibilidade das diretivas .head
     */
    public toggleHeadDirectives(document: vscode.TextDocument): vscode.TextEdit[] {
        const documentUri = document.uri.toString();
        const currentlyHidden = headVisibilityState.get(documentUri) || false;
        
        // Inverte o estado
        headVisibilityState.set(documentUri, !currentlyHidden);
        
        if (currentlyHidden) {
            // Se estavam ocultas, mostra as diretivas .head
            return this.showHeadDirectives(document);
        } else {
            // Se estavam visíveis, oculta as diretivas .head
            return this.hideHeadDirectives(document);
        }
    }

    /**
     * Oculta as diretivas .head, mantendo apenas o conteúdo com indentação
     */
    private hideHeadDirectives(document: vscode.TextDocument): vscode.TextEdit[] {
        const lines = document.getText().split('\n');
        const processedLines: string[] = [];

        for (const line of lines) {
            const trimmedLine = line.trim();
            const headMatch = trimmedLine.match(/^\.head\s+(\d+)\s+([+-])\s*(.*)?$/);

            if (headMatch) {
                const level = parseInt(headMatch[1], 10);
                const content = headMatch[3] || '';
                
                if (content.trim()) {
                    // Cria indentação baseada no nível (.head 1 = 0, .head 2 = 4 espaços, etc.)
                    const indentLevel = Math.max(0, level - 1);
                    const indentString = ' '.repeat(indentLevel * 4);
                    processedLines.push(indentString + content.trim());
                } else {
                    // Se não há conteúdo após .head, adiciona linha vazia
                    processedLines.push('');
                }
            } else {
                // Mantém linhas que não são diretivas .head
                processedLines.push(line);
            }
        }

        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
        );

        return [vscode.TextEdit.replace(fullRange, processedLines.join('\n'))];
    }

    /**
     * Mostra as diretivas .head restaurando o formato original
     */
    private showHeadDirectives(document: vscode.TextDocument): vscode.TextEdit[] {
        // Para restaurar, precisamos aplicar a formatação padrão
        const formatter = new GuptaAplFormatter();
        return formatter.formatDocument(document);
    }

    /**
     * Verifica se as diretivas .head estão ocultas para um documento
     */
    public areHeadDirectivesHidden(document: vscode.TextDocument): boolean {
        return headVisibilityState.get(document.uri.toString()) || false;
    }

    /**
     * Limpa o estado quando um documento é fechado
     */
    public clearDocumentState(document: vscode.TextDocument): void {
        headVisibilityState.delete(document.uri.toString());
    }
}

/**
 * Classe principal do formatador de arquivos Gupta APL
 */
class GuptaAplFormatter {
    private readonly tabSize: number = 4;
    private readonly useSpaces: boolean = true;

    /**
     * Formata o documento inteiro
     */
    public formatDocument(document: vscode.TextDocument): vscode.TextEdit[] {
        const lines = this.parseDocument(document);
        const formattedLines = this.formatLines(lines);
        
        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
        );
        
        const formattedText = formattedLines.map(line => line.content).join('\n');
        return [vscode.TextEdit.replace(fullRange, formattedText)];
    }

    /**
     * Formata uma seleção específica
     */
    public formatSelection(document: vscode.TextDocument, range: vscode.Range): vscode.TextEdit[] {
        const selectedText = document.getText(range);
        const lines = this.parseText(selectedText);
        const formattedLines = this.formatLines(lines);
        
        const formattedText = formattedLines.map(line => line.content).join('\n');
        return [vscode.TextEdit.replace(range, formattedText)];
    }

    /**
     * Analisa o documento e converte em estrutura de linhas
     */
    private parseDocument(document: vscode.TextDocument): AplLine[] {
        const text = document.getText();
        return this.parseText(text);
    }

    /**
     * Analisa o texto e converte em estrutura de linhas
     */
    private parseText(text: string): AplLine[] {
        const lines = text.split('\n');
        return lines.map(line => this.parseLine(line));
    }

    /**
     * Analisa uma linha individual
     */
    private parseLine(line: string): AplLine {
        const trimmedLine = line.trim();
        
        // Regex para capturar diretivas .head
        const headMatch = trimmedLine.match(/^\.head\s+(\d+)\s+([+-])\s*(.*)?$/);
        
        if (headMatch) {
            const level = parseInt(headMatch[1], 10);
            const foldingSymbol = headMatch[2] as '+' | '-';
            const content = headMatch[3] || '';
            
            return {
                original: line,
                headLevel: level,
                isHeadDirective: true,
                foldingSymbol: foldingSymbol,
                content: trimmedLine,
                indentLevel: Math.max(0, level - 1) // .head 1 = level 0, .head 2 = level 1, etc.
            };
        }
        
        // Para linhas que não são diretivas .head, mantém a linha original
        return {
            original: line,
            isHeadDirective: false,
            content: trimmedLine,
            indentLevel: 0
        };
    }

    /**
     * Aplica formatação às linhas
     */
    private formatLines(lines: AplLine[]): AplLine[] {
        return lines.map(line => {
            if (line.isHeadDirective && line.headLevel !== undefined) {
                // Para diretivas .head, aplica indentação baseada no nível
                const indentString = this.createIndentString(line.indentLevel);
                line.content = indentString + line.content;
            } else if (line.content.trim() !== '') {
                // Para outras linhas não vazias, mantém sem indentação adicional
                line.content = line.content;
            }
            
            return line;
        });
    }

    /**
     * Cria a string de indentação
     */
    private createIndentString(level: number): string {
        if (level <= 0) return '';
        
        const indentChar = this.useSpaces ? ' ' : '\t';
        const indentSize = this.useSpaces ? this.tabSize : 1;
        
        return indentChar.repeat(level * indentSize);
    }
}

/**
 * Provedor de dobramento de código (code folding)
 */
class GuptaAplFoldingProvider implements vscode.FoldingRangeProvider {
    provideFoldingRanges(
        document: vscode.TextDocument,
        context: vscode.FoldingContext,
        token: vscode.CancellationToken
    ): vscode.FoldingRange[] {
        const ranges: vscode.FoldingRange[] = [];
        const lines = document.getText().split('\n');
        const stack: Array<{ level: number; startLine: number }> = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            const headMatch = line.match(/^\.head\s+(\d+)\s+([+-])/);

            if (headMatch) {
                const level = parseInt(headMatch[1], 10);
                const symbol = headMatch[2];

                // Se é um símbolo '+', pode iniciar uma região dobrável
                if (symbol === '+') {
                    // Fecha regiões de nível igual ou maior
                    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
                        const region = stack.pop()!;
                        if (i - 1 > region.startLine) {
                            ranges.push(new vscode.FoldingRange(
                                region.startLine,
                                i - 1,
                                vscode.FoldingRangeKind.Region
                            ));
                        }
                    }

                    // Adiciona nova região
                    stack.push({ level, startLine: i });
                } else if (symbol === '-') {
                    // Fecha regiões de nível maior
                    while (stack.length > 0 && stack[stack.length - 1].level > level) {
                        const region = stack.pop()!;
                        if (i - 1 > region.startLine) {
                            ranges.push(new vscode.FoldingRange(
                                region.startLine,
                                i - 1,
                                vscode.FoldingRangeKind.Region
                            ));
                        }
                    }
                }
            }
        }

        // Fecha regiões restantes
        while (stack.length > 0) {
            const region = stack.pop()!;
            if (lines.length - 1 > region.startLine) {
                ranges.push(new vscode.FoldingRange(
                    region.startLine,
                    lines.length - 1,
                    vscode.FoldingRangeKind.Region
                ));
            }
        }

        return ranges;
    }
}

/**
 * Ativação da extensão
 */
export function activate(context: vscode.ExtensionContext) {
    const formatter = new GuptaAplFormatter();
    const headManager = new HeadDirectiveManager();
    
    // Registra o comando de formatação do documento
    const formatDocumentCommand = vscode.commands.registerCommand(
        'gupta-apl.formatDocument',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('Nenhum editor ativo encontrado.');
                return;
            }

            if (editor.document.languageId !== 'gupta-apl') {
                vscode.window.showErrorMessage('Este comando só funciona com arquivos .apl');
                return;
            }

            const edits = formatter.formatDocument(editor.document);
            
            editor.edit(editBuilder => {
                edits.forEach(edit => {
                    editBuilder.replace(edit.range, edit.newText);
                });
            }).then(() => {
                // Reseta o estado de visibilidade após formatação
                headManager.clearDocumentState(editor.document);
                vscode.window.showInformationMessage('Documento formatado com sucesso!');
            });
        }
    );

    // Registra o comando de formatação da seleção
    const formatSelectionCommand = vscode.commands.registerCommand(
        'gupta-apl.formatSelection',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('Nenhum editor ativo encontrado.');
                return;
            }

            if (editor.document.languageId !== 'gupta-apl') {
                vscode.window.showErrorMessage('Este comando só funciona com arquivos .apl');
                return;
            }

            const selection = editor.selection;
            if (selection.isEmpty) {
                vscode.window.showErrorMessage('Nenhuma seleção encontrada.');
                return;
            }

            const edits = formatter.formatSelection(editor.document, selection);
            
            editor.edit(editBuilder => {
                edits.forEach(edit => {
                    editBuilder.replace(edit.range, edit.newText);
                });
            }).then(() => {
                vscode.window.showInformationMessage('Seleção formatada com sucesso!');
            });
        }
    );

    // Registra o comando para ocultar/mostrar diretivas .head
    const toggleHeadDirectivesCommand = vscode.commands.registerCommand(
        'gupta-apl.toggleHeadDirectives',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('Nenhum editor ativo encontrado.');
                return;
            }

            if (editor.document.languageId !== 'gupta-apl') {
                vscode.window.showErrorMessage('Este comando só funciona com arquivos .apl');
                return;
            }

            const edits = headManager.toggleHeadDirectives(editor.document);
            const isHidden = headManager.areHeadDirectivesHidden(editor.document);
            
            editor.edit(editBuilder => {
                edits.forEach(edit => {
                    editBuilder.replace(edit.range, edit.newText);
                });
            }).then(() => {
                const message = isHidden 
                    ? 'Diretivas .head ocultadas!' 
                    : 'Diretivas .head exibidas!';
                vscode.window.showInformationMessage(message);
            });
        }
    );

    // Limpa o estado quando documentos são fechados
    const onDocumentClosed = vscode.workspace.onDidCloseTextDocument((document) => {
        if (document.languageId === 'gupta-apl') {
            headManager.clearDocumentState(document);
        }
    });

    // Registra o provedor de dobramento de código
    const foldingProvider = vscode.languages.registerFoldingRangeProvider(
        { language: 'gupta-apl', scheme: 'file' },
        new GuptaAplFoldingProvider()
    );

    // Registra o formatador como DocumentFormattingEditProvider
    const documentFormattingProvider = vscode.languages.registerDocumentFormattingEditProvider(
        { language: 'gupta-apl', scheme: 'file' },
        {
            provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
                return formatter.formatDocument(document);
            }
        }
    );

    // Registra o formatador para seleções
    const rangeFormattingProvider = vscode.languages.registerDocumentRangeFormattingEditProvider(
        { language: 'gupta-apl', scheme: 'file' },
        {
            provideDocumentRangeFormattingEdits(
                document: vscode.TextDocument,
                range: vscode.Range
            ): vscode.TextEdit[] {
                return formatter.formatSelection(document, range);
            }
        }
    );

    // Adiciona todos os comandos e provedores ao contexto
    context.subscriptions.push(
        formatDocumentCommand,
        formatSelectionCommand,
        toggleHeadDirectivesCommand,
        onDocumentClosed,
        foldingProvider,
        documentFormattingProvider,
        rangeFormattingProvider
    );

    console.log('Extensão Gupta APL ativada com sucesso!');
}

/**
 * Desativação da extensão
 */
export function deactivate() {
    console.log('Extensão Gupta APL desativada.');
}
