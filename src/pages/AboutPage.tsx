import svgPaths from "../imports/svg-15aegztapr";

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
        <div className="font-['EB_Garamond'] font-semibold italic leading-[0] relative shrink-0 text-[#3d3535] text-[24px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">LuvBox 1.0</p>
        </div>
      </button>
    </div>
  );
}

function WebsiteMenu({ onNavigate, currentPage }: { onNavigate: (page: string) => void; currentPage: string }) {
  const menuItems = [
    { key: 'blog', label: 'Blog' },
    { key: 'about', label: 'About' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'contact', label: 'Contact' },
    { key: 'login', label: 'Login' }
  ];

  return (
    <div
      className="box-border content-stretch flex flex-row font-['Source_Sans_3'] font-normal gap-8 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap"
      data-name="Website Menu"
    >
      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          className={`relative shrink-0 hover:text-[#8881cc] transition-colors ${
            currentPage === item.key ? 'text-[#8881cc]' : ''
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
      className="absolute bg-gradient-to-r from-[#ffd1d11f] h-20 left-0 right-0 to-[#8881cc1f] top-[3px]"
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
      <div className="absolute font-['EB_Garamond'] font-semibold italic h-[153px] leading-[0] left-[294px] text-[#3d3535] text-[64px] text-left top-[342px] w-[574px]">
        <p className="block leading-[64px]">
          About LuvBox
        </p>
      </div>
      <div className="absolute font-['Source_Sans_3'] font-normal h-[100px] leading-[0] left-[295px] text-[#3d3535] text-[20px] text-left top-[517px] w-[517px]">
        <p className="block leading-[24px]">
          Learn about our mission to help people understand love and build meaningful relationships. 
          LuvBox is your tool for navigating the complex world of emotions and connections.
        </p>
      </div>
      <div className="absolute bg-[#f8f8f8] left-[295px] min-h-[300px] rounded-lg top-[650px] w-[800px] flex items-center justify-center">
        <p className="text-[#3d3535] text-[18px] font-['Source_Sans_3'] opacity-60">
          About content coming soon...
        </p>
      </div>
    </div>
  );
}

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="About Page">
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-28 relative size-full">
          <AppHeader onNavigate={onNavigate} currentPage="about" />
          <div className="absolute bottom-[-1003px] left-1/2 size-[2012px] translate-x-[-50%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2012 2012"
            >
              <circle
                cx="1006"
                cy="1006"
                fill="url(#paint0_radial_1_571)"
                id="Ellipse 8"
                r="1006"
              />
              <defs>
                <radialGradient
                  cx="0"
                  cy="0"
                  gradientTransform="translate(1006 1006) rotate(90) scale(1006)"
                  gradientUnits="userSpaceOnUse"
                  id="paint0_radial_1_571"
                  r="1"
                >
                  <stop stopColor="#B5B6E9" />
                  <stop offset="0.576923" stopColor="#FFDCCE" />
                  <stop offset="1" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <Section onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}