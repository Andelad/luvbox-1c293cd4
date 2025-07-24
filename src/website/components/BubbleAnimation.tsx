import { CONTENT } from '@/content';
import { useEffect, useState } from 'react';

interface BubbleProps {
    text: string;
    delay: number;
    position: number; // 0-100 for horizontal position
    triangleLeft: boolean;
}

function AnimatedBubble({ text, delay, position, triangleLeft }: BubbleProps) {
    const [isStarted, setIsStarted] = useState(false);
    const [opacity, setOpacity] = useState(0); // Start invisible

    // Much slower, bubble-like movement
    const animationDuration = 15000; // 15 seconds for journey from 60vh to 100vh
    const driftAmount = (Math.random() - 0.5) * 60; // Gentle horizontal drift

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsStarted(true);

            // Fade in immediately when movement starts
            setTimeout(() => {
                setOpacity(1);
            }, 500); // Fade in after just 0.5 seconds

            // Fade out much later in the journey
            setTimeout(() => {
                setOpacity(0);
            }, animationDuration * 0.9); // Fade out at 90% of journey (stay visible longer)

        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay, animationDuration]);

    // Calculate position within content area (max 1200px)
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const contentWidth = Math.min(1200, viewportWidth);
    const leftOffset = (viewportWidth - contentWidth) / 2;
    const bubblePosition = leftOffset + (position / 100) * contentWidth;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: isStarted ? '100vh' : '60vh', // Start from 60vh instead of 0vh
                left: `${bubblePosition}px`,
                transform: `translateX(-50%) translateX(${isStarted ? driftAmount : 0}px)`,
                opacity: opacity,
                zIndex: 1, // Behind content
                transition: isStarted ? `bottom ${animationDuration}ms ease-out, transform ${animationDuration}ms ease-out, opacity 2000ms ease-in-out` : 'none',
            }}
        >
            <div className="relative mb-3">
                {/* Main speech bubble container */}
                <div className="bg-[var(--success-green-100)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 rounded-lg shrink-0 opacity-80 max-w-[200px]">
                    <div className="text-web-mono text-[var(--lb-black-800)] italic tracking-[-0.02em] text-center leading-tight">
                        <p className="block whitespace-normal">
"{text}"
                        </p>
                    </div>
                </div>

                {/* Speech bubble triangle tail */}
                <svg
                    className={`absolute top-full ${triangleLeft ? 'left-4' : 'right-4'}`}
                    width="16"
                    height="12"
                    style={{ transform: 'translateY(-1px)', zIndex: 10 }}
                >
                    <polygon
                        points="0,0 16,0 8,12"
                        fill="var(--success-green-100)"
                        stroke="none"
                        opacity="0.8"
                    />
                </svg>
            </div>
        </div>
    );
}

interface BubbleAnimationProps {
    isActive?: boolean;
}

export default function BubbleAnimation({ isActive = true }: BubbleAnimationProps) {
    const [bubbles, setBubbles] = useState<Array<{
        id: number;
        text: string;
        delay: number;
        position: number;
        triangleLeft: boolean;
    }>>([]);

    useEffect(() => {
        if (!isActive) return;

        const messages = CONTENT.website.ticker;
        let bubbleId = 0;

        const createBubble = () => {
            const newBubble = {
                id: bubbleId++,
                text: messages[Math.floor(Math.random() * messages.length)],
                delay: 0, // Start immediately
                position: Math.random() * 80 + 10, // 10% to 90% to avoid edges
                triangleLeft: Math.random() > 0.5,
            };

            console.log('Creating bubble:', newBubble.id, newBubble.text); // Debug log
            setBubbles(prev => {
                console.log('Current bubbles:', prev.length, 'Adding:', newBubble.id);
                return [...prev, newBubble];
            });

            // Remove bubble after animation completes
            setTimeout(() => {
                setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
                console.log('Removing bubble:', newBubble.id);
            }, 18000); // Slightly longer than animation duration
        };

        // Create initial bubble
        console.log('Creating initial bubble');
        createBubble();

        // Create new bubbles every 5 seconds consistently
        console.log('Setting up interval');
        const interval = setInterval(() => {
            console.log('Interval triggered - creating new bubble');
            createBubble();
        }, 5000); // Fixed 5-second interval

        return () => {
            clearInterval(interval);
            setBubbles([]);
        };
    }, [isActive]);

    if (!isActive) return null;

    return (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
            {bubbles.map((bubble) => (
                <AnimatedBubble
                    key={bubble.id}
                    text={bubble.text}
                    delay={bubble.delay}
                    position={bubble.position}
                    triangleLeft={bubble.triangleLeft}
                />
            ))}
        </div>
    );
}
