import React, { useEffect, useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface PageSideMenuProps {
  title?: string;
  content?: React.ReactNode;
  menuItems?: MenuItem[];
  activeMenuItem?: string;
  onMenuItemChange?: (itemId: string) => void;
  defaultOpenOnLargeScreen?: boolean; // New prop to control default behavior
}

const HamburgerIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 10h14M3 5h14M3 15h14" stroke="var(--text-color)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5L5 15M5 5l10 10" stroke="var(--text-color)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function PageSideMenu({
  title = "In this section",
  content,
  menuItems,
  activeMenuItem,
  onMenuItemChange,
  defaultOpenOnLargeScreen = false // Default to false, only settings page will set to true
}: PageSideMenuProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  // Use the prop to determine default open state
  const [isOpen, setIsOpen] = useState(defaultOpenOnLargeScreen && window.innerWidth >= 1024);
  const [showContent, setShowContent] = useState(defaultOpenOnLargeScreen && window.innerWidth >= 1024);
  const [isPageChange, setIsPageChange] = useState(false);

  // Initialize content margin on mount
  useEffect(() => {
    const contentElement = document.querySelector('.app-content-inner') as HTMLElement;
    if (contentElement) {
      const isLarge = window.innerWidth >= 1024;
      const shouldBeOpen = defaultOpenOnLargeScreen && isLarge;

      if (isLarge) {
        const marginLeft = shouldBeOpen ? '240px' : '48px';
        contentElement.style.marginLeft = marginLeft;
        contentElement.style.width = `calc(100% - ${marginLeft})`;
      } else {
        contentElement.style.marginLeft = '48px';
        contentElement.style.width = 'calc(100% - 48px)';
      }
    }
  }, []);

  // Reset side menu state when defaultOpenOnLargeScreen changes (page changes)
  useEffect(() => {
    setIsPageChange(true);
    const shouldBeOpen = defaultOpenOnLargeScreen && window.innerWidth >= 1024;
    setIsOpen(shouldBeOpen);
    setShowContent(shouldBeOpen);

    // Immediately update margin without transition during page change
    const contentElement = document.querySelector('.app-content-inner') as HTMLElement;
    if (contentElement) {
      // Add no-transition class to disable CSS transitions
      contentElement.classList.add('no-transition');

      if (window.innerWidth >= 1024) {
        const marginLeft = shouldBeOpen ? '240px' : '48px';
        contentElement.style.marginLeft = marginLeft;
        contentElement.style.width = `calc(100% - ${marginLeft})`;
      } else {
        // On mobile, we always need 48px margin for the closed menu button
        contentElement.style.marginLeft = '48px';
        contentElement.style.width = 'calc(100% - 48px)';
      }

      // Remove no-transition class and mark page change as complete
      setTimeout(() => {
        contentElement.classList.remove('no-transition');
        setIsPageChange(false);
      }, 100);
    }
  }, [defaultOpenOnLargeScreen]);

  // Add CSS animation for fade-in
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Use external state if provided, otherwise use internal state
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024;
      setIsLargeScreen(newIsLargeScreen);

      // Only auto-open/close if defaultOpenOnLargeScreen is true
      if (defaultOpenOnLargeScreen) {
        if (newIsLargeScreen && !isOpen) {
          setIsOpen(true);
        } else if (!newIsLargeScreen && isOpen) {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, defaultOpenOnLargeScreen]);

  useEffect(() => {
    const contentElement = document.querySelector('.app-content-inner') as HTMLElement;
    if (contentElement) {
      // Only set margin during manual toggles (when not in page change)
      if (!isPageChange) {
        if (isLargeScreen) {
          const marginLeft = isOpen ? '240px' : '48px';
          contentElement.style.marginLeft = marginLeft;
          contentElement.style.width = `calc(100% - ${marginLeft})`;
        } else {
          // On mobile/tablet, we need 48px margin for the sidebar toggle button
          contentElement.style.marginLeft = '48px';
          contentElement.style.width = 'calc(100% - 48px)';
        }
      }
    }
  }, [isOpen, isLargeScreen, isPageChange]);

  // Handle content visibility timing
  useEffect(() => {
    if (isOpen) {
      // Wait for width transition to complete (300ms) before showing content
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      // Hide content immediately when closing
      setShowContent(false);
    }
  }, [isOpen]);

  // Show on all screen sizes, but behave differently
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: isOpen ? '240px' : '48px',
        backgroundColor: 'white',
        border: '1px solid rgba(61,53,53,0.4)',
        borderTopLeftRadius: '24px',
        borderBottomLeftRadius: '24px',
        paddingTop: '16px',
        transition: isPageChange ? 'none' : 'width 0.3s ease',
        zIndex: isLargeScreen ? 10 : 20,
        boxShadow: isOpen && !isLargeScreen ? '2px 0 8px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      {/* Toggle button - always at the same position */}
      <button
        onClick={handleToggle}
        style={{
          position: 'absolute',
          top: '16px',
          right: '12px',
          width: '24px',
          height: '24px',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          zIndex: 100,
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(181, 182, 233, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {/* Header section with title at the same height as close icon */}
      {showContent && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          paddingRight: '52px', // Make room for the close button
          marginBottom: '12px',
          height: '24px', // Same height as the button
          marginTop: '16px', // Match the button's top position
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#3d3535',
            margin: 0,
            fontFamily: "'Source Sans 3', sans-serif",
            lineHeight: '24px', // Match button height for perfect alignment
          }}>
            {title}
          </h3>
        </div>
      )}

      {/* Separator line */}
      {showContent && (
        <div style={{
          margin: '0 16px 16px 16px',
          height: '1px',
          backgroundColor: 'rgba(61,53,53,0.2)',
        }} />
      )}

      {showContent && (
        <div style={{
          padding: '0 16px',
          opacity: showContent ? 1 : 0,
          transition: isPageChange ? 'none' : 'opacity 0.25s ease-in',
          animation: isPageChange ? 'none' : (showContent ? 'fadeIn 0.25s ease-in forwards' : 'none')
        }}>

          {/* Menu Items */}
          {menuItems && menuItems.length > 0 ? (
            <div style={{ marginBottom: '20px' }}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  data-menu-item={item.id}
                  onClick={() => {
                    onMenuItemChange?.(item.id);
                    if (window.innerWidth < 1024) {
                      setIsOpen(false);
                    }
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    marginBottom: '8px',
                    borderRadius: '8px',
                    backgroundColor: activeMenuItem === item.id ? 'rgba(181, 182, 233, 0.4)' : 'transparent',
                    color: '#3d3535',
                    fontSize: '14px',
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: activeMenuItem === item.id ? '600' : '400',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (activeMenuItem !== item.id) {
                      e.currentTarget.style.setProperty('background-color', 'rgba(181, 182, 233, 0.2)', 'important');
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMenuItem !== item.id) {
                      e.currentTarget.style.removeProperty('background-color');
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : null}

          {/* Custom Content */}
          {content || (
            <p style={{
              fontSize: '14px',
              color: '#3d3535',
              opacity: 0.8,
              lineHeight: '1.5',
              fontFamily: "'Source Sans 3', sans-serif",
            }}>
              This section contains helpful information and quick actions related to the current page.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
