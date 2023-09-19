'use client';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useEffect, type FC, useState } from 'react';

export const Script: FC = () => {
  const monaco = useMonaco();
  const { resolvedTheme } = useTheme();
  const [a, setA] = useState(false);

  useEffect(() => {
    if (!monaco) return;
    const loadTheme = async () => {
      const darkTheme = require('./github-dark.json');
      const lightTheme = require('./github-light.json');
      console.log(darkTheme);
      console.log(lightTheme);
      try {
        monaco.editor.defineTheme('github-light', lightTheme);
        monaco.editor.defineTheme('github-dark', darkTheme);
      } catch (e) {
        console.log(e);
      } finally {
        setA(true);
      }
    };
    loadTheme();
  }, [resolvedTheme, monaco]);

  if (!a) {
    return <></>;
  }

  return (
    <pre className="flex-1 flex w-full rounded overflow-hidden text-xl">
      <Editor
        height="100%"
        className="bg-red-500 font-mono rounded"
        options={{
          minimap: { enabled: false },
          extraEditorClassName: 'bg-red-500 rounded text-xl',
          contextmenu: false,
          scrollPredominantAxis: false,
          find: { autoFindInSelection: 'never' },
          occurrencesHighlight: false,
          tabSize: 4,
        }}
        defaultLanguage="sql"
        defaultValue="// some comment"
        theme={resolvedTheme === 'light' ? 'github-light' : 'github-dark'}
      />
    </pre>
  );
};
