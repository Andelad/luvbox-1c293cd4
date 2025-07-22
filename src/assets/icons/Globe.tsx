import React from 'react';
import { SidebarIcons as headerSvgPaths } from './index';

export function Globe() {
  return (
    <div className="globe-icon">
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
              d={headerSvgPaths.p580740}
              fill="var(--text-color)"
              id="language"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function GlobeButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="globe-button">
      <Globe />
    </button>
  );
}
