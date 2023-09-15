'use client';
import { useEffect, type FC, useState } from 'react';
import { Textarea } from '../ui/textarea';
// import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import pgsql from 'highlight.js/lib/languages/pgsql';
hljs.registerLanguage('pgsql', pgsql);

export const Script: FC = () => {
  const [text, setText] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    document.querySelectorAll('textarea.code').forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
    hljs.highlightAll();
  }, [text]);

  useEffect(() => setLoad(true), []);

  if (!load) {
    return null;
  }

  return (
    <pre className="flex-1 flex">
      <code
        className="code language-pgsql leading-relaxed rounded-md flex-1 p-4 border"
        contentEditable
      >
        {`SELECT * FROM users\nWHERE users.id = 1
-- Example SQL command
`}
      </code>
    </pre>
  );
  // return <Textarea className="h-full flex-1 leading-relaxed resize-none" />;
};
