import React from 'react';
import PageSideMenu from './PageSideMenu';

interface PageWrapperWithSideMenuProps {
  children: React.ReactNode;
  sideMenuTitle?: string;
  sideMenuContent?: React.ReactNode;
  className?: string;
}

export default function PageWrapperWithSideMenu({ 
  children, 
  sideMenuTitle, 
  sideMenuContent,
  className = "page-wrapper"
}: PageWrapperWithSideMenuProps) {
  return (
    <div className={className}>
      <div style={{ position: 'relative', height: '100%' }}>
        <PageSideMenu title={sideMenuTitle} content={sideMenuContent} />
        <div 
          style={{
            marginLeft: '48px',
            height: '100%',
            transition: 'margin-left 0.3s ease',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
