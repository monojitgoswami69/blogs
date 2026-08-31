'use client';

import { useState } from 'react';
import { ClientGuide } from '../types/blog';
import { PlatformTabs } from './PlatformTabs';
import { Collapsible } from './Collapsible';
import { renderFormattedText } from '../lib/format';

interface ClientTabsProps {
  guides: ClientGuide[];
}

export function ClientTabs({ guides }: ClientTabsProps) {
  const [activeGuideId, setActiveGuideId] = useState(guides[0]?.id || '');

  const activeGuide = guides.find((g) => g.id === activeGuideId) || guides[0];

  if (!guides || guides.length === 0) return null;

  return (
    <div className="client-tabs-wrapper">
      <nav className="client-nav-tabs" role="tablist">
        {guides.map((guide) => {
          const isActive = guide.id === activeGuide.id;
          return (
            <button
              key={guide.id}
              role="tab"
              aria-selected={isActive}
              className={`client-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveGuideId(guide.id)}
            >
              {guide.title}
            </button>
          );
        })}
      </nav>

      <div className="client-guide-panel" role="tabpanel">
        {activeGuide.lead && (
          <p className="client-lead-text">{renderFormattedText(activeGuide.lead)}</p>
        )}

        {activeGuide.collapsiblePrerequisites && (
          <Collapsible
            title={activeGuide.collapsiblePrerequisites.title}
            content={activeGuide.collapsiblePrerequisites.content}
            code={activeGuide.collapsiblePrerequisites.code}
            list={activeGuide.collapsiblePrerequisites.list}
            orderedList={activeGuide.collapsiblePrerequisites.orderedList}
          />
        )}

        {activeGuide.platforms && activeGuide.platforms.length > 0 && (
          <PlatformTabs tabs={activeGuide.platforms} />
        )}
      </div>
    </div>
  );
}
