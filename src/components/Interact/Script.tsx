'use client';
import parseHtml from 'html-react-parser';
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
    hljs.highlight('-- Insert here your script', { language: 'pgsql' }).value,
  );
  const inputRef = useRef<null | HTMLDivElement>(null);

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
    if (e.key !== 'Tab' || !inputRef.current) return;
    const selection =
      inputRef.current.ownerDocument.defaultView?.getSelection();
    if (!selection || selection?.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const tabNode = document.createTextNode('\u00a0\u00a0\u00a0\u00a0');
    range.insertNode(tabNode);
    range.setStartAfter(tabNode);
    range.setEndAfter(tabNode);
    selection.removeAllRanges();
    selection.addRange(range);
    e.preventDefault();
  };

  return (
    <pre className="flex-1 flex w-full">
      <div
        ref={inputRef}
        id="text"
        className="leading-relaxed rounded-md flex-1 p-4 !bg-muted border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full whitespace-normal"
        //onInput={ab}
        onKeyDown={preventTab}
        contentEditable={'plaintext-only' as unknown as boolean}
        autoCorrect="off"
        autoFocus
        autoCapitalize="off"
        aria-autocomplete="none"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </pre>
  );
  // return <Textarea className="h-full flex-1 leading-relaxed resize-none" />;
};
