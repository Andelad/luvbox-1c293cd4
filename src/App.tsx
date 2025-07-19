import { useState, lazy, Suspense } from 'react';
import Background from './components/Background';
import WebsiteLayout from './components/WebsiteLayout';
import AppLayout from './components/AppLayout';
import ExitAppDialog from './components/ExitAppDialog';
// Performance monitoring tools (only in development)
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));
const BundleAnalyzer = lazy(() => import('./components/BundleAnalyzer'));

// Lazy load page components to reduce initial bundle size
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const TheBoxPage = lazy(() => import('./components/pages/TheBoxPage'));
const TheMapPage = lazy(() => import('./components/pages/TheMapPage'));
const MySnapshotsPage = lazy(() => import('./components/pages/MySnapshotsPage'));
const CommunityPage = lazy(() => import('./components/pages/CommunityPage'));
const TutorialPage = lazy(() => import('./components/pages/TutorialPage'));
const SettingsPage = lazy(() => import('./components/pages/SettingsPage'));
const FeedbackPage = lazy(() => import('./components/pages/FeedbackPage'));

// Loading component for better UX during code splitting
const PageLoader = () => (
  <div className="content-area">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
      <p className="mt-2 text-body opacity-60">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInApp, setIsInApp] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

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

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const renderPage = () => {
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
  };

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
            <Suspense fallback={<PageLoader />}>
              {renderPage()}
            </Suspense>
          </AppLayout>
          <ExitAppDialog 
            isOpen={showExitDialog}
            onExit={handleExitApp}
            onStay={handleStayInApp}
          />
        </>
      ) : (
        <WebsiteLayout onNavigate={navigateToPage} currentPage={currentPage}>
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </WebsiteLayout>
      )}
      
      {/* Performance monitoring tools - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <Suspense fallback={null}>
          <PerformanceMonitor />
          <BundleAnalyzer />
        </Suspense>
      )}
    </>
  );
}