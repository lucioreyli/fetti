'use client';
import 'monaco-sql-languages/out/esm/mysql/mysql.contribution';
import 'monaco-sql-languages/out/esm/pgsql/pgsql.contribution';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useEffect, type FC, useState } from 'react';

export const Script: FC = () => {
  const monaco = useMonaco();
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    window.MonacoEnvironment = {
      getWorkerUrl: function (_moduleId: number, label: string) {
        switch (label) {
          case 'sparksql': {
            return './sparksql.worker.js';
          }
          case 'flinksql': {
            return './flinksql.worker.js';
          }
          case 'hivesql': {
            return './hivesql.worker.js';
          }
          case 'mysql': {
            return './mysql.worker.js';
          }
          case 'pgsql': {
            return './pgsql.worker.js';
          }
          case 'plsql': {
            return './plsql.worker.js';
          }
          case 'sql': {
            return './sql.worker.js';
          }
          default: {
            return './editor.worker.js';
          }
        }
      },
    };
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
    <pre className="border flex-1 flex w-full rounded overflow-hidden text-xl">
      <Editor
        height="100%"
        className="font-mono rounded"
        options={{
          minimap: { enabled: false },
          extraEditorClassName: 'rounded text-xl',
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
