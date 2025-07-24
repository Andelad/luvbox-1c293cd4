import React, { useCallback, useRef, useState } from 'react';
import Button from '../Button';
import { InteractivePurposeFace, InteractiveQualityFace, InteractiveTimeFace } from './faces/interactive';

interface Cube3DProps { }

const Cube3D: React.FC<Cube3DProps> = () => {
  // Start with an angled position showing all three faces equally
  const [rotation, setRotation] = useState({ x: -30, y: 45 });
  const [personName, setPersonName] = useState('');
  const [dateOfReading, setDateOfReading] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);



  // Constrain rotation to only show the three visible faces
  const constrainRotation = (x: number, y: number) => {
    // Constrain X rotation (vertical) - only allow 0 to -90 degrees
    const constrainedX = Math.max(-90, Math.min(0, x));

    // Constrain Y rotation (horizontal) - only allow 0 to 90 degrees
    const constrainedY = Math.max(0, Math.min(90, y));

    return { x: constrainedX, y: constrainedY };
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isStarted) return;
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  }, [isStarted]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    // Convert mouse movement to rotation (adjust sensitivity)
    const sensitivity = 0.25;
    const newRotationY = rotation.y + deltaX * sensitivity;
    const newRotationX = rotation.x - deltaY * sensitivity;

    // Apply constraints
    const constrainedRotation = constrainRotation(newRotationX, newRotationY);
    setRotation(constrainedRotation);

    setLastMousePos({ x: e.clientX, y: e.clientY });
  }, [isDragging, lastMousePos, rotation]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleStartNow = () => {
    if (personName && dateOfReading) {
      setIsStarted(true);
      // Rotate to show the Quality face, which is on the left (rotated -90deg)
      setRotation({ x: 0, y: 90 });
    } else {
      alert('Please provide a name and date to start.');
    }
  };

  const showFace = (face: 'purpose' | 'quality' | 'time') => {
    switch (face) {
      case 'purpose':
        setRotation({ x: -90, y: 0 });
        break;
      case 'quality':
        setRotation({ x: 0, y: 90 });
        break;
      case 'time':
        setRotation({ x: 0, y: 0 });
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {/* Cube Container */}
      <div className="mb-18">
        <div
          ref={cubeRef}
          className="relative mx-auto cursor-grab"
          style={{
            width: '160px',
            height: '160px',
            perspective: '1000px',
            perspectiveOrigin: '50% 50%',
            transform: isStarted ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.5s ease-in-out',
          }}
          onMouseDown={handleMouseDown}
        >
          <div
            className="relative preserve-3d transition-transform duration-500 ease-in-out"
            style={{
              width: '160px',
              height: '160px',
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformOrigin: '50% 50%'
            }}
          >

            {/* Face 1: translateZ(80px) - Front Face - InteractiveTimeFace */}
            <div
              className="cube-face"
              style={{
                width: '160px',
                height: '160px',
                transform: 'translateZ(80px)'
              }}
            >
              <InteractiveTimeFace />
            </div>

            {/* Face 2: rotateY(-90deg) translateZ(80px) - Left Face - InteractiveQualityFace */}
            <div
              className="cube-face"
              style={{
                width: '160px',
                height: '160px',
                transform: 'rotateY(-90deg) translateZ(80px)'
              }}
            >
              <InteractiveQualityFace />
            </div>

            {/* Face 3: rotateY(90deg) translateZ(80px) - Right Face - InteractiveTimeFace */}
            <div
              className="cube-face"
              style={{
                width: '160px',
                height: '160px',
                transform: 'rotateY(90deg) translateZ(80px)'
              }}
            >
              <InteractiveTimeFace />
            </div>

            {/* Face 4: rotateX(90deg) translateZ(80px) - Top Face - InteractivePurposeFace */}
            <div
              className="cube-face"
              style={{
                width: '160px',
                height: '160px',
                transform: 'rotateX(90deg) translateZ(80px)'
              }}
            >
              <InteractivePurposeFace />
            </div>

            {/* Bottom Face (hidden) */}
            <div
              className="cube-face"
              style={{
                width: '160px',
                height: '160px',
                transform: 'rotateX(-90deg) translateZ(80px)'
              }}
            />
          </div>
        </div>


      </div>

      {isStarted && (
        <div className="flex justify-center space-x-4 my-4">
          <Button onClick={() => showFace('purpose')}>Purpose</Button>
          <Button onClick={() => showFace('quality')}>Qualities</Button>
          <Button onClick={() => showFace('time')}>Time</Button>
        </div>
      )}

      {!isStarted && (
        <>
          {/* Title */}
          <h1 className="text-4xl mb-8 text-center luvbox-brand">
            Take a snapshot of a relationship past or present
          </h1>

          {/* Input Fields - Centered */}
          <div className="space-y-4 w-full max-w-sm mx-auto">
            <input
              type="text"
              placeholder="Name of person"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              className="w-full py-3 bg-[rgba(181,182,233,0.4)] rounded-2xl text-center text-[20px] placeholder:text-[rgba(61,53,53,0.4)] border-none outline-none"
            />

            <input
              type="text"
              placeholder="Date of reading"
              value={dateOfReading}
              onChange={(e) => setDateOfReading(e.target.value)}
              className="w-full py-3 bg-[rgba(181,182,233,0.4)] rounded-2xl text-center text-[20px] placeholder:text-[rgba(61,53,53,0.4)] border-none outline-none"
            />
          </div>

          {/* Start Button - Centered */}
          <div className="flex justify-center mt-6">
            <Button onClick={handleStartNow}>
              Start Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cube3D;