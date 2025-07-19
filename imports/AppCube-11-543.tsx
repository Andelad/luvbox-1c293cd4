import svgPaths from "./svg-38n03yjgjj";

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

function AppHeader() {
  return (
    <div
      className="absolute bg-gradient-to-r from-[#ffd1d11f] h-20 left-0 right-0 to-[#8881cc1f] top-[3px]"
      data-name="App Header"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip pl-24 pr-4 py-4 relative size-full">
        <Frame33 />
        <Frame31 />
      </div>
      <div className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionName() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Section Name"
    >
      <div className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">The Box</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Separator"
    >
      <div className="font-['Source_Sans_3:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">/</p>
      </div>
    </div>
  );
}

function PageBreadcrumbs() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Page Breadcrumbs"
    >
      <SectionName />
      <Separator />
    </div>
  );
}

function School() {
  return (
    <div className="relative shrink-0 size-6" data-name="school">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="school">
          <mask
            height="24"
            id="mask0_1_577"
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
          <g mask="url(#mask0_1_577)">
            <path
              d={svgPaths.p4803e80}
              fill="var(--fill-0, #1C1B1F)"
              id="school_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ecc8c8] box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip p-[10px] relative rounded-[50px] shrink-0">
      <School />
    </div>
  );
}

function PageHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Page Header"
    >
      <PageBreadcrumbs />
      <Frame5 />
    </div>
  );
}

function ReactCube() {
  return (
    <div
      className="h-[371px] relative shrink-0 w-[336px]"
      data-name="React Cube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 336 371"
      >
        <g id="React Cube">
          <path
            d={svgPaths.p3052f200}
            id="Vector"
            stroke="var(--stroke-0, #3D3535)"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            d={svgPaths.p1becb480}
            id="Vector_2"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M168 174.769L328.775 96.6789"
            id="Vector_3"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(181,182,233,0.4)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-4 py-[13px] relative rounded-2xl shrink-0">
      <div className="font-['Source_Sans_3:Regular',_sans-serif] font-normal h-[22px] leading-[0] relative shrink-0 text-[20px] text-[rgba(61,53,53,0.4)] text-center w-[211px]">
        <p className="block leading-[normal]">Name of person</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(181,182,233,0.4)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-4 py-[13px] relative rounded-2xl shrink-0">
      <div className="font-['Source_Sans_3:Regular',_sans-serif] font-normal h-[22px] leading-[0] relative shrink-0 text-[20px] text-[rgba(61,53,53,0.4)] text-center w-[211px]">
        <p className="block leading-[normal]">Date of reading</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-gradient-to-r from-[#e6cbbc] h-14 relative rounded-[10px] shrink-0 to-[#ffc8c8] w-[249px]">
      <div className="h-14 overflow-clip relative w-[249px]">
        <div className="absolute font-['Source_Sans_3:Regular',_sans-serif] font-normal h-[30px] leading-[0] left-[125px] text-[#000000] text-[24px] text-center top-[13px] translate-x-[-50%] w-[178px]">
          <p className="block leading-[normal]">Start Now</p>
        </div>
      </div>
      <div className="absolute border border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function PageSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Page Section"
    >
      <ReactCube />
      <div className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] h-14 leading-[0] not-italic relative shrink-0 text-[#000000] text-[36px] text-center w-[612px]">
        <p className="block leading-[normal]">Reflect on a love interest</p>
      </div>
      <Frame34 />
      <Frame35 />
      <Frame7 />
    </div>
  );
}

function PageContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start min-h-[960px] p-0 relative shrink-0 w-full"
      data-name="Page Content"
    >
      <PageSection />
    </div>
  );
}

function PagePanel() {
  return (
    <div
      className="basis-0 grow max-w-[1200px] min-h-px min-w-px mr-[-39px] relative rounded-3xl shrink-0"
      data-name="Page Panel"
    >
      <div className="max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start max-w-inherit px-6 py-4 relative w-full">
          <PageHeader />
          <PageContent />
        </div>
      </div>
    </div>
  );
}

function LeftPanelOpen() {
  return (
    <div className="relative shrink-0 size-6" data-name="left_panel_open">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="left_panel_open">
          <mask
            height="24"
            id="mask0_1_563"
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
          <g mask="url(#mask0_1_563)">
            <path
              d={svgPaths.p20efd700}
              fill="var(--fill-0, #3D3535)"
              id="left_panel_open_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LogoFrame1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 size-12"
      data-name="Logo Frame"
    >
      <LeftPanelOpen />
    </div>
  );
}

