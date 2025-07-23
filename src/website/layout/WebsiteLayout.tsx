import { PageTransition } from '@/shared/components';
import WebsiteHeader from '../components/WebsiteHeader';

interface WebsiteLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
  isInitialLoad?: boolean;
  hideNavigation?: boolean;
}

function WebsiteFooter() {
  return (
    <div className="app-footer">
      <div className="app-footer-content">
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

export default function WebsiteLayout({ children, onNavigate, currentPage, isInitialLoad = false, hideNavigation = false }: WebsiteLayoutProps) {
  return (
    <div className="website-layout">
      <WebsiteHeader onNavigate={onNavigate} currentPage={currentPage} isInitialLoad={isInitialLoad} hideNavigation={hideNavigation} />
      <div className="website-layout-content">
        <PageTransition pageKey={currentPage}>
          {children}
        </PageTransition>
      </div>
      <WebsiteFooter />
    </div>
  );
}