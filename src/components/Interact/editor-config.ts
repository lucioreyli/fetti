import type { EditorProps } from '@monaco-editor/react';

export const editorConfig: EditorProps['options'] = {
  minimap: { enabled: false },
  contextmenu: false,
  find: { autoFindInSelection: 'never' },
  occurrencesHighlight: false,
  tabSize: 4,
  showUnused: false,
  lineHeight: 2,
  fontFamily: 'JetBrainsMono Nerd Font',
  fontSize: 14,
  suggest: { preview: false },
  showDeprecated: false,
  'semanticHighlighting.enabled': false,
  parameterHints: { enabled: false },
  folding: false,
  suggestOnTriggerCharacters: false,
  quickSuggestions: false,
  automaticLayout: true,
  extraEditorClassName: 'min-w-0 min-h-0 flex-1',
};
