import React from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
    pageKey: string;
    className?: string;
}

/**
 * Page transition component for smooth transitions between website pages
 * Uses CSS-based transitions following the LuvBox animation patterns
 */
export default function PageTransition({ children, pageKey, className = '' }: PageTransitionProps) {
    return (
        <div
            key={pageKey}
            className={`
        page-transition
        transition-opacity duration-300 ease-in-out
        ${className}
      `}
            style={{
                transitionProperty: 'opacity',
            }}
        >
            {children}
        </div>
    );
}
