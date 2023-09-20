'use client';
import { useCodeStore } from '@/store/code-store';
import { Button } from '../ui/button';
import { useEffect } from 'react';
import { useMonaco } from '@monaco-editor/react';

export const Actions = () => {
  const code = useCodeStore((state) => state.code);
  const monaco = useMonaco();

  useEffect(() => {
    const hi = (e: KeyboardEvent) => {
      console.log(e);
      if (!e.isTrusted || !e.metaKey) return;
      if (e.code === 'Enter') {
        if (!e.shiftKey) return console.log('metebala');
      }
      e.preventDefault();
    };
    document.onkeydown = hi;
    if (monaco) {
    }
  }, [code, monaco]);

  return (
    <div className="ml-auto flex gap-2">
      <Button variant="secondary">Run selection</Button>
      <Button>Run</Button>
    </div>
  );
};
