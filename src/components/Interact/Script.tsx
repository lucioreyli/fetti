'use client';
import Editor, { type Monaco } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { editorConfig } from './editor-config';
import { useCodeStore } from '@/store/code-store';

export const Script: FC = () => {
  const setCode = useCodeStore((state) => state.setCode);
  const { resolvedTheme } = useTheme();

  const loadTheme = (monaco: Monaco) => {
    const darkTheme = require('./github-dark.json');
    const lightTheme = require('./github-light.json');
    monaco.editor.defineTheme('github-light', lightTheme);
    monaco.editor.defineTheme('github-dark', darkTheme);
  };

  const currentTheme =
    resolvedTheme === 'light' ? 'github-light' : 'github-dark';
  const onChange = (code: string | undefined) => setCode(code ?? '');

  // TODO: fix code editor width resizing
  return (
    <div className="border bg-muted flex-1 flex rounded overflow-hidden text-xl min-w-0 min-h-0">
      <Editor
        className="font-mono rounded flex-1 min-w-0 min-h-0 w-auto"
        options={editorConfig}
        language="sql"
        defaultValue="// some comment"
        theme={currentTheme}
        beforeMount={loadTheme}
        onChange={onChange}
      />
    </div>
  );
};
