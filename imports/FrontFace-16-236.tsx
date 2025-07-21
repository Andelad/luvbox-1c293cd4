import svgPaths from "./svg-x3k22qd8ut";
import imgRectangle5 from "figma:asset/dd2291a1fc061d58d3477c7019769b1f233d5586.png";

export default function FrontFace() {
  return (
    <div
      className="bg-gradient-to-b from-[#ffffff] relative rounded to-[#e2fee666] w-full h-full"
      data-name="Front Face"
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
    >
      {/* Example: scale a single SVG to fit the face */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <rect x="0" y="0" width="160" height="160" rx="16" fill="#CDE6BB" />
        <circle cx="80" cy="80" r="40" fill="#3D3535" />
        <circle cx="80" cy="80" r="20" fill="#e2fee6" />
      </svg>
      {/* Add more SVG or content as needed, but keep all coordinates and sizes relative to 160x160 */}
    </div>
  );
}