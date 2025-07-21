import { useState, useEffect } from 'react';
import { SvgIcon4 as headerSvgPaths } from '@/icons';
import { AccountCircle } from "./SidebarNavigation";

function Layer1() {
  return (
    <div
      className="h-[24.032px] relative shrink-0 w-[25.23px]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 25"
      >
        <g clipPath="url(#clip0_1_589)" id="Layer_1">
          <path
            d={headerSvgPaths.p2a0c4e00}
            id="Vector"
            stroke="var(--text-color)"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d={headerSvgPaths.p9531b80}
            id="Vector_2"
            stroke="var(--text-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
          />
          <path
            d="M12.615 9.712L24.23 4.066"
            id="Vector_3"
            stroke="var(--text-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_589">
            <rect fill="white" height="24.032" width="25.23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="app-header-logo-frame logo-pulse">
      <Layer1 />
    </div>
  );
}

function AppHeaderLogo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="app-header-logo">
      <LogoFrame />
      <div className="app-header-logo-text">
        <p>LuvMap 1.0</p>
      </div>
    </button>
  );
}

function Globe() {
  return (
    <div className="globe-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Globe">
          <mask
            height="24"
            id="mask0_1_585"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_585)">
            <path
              d={headerSvgPaths.p580740}
              fill="var(--text-color)"
              id="language"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GlobeButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="globe-button">
      <Globe />
    </button>
  );
}

function SideMenuIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="side_menu">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {/* Outer box */}
        <rect x="3" y="5" width="18" height="14" stroke="var(--text-color)" strokeWidth="1.5" fill="none"/>
        {/* Left sidebar panel line */}
        <line x1="8" y1="5" x2="8" y2="19" stroke="var(--text-color)" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

function RightArrowIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="right_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d="M9 6l6 6-6 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function LeftArrowIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="left_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d="M15 6l-6 6 6 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

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
      title="Menu"
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
