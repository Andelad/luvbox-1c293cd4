import svgPaths from "./svg-uxz7wvt32b";

function Layer1() {
  return (
    <div
      className="absolute h-[353px] left-[1090px] top-[318px] w-[319px]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 319 353"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p202c5580}
            id="Vector"
            stroke="var(--stroke-0, #3D3535)"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            d={svgPaths.p4b9d580}
            id="Vector_2"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p207fbf60}
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

function Frame3() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-row from-[#c0e1ed] gap-2.5 h-12 items-center justify-center left-[741px] px-7 py-4 rounded-xl to-[#aca7e0] top-[895px]">
      <div className="absolute border border-[rgba(61,53,53,0.16)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <div className="font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          Make love make sense
        </p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div className="absolute font-['EB_Garamond:SemiBold_Italic',_sans-serif] h-[153px] leading-[0] left-[773px] not-italic text-[#3d3535] text-[64px] text-center top-[157px] translate-x-[-50%] w-[692px]">
        <p className="block leading-[64px]">
          Diagnose what’s working and what’s not
        </p>
      </div>
      <Layer1 />
      <div className="absolute font-['Source_Sans_3:Regular',_sans-serif] font-normal h-[100px] leading-[0] left-[329px] text-[#3d3535] text-[20px] text-left top-[493px] w-[517px]">
        <p className="block leading-[24px]">
          Our diagnostic tool helps you think through your relationship,
          understanding sticking points and why you might not feel ‘in love’. It
          will help you see where things are wrong, and what you could do to
          improve
        </p>
      </div>
      <div className="absolute font-['EB_Garamond:SemiBold',_sans-serif] h-[41px] leading-[0] left-[329px] not-italic text-[#3d3535] text-[32px] text-left top-[430px] w-[517px]">
        <p className="block leading-[24px]">
          Assess past or current relationships
        </p>
      </div>
      <Frame3 />
    </div>
  );
}