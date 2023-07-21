import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Command to transform HTML tags to emojis
  let transformToEmojiDisposable = vscode.commands.registerCommand(
    "extension.transformToEmoji",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const document = editor.document;
      const selection = editor.selection;
      const text = document.getText(selection);

      const transformedText = text
        .replace(/<h1>/gi, "🍌 ")
        .replace(/<\/h1>/gi, " 🍌")
        .replace(/<h2>/gi, "🍎 ")
        .replace(/<\/h2>/gi, " 🍎")
        .replace(/<h3>/gi, "🍐 ")
        .replace(/<\/h3>/gi, " 🍐")
        .replace(/<h4>/gi, "🍇 ")
        .replace(/<\/h4>/gi, " 🍇")
        .replace(/<p>/gi, "🍈 ")
        .replace(/<\/p>/gi, " 🍈")
        .replace(/<div>/gi, "🍏 ")
        .replace(/<\/div>/gi, " 🍏")
        .replace(/<a.*?>(.*?)<\/a>/gi, "🔗 $1");

      editor.edit((editBuilder) => {
        editBuilder.replace(selection, transformedText);
      });
    }
  );

  context.subscriptions.push(transformToEmojiDisposable);
}

export function deactivate() {}
