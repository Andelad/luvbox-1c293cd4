import React from 'react';
import PageHeader from '../../components/sections/PageHeader';

export default function CommunityPage() {
  return (
    <div className="w-full">
      <PageHeader 
        breadcrumbs={['Community', 'Sub Page']}
      />
      
      <div className="content-area">
        <div className="text-center">
          <h2 className="text-heading text-[32px] mb-4 luvbox-brand">
            Community
          </h2>
          <p className="text-body opacity-60">
            Connect with others on their love journey...
          </p>
        </div>
      </div>
    </div>
  );
}