function DeployedCode() {
  return (
    <div className="relative shrink-0 size-6" data-name="deployed_code">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="deployed_code">
          <mask
            height="24"
            id="mask0_1_581"
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
          <g mask="url(#mask0_1_581)">
            <path
              d={svgPaths.p31951680}
              fill="var(--fill-0, #3D3535)"
              id="deployed_code_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CubeButton() {
  return (
    <div
      className="bg-[rgba(181,182,233,0.4)] relative rounded-lg shrink-0 w-full"
      data-name="Cube Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[12px] relative w-full">
          <DeployedCode />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow h-[22px] leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">The Box</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-6" data-name="map">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="map">
          <mask
            height="24"
            id="mask0_1_573"
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
          <g mask="url(#mask0_1_573)">
            <path
              d={svgPaths.p2bd3e9f0}
              fill="var(--fill-0, #3D3535)"
              id="map_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MapButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Map Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <Map />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">The Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bookmarks() {
  return (
    <div className="relative shrink-0 size-6" data-name="bookmarks">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="bookmarks">
          <mask
            height="24"
            id="mask0_1_559"
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
          <g mask="url(#mask0_1_559)">
            <path
              d={svgPaths.p265d1e80}
              fill="var(--fill-0, #3D3535)"
              id="bookmarks_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SnapshotsButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Snapshots Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <Bookmarks />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">My Snapshots</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Diversity4() {
  return (
    <div className="relative shrink-0 size-6" data-name="diversity_4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="diversity_4">
          <mask
            height="24"
            id="mask0_1_553"
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
          <g mask="url(#mask0_1_553)">
            <path
              d={svgPaths.p1852c200}
              fill="var(--fill-0, #3D3535)"
              id="diversity_4_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CommunityButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Community Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <Diversity4 />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuButtons() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Menu Buttons"
    >
      <CubeButton />
      <div className="h-0 relative shrink-0 w-full" data-name="Line Separator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 1"
          >
            <line
              id="Line Separator"
              stroke="var(--stroke-0, #3D3535)"
              strokeOpacity="0.4"
              x2="48"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <MapButton />
      <div className="h-0 relative shrink-0 w-full" data-name="Line Separator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 1"
          >
            <line
              id="Line Separator"
              stroke="var(--stroke-0, #3D3535)"
              strokeOpacity="0.4"
              x2="48"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <SnapshotsButton />
      <div className="h-0 relative shrink-0 w-full" data-name="Line Separator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 1"
          >
            <line
              id="Line Separator"
              stroke="var(--stroke-0, #3D3535)"
              strokeOpacity="0.4"
              x2="48"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <CommunityButton />
    </div>
  );
}

function Tutorial() {
  return (
    <div className="relative shrink-0 size-6" data-name="tutorial">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tutorial">
          <mask
            height="24"
            id="mask0_1_549"
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
          <g mask="url(#mask0_1_549)">
            <path
              d={svgPaths.pc57a980}
              fill="var(--fill-0, #1C1B1F)"
              id="school"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TutorialButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Tutorial Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <Tutorial />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">Tutorial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="account_circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="account_circle">
          <mask
            height="24"
            id="mask0_1_545"
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
          <g mask="url(#mask0_1_545)">
            <path
              d={svgPaths.p35bc2300}
              fill="var(--fill-0, #1C1B1F)"
              id="account_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SettingsButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Settings Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <AccountCircle />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat_bubble">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="chat_bubble">
          <mask
            height="24"
            id="mask0_1_541"
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
          <g mask="url(#mask0_1_541)">
            <path
              d={svgPaths.p1bbda200}
              fill="var(--fill-0, #1C1B1F)"
              id="chat_bubble_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FeedbackButton() {
  return (
    <div
      className="h-12 relative rounded-xl shrink-0 w-full"
      data-name="Feedback Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start p-[12px] relative w-full">
          <ChatBubble />
          <div className="basis-0 font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#3d3535] text-[16px] text-left">
            <p className="block leading-[normal]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechButtons() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Tech Buttons"
    >
      <TutorialButton />
      <div className="h-0 relative shrink-0 w-full" data-name="Line Separator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 1"
          >
            <line
              id="Line Separator"
              stroke="var(--stroke-0, #3D3535)"
              strokeOpacity="0.4"
              x2="48"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <SettingsButton />
      <div className="h-0 relative shrink-0 w-full" data-name="Line Separator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 48 1"
          >
            <line
              id="Line Separator"
              stroke="var(--stroke-0, #3D3535)"
              strokeOpacity="0.4"
              x2="48"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <FeedbackButton />
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="absolute bg-gradient-to-b from-[#e0ffe4] h-[1098px] left-0 min-h-[480px] to-[#ffeffc] top-0 w-20"
      data-name="Sidebar"
    >
      <div className="box-border content-stretch flex flex-col h-[1098px] items-start justify-between min-h-inherit overflow-clip p-[16px] relative w-20">
        <LogoFrame1 />
        <MenuButtons />
        <TechButtons />
      </div>
      <div className="absolute border-[0px_1px_0px_0px] border-[rgba(61,53,53,0.4)] border-solid inset-0 pointer-events-none shadow-[8px_8px_16px_0px_rgba(145,211,219,0.2)]" />
    </div>
  );
}

function AppFooter() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.6)] bottom-0 h-20 left-0 right-0"
      data-name="App Footer"
    >
      <div className="box-border content-stretch flex flex-row font-['Source_Sans_3:Regular',_sans-serif] font-normal items-center justify-between leading-[0] overflow-clip px-24 py-[22px] relative size-full text-[#3d3535] text-[16px] text-left">
        <div className="relative shrink-0 w-[155px]">
          <p className="block leading-[normal]">© All Rights Reserved</p>
        </div>
        <div className="relative shrink-0 w-[110px]">
          <p className="block leading-[normal]">Design by Eido</p>
        </div>
        <div className="relative shrink-0 w-[110px]">
          <p className="block leading-[normal]">Buy me Coffee</p>
        </div>
      </div>
      <div className="absolute border-[1px_0px_0px] border-[rgba(61,53,53,0.4)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function AppCube() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="App/ Cube">
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-28 relative size-full">
          <AppHeader />
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
                fill="url(#paint0_radial_11_552)"
                fillOpacity="0.5"
                id="Ellipse 8"
                r="1006"
              />
              <defs>
                <radialGradient
                  cx="0"
                  cy="0"
                  gradientTransform="translate(1006 1006) rotate(90) scale(1006)"
                  gradientUnits="userSpaceOnUse"
                  id="paint0_radial_11_552"
                  r="1"
                >
                  <stop stopColor="#B5B6E9" />
                  <stop offset="0.576923" stopColor="#FFDCCE" />
                  <stop offset="1" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <PagePanel />
          <Sidebar />
          <AppFooter />
        </div>
      </div>
    </div>
  );
}