'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="code-container">
      {filename && (
        <div className="code-header">
          <span className="code-filename">{filename}</span>
          {language && <span className="code-language">{language}</span>}
        </div>
      )}
      <div className="code-body">
        <pre>
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={`copy-btn ${copied ? 'copied' : ''}`}
          aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
          title={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? (
            <svg
              className="icon"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              className="icon"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          <span className="copy-text">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}
