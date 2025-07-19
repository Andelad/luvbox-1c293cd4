import React from 'react';
import PageHeader from '../PageHeader';

export default function TutorialPage() {
  return (
    <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['Tutorial', 'Sub Page']}
        actionIcon={
          <svg fill="none" viewBox="0 0 24 24">
            <g>
              <path d="M21 17V10.1L12 15L1 9L12 3L23 9V17H21ZM12 21L5 17.2V12.2L12 16L19 12.2V17.2L12 21Z" fill="#1C1B1F" />
            </g>
          </svg>
        }
      />
      
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvbox-brand">
            Tutorial
          </h2>
          <p className="page-subtitle">
            Learn how to use LuvBox effectively...
          </p>
        </div>
      </div>
    </div>
  );
}