import { useState, lazy, Suspense, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Background from './components/Shared/Background';
import WebsiteLayout from './components/Layout/WebsiteLayout';
import AppLayout from './components/Layout/AppLayout';
import ExitAppDialog from './components/Shared/ExitAppDialog';
import { PageType } from './types/app';

// Performance monitoring tools (only in development)
const PerformanceMonitor = lazy(() => import('./components/sections/PerformanceMonitor'));
const BundleAnalyzer = lazy(() => import('./components/sections/BundleAnalyzer'));

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import('./pages/Index'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TheBoxPage = lazy(() => import('./pages/TheBoxPage'));
const TheMapPage = lazy(() => import('./pages/TheMapPage'));
const MySnapshotsPage = lazy(() => import('./pages/MySnapshotsPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const TutorialPage = lazy(() => import('./pages/TutorialPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));

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
  console.log('App component rendering');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isInApp, setIsInApp] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  
  console.log('App state:', { currentPage, isInApp, showExitDialog });

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

  return (
    <>
      <Background />
      {isInApp ? (
        <>
          <AppLayout 
            onNavigate={navigateToPage} 
            onGlobeClick={handleGlobeClick}
            currentPage={currentPage}
            sidebarExpanded={sidebarExpanded}
            onToggleSidebar={toggleSidebar}
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
            <BundleAnalyzer />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}