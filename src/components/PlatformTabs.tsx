'use client';

import { useState } from 'react';
import { PlatformContent } from '../types/blog';
import { CodeBlock } from './CodeBlock';
import { Collapsible } from './Collapsible';
import { renderFormattedText } from '../lib/format';

interface PlatformTabsProps {
  tabs: PlatformContent[];
}

export function PlatformTabs({ tabs }: PlatformTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || '');

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="platform-container">
      <div className="platform-tab-list" role="tablist">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={`platform-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="platform-content-panel" role="tabpanel">
        {activeTab.steps.map((step, idx) => (
          <div key={idx} className="step-block">
            {step.title && (
              <h4 className="step-title">{renderFormattedText(step.title)}</h4>
            )}
            {step.description && (
              <p className="step-description">{renderFormattedText(step.description)}</p>
            )}

            {step.command && <CodeBlock code={step.command} />}

            {step.code && (
              <CodeBlock
                code={step.code.content}
                filename={step.code.filename}
                language={step.code.language}
              />
            )}

            {step.note && (
              <p className="step-note">{renderFormattedText(step.note)}</p>
            )}

            {step.collapsible && (
              <Collapsible
                title={step.collapsible.title}
                content={step.collapsible.content}
                code={step.collapsible.code}
                list={step.collapsible.list}
                orderedList={step.collapsible.orderedList}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
