'use client';
import Editor, { useMonaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useEffect, type FC, useState } from 'react';
import { editorConfig } from './editor-config';

export const Script: FC = () => {
  const monaco = useMonaco();
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if (!monaco) return;
    const loadTheme = () => {
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
    <div className="border bg-muted flex-1 flex rounded overflow-hidden text-xl min-w-0 min-h-0">
      <Editor
        height="100%"
        width="100%"
        wrapperProps={{
          className: 'bg-red-500 flex-1 w-auto',
        }}
        className="font-mono rounded flex-1 min-w-0 min-h-0 w-auto"
        options={editorConfig}
        language="pgsql"
        defaultValue="// some comment"
        theme={resolvedTheme === 'light' ? 'github-light' : 'github-dark'}
      />
    </div>
  );
};
