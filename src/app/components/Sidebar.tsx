import React, { useState, useEffect } from 'react';
import { SidebarIcons as svgPaths } from '@/assets/icons';
import { MenuButtons, TechButtons } from "./SidebarNavigation";

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

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  expanded: boolean;
  onToggleSidebar: () => void;
}

export default function Sidebar({ onNavigate, currentPage, expanded, onToggleSidebar }: SidebarProps) {
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
