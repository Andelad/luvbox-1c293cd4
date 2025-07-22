function Section({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div
      className="h-[1117px] mr-[-39px] overflow-clip relative shrink-0 w-[1728px]"
      data-name="Section"
    >
      <div className="absolute h-[153px] left-[294px] top-[120px] w-[574px]">
        <p className="text-web-hero text-[var(--lb-black-800)] italic block">
          About LuvBox
        </p>
      </div>
      <div className="absolute h-[100px] left-[295px] top-[295px] w-[517px]">
        <p className="text-web-body text-[var(--lb-black-800)] block">
          Learn about our mission to help people understand love and build meaningful relationships.
          LuvBox is your tool for navigating the complex world of emotions and connections.
        </p>
      </div>
      <div className="absolute bg-[#f8f8f8] left-[295px] min-h-[300px] rounded-lg top-[428px] w-[800px] flex items-center justify-center">
        <p className="text-web-caption text-[var(--lb-black-800)] opacity-60">
          About content coming soon...
        </p>
      </div>
    </div>
  );
}

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative size-full" data-name="About Page">
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-28 pt-24 relative size-full">
          <Section onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}