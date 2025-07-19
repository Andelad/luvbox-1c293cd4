export default function Frame3() {
  return (
    <div className="bg-gradient-to-r from-[#c0e1ed] relative rounded-xl size-full to-[#aca7e0]">
      <div className="absolute border border-[rgba(61,53,53,0.16)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-7 py-4 relative size-full">
          <div className="font-['Source_Sans_3:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3d3535] text-[20px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Make love make sense
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}