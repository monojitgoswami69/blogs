import React from 'react';

interface NoticeProps {
  type?: 'info' | 'warning' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export function Notice({ type = 'info', title, children }: NoticeProps) {
  return (
    <div className={`notice-callout notice-${type}`} role="note">
      <div className="notice-header">
        <span className="notice-icon-wrapper" aria-hidden="true">
          {type === 'warning' && (
            <svg
              className="notice-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          )}
          {type === 'tip' && (
            <svg
              className="notice-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v4" />
              <path d="m4.93 4.93 2.83 2.83" />
              <path d="M2 12h4" />
              <path d="m4.93 19.07 2.83-2.83" />
              <path d="M12 18v4" />
              <path d="m16.24 16.24 2.83 2.83" />
              <path d="M18 12h4" />
              <path d="m16.24 7.76 2.83-2.83" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          )}
          {type === 'info' && (
            <svg
              className="notice-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          )}
        </span>
        {title && <div className="notice-title">{title}</div>}
      </div>
      <div className="notice-content">{children}</div>
    </div>
  );
}
