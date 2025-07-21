import React from 'react';
import PageHeader from '../../components/sections/PageHeader';

export default function TutorialPage() {
  return (
        <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['Tutorial']}
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