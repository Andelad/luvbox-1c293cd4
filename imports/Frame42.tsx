function Frame44() {
  return (
    <div className="bg-[#cde6bb] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
      <div
        className="font-['Conta_Pixel:Italic',_'Noto_Sans:Italic',_sans-serif] leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          I think I love her, but I’m not sure.
        </p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#cde6bb] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
      <div className="font-['Conta_Pixel:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          What am I looking for?
        </p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#cde6bb] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
      <div
        className="font-['Conta_Pixel:Italic',_'Noto_Sans:Italic',_sans-serif] leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Something isn’t quite right, but I don’t know what.
        </p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#cde6bb] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
      <div className="font-['Conta_Pixel:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          How do I get him out of my head?
        </p>
      </div>
    </div>
  );
}

function Frame51() {
  return <div className="bg-[#cde6bb] h-[99px] shrink-0 w-[1618px]" />;
}

export default function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start px-0 py-4 relative size-full">
      <Frame44 />
      <Frame52 />
      <Frame53 />
      <Frame57 />
      <Frame44 />
      <Frame51 />
    </div>
  );
}