import React from 'react';

/**
 * Robust markdown / inline token parser.
 * Handles markdown links, bold text, inline code, italics, and raw URLs.
 */
export function renderFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  // Token pattern matching:
  // 1. Markdown link: [text](url)
  // 2. Bold: **text**
  // 3. Italics: *text*
  // 4. Inline code: `code`
  // 5. Raw URLs: https?://[^\s)"]+
  const tokenPattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/[^\s)"]+)/g;
  const parts = text.split(tokenPattern);

  return parts.map((part, index) => {
    if (!part) return null;

    // 1. Markdown link: [label](url)
    const mdLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLinkMatch) {
      const label = mdLinkMatch[1];
      const url = mdLinkMatch[2];
      const isExternal = url.startsWith('http://') || url.startsWith('https://');

      return (
        <a
          key={index}
          href={url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="inline-link"
        >
          {label}
        </a>
      );
    }

    // 2. Bold text: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      const inner = part.slice(2, -2);
      return <strong key={index} className="font-semibold text-[#111111]">{inner}</strong>;
    }

    // 2b. Italic text: *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      const inner = part.slice(1, -1);
      return <em key={index} className="italic text-[#333333]">{inner}</em>;
    }

    // 3. Inline code: `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      const inner = part.slice(1, -1);
      return <code key={index} className="inline-code">{inner}</code>;
    }

    // 4. Raw URL: https://...
    if (part.startsWith('http://') || part.startsWith('https://')) {
      // Clean trailing punctuation if any
      let cleanUrl = part;
      let trailingPunct = '';
      const matchPunct = part.match(/([.,;:!?]+)$/);
      if (matchPunct) {
        trailingPunct = matchPunct[1];
        cleanUrl = part.slice(0, -trailingPunct.length);
      }

      return (
        <React.Fragment key={index}>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {cleanUrl}
          </a>
          {trailingPunct}
        </React.Fragment>
      );
    }

    return part;
  });
}
