import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';
import React from 'react';

const TheMapPage: React.FC = () => {
  const content = CONTENT.pages.theMap;

  return (
    <div className="page-wrapper">
      <PageHeader
        breadcrumbs={[content.title]}
      />
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvmap-brand">
            {content.title}
          </h2>
          <p className="page-subtitle">
            {content.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheMapPage;
