import { useState, lazy, Suspense, useCallback, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Background from './shared/components/Background';
import WebsiteLayout from './website/layout/WebsiteLayout';
import AppLayout from './app/layout/AppLayout';
import ExitAppDialog from './shared/components/ExitAppDialog';
import { StorageProvider } from './shared/lib/storage';
import { PageType } from './shared/types/app';

// Performance monitoring tools (only in development)
const PerformanceMonitor = lazy(() => import('./shared/components/PerformanceMonitor'));

// Lazy load page components to reduce initial bundle size
// Website pages - public marketing
const HomePage = lazy(() => import('./website/pages/HomePage'));
const AboutPage = lazy(() => import('./website/pages/AboutPage'));
const ContactPage = lazy(() => import('./website/pages/ContactPage'));

// App pages - private application functionality  
const TheBoxPage = lazy(() => import('./app/pages/TheBoxPage'));
const TheMapPage = lazy(() => import('./app/pages/TheMapPage'));
const MySnapshotsPage = lazy(() => import('./app/pages/MySnapshotsPage'));
const CommunityPage = lazy(() => import('./app/pages/CommunityPage'));
const TutorialPage = lazy(() => import('./app/pages/TutorialPage'));
const SettingsPage = lazy(() => import('./app/pages/SettingsPage'));
const FeedbackPage = lazy(() => import('./app/pages/FeedbackPage'));

// Loading component for better UX during code splitting
const PageLoader = () => (
  <div className="content-area">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
      <p className="mt-2 text-body opacity-60">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="content-area">
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-body opacity-60 mb-4">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isInApp, setIsInApp] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [settingsActiveMenuItem, setSettingsActiveMenuItem] = useState('profile');

  const handleCTAClick = () => {
    setIsInApp(true);
    setCurrentPage('the-box');
  };

  const handleGlobeClick = () => {
    setShowExitDialog(true);
  };

  const handleExitApp = () => {
    setIsInApp(false);
    setCurrentPage('home');
    setShowExitDialog(false);
  };

  const handleStayInApp = () => {
    setShowExitDialog(false);
  };

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  // Listen for settings menu changes
  useEffect(() => {
    const handleSettingsMenuChange = (event: CustomEvent) => {
      setSettingsActiveMenuItem(event.detail);
    };
    
    window.addEventListener('settingsMenuChange', handleSettingsMenuChange as EventListener);
    return () => window.removeEventListener('settingsMenuChange', handleSettingsMenuChange as EventListener);
  }, []);

  // Sync active menu item when navigating to settings page
  useEffect(() => {
    if (currentPage === 'settings') {
      // Dispatch current active menu item to settings page
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('settingsMenuChange', { detail: settingsActiveMenuItem }));
      }, 0);
    }
  }, [currentPage, settingsActiveMenuItem]);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'home':
        return <HomePage onCTAClick={handleCTAClick} onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage onNavigate={navigateToPage} />;
      case 'contact':
        return <ContactPage onNavigate={navigateToPage} />;
      case 'the-box':
        return <TheBoxPage />;
      case 'the-map':
        return <TheMapPage />;
      case 'my-snapshots':
        return <MySnapshotsPage />;
      case 'community':
        return <CommunityPage />;
      case 'tutorial':
        return <TutorialPage />;
      case 'settings':
        return <SettingsPage />;
      case 'feedback':
        return <FeedbackPage />;
      default:
        return <HomePage onCTAClick={handleCTAClick} onNavigate={navigateToPage} />;
    }
  }, [currentPage, navigateToPage, handleCTAClick]);

  // Get side menu content based on current page
  const getPageSideMenuContent = useCallback(() => {
    switch (currentPage) {
      case 'settings':
        return {
          title: 'Settings',
          menuItems: [
            { id: 'profile', label: 'User Profile', icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            )},
            { id: 'dealbreakers', label: 'Dealbreaker Lines', icon: (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="4" width="2" height="8" fill="currentColor"/>
                <rect x="6" y="2" width="2" height="12" fill="currentColor"/>
                <rect x="10" y="6" width="2" height="8" fill="currentColor"/>
                <rect x="14" y="3" width="2" height="10" fill="currentColor"/>
              </svg>
            )}
          ],
          defaultOpen: true
        };
      case 'feedback':
        return {
          title: 'Feedback Guide',
          content: (
            <p style={{ 
              fontSize: '14px', 
              color: '#3d3535', 
              opacity: 0.8, 
              lineHeight: '1.5',
              fontFamily: "'Source Sans 3', sans-serif"
            }}>
              Help us improve by sharing your thoughts and reporting issues.
            </p>
          ),
          defaultOpen: false
        };
      default:
        return {
          title: 'In this section',
          content: (
            <p style={{ 
              fontSize: '14px', 
              color: '#3d3535', 
              opacity: 0.8, 
              lineHeight: '1.5',
              fontFamily: "'Source Sans 3', sans-serif"
            }}>
              This section contains helpful information and quick actions related to the current page.
            </p>
          ),
          defaultOpen: false
        };
    }
  }, [currentPage]);

  const sideMenuConfig = getPageSideMenuContent();

  return (
    <StorageProvider>
      <Background />
      {isInApp ? (
        <>
          <AppLayout 
            onNavigate={navigateToPage} 
            onGlobeClick={handleGlobeClick}
            currentPage={currentPage}
            sidebarExpanded={sidebarExpanded}
            onToggleSidebar={toggleSidebar}
            pageSideMenuTitle={sideMenuConfig.title}
            pageSideMenuContent={sideMenuConfig.content}
            pageSideMenuItems={sideMenuConfig.menuItems}
            pageSideMenuDefaultOpen={sideMenuConfig.defaultOpen}
            pageSideMenuActiveItem={currentPage === 'settings' ? settingsActiveMenuItem : undefined}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setCurrentPage('the-box')}>
              <Suspense fallback={<PageLoader />}>
                {renderPage()}
              </Suspense>
            </ErrorBoundary>
          </AppLayout>
          <ExitAppDialog 
            isOpen={showExitDialog}
            onExit={handleExitApp}
            onStay={handleStayInApp}
          />
        </>
      ) : (
        <WebsiteLayout onNavigate={navigateToPage} currentPage={currentPage}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setCurrentPage('home')}>
            <Suspense fallback={<PageLoader />}>
              {renderPage()}
            </Suspense>
          </ErrorBoundary>
        </WebsiteLayout>
      )}
      
      {/* Performance monitoring tools - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <ErrorBoundary FallbackComponent={() => null} onReset={() => {}}>
          <Suspense fallback={null}>
            <PerformanceMonitor />
          </Suspense>
        </ErrorBoundary>
      )}
    </StorageProvider>
  );
}