import React from 'react';
import { SidebarIcons as svgPaths } from './index';

export function LeftPanelOpen() {
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
            style={{ maskType:"alpha" }}
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
              fill="var(--text-color)"
              id="left_panel_open_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function LeftPanelClose() {
  return (
    <div className="icon-24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="left_panel_close">
          <mask
            height="24"
            id="mask0_1_564"
            maskUnits="userSpaceOnUse"
            style={{ maskType:"alpha" }}
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
          <g mask="url(#mask0_1_564)">
            <path
              d={svgPaths.p20efd700}
              fill="var(--text-color)"
              id="left_panel_close_2"
              transform="scale(-1, 1) translate(-24, 0)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
