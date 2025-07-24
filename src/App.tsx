import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AppLayout from './app/layout/AppLayout';
import Background from './shared/components/Background';
import ExitAppDialog from './shared/components/ExitAppDialog';
import QuestionnaireChoiceDialog from './shared/components/QuestionnaireChoiceDialog';
import { StorageProvider } from './shared/lib/storage';
import { PageType } from './shared/types/app';
import WebsiteLayout from './website/layout/WebsiteLayout';

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

// Import QuestionnairePage directly to avoid dynamic import issues
import QuestionnairePage from './app/pages/QuestionnairePage';

// Minimal fallback for code splitting - no loading animation to prevent flash
const PageLoader = () => null;

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
  const [mapActiveMenuItem, setMapActiveMenuItem] = useState('overview');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showQuestionnaireChoice, setShowQuestionnaireChoice] = useState(false);

  const handleCTAClick = () => {
    // Check if questionnaire has been completed
    const questionnaireCompleted = localStorage.getItem('luvbox_questionnaire_completed');

    if (!questionnaireCompleted) {
      // First time - go straight to questionnaire
      setIsInApp(true);
      setShowQuestionnaire(true);
    } else {
      // Show dialog over homepage asking if they want to use existing data or start fresh
      setShowQuestionnaireChoice(true);
    }
  };

  const handleQuestionnaireComplete = () => {
    setShowQuestionnaire(false);
    setShowSuccessMessage(true);
    setCurrentPage('the-box');

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleUseExistingSettings = () => {
    setShowQuestionnaireChoice(false);
    setIsInApp(true);
    setCurrentPage('the-box');
  };

  const handleRecompleteQuestionnaire = () => {
    setShowQuestionnaireChoice(false);
    setIsInApp(true);
    // Clear existing data and start fresh
    localStorage.removeItem('luvbox_questionnaire_completed');
    localStorage.removeItem('luvbox_dealbreaker_scores');
    setShowQuestionnaire(true);
  };

  const handleRetakeQuestionnaire = () => {
    setShowQuestionnaire(true);
  };

  // Expose retake questionnaire function globally for settings page
  useEffect(() => {
    (window as any).retakeQuestionnaire = handleRetakeQuestionnaire;
    return () => {
      delete (window as any).retakeQuestionnaire;
    };
  }, []);

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
    setIsInitialLoad(false);
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

  // Listen for map menu changes
  useEffect(() => {
    const handleMapMenuChange = (event: CustomEvent) => {
      setMapActiveMenuItem(event.detail);
    };

    window.addEventListener('mapMenuChange', handleMapMenuChange as EventListener);
    return () => window.removeEventListener('mapMenuChange', handleMapMenuChange as EventListener);
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

  // Sync active menu item when navigating to map page
  useEffect(() => {
    if (currentPage === 'the-map') {
      // Dispatch current active menu item to map page
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('mapMenuChange', { detail: mapActiveMenuItem }));
      }, 0);
    }
  }, [currentPage, mapActiveMenuItem]);

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'home':
        return <HomePage onCTAClick={handleCTAClick} onNavigate={navigateToPage} isInitialLoad={isInitialLoad && currentPage === 'home'} />;
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
        return <HomePage onCTAClick={handleCTAClick} onNavigate={navigateToPage} isInitialLoad={isInitialLoad && currentPage === 'home'} />;
    }
  }, [currentPage, navigateToPage, handleCTAClick, isInitialLoad]);

  // Get side menu content based on current page
  const getPageSideMenuContent = useCallback(() => {
    switch (currentPage) {
      case 'settings':
        return {
          title: 'Settings',
          menuItems: [
            {
              id: 'profile', label: 'User Profile', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                </svg>
              )
            },
            {
              id: 'dealbreakers', label: 'Dealbreaker Lines', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="2" height="8" fill="currentColor" />
                  <rect x="6" y="2" width="2" height="12" fill="currentColor" />
                  <rect x="10" y="6" width="2" height="8" fill="currentColor" />
                  <rect x="14" y="3" width="2" height="10" fill="currentColor" />
                </svg>
              )
            },
            {
              id: 'typography', label: 'Typography Styles', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3h12v2H8.5v8H6.5V5H2V3z" fill="currentColor" />
                  <path d="M10 8h4v1.5h-1.5V14H11V9.5h-1V8z" fill="currentColor" />
                </svg>
              )
            }
          ],
          defaultOpen: true
        };
      case 'the-map':
        return {
          title: 'Map Sections',
          menuItems: [
            {
              id: 'overview', label: 'Overview', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L3 6h10l-5-5z" fill="currentColor" />
                  <rect x="6" y="6" width="4" height="2" fill="currentColor" />
                  <rect x="4" y="8" width="8" height="2" fill="currentColor" />
                  <rect x="6" y="10" width="4" height="2" fill="currentColor" />
                </svg>
              )
            },
            {
              id: 'luvbox-info', label: 'The LuvBox', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="5" y="5" width="6" height="6" rx="1" fill="currentColor" />
                </svg>
              )
            },
            {
              id: 'scripts', label: 'My Scripts', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 6h6M5 8h6M5 10h4" stroke="currentColor" strokeWidth="1" />
                </svg>
              )
            },
            {
              id: 'self', label: 'Myself', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )
            },
            {
              id: 'community', label: 'Community', icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="10" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M2 12c0-2 1.5-3 4-3s4 1 4 3M10 12c0-2 1.5-3 4-3s4 1 4 3" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              )
            }
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
          {showQuestionnaire ? (
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setShowQuestionnaire(false)}>
              <QuestionnairePage onComplete={handleQuestionnaireComplete} />
            </ErrorBoundary>
          ) : (
            <>
              {/* Success Message */}
              {showSuccessMessage && (
                <div className="fixed top-4 right-4 z-50 bg-[var(--success-green-300)] text-[var(--lb-black-900)] px-6 py-3 rounded-lg shadow-lg border border-[var(--success-green-400)] animate-slide-in">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-app-body font-medium">Your dealbreaker information has been saved!</span>
                  </div>
                </div>
              )}

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
                pageSideMenuActiveItem={
                  currentPage === 'settings' ? settingsActiveMenuItem :
                    currentPage === 'the-map' ? mapActiveMenuItem :
                      undefined
                }
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
          )}
        </>
      ) : (
        <WebsiteLayout onNavigate={navigateToPage} currentPage={currentPage} isInitialLoad={isInitialLoad}>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setCurrentPage('home')}>
            <Suspense fallback={<PageLoader />}>
              {renderPage()}
            </Suspense>
          </ErrorBoundary>
        </WebsiteLayout>
      )}

      {/* Performance monitoring tools - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <ErrorBoundary FallbackComponent={() => null} onReset={() => { }}>
          <Suspense fallback={null}>
            <PerformanceMonitor />
          </Suspense>
        </ErrorBoundary>
      )}

      {/* Global dialogs that can appear over any page */}
      <QuestionnaireChoiceDialog
        isOpen={showQuestionnaireChoice}
        onUseExisting={handleUseExistingSettings}
        onRecomplete={handleRecompleteQuestionnaire}
        hasScores={!!localStorage.getItem('luvbox_dealbreaker_scores')}
      />
    </StorageProvider>
  );
}