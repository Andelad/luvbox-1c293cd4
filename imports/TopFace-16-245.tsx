const imgRectangle5 = "/placeholder.svg";

export default function TopFace() {
  return (
    <div
      className="bg-gradient-to-b from-[#ffffff] relative rounded to-[#e2fee666] w-full h-full"
      data-name="Top Face"
    >
      <div className="overflow-clip relative size-full">
        <div className="absolute h-0 left-0.5 top-[300px] w-[416px]">
          <div
            className="absolute bottom-0 left-0 right-0 top-[-1px]"
            style={
              {
                "--stroke-0":
                  "rgba(60.972432643175125, 52.605441212654114, 52.605441212654114, 1)",
              } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              role="presentation"
              viewBox="0 0 416 1"
            >
              <line
                id="Line 9"
                stroke="var(--stroke-0, #3D3535)"
                strokeDasharray="2 2"
                x2="416"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <div
          className="[background-size:12px_12px] absolute bg-repeat bg-top-left h-[118px] left-0 opacity-60 top-[300px] w-[418px]"
          style={{ backgroundImage: `url('${imgRectangle5}')` }}
        />
      </div>
      <div className="absolute border border-[rgba(61,53,53,0.4)] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}