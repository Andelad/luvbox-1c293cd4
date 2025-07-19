import React, { useState, useEffect } from 'react';

interface PageSideMenuProps {
  title?: string;
  content?: React.ReactNode;
}

const HamburgerIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 10h14M3 5h14M3 15h14" stroke="var(--text-color)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 5L5 15M5 5l10 10" stroke="var(--text-color)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function PageSideMenu({ title = "In this section", content }: PageSideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

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
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const contentElement = document.querySelector('.app-content-inner') as HTMLElement;
    if (contentElement) {
      if (isLargeScreen) {
        contentElement.style.marginLeft = isOpen ? '240px' : '48px';
      } else {
        // On small screens, give content enough margin to clear the closed menu (48px)
        contentElement.style.marginLeft = isOpen ? '0' : '48px';
      }
    }
  }, [isOpen, isLargeScreen]);

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
        transition: 'width 0.3s ease',
        zIndex: isLargeScreen ? 10 : 20,
        boxShadow: isOpen && !isLargeScreen ? '2px 0 8px rgba(0,0,0,0.1)' : 'none',
      }}
    >
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
          zIndex: 100, // Ensure button is always on top
        }}
        className="hover:bg-gray-100 transition-colors"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      
      {showContent && (
        <div style={{ 
          padding: '0 16px', 
          paddingTop: '56px',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.25s ease-in',
          animation: showContent ? 'fadeIn 0.25s ease-in forwards' : 'none'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#3d3535',
            marginBottom: '12px',
            fontFamily: "'Source Sans 3', sans-serif",
          }}>
            {title}
          </h3>
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
