import WebsiteHeader from '../components/WebsiteHeader';

function Section({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div
      className="h-[1117px] mr-[-39px] overflow-clip relative shrink-0 w-[1728px]"
      data-name="Section"
    >
      <div className="absolute h-[153px] left-[294px] top-[342px] w-[574px]">
        <p className="text-web-hero text-[var(--lb-black-800)] italic block">
          About LuvBox
        </p>
      </div>
      <div className="absolute h-[100px] left-[295px] top-[517px] w-[517px]">
        <p className="text-web-body text-[var(--lb-black-800)] block">
          Learn about our mission to help people understand love and build meaningful relationships.
          LuvBox is your tool for navigating the complex world of emotions and connections.
        </p>
      </div>
      <div className="absolute bg-[#f8f8f8] left-[295px] min-h-[300px] rounded-lg top-[650px] w-[800px] flex items-center justify-center">
        <p className="text-web-caption text-[var(--lb-black-800)] opacity-60">
          About content coming soon...
        </p>
      </div>
    </div>
  );
}

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="About Page">
      <WebsiteHeader onNavigate={onNavigate} currentPage="about" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-28 pt-48 relative size-full">
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