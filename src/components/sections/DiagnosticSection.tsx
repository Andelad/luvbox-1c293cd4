import React from 'react';
import diagnosticSvgPaths from "../../imports/svg-uxz7wvt32b";
import Button from '../Button';

interface DiagnosticSectionProps {
  onCTAClick: () => void;
}

function DiagnosticCube() {
  return (
    <div className="w-80 h-80 flex items-center justify-center">
      <svg
        className="w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 319 353"
      >
        <g id="Layer_1">
          <path
            d={diagnosticSvgPaths.p202c5580}
            id="Vector"
            stroke="var(--stroke-0, #3D3535)"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <path
            d={diagnosticSvgPaths.p4b9d580}
            id="Vector_2"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={diagnosticSvgPaths.p207fbf60}
            id="Vector_3"
            stroke="var(--stroke-0, #3D3535)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

export default function DiagnosticSection({ onCTAClick }: DiagnosticSectionProps) {
  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="font-['EB_Garamond'] font-semibold italic text-[#3d3535] text-5xl lg:text-6xl leading-tight text-center lg:text-left">
              Diagnose what's working and what's not
            </h2>
            
            <div className="space-y-6">
              <h3 className="font-['EB_Garamond'] font-semibold text-[#3d3535] text-2xl">
                Assess past or current relationships
              </h3>
              
              <p className="font-['Source_Sans_3'] font-normal text-[#3d3535] text-lg leading-relaxed">
                Our diagnostic tool helps you think through your relationship, understanding sticking points and why you might not feel 'in love'. It will help you see where things are wrong, and what you could do to improve
              </p>
            </div>

            <div className="pt-4">
              <Button onClick={onCTAClick}>
                Make sense of love today
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <DiagnosticCube />
          </div>
        </div>
      </div>
    </div>
  );
}