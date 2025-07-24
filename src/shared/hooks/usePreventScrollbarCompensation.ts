import { useEffect } from 'react';

/**
 * Hook to prevent scrollbar compensation padding that causes layout jumps
 * when modals open. This actively monitors and removes any padding applied
 * to the body element.
 */
export function usePreventScrollbarCompensation() {
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const target = mutation.target as HTMLElement;
                    if (target === document.body) {
                        // Remove any padding-right that might have been added
                        if (target.style.paddingRight) {
                            target.style.paddingRight = '';
                        }
                        // Remove any margin-right that might have been added
                        if (target.style.marginRight) {
                            target.style.marginRight = '';
                        }
                        // Ensure overflow is not hidden
                        if (target.style.overflow === 'hidden') {
                            target.style.overflow = '';
                        }
                    }
                }
            });
        });

        // Observe changes to the body element's style attribute
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['style']
        });

        // Also observe any data attributes that might trigger scroll lock
        const dataObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' &&
                    (mutation.attributeName?.includes('scroll') ||
                        mutation.attributeName?.includes('radix'))) {
                    // Force remove any padding when data attributes change
                    document.body.style.paddingRight = '';
                    document.body.style.marginRight = '';
                }
            });
        });

        dataObserver.observe(document.body, {
            attributes: true
        });

        // Cleanup function
        return () => {
            observer.disconnect();
            dataObserver.disconnect();
        };
    }, []);
}
