import svgPaths from "@/assets/icons/WebsiteHeaderIcons";
import { AnimatedSection } from '@/shared/components';
import { useEffect, useState } from 'react';

interface WebsiteHeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isInitialLoad?: boolean;
  hideNavigation?: boolean;
}

function Layer1() {
  return (
    <div
      className="h-[24.032px] relative shrink-0 w-[25.23px]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 25"
      >
        <g clipPath="url(#clip0_1_589)" id="Layer_1">
          <path
            d={svgPaths.p2a0c4e00}
            id="Vector"
            stroke="var(--stroke-0, #3D3535)"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p9531b80}
            id="Vector_2"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
          />
          <path
            d="M12.615 9.712L24.23 4.066"
            id="Vector_3"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_589">
            <rect fill="white" height="24.032" width="25.23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoFrame() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 size-12"
      data-name="Logo Frame"
    >
      <Layer1 />
    </div>
  );
}

function Frame33({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
        <LogoFrame />
        <div className="text-app-brand relative shrink-0 text-left text-nowrap" style={{ color: 'var(--text-color)', fontSize: '24px' }}>
          <p className="block leading-[normal] whitespace-pre">LuvMap 1.0</p>
        </div>
      </button>
    </div>
  );
}

function WebsiteMenu({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  const menuItems = [
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <div
      className="box-border content-stretch flex flex-row text-web-body gap-8 items-center justify-start p-0 relative shrink-0 text-left text-nowrap"
      data-name="Website Menu"
    >
      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          className={`relative shrink-0 hover:text-[var(--lb-purple)] transition-colors ${currentPage === item.key ? 'text-[var(--lb-purple)]' : ''
            }`}
        >
          <p className="block leading-[normal] text-nowrap whitespace-pre">
            {item.label}
          </p>
        </button>
      ))}
    </div>
  );
}

function Frame31({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0">
      <WebsiteMenu onNavigate={onNavigate} currentPage={currentPage} />
    </div>
  );
}

export default function WebsiteHeader({ onNavigate, currentPage, isInitialLoad = false, hideNavigation = false }: WebsiteHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized after first render to enable transitions
    setHasInitialized(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header if scrolling down and past threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerContent = (
    <div
      className={`fixed bg-white bg-gradient-to-r from-[var(--pink-50)] h-20 left-0 right-0 to-[var(--purple-100)] top-0 z-20 shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] ${hasInitialized ? 'transition-transform duration-300' : ''
        } ${hasInitialized && !isVisible ? '-translate-y-full' : 'translate-y-0'
        }`}
      data-name="Website Header"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip pl-4 pr-8 py-4 relative size-full">
        <Frame33 onNavigate={onNavigate} />
        {!hideNavigation && <Frame31 onNavigate={onNavigate} currentPage={currentPage} />}
      </div>
      <div className="absolute border-b border-[rgba(0,0,0,0.2)] inset-x-0 bottom-0 pointer-events-none" />
    </div>
  );

  // If it's homepage initial load, wrap with animated section for fade-in
  if (isInitialLoad && currentPage === 'home') {
    return (
      <AnimatedSection animation="fade" delay={0} threshold={0} triggerOnce={true}>
        {headerContent}
      </AnimatedSection>
    );
  }

  return headerContent;
}
