import React from 'react';

export function SideMenuIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="side_menu">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {/* Outer box */}
        <rect x="3" y="5" width="18" height="14" stroke="var(--text-color)" strokeWidth="1.5" fill="none"/>
        {/* Left sidebar panel line */}
        <line x1="8" y1="5" x2="8" y2="19" stroke="var(--text-color)" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

export function RightArrowIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="right_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d="M9 6l6 6-6 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function LeftArrowIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="left_arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d="M15 6l-6 6 6 6" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
