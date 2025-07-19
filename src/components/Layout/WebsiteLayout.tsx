import svgPaths from "../../imports/svg-15aegztapr";

interface WebsiteLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
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

export default function WebsiteLayout({ children, onNavigate, currentPage }: WebsiteLayoutProps) {
  console.log('WebsiteLayout rendering', { currentPage });
  return (
    <div className="relative min-h-screen w-full">
      <div className="relative z-10">
        {children}
      </div>
      <WebsiteFooter />
    </div>
  );
}