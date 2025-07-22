import React from 'react';
import { WebsiteHeaderIcons as headerSvgPaths } from './index';

export function Layer1() {
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
            d={headerSvgPaths.p2a0c4e00}
            id="Vector"
            stroke="var(--text-color)"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d={headerSvgPaths.p9531b80}
            id="Vector_2"
            stroke="var(--text-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
          />
          <path
            d="M12.615 9.712L24.23 4.066"
            id="Vector_3"
            stroke="var(--text-color)"
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

export function LogoFrame() {
  return (
    <div className="app-header-logo-frame">
      <Layer1 />
    </div>
  );
}

export function AppHeaderLogo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="app-header-logo">
      <LogoFrame />
      <div className="app-header-logo-text">
        <p>LuvMap 1.0</p>
      </div>
    </button>
  );
}
