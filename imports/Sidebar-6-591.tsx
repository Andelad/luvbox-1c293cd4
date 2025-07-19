import svgPaths from "./svg-0o2cpb82qi";

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

function LogoFrame() {
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

export default function Sidebar() {
  return (
    <div
      className="bg-gradient-to-b from-[#e0ffe4] relative size-full to-[#ffeffc]"
      data-name="Sidebar"
    >
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between min-h-inherit p-[16px] relative size-full">
          <LogoFrame />
          <MenuButtons />
          <TechButtons />
        </div>
      </div>
      <div className="absolute border-[0px_1px_0px_0px] border-[rgba(61,53,53,0.4)] border-solid inset-0 pointer-events-none shadow-[8px_8px_16px_0px_rgba(145,211,219,0.2)]" />
    </div>
  );
}