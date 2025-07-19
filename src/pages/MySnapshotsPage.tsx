import React from 'react';
import PageHeader from '../components/sections/PageHeader';

const MySnapshotsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['My Snapshots', 'Sub Page']}
        actionIcon={
          <svg fill="none" viewBox="0 0 24 24">
            <g>
              <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H16L21 8V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM15 9H19L15 5V9Z" fill="#1C1B1F" />
            </g>
          </svg>
        }
      />
      
      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvbox-brand">
            My Snapshots
          </h2>
          <p className="page-subtitle">
            Your relationship snapshots will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySnapshotsPage;