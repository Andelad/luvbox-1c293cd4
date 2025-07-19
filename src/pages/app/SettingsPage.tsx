import React from 'react';
import PageHeader from '../../components/sections/PageHeader';

export default function SettingsPage() {
  return (
    <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['Settings']}
      />
      
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvbox-brand">
            Settings
          </h2>
          <p className="page-subtitle">
            Manage your account and preferences...
          </p>
        </div>
      </div>
    </div>
  );
}