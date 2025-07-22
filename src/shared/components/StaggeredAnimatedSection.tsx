import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import React from 'react';

interface StaggeredAnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
    staggerDelay?: number;
    baseDelay?: number;
    duration?: number;
    threshold?: number;
    triggerOnce?: boolean;
    style?: React.CSSProperties;
}

/**
 * Enhanced animated section with staggered animations for child elements
 * Perfect for cards, feature lists, and content blocks
 */
export default function StaggeredAnimatedSection({
    children,
    className = '',
    animation = 'slideUp',
    staggerDelay = 100,
    baseDelay = 0,
    duration = 600,
    threshold = 0.1,
    triggerOnce = true,
    style,
    ...props
}: StaggeredAnimatedSectionProps) {
    const { elementRef, isVisible } = useScrollAnimation({
        threshold,
        triggerOnce,
    });

    // Animation classes based on type
    const getAnimationClasses = (index: number) => {
        const baseClasses = 'transition-all ease-out animate-on-scroll';
        const durationClass = `duration-[${duration}ms]`;
        const delay = baseDelay + (index * staggerDelay);

        if (!isVisible) {
            switch (animation) {
                case 'slideUp':
                    return `${baseClasses} ${durationClass} opacity-0 translate-y-12 scale-95`;
                case 'slideDown':
                    return `${baseClasses} ${durationClass} opacity-0 -translate-y-12 scale-95`;
                case 'slideLeft':
                    return `${baseClasses} ${durationClass} opacity-0 translate-x-12 scale-95`;
                case 'slideRight':
                    return `${baseClasses} ${durationClass} opacity-0 -translate-x-12 scale-95`;
                case 'fade':
                default:
                    return `${baseClasses} ${durationClass} opacity-0 scale-95`;
            }
        } else {
            return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
        }
    };

    // Clone children and add animation classes with staggered delays
    const animatedChildren = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            const delay = baseDelay + (index * staggerDelay);
            const animationStyle: React.CSSProperties = {
                transitionDelay: `${delay}ms`,
            };

            return React.cloneElement(child as React.ReactElement<any>, {
                className: `${(child.props as any).className || ''} ${getAnimationClasses(index)}`,
                style: { ...(child.props as any).style, ...animationStyle },
            });
        }
        return child;
    });

    return (
        <div
            ref={elementRef}
            className={className}
            style={style}
            {...props}
        >
            {animatedChildren}
        </div>
    );
}
