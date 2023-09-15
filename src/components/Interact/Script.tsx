'use client';
import {
  type FC,
  useState,
  useRef,
  type FormEventHandler,
  type KeyboardEventHandler,
} from 'react';
// import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import pgsql from 'highlight.js/lib/languages/pgsql';

hljs.registerLanguage('pgsql', pgsql);

export const Script: FC = () => {
  const [text, setText] = useState(
    hljs.highlight('-- Insert here your script', {
      language: 'pgsql',
    }).value,
  );

  const timeoutId = useRef<NodeJS.Timeout | number | null>(null);

  const ab: FormEventHandler<HTMLDivElement> = (e) => {
    if (typeof timeoutId.current === 'number' && isFinite(timeoutId.current)) {
      clearTimeout(timeoutId.current);
    }
    const range = window.getSelection()?.getRangeAt(0);
    // console.log(range);
    const sqlContent: string = String(e.currentTarget.textContent || '');
    timeoutId.current = setTimeout(() => {
      const highlightedCode = hljs.highlight(sqlContent, {
        language: 'pgsql',
      });
      setText(highlightedCode.value);
    }, 2000);
  };

  const preventTab: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key !== 'Tab') {
      return;
    }
    e.preventDefault();

    //   document.execCommand('insertHTML', false, '&#009');
    function insertTab() {
      if (!window.getSelection) return;
      const sel = window.getSelection();
      if (!sel?.rangeCount) return;
      const range = sel.getRangeAt(0);
      range.collapse(true);
      const span = document.createElement('span');
      span.appendChild(document.createTextNode('\t'));
      span.style.whiteSpace = 'pre';
      range.insertNode(span);
      // Move the caret immediately after the inserted span
      range.setStartAfter(span);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    const start = e.selectionStart;
    const end = e.selectionEnd;
    setText(text.slice(0, start) + '\t' + text.slice(end));
    e.target.setSelectionRange(start + indentSize, start + indentSize);
  };

  return (
    <pre className="flex-1 flex w-full">
      <div
        id="text"
        className="code language-pgsql leading-relaxed rounded-md flex-1 p-4 !bg-muted border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full whitespace-normal"
        onInput={ab}
        onKeyDown={preventTab}
        contentEditable={'plaintext-only' as unknown as boolean}
        autoCorrect="off"
        autoFocus
        autoCapitalize="off"
        aria-autocomplete="none"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </pre>
  );
  // return <Textarea className="h-full flex-1 leading-relaxed resize-none" />;
};
