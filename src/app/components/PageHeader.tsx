import React from 'react';

interface PageHeaderProps {
  breadcrumbs: string[];
  title?: string;
  actionIcon?: React.ReactNode;
  onActionClick?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumbs, title, actionIcon, onActionClick }) => {
  return (
    <div className="w-full">
      <div className="page-header">
        <nav className="breadcrumb-nav">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="breadcrumb-separator">/</span>}
              <span className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'current' : ''}`}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </nav>
        {/* Removed the action button/icon to fix pink icon and overflow issues */}
      </div>
      
      {/* Optional Title */}
      {title && (
        <h1 className="text-heading text-app-display mb-4">
          {title}
        </h1>
      )}
    </div>
  );
};

export default PageHeader;