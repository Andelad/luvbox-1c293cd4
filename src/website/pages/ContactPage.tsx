import svgPaths from"@/assets/icons/WebsiteHeaderIcons";
import { CONTENT } from '@/content';

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
        <div className="text-web-brand relative shrink-0 text-left text-nowrap">
          Luvbox
        </div>
      </button>
    </div>
  );
}

function WebsiteMenu({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {


  const menuItems = [
    { key: 'blog', label: CONTENT.website.header.menu.blog },
    { key: 'about', label: CONTENT.website.header.menu.about },
    { key: 'pricing', label: CONTENT.website.header.menu.pricing },
    { key: 'contact', label: CONTENT.website.header.menu.contact },
    { key: 'login', label: CONTENT.website.header.menu.login }
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
          className={`relative shrink-0 hover:text-[var(--purple-500)] transition-colors ${currentPage === item.key ? 'text-[var(--purple-500)]' : ''
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

function AppHeader({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  return (
    <div
      className="absolute h-20 left-0 right-0 top-[3px]"
      style={{
        background: 'linear-gradient(to right, oklch(92% 0.0435 43.03 / 0.12), oklch(74.89% 0.086 284.3 / 0.12))'
      }}
      data-name="App Header"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip pl-4 pr-8 py-4 relative size-full">
        <Frame33 onNavigate={onNavigate} />
        <Frame31 onNavigate={onNavigate} currentPage={currentPage} />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Section({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div
      className="h-[1117px] mr-[-39px] overflow-clip relative shrink-0 w-[1728px]"
      data-name="Section"
    >
      <div className="absolute text-web-hero h-[153px] left-[294px] text-left top-[120px] w-[574px]">
        <p className="block leading-[64px]">
          Contact Us
        </p>
      </div>
      <div className="absolute text-web-body h-[100px] left-[295px] text-left top-[295px] w-[517px]">
        <p className="block leading-[24px]">
          Get in touch with our team. We'd love to hear from you and help you
          on your journey to understanding love and building meaningful relationships.
        </p>
      </div>
      <div className="absolute bg-[#f8f8f8] left-[295px] min-h-[300px] rounded-lg top-[428px] w-[800px] flex items-center justify-center">
        <p className="text-[var(--lb-black-800)] text-web-small opacity-60">
          Contact form coming soon...
        </p>
      </div>
    </div>
  );
}

export default function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative size-full" data-name="Contact Page">
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-28 pt-24 relative size-full">
          <Section onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}