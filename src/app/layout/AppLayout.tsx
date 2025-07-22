import { AppHeader, MenuButtons, PageSideMenu, Sidebar, TechButtons } from '@/app/components';
import { PageType } from '@/shared/types/app';
import { useEffect, useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface AppLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: PageType) => void;
  onGlobeClick: () => void;
  currentPage: PageType;
  sidebarExpanded: boolean;
  onToggleSidebar: () => void;
  pageSideMenuTitle?: string;
  pageSideMenuContent?: React.ReactNode;
  pageSideMenuItems?: MenuItem[];
  pageSideMenuDefaultOpen?: boolean;
  pageSideMenuActiveItem?: string;
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
        <path d="M15 6l-6 6 6 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

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

export default function AppLayout({ children, onNavigate, onGlobeClick, currentPage, sidebarExpanded, onToggleSidebar, pageSideMenuTitle, pageSideMenuContent, pageSideMenuItems, pageSideMenuDefaultOpen, pageSideMenuActiveItem }: AppLayoutProps) {
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
                <PageSideMenu
                  key={currentPage} // Force remount when page changes
                  title={pageSideMenuTitle}
                  content={pageSideMenuContent}
                  menuItems={pageSideMenuItems}
                  defaultOpenOnLargeScreen={pageSideMenuDefaultOpen}
                  activeMenuItem={pageSideMenuActiveItem}
                  onMenuItemChange={(itemId) => {
                    if (currentPage === 'settings') {
                      window.dispatchEvent(new CustomEvent('settingsMenuChange', { detail: itemId }));
                    } else if (currentPage === 'the-map') {
                      window.dispatchEvent(new CustomEvent('mapMenuChange', { detail: itemId }));
                    }
                  }}
                />
                <div className="app-content-inner">
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
