import svgPaths from "@/assets/icons/WebsiteHeaderIcons";

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
  return (
    <div className="website-layout">
      <div className="website-layout-content">
        {children}
      </div>
      <WebsiteFooter />
    </div>
  );
}