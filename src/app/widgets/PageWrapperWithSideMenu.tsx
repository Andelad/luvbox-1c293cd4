import React, { useEffect, useState } from 'react';
import PageSideMenu from '../components/PageSideMenu';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface PageWrapperWithSideMenuProps {
  children: React.ReactNode;
  title?: string;
  sideMenuContent?: React.ReactNode;
  className?: string;
  menuItems?: MenuItem[];
  activeMenuItem?: string;
  onMenuItemChange?: (itemId: string) => void;
  defaultOpenOnLargeScreen?: boolean;
}

export default function PageWrapperWithSideMenu({
  children,
  title,
  sideMenuContent,
  className ="page-wrapper",
  menuItems,
  activeMenuItem,
  onMenuItemChange,
  defaultOpenOnLargeScreen = false
}: PageWrapperWithSideMenuProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={className}>
      <div style={{ position: 'relative', height: '100%' }}>
        <PageSideMenu
          title={title}
          content={sideMenuContent}
          menuItems={menuItems}
          activeMenuItem={activeMenuItem}
          onMenuItemChange={onMenuItemChange}
          defaultOpenOnLargeScreen={defaultOpenOnLargeScreen}
        />
        <div
          className="app-content-inner"
          style={{
            // Start with closed margin, let PageSideMenu control it
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
