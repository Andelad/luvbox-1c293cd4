import svgPaths from "../../imports/svg-15aegztapr";

interface WebsiteLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

function WebsiteFooter() {
  return (
    <footer className="w-full py-8 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">© All Rights Reserved</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Design by Eido</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Buy me Coffee</p>
        </div>
      </div>
    </footer>
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