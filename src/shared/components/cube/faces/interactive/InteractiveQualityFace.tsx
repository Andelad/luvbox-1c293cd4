import { equalizerScoresToArray } from '@/shared/types/storage';
import React, { useRef, useState } from 'react';
import '../../CubeFace.css';

interface InteractiveQualityFaceProps {
    values?: number[];
    dealbreakerValues?: number[];
    onValuesChange?: (values: number[]) => void;
    onDealbreakerChange?: (values: number[]) => void;
    isInteractive?: boolean;
}

const InteractiveQualityFace: React.FC<InteractiveQualityFaceProps> = ({
    values: propValues,
    dealbreakerValues: propDealbreakerValues,
    onValuesChange,
    onDealbreakerChange,
    isInteractive = true
}) => {
    // Use provided values or defaults (original values from QualityFace)
    const [values, setValues] = useState<number[]>(
        propValues || [5, 7, 6, 8, 3, 3.5, 7] // Original values
    );

    // Get dealbreaker values from questionnaire/settings storage
    const getDealbreakerValuesFromStorage = () => {
        try {
            // Get from questionnaire/settings data using the correct storage key
            const storedScores = localStorage.getItem('luvbox_dealbreaker_scores');
            if (storedScores) {
                const scores = JSON.parse(storedScores);
                // Convert EqualizerScores object to array format for the face
                return equalizerScoresToArray(scores);
            }
        } catch (error) {
            console.warn('Failed to load dealbreaker values from storage:', error);
        }
        return [3, 4, 3, 5, 4, 4, 5]; // Original defaults
    };

    const [dealbreakerValues, setDealbreakerValues] = useState<number[]>(
        propDealbreakerValues || getDealbreakerValuesFromStorage()
    );
    const [activeDot, setActiveDot] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Update local state when props change
    React.useEffect(() => {
        if (propValues) setValues(propValues);
    }, [propValues]);

    React.useEffect(() => {
        if (propDealbreakerValues) {
            setDealbreakerValues(propDealbreakerValues);
        } else {
            // Re-check storage for updated dealbreaker values
            setDealbreakerValues(getDealbreakerValuesFromStorage());
        }
    }, [propDealbreakerValues]);

    // Listen for storage changes to update dealbreaker values when settings change
    React.useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'luvbox_dealbreaker_scores' && !propDealbreakerValues) {
                setDealbreakerValues(getDealbreakerValuesFromStorage());
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [propDealbreakerValues]);

    // Creates SVG path data from values
    const createPath = (vals: number[]) => {
        const points = vals.map((val, index) => ({
            x: index * (100 / 6),
            y: 100 - (val * 10)
        }));

        let path = `M${points[0].x},${points[0].y}`;
        points.slice(1).forEach(point => {
            path += ` L${point.x},${point.y}`;
        });

        return path;
    };

    // Handle dot dragging with data persistence
    const handleDotMouseDown = (index: number) => (e: React.MouseEvent) => {
        if (!isInteractive) return;

        e.preventDefault();
        setActiveDot(index);

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const y = ((moveEvent.clientY - rect.top) / rect.height) * 100;
            const newValue = Math.max(0, Math.min(10, (100 - y) / 10));

            const newValues = [...values];
            newValues[index] = newValue;
            setValues(newValues);

            // Notify parent component of changes
            onValuesChange?.(newValues);
        };

        const handleMouseUp = () => {
            setActiveDot(null);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Function to render segments with proper coloring
    const renderSegments = () => {
        const segments: JSX.Element[] = [];

        for (let i = 1; i < values.length; i++) {
            const prevIndex = i - 1;
            const currIndex = i;

            const prevX = prevIndex * (100 / 6);
            const prevY = 100 - (values[prevIndex] * 10);
            const currX = currIndex * (100 / 6);
            const currY = 100 - (values[currIndex] * 10);

            const dbPrevY = 100 - (dealbreakerValues[prevIndex] * 10);
            const dbCurrY = 100 - (dealbreakerValues[currIndex] * 10);

            const prevPointAbove = prevY <= dbPrevY;
            const currPointAbove = currY <= dbCurrY;

            if ((prevPointAbove && currPointAbove) || (!prevPointAbove && !currPointAbove)) {
                const isAbove = prevPointAbove && currPointAbove;
                segments.push(
                    <polygon
                        key={`segment-${i}`}
                        points={`${prevX},${prevY} ${currX},${currY} ${currX},${dbCurrY} ${prevX},${dbPrevY}`}
                        fill={isAbove ? 'var(--success-green-200)' : 'var(--caution-red-300)'}
                        stroke={isAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
                        strokeWidth="0.5"
                    />
                );
            } else {
                // Handle intersection calculations for crossing segments
                const userM = (currY - prevY) / (currX - prevX);
                const userB = prevY - userM * prevX;
                const dbM = (dbCurrY - dbPrevY) / (currX - prevX);
                const dbB = dbPrevY - dbM * prevX;

                const intersectX = (dbB - userB) / (userM - dbM);
                const intersectY = userM * intersectX + userB;
                const dbIntersectY = dbM * (intersectX - prevX) + dbPrevY;

                segments.push(
                    <polygon
                        key={`segment-${i}-1`}
                        points={`${prevX},${prevY} ${intersectX},${intersectY} ${intersectX},${dbIntersectY} ${prevX},${dbPrevY}`}
                        fill={prevPointAbove ? 'var(--success-green-200)' : 'var(--caution-red-300)'}
                        stroke={prevPointAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
                        strokeWidth="0.5"
                    />
                );

                segments.push(
                    <polygon
                        key={`segment-${i}-2`}
                        points={`${intersectX},${intersectY} ${currX},${currY} ${currX},${dbCurrY} ${intersectX},${dbIntersectY}`}
                        fill={currPointAbove ? 'var(--success-green-200)' : 'var(--caution-red-300)'}
                        stroke={currPointAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
                        strokeWidth="0.5"
                    />
                );
            }
        }

        return segments;
    };

    return (
        <div className="equalizer-face" style={{
            width: '100%',
            height: '100%',
            padding: 0,
            background: 'linear-gradient(to top, var(--lime-50), white)',
            border: '1px solid var(--lb-black-400)',
            position: 'relative',
            overflow: 'visible'
        }}>
            <div
                ref={containerRef}
                className="equalizer-container"
                style={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    padding: 0
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{ overflow: 'visible' }}
                    className="equalizer-svg"
                >
                    <defs>
                        <pattern id="interactiveDiagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                                style={{ stroke: 'var(--caution-red-400)', strokeWidth: 0.5, opacity: 0.6 }} />
                        </pattern>
                    </defs>

                    {/* Caution zones */}
                    <rect x="0" y="0" width="100" height="10" fill="url(#interactiveDiagonalHatch)" />
                    <rect x="0" y="80" width="100" height="20" fill="url(#interactiveDiagonalHatch)" />

                    {/* Grid lines */}
                    {values.map((_, index) => (
                        <line
                            key={`grid-line-${index}`}
                            x1={index * (100 / 6)}
                            y1="0"
                            x2={index * (100 / 6)}
                            y2="100"
                            stroke="var(--lb-black-200)"
                            strokeWidth="0.6"
                            opacity="0.7"
                        />
                    ))}

                    {/* Render segments */}
                    {renderSegments()}

                    {/* Dealbreaker line */}
                    <path
                        d={createPath(dealbreakerValues)}
                        stroke="var(--lb-black-400)"
                        strokeWidth="0.7"
                        strokeDasharray="1.5,1.5"
                        fill="none"
                        opacity="0.5"
                    />

                    {/* User line */}
                    <path
                        d={createPath(values)}
                        stroke="var(--lb-black-600)"
                        strokeWidth="1.2"
                        fill="none"
                        filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.1))"
                    />

                    {/* Dealbreaker dots */}
                    {dealbreakerValues.map((val, index) => (
                        <circle
                            key={`db-${index}`}
                            cx={index * (100 / 6)}
                            cy={100 - (val * 10)}
                            r="1.0"
                            fill="var(--lb-black-500)"
                            opacity="0.7"
                        />
                    ))}

                    {/* Interactive user dots */}
                    {values.map((val, index) => (
                        <circle
                            key={`user-${index}`}
                            cx={index * (100 / 6)}
                            cy={100 - (val * 10)}
                            r="2.2"
                            fill="var(--lb-black-600)"
                            stroke="#fff"
                            strokeWidth="0.8"
                            filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.3))"
                            style={{ cursor: isInteractive ? 'grab' : 'default' }}
                            onMouseDown={handleDotMouseDown(index)}
                            className={`${activeDot === index ? 'active-dot' : ''} ${isInteractive ? 'interactive-dot' : ''}`}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default InteractiveQualityFace;
