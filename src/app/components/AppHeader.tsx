import {
  AppHeaderLogo,
  LeftArrowIcon,
  RightArrowIcon,
  SideMenuIcon
} from '@/assets/icons';
import { CONTENT } from '@/content';
import { useEffect, useState } from 'react';
import { AccountCircle } from"./SidebarNavigation";

// Mobile menu button component
function MobileMenuButton({ onToggleSidebar, expanded }: { onToggleSidebar: () => void; expanded: boolean }) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only show on small screens
  if (isLargeScreen) {
    return null;
  }

  const getIcon = () => {
    if (expanded) {
      return <LeftArrowIcon />;
    }
    if (isHovered) {
      return <RightArrowIcon />;
    }
    return <SideMenuIcon />;
  };

  return (
    <button
      onClick={onToggleSidebar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="globe-button mobile-menu-button"
      title={CONTENT.common.menu}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {getIcon()}
    </button>
  );
}

function AppHeaderActions({ onGlobeClick, onNavigate, currentPage, onToggleSidebar, sidebarExpanded }: {
  onGlobeClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  onToggleSidebar: () => void;
  sidebarExpanded: boolean;
}) {
  return (
    <div className="app-header-actions">
      <MobileMenuButton onToggleSidebar={onToggleSidebar} expanded={sidebarExpanded} />
      <button
        onClick={() => onNavigate('settings')}
        className={`globe-button ${currentPage === 'settings' ? 'active' : ''}`}
        title="Settings"
      >
        <AccountCircle />
      </button>
    </div>
  );
}

interface AppHeaderProps {
  onGlobeClick: () => void;
  sidebarExpanded: boolean;
  onNavigate: (page: string) => void;
  currentPage: string;
  onToggleSidebar: () => void;
}

export default function AppHeader({ onGlobeClick, sidebarExpanded, onNavigate, currentPage, onToggleSidebar }: AppHeaderProps) {
  return (
    <div className="app-header">
      <div className="app-header-content">
        <div className={`app-header-inner ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
          <div className="app-header-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <MobileMenuButton onToggleSidebar={onToggleSidebar} expanded={sidebarExpanded} />
            <AppHeaderLogo onClick={onGlobeClick} />
          </div>
          <div className="app-header-right">
            {/* Profile button moved to sidebar */}
          </div>
        </div>
      </div>
      <div className="app-header-border" />
    </div>
  );
}
