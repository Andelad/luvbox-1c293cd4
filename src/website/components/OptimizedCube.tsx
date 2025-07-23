import { DisplayPurposeFace, DisplayQualityFace, DisplayTimeFace } from '@/shared/components/cube/faces/display';
import React, { memo, useCallback, useMemo, useState } from 'react';

// Memoized face components to prevent unnecessary re-renders
const MemoizedQualityFace = memo(DisplayQualityFace);
const MemoizedTimeFace = memo(DisplayTimeFace);
const MemoizedPurposeFace = memo(DisplayPurposeFace);

interface CubeRotation {
  x: number;
  y: number;
}

const OptimizedCube = memo(() => {
  // Start with an angled position showing all three faces equally
  const [rotation, setRotation] = useState<CubeRotation>({ x: -30, y: 45 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  // Constrain rotation to only show the three visible faces
  const constrainRotation = useCallback((x: number, y: number): CubeRotation => {
    // Constrain X rotation (vertical) - only allow 0 to -90 degrees
    const constrainedX = Math.max(-90, Math.min(0, x));
    // Constrain Y rotation (horizontal) - only allow 0 to 90 degrees
    const constrainedY = Math.max(0, Math.min(90, y));

    return { x: constrainedX, y: constrainedY };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  }, []);

  // Throttled mouse move handler for better performance
  const throttledMouseMove = useMemo(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    return (e: MouseEvent) => {
      if (timeoutId) return; // Skip if already processing

      timeoutId = setTimeout(() => {
        if (!isDragging) {
          timeoutId = null;
          return;
        }

        const deltaX = e.clientX - lastMousePos.x;
        const deltaY = e.clientY - lastMousePos.y;

        // Reduced sensitivity for heavier interaction feel
        const sensitivity = 0.15;
        const newRotationY = rotation.y + deltaX * sensitivity;
        const newRotationX = rotation.x - deltaY * sensitivity;

        // Apply constraints
        const constrainedRotation = constrainRotation(newRotationX, newRotationY);
        setRotation(constrainedRotation);
        setLastMousePos({ x: e.clientX, y: e.clientY });

        timeoutId = null;
      }, 16); // ~60fps throttling
    };
  }, [isDragging, lastMousePos, rotation, constrainRotation]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners with throttling
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', throttledMouseMove, { passive: true });
      document.addEventListener('mouseup', handleMouseUp, { passive: true });

      return () => {
        document.removeEventListener('mousemove', throttledMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, throttledMouseMove, handleMouseUp]);

  // Memoized transform style to prevent recalculation
  const transformStyle = useMemo(() => ({
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transformOrigin: '50% 50%'
  }), [rotation.x, rotation.y]);

  // Memoized cube container style
  const containerStyle = useMemo(() => ({
    width: '200px',
    height: '200px',
    perspective: '1000px',
    perspectiveOrigin: '50% 50%'
  }), []);

  return (
    <div
      className="relative mx-auto cursor-grab cube-container"
      style={containerStyle}
      onMouseDown={handleMouseDown}
    >
      <div
        className="relative preserve-3d transition-transform duration-75 ease-out"
        style={{
          width: '200px',
          height: '200px',
          transformStyle: 'preserve-3d',
          ...transformStyle
        }}
      >
        {/* Front Face - TimeFace design */}
        <div
          className="cube-face bg-white"
          style={{
            width: '200px',
            height: '200px',
            transform: 'translateZ(100px)'
          }}
        >
          <MemoizedTimeFace />
        </div>

        {/* Back Face (hidden) */}
        <div
          className="cube-face bg-gray-200"
          style={{
            width: '200px',
            height: '200px',
            transform: 'translateZ(-100px) rotateY(180deg)'
          }}
        />

        {/* Left Face - QualityFace design */}
        <div
          className="cube-face bg-white"
          style={{
            width: '200px',
            height: '200px',
            transform: 'rotateY(-90deg) translateZ(100px)'
          }}
        >
          <MemoizedQualityFace />
        </div>

        {/* Right Face - This is actually the true right side (hidden in this view) */}
        <div
          className="cube-face bg-white"
          style={{
            width: '200px',
            height: '200px',
            transform: 'rotateY(90deg) translateZ(100px)'
          }}
        >
          <MemoizedTimeFace />
        </div>

        {/* Top Face - PurposeFace design */}
        <div
          className="cube-face bg-white"
          style={{
            width: '200px',
            height: '200px',
            transform: 'rotateX(90deg) translateZ(100px)'
          }}
        >
          <MemoizedPurposeFace />
        </div>

        {/* Bottom Face (hidden) */}
        <div
          className="cube-face bg-white"
          style={{
            width: '200px',
            height: '200px',
            transform: 'rotateX(-90deg) translateZ(100px)'
          }}
        />
      </div>
    </div>
  );
});

OptimizedCube.displayName = 'OptimizedCube';

export default OptimizedCube;