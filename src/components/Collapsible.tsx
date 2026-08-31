import React from 'react';
import { CodeBlock } from './CodeBlock';
import { renderFormattedText } from '../lib/format';

interface CollapsibleProps {
  title: string;
  content?: string;
  code?: string;
  list?: string[];
  orderedList?: string[];
  defaultOpen?: boolean;
}

export function Collapsible({
  title,
  content,
  code,
  list,
  orderedList,
  defaultOpen = false,
}: CollapsibleProps) {
  const contentParagraphs = content ? content.split(/\n\n|\n/).filter(Boolean) : [];

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
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="collapsible-content">
        {contentParagraphs.map((para, pIdx) => (
          <p key={pIdx} className="collapsible-text">
            {renderFormattedText(para)}
          </p>
        ))}
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
        {orderedList && orderedList.length > 0 && (
          <ol className="collapsible-ordered-list">
            {orderedList.map((item, i) => (
              <li key={i} className="collapsible-list-item">
                {renderFormattedText(item)}
              </li>
            ))}
          </ol>
        )}
      </div>
    </details>
  );
}
