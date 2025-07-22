import React, { useRef, useState } from 'react';
import './EqualizerFace.css';

// Placeholder types - these would be imported from storage when needed
type EqualizerScores = {
  communication: number;
  physical_attraction: number;
  emotional_connection: number;
  shared_values: number;
  conflict_resolution: number;
  life_goals: number;
  overall_compatibility: number;
};

interface QualityFaceWithStorageProps {
  interestId?: string;
  onSnapshotCreated?: (snapshot: any) => void;
}

const QualityFaceWithStorage: React.FC<QualityFaceWithStorageProps> = ({
  interestId,
  onSnapshotCreated
}) => {
  // Current editing values for the equalizer (7 points, 0-10 scale)
  const [values, setValues] = useState<number[]>([5, 7, 6, 8, 5, 6, 7]);
  const [dealbreakerValues] = useState<number[]>([3, 4, 3, 5, 4, 4, 5]);
  const [activeDot, setActiveDot] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: Re-enable storage functionality when import issues are resolved
  // const { currentUserId } = useAuth();
  // const { snapshots, createSnapshot, loading: snapshotsLoading } = useSnapshots(interestId);

  // Placeholder storage hooks
  const currentUserId = null;
  const snapshots: any[] = [];
  const snapshotsLoading = false;

  // Handle saving current values as a snapshot
  const handleSaveSnapshot = async () => {
    console.log('Storage functionality temporarily disabled');
    // TODO: Re-enable when storage imports work
    /*
    if (!interestId || !currentUserId) {
      console.warn('Cannot save snapshot: missing interestId or user not logged in');
      return;
    }

    try {
      setIsSaving(true);
      const scores = arrayToEqualizerScores(values);
      const snapshot = await createSnapshot(scores);
      console.log('Snapshot saved:', snapshot);
      onSnapshotCreated?.(snapshot);
    } catch (error) {
      console.error('Failed to save snapshot:', error);
    } finally {
      setIsSaving(false);
    }
    */
  };

  // Load values from an existing snapshot
  const loadFromSnapshot = (snapshot: any) => {
    console.log('Storage functionality temporarily disabled');
    // TODO: Re-enable when storage imports work
    // const scoreArray = equalizerScoresToArray(snapshot.scores);
    // setValues(scoreArray);
  };

  // Handle value changes (for dragging functionality)
  const updateValue = (index: number, newValue: number) => {
    const clampedValue = Math.max(0, Math.min(10, newValue));
    setValues(prev => {
      const updated = [...prev];
      updated[index] = clampedValue;
      return updated;
    });
  };

  // Creates SVG path data from values
  const createPath = (vals: number[]) => {
    // Generate points
    const points = vals.map((val, index) => ({
      x: index * (100 / 6),
      y: 100 - (val * 10)
    }));

    // Start with the first point
    let path = `M${points[0].x},${points[0].y}`;

    // Add the remaining points with smooth curve command
    points.slice(1).forEach(point => {
      path += ` L${point.x},${point.y}`;
    });

    return path;
  };

  // Handle dot dragging (simplified for demo)
  const handleDotMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDot(index);

    const handleMouseUp = () => {
      setActiveDot(null);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mouseup', handleMouseUp);
  };

  // Function to render segments with proper coloring
  const renderSegments = () => {
    const segments: JSX.Element[] = [];

    // For each pair of points
    for (let i = 1; i < values.length; i++) {
      const prevIndex = i - 1;
      const currIndex = i;

      // User line coordinates (flipped Y axis since SVG Y is top-down)
      const prevX = prevIndex * (100 / 6);
      const prevY = 100 - (values[prevIndex] * 10);
      const currX = currIndex * (100 / 6);
      const currY = 100 - (values[currIndex] * 10);

      // Dealbreaker line coordinates
      const dbPrevY = 100 - (dealbreakerValues[prevIndex] * 10);
      const dbCurrY = 100 - (dealbreakerValues[currIndex] * 10);

      // Check if both user points are above dealbreaker line
      const prevPointAbove = prevY <= dbPrevY;
      const currPointAbove = currY <= dbCurrY;

      // If both points are on same side of dealbreaker line, render a simple polygon
      if ((prevPointAbove && currPointAbove) || (!prevPointAbove && !currPointAbove)) {
        const isAbove = prevPointAbove && currPointAbove;
        segments.push(
          <polygon
            key={`segment-${i}`}
            points={`${prevX},${prevY} ${currX},${currY} ${currX},${dbCurrY} ${prevX},${dbPrevY}`}
            fill={isAbove ? 'var(--success-green-400)' : 'var(--caution-red-400)'}
            stroke={isAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
            strokeWidth="0.5"
          />
        );
      }
      // If the line crosses the dealbreaker line
      else {
        // Calculate intersection point
        // Line equation: y = mx + b
        const userM = (currY - prevY) / (currX - prevX);
        const userB = prevY - userM * prevX;

        const dbM = (dbCurrY - dbPrevY) / (currX - prevX);
        const dbB = dbPrevY - dbM * prevX;

        // Intersection at x: userM*x + userB = dbM*x + dbB
        const intersectX = (dbB - userB) / (userM - dbM);
        const intersectY = userM * intersectX + userB;

        // Y-coordinate on dealbreaker line at intersection x
        const dbIntersectY = dbM * (intersectX - prevX) + dbPrevY;

        // First segment: from prev point to intersection
        segments.push(
          <polygon
            key={`segment-${i}-1`}
            points={`${prevX},${prevY} ${intersectX},${intersectY} ${intersectX},${dbIntersectY} ${prevX},${dbPrevY}`}
            fill={prevPointAbove ? 'var(--success-green-400)' : 'var(--caution-red-400)'}
            stroke={prevPointAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
            strokeWidth="0.5"
          />
        );

        // Second segment: from intersection to current point
        segments.push(
          <polygon
            key={`segment-${i}-2`}
            points={`${intersectX},${intersectY} ${currX},${currY} ${currX},${dbCurrY} ${intersectX},${dbIntersectY}`}
            fill={currPointAbove ? 'var(--success-green-400)' : 'var(--caution-red-400)'}
            stroke={currPointAbove ? 'var(--success-green-500)' : 'var(--caution-red-500)'}
            strokeWidth="0.5"
          />
        );
      }
    }

    return segments;
  };

  return (
    <div className="equalizer-storage-container" style={{ width: '100%' }}>
      {/* Controls */}
      <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button
          onClick={handleSaveSnapshot}
          disabled={isSaving || !interestId || !currentUserId}
          style={{
            padding: '8px 16px',
            backgroundColor: 'var(--lb-black-600)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSaving ? 'not-allowed' : 'pointer',
            opacity: isSaving || !interestId || !currentUserId ? 0.6 : 1
          }}
        >
          {isSaving ? 'Saving...' : 'Save Snapshot'}
        </button>

        {snapshots.length > 0 && (
          <select
            onChange={(e) => {
              const snapshot = snapshots.find(s => s.id === e.target.value);
              if (snapshot) loadFromSnapshot(snapshot);
            }}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--lb-black-300)' }}
          >
            <option value="">Load from snapshot...</option>
            {snapshots.map(snapshot => (
              <option key={snapshot.id} value={snapshot.id}>
                {snapshot.date.toLocaleDateString()} - {snapshot.notes || 'No notes'}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Quality Face */}
      <div className="equalizer-face" style={{
        width: '100%',
        height: '300px',
        padding: 0,
        background: 'linear-gradient(to top, var(--lime-50), white)',
        border: '1px solid var(--lb-black-500)',
        borderRadius: '6px',
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
            padding: 0,
            overflow: 'visible'
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
            {/* Define patterns */}
            <defs>
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                <path d="M-1,1 l2,-2
                        M0,4 l4,-4
                        M3,5 l2,-2"
                  style={{ stroke: 'var(--caution-red-400)', strokeWidth: 0.5, opacity: 0.6 }} />
              </pattern>
            </defs>

            {/* Upper caution zone (9-10) */}
            <rect x="0" y="0" width="100" height="10" fill="url(#diagonalHatch)" />

            {/* Lower caution zone (0-2) */}
            <rect x="0" y="80" width="100" height="20" fill="url(#diagonalHatch)" />

            {/* Vertical grid lines */}
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

            {/* Draw all segments with proper coloring */}
            {renderSegments()}

            {/* Draw the dealbreaker curved line (behind) */}
            <path
              d={createPath(dealbreakerValues)}
              stroke="var(--lb-black-400)"
              strokeWidth="0.7"
              strokeDasharray="1.5,1.5"
              fill="none"
              opacity="0.5"
            />

            {/* Draw the user's curved line (front) */}
            <path
              d={createPath(values)}
              stroke="var(--lb-black-600)"
              strokeWidth="1.2"
              fill="none"
              filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.1))"
            />

            {/* Draw the dealbreaker dots */}
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

            {/* Draw the draggable user dots */}
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
                style={{ cursor: 'pointer' }}
                onMouseDown={handleDotMouseDown(index)}
                className={activeDot === index ? 'active-dot' : ''}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Recent Snapshots Display */}
      {snapshots.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Recent Snapshots</h3>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {snapshots.slice(0, 5).map(snapshot => (
              <div key={snapshot.id} style={{
                padding: '10px',
                marginBottom: '5px',
                backgroundColor: 'var(--lb-black-50)',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
                onClick={() => loadFromSnapshot(snapshot)}
              >
                <div><strong>{snapshot.date.toLocaleDateString()}</strong></div>
                {snapshot.notes && <div style={{ fontSize: '0.9em', color: 'var(--lb-black-600)' }}>{snapshot.notes}</div>}
                {snapshot.mood && <div style={{ fontSize: '0.8em', color: 'var(--lb-black-500)' }}>Mood: {snapshot.mood}</div>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityFaceWithStorage;
