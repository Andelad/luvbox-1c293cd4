import svgPaths from "./svg-4ufkzakjbw";

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

function Frame33() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <LogoFrame />
      <div className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3d3535] text-[24px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">LuvBox 1.0</p>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-6" data-name="Globe">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Globe">
          <mask
            height="24"
            id="mask0_1_585"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="24"
              id="Bounding box"
              width="24"
            />
          </mask>
          <g mask="url(#mask0_1_585)">
            <path
              d={svgPaths.p580740}
              fill="var(--fill-0, #1C1B1F)"
              id="language"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GlobeButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start overflow-clip p-[12px] relative rounded-lg shrink-0 w-12"
      data-name="Globe Button"
    >
      <Globe />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0">
      <GlobeButton />
    </div>
  );
}

export default function AppHeader() {
  return (
    <div
      className="bg-gradient-to-r from-[#ffd1d11f] relative size-full to-[#8881cc1f]"
      data-name="App Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-24 pr-4 py-4 relative size-full">
          <Frame33 />
          <Frame31 />
        </div>
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}