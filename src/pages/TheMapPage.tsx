import React from 'react';
import PageHeader from '../PageHeader';

const TheMapPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['The Map', 'Sub Page']}
        actionIcon={
          <svg fill="none" viewBox="0 0 24 24">
            <g>
              <path d="M15 9L9 12L15 15V9ZM12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#1C1B1F" />
            </g>
          </svg>
        }
      />
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvbox-brand">
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