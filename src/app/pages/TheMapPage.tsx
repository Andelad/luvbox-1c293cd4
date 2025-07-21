import React from 'react';
import { PageHeader } from '@/app/components';

const TheMapPage: React.FC = () => {
  return (
        <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['The Map']}
      />
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvmap-brand">
            The Map
          </h2>
          <p className="page-subtitle">
            Navigate your relationship journey here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheMapPage;