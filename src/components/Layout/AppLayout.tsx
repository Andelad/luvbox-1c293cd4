import React, { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-0o2cpb82qi";
import headerSvgPaths from "../../imports/svg-4ufkzakjbw";
import PageSideMenu from "../sections/PageSideMenu";

interface AppLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  onGlobeClick: () => void;
  currentPage: string;
  sidebarExpanded: boolean;
  onToggleSidebar: () => void;
  pageSideMenuTitle?: string;
  pageSideMenuContent?: React.ReactNode;
}

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
    <div className="app-header-logo-frame">
      <Layer1 />
    </div>
  );
}

function AppHeaderLogo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="app-header-logo">
      <LogoFrame />
      <div className="app-header-logo-text">
        <p>LuvBox 1.0</p>
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

function AppHeader({ onGlobeClick, sidebarExpanded, onNavigate, currentPage, onToggleSidebar }: { 
  onGlobeClick: () => void; 
  sidebarExpanded: boolean; 
  onNavigate: (page: string) => void; 
  currentPage: string;
  onToggleSidebar: () => void;
}) {
  return (
    <div className="app-header">
      <div className="app-header-content">
        <div className={`app-header-inner ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
          <div className="app-header-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <MobileMenuButton onToggleSidebar={onToggleSidebar} expanded={sidebarExpanded} />
            <AppHeaderLogo onClick={onGlobeClick} />
          </div>
          <div className="app-header-right">
            <button 
              onClick={() => onNavigate('settings')} 
              className={`globe-button ${currentPage === 'settings' ? 'active' : ''}`}
              title="Settings"
            >
              <AccountCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="app-header-border" />
    </div>
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

function LeftPanelOpen() {
  return (
    <div className="relative shrink-0 size-6" data-name="left_panel_open">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="left_panel_open">
          <mask
            height="24"
            id="mask0_1_563"
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
          <g mask="url(#mask0_1_563)">
            <path
              d={svgPaths.p20efd700}
              fill="var(--text-color)"
              id="left_panel_open_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftPanelClose() {
  return (
    <div className="icon-24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="left_panel_close">
          <mask
            height="24"
            id="mask0_1_564"
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
          <g mask="url(#mask0_1_564)">
            <path
              d={svgPaths.p20efd700}
              fill="var(--text-color)"
              id="left_panel_close_2"
              transform="scale(-1, 1) translate(-24, 0)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarLogo({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide on small screens
  if (!isLargeScreen) {
    return null;
  }

  return (
    <button 
      className={`sidebar-logo transition-all duration-500 ease-out ${isHovered ? 'bg-purple-500/20' : ''}`}
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {expanded ? (
        <LeftArrowIcon />
      ) : (
        <div className="relative size-6">
          <div 
            className={`absolute inset-0 transition-all duration-200 ease-out ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            <SideMenuIcon />
          </div>
          <div 
            className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <RightArrowIcon />
          </div>
        </div>
      )}
    </button>
  );
}

function DeployedCode() {
  return (
    <div className="relative shrink-0 size-6" data-name="deployed_code">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="deployed_code">
          <mask
            height="24"
            id="mask0_1_581"
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
          <g mask="url(#mask0_1_581)">
            <path
              d={svgPaths.p31951680}
              fill="var(--text-color)"
              id="deployed_code_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CubeButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-lg ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Cube Button"
      style={isActive ? { backgroundColor: 'rgba(181,182,233,0.4)' } : {}}
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <DeployedCode />
          {expanded && (
            <div className="sidebar-button-text">
              <p>The Box</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-6" data-name="map">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="map">
          <mask
            height="24"
            id="mask0_1_573"
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
          <g mask="url(#mask0_1_573)">
            <path
              d={svgPaths.p2bd3e9f0}
              fill="var(--text-color)"
              id="map_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MapButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Map Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <Map />
          {expanded && (
            <div className="sidebar-button-text">
              <p>The Map</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Bookmarks() {
  return (
    <div className="relative shrink-0 size-6" data-name="bookmarks">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="bookmarks">
          <mask
            height="24"
            id="mask0_1_559"
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
          <g mask="url(#mask0_1_559)">
            <path
              d={svgPaths.p265d1e80}
              fill="var(--text-color)"
              id="bookmarks_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SnapshotsButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Snapshots Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <Bookmarks />
          {expanded && (
            <div className="sidebar-button-text">
              <p>My Snapshots</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Diversity4() {
  return (
    <div className="relative shrink-0 size-6" data-name="diversity_4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="diversity_4">
          <mask
            height="24"
            id="mask0_1_553"
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
          <g mask="url(#mask0_1_553)">
            <path
              d={svgPaths.p1852c200}
              fill="var(--text-color)"
              id="diversity_4_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CommunityButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Community Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <Diversity4 />
          {expanded && (
            <div className="sidebar-button-text">
              <p>Community</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarSeparator() {
  return (
    <div className="sidebar-separator">
      <div className="sidebar-separator-line">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 1"
        >
          <line
            stroke="var(--text-color)"
            strokeOpacity="0.4"
            x2="48"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

function MenuButtons({ onNavigate, currentPage, expanded, onToggleSidebar }: { 
  onNavigate: (page: string) => void; 
  currentPage: string;
  expanded: boolean;
  onToggleSidebar?: () => void;
}) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    // Close mobile sidebar if it's open
    if (onToggleSidebar && window.innerWidth < 1024) {
      onToggleSidebar();
    }
  };

  return (
    <div className="sidebar-menu-section">
      <CubeButton isActive={currentPage === 'the-box'} onClick={() => handleNavigate('the-box')} expanded={expanded} />
      <SidebarSeparator />
      <MapButton isActive={currentPage === 'the-map'} onClick={() => handleNavigate('the-map')} expanded={expanded} />
      <SidebarSeparator />
      <SnapshotsButton isActive={currentPage === 'my-snapshots'} onClick={() => handleNavigate('my-snapshots')} expanded={expanded} />
      <SidebarSeparator />
      <CommunityButton isActive={currentPage === 'community'} onClick={() => handleNavigate('community')} expanded={expanded} />
    </div>
  );
}

function Tutorial() {
  return (
    <div className="relative shrink-0 size-6" data-name="tutorial">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tutorial">
          <mask
            height="24"
            id="mask0_1_549"
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
          <g mask="url(#mask0_1_549)">
            <path
              d={svgPaths.pc57a980}
              fill="var(--text-color)"
              id="school"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TutorialButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Tutorial Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <Tutorial />
          {expanded && (
            <div className="sidebar-button-text">
              <p>Tutorial</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="account_circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="account_circle">
          <mask
            height="24"
            id="mask0_1_545"
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
          <g mask="url(#mask0_1_545)">
            <path
              d={svgPaths.p35bc2300}
              fill="var(--text-color)"
              id="account_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SettingsButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Settings Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <AccountCircle />
          {expanded && (
            <div className="sidebar-button-text">
              <p>Settings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat_bubble">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chat_bubble">
          <mask
            height="24"
            id="mask0_1_541"
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
          <g mask="url(#mask0_1_541)">
            <path
              d={svgPaths.p1bbda200}
              fill="var(--text-color)"
              id="chat_bubble_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FeedbackButton({ isActive, onClick, expanded }: { isActive: boolean; onClick: () => void; expanded: boolean }) {
  return (
    <div
      className={`sidebar-button rounded-xl ${isActive ? 'active' : ''}`}
      onClick={onClick}
      data-name="Feedback Button"
    >
      <div className="sidebar-button-content">
        <div className="sidebar-button-inner">
          <ChatBubble />
          {expanded && (
            <div className="sidebar-button-text">
              <p>Feedback</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TechButtons({ onNavigate, currentPage, expanded, onToggleSidebar }: { 
  onNavigate: (page: string) => void; 
  currentPage: string;
  expanded: boolean;
  onToggleSidebar?: () => void;
}) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    // Close mobile sidebar if it's open
    if (onToggleSidebar && window.innerWidth < 1024) {
      onToggleSidebar();
    }
  };

  return (
    <div className="sidebar-menu-section">
      <TutorialButton isActive={currentPage === 'tutorial'} onClick={() => handleNavigate('tutorial')} expanded={expanded} />
      <SidebarSeparator />
      <FeedbackButton isActive={currentPage === 'feedback'} onClick={() => handleNavigate('feedback')} expanded={expanded} />
    </div>
  );
}

function Sidebar({ onNavigate, currentPage, expanded, onToggleSidebar }: { 
  onNavigate: (page: string) => void; 
  currentPage: string;
  expanded: boolean;
  onToggleSidebar: () => void;
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide sidebar on small screens
  if (!isLargeScreen) {
    return null;
  }

  return (
    <div className={`app-sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="app-sidebar-content">
        <div className="app-sidebar-inner">
          <SidebarLogo expanded={expanded} onToggle={onToggleSidebar} />
          <MenuButtons onNavigate={onNavigate} currentPage={currentPage} expanded={expanded} onToggleSidebar={onToggleSidebar} />
          <TechButtons onNavigate={onNavigate} currentPage={currentPage} expanded={expanded} onToggleSidebar={onToggleSidebar} />
        </div>
      </div>
      <div className="app-sidebar-border" />
    </div>
  );
}

// Mobile overlay sidebar
function MobileSidebar({ onNavigate, currentPage, expanded, onToggleSidebar }: { 
  onNavigate: (page: string) => void; 
  currentPage: string;
  expanded: boolean;
  onToggleSidebar: () => void;
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

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

  // Always render when on small screens, but control visibility with transform and opacity
  return (
    <>
      {/* Backdrop - only visible when expanded */}
      {expanded && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            opacity: 1,
            animation: 'backdropFadeIn 0.3s ease',
          }}
          onClick={onToggleSidebar}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '280px',
          backgroundColor: 'white',
          border: '1px solid rgba(61,53,53,0.4)',
          zIndex: 1000,
          transform: expanded ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          boxShadow: '4px 0 16px rgba(0,0,0,0.15)',
        }}
        className="app-sidebar mobile-sidebar"
      >
        <div className="app-sidebar-content">
          <div className="app-sidebar-inner">
            <div className="sidebar-logo" style={{ padding: '16px' }}>
              <button 
                onClick={onToggleSidebar}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                }}
                className="hover:bg-gray-100 transition-colors"
              >
                <LeftArrowIcon />
              </button>
            </div>
            <MenuButtons onNavigate={onNavigate} currentPage={currentPage} expanded={true} onToggleSidebar={onToggleSidebar} />
            <TechButtons onNavigate={onNavigate} currentPage={currentPage} expanded={true} onToggleSidebar={onToggleSidebar} />
          </div>
        </div>
      </div>
    </>
  );
}

function AppFooter({ sidebarExpanded }: { sidebarExpanded: boolean }) {
  return (
    <div className="app-footer">
      <div className={`app-footer-content with-sidebar ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
        <div className="app-footer-item wide">
          <p>© All Rights Reserved</p>
        </div>
        <div className="app-footer-item">
          <p>Design by Eido</p>
        </div>
        <div className="app-footer-item">
          <p>Buy me Coffee</p>
        </div>
      </div>
      <div className="app-footer-border" />
    </div>
  );
}

export default function AppLayout({ children, onNavigate, onGlobeClick, currentPage, sidebarExpanded, onToggleSidebar, pageSideMenuTitle, pageSideMenuContent }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <div className="app-layout-header">
        <AppHeader 
          onGlobeClick={onGlobeClick} 
          sidebarExpanded={sidebarExpanded} 
          onNavigate={onNavigate} 
          currentPage={currentPage}
          onToggleSidebar={onToggleSidebar}
        />
      </div>
      <div className="app-layout-content">
        <Sidebar 
          onNavigate={onNavigate} 
          currentPage={currentPage} 
          expanded={sidebarExpanded}
          onToggleSidebar={onToggleSidebar}
        />
        <MobileSidebar 
          onNavigate={onNavigate} 
          currentPage={currentPage} 
          expanded={sidebarExpanded}
          onToggleSidebar={onToggleSidebar}
        />
        <main className={`app-layout-main ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
          <div className="app-content-wrapper">
            <div className="app-content-container">
              <div className="app-content-card" style={{ position: 'relative' }}>
                <PageSideMenu title={pageSideMenuTitle} content={pageSideMenuContent} />
                <div 
                  className="app-content-inner" 
                >
                  <div className="app-content-padding">
                    {children}
                  </div>
                </div>
                <div className="app-content-border" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <AppFooter sidebarExpanded={sidebarExpanded} />
    </div>
  );
}