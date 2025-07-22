import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element is in the center of the viewport
 * Used for background opacity effects on scroll
 */
export function useCenterViewport<T extends HTMLElement = HTMLDivElement>() {
    const [isInCenter, setIsInCenter] = useState(false);
    const [centerProgress, setCenterProgress] = useState(0);
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if element is in the center 30% of the viewport
                const elementRect = entry.boundingClientRect;
                const viewportHeight = window.innerHeight;
                const centerStart = viewportHeight * 0.35; // 35% from top
                const centerEnd = viewportHeight * 0.65;   // 65% from top

                const elementCenter = elementRect.top + (elementRect.height / 2);
                const inCenter = elementCenter >= centerStart && elementCenter <= centerEnd;

                // Calculate progress from 0 to 1 based on how close to center
                let progress = 0;
                if (elementCenter < centerStart) {
                    // Above center zone
                    const distance = Math.abs(elementCenter - centerStart);
                    const maxDistance = viewportHeight * 0.5; // Half viewport height
                    progress = Math.max(0, 1 - (distance / maxDistance));
                } else if (elementCenter > centerEnd) {
                    // Below center zone
                    const distance = Math.abs(elementCenter - centerEnd);
                    const maxDistance = viewportHeight * 0.5; // Half viewport height
                    progress = Math.max(0, 1 - (distance / maxDistance));
                } else {
                    // In center zone - calculate exact position
                    const centerZoneHeight = centerEnd - centerStart;
                    const centerPoint = centerStart + (centerZoneHeight / 2);
                    const distanceFromCenter = Math.abs(elementCenter - centerPoint);
                    progress = Math.max(0.7, 1 - (distanceFromCenter / (centerZoneHeight / 2)));
                }

                setIsInCenter(inCenter);
                setCenterProgress(progress);
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return { elementRef, isInCenter, centerProgress };
}
