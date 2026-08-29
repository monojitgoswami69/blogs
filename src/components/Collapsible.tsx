import React from 'react';
import { CodeBlock } from './CodeBlock';

interface CollapsibleProps {
  title: string;
  content?: string;
  code?: string;
  list?: string[];
  defaultOpen?: boolean;
}

export function renderFormattedText(text: string): React.ReactNode {
  const pattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|https?:\/\/[^\s)"]+)/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLinkMatch) {
      return (
        <a
          key={index}
          href={mdLinkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mdLinkMatch[1]}
        </a>
      );
    }

    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

export function Collapsible({
  title,
  content,
  code,
  list,
  defaultOpen = false,
}: CollapsibleProps) {
  return (
    <details className="collapsible-box" open={defaultOpen}>
      <summary className="collapsible-summary">
        <span className="summary-title">{title}</span>
        <svg
          className="chevron-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="collapsible-content">
        {content && <p className="collapsible-text">{renderFormattedText(content)}</p>}
        {code && <CodeBlock code={code} />}
        {list && list.length > 0 && (
          <ul className="collapsible-list">
            {list.map((item, i) => (
              <li key={i} className="collapsible-list-item">
                {renderFormattedText(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}
