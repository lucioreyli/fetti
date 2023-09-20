'use client';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useEffect, type FC, useState } from 'react';

export const Script: FC = () => {
  const monaco = useMonaco();
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if (!monaco) return;
    const loadTheme = async () => {
      const darkTheme = require('./github-dark.json');
      const lightTheme = require('./github-light.json');
      monaco.editor.defineTheme('github-light', lightTheme);
      monaco.editor.defineTheme('github-dark', darkTheme);
      setThemeLoaded(true);
    };
    loadTheme();
  }, [resolvedTheme, monaco]);

  if (!themeLoaded) {
    return <></>;
  }

  return (
    <pre className="border bg-muted flex-1 flex w-full rounded overflow-hidden text-xl">
      <Editor
        height="100%"
        className="font-mono rounded"
        options={{
          minimap: { enabled: false },
          extraEditorClassName: 'bg-blue-500',
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
        }}
        language="pgsql"
        defaultValue="// some comment"
        theme={resolvedTheme === 'light' ? 'github-light' : 'github-dark'}
      />
    </pre>
  );
};
