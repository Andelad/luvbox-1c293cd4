import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import React from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
    delay?: number;
    duration?: number;
    threshold?: number;
    triggerOnce?: boolean;
    style?: React.CSSProperties;
}

/**
 * Reusable animated section component following LuvBox design patterns
 * Provides scroll-triggered animations with accessibility considerations
 */
export default function AnimatedSection({
    children,
    className = '',
    animation = 'fade',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    triggerOnce = true,
    style,
    ...props
}: AnimatedSectionProps) {
    const { elementRef, isVisible } = useScrollAnimation({
        threshold,
        triggerOnce,
    });

    // Animation classes based on type
    const getAnimationClasses = () => {
        const baseClasses = 'transition-all ease-out';

        // Use predefined Tailwind duration classes
        const getDurationClass = () => {
            if (duration <= 150) return 'duration-150';
            if (duration <= 200) return 'duration-200';
            if (duration <= 300) return 'duration-300';
            if (duration <= 500) return 'duration-500';
            if (duration <= 700) return 'duration-700';
            if (duration <= 1000) return 'duration-1000';
            return 'duration-1000'; // fallback to max predefined duration
        };

        const durationClass = getDurationClass();

        if (!isVisible) {
            switch (animation) {
                case 'slideUp':
                    return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
                case 'slideDown':
                    return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
                case 'slideLeft':
                    return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
                case 'slideRight':
                    return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
                case 'fade':
                default:
                    return `${baseClasses} ${durationClass} opacity-0`;
            }
        } else {
            switch (animation) {
                case 'slideUp':
                case 'slideDown':
                    return `${baseClasses} ${durationClass} opacity-100 translate-y-0`;
                case 'slideLeft':
                case 'slideRight':
                    return `${baseClasses} ${durationClass} opacity-100 translate-x-0`;
                case 'fade':
                default:
                    return `${baseClasses} ${durationClass} opacity-100`;
            }
        }
    };

    const animationStyle: React.CSSProperties = {
        transitionDelay: `${delay}ms`,
        ...style,
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClasses()} ${className}`}
            style={animationStyle}
            {...props}
        >
            {children}
        </div>
    );
}
