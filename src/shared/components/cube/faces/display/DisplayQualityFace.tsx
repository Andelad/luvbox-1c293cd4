import React from 'react';
import '../../CubeFace.css';

const DisplayQualityFace: React.FC = () => {
    // Static display values for illustration purposes (original values)
    const values = [5, 7, 6, 8, 3, 3.5, 7]; // 5th handle (index 4) moved to 3 (1 below dealbreaker), 6th handle (index 5) moved to 3.5 (0.5 below dealbreaker value of 4)
    const dealbreakerValues = [3, 4, 3, 5, 4, 4, 5];

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

    // Static rendering for display purposes
    const renderDisplaySegments = () => {
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
                segments.push(
                    <polygon
                        key={`segment-${i}`}
                        points={`${prevX},${prevY} ${currX},${currY} ${currX},${dbCurrY} ${prevX},${dbPrevY}`}
                        fill={prevPointAbove ? 'var(--success-green-200)' : 'var(--caution-red-300)'}
                        stroke={prevPointAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
                        strokeWidth="0.5"
                    />
                );
            }
            // If the line crosses the dealbreaker line (handle intersection like original)
            else {
                // Calculate intersection point
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
                        <pattern id="displayDiagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                                style={{ stroke: 'var(--caution-red-400)', strokeWidth: 0.5, opacity: 0.6 }} />
                        </pattern>
                    </defs>

                    {/* Caution zones */}
                    <rect x="0" y="0" width="100" height="10" fill="url(#displayDiagonalHatch)" />
                    <rect x="0" y="80" width="100" height="20" fill="url(#displayDiagonalHatch)" />

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

                    {/* Display segments */}
                    {renderDisplaySegments()}

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

                    {/* Red ring around 5th handle (index 4) */}
                    <circle
                        cx={4 * (100 / 6)}
                        cy={100 - (values[4] * 10)}
                        r="6.2" // 4px bigger than handle (2.2 + 4)
                        fill="none"
                        stroke="var(--caution-red-300)"
                        strokeWidth="2"
                        filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.3))"
                    />

                    {/* Static dots */}
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
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default DisplayQualityFace;
