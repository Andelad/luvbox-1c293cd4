import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  gridRow: string;
  className?: string;
}

export default function FeatureCard({ title, description, gridRow, className = "" }: FeatureCardProps) {
  return (
    <div 
      className={`bg-[rgba(255,255,255,0.1)] rounded-2xl p-8 relative staggered-card ${className}`}
      style={{ 
        gridRow,
        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)'
      }}
    >
      <div className="space-y-4">
        <h3 className="font-['EB_Garamond'] font-semibold text-[#3d3535] text-4xl leading-tight">
          {title}
        </h3>
        <p className="font-['Source_Sans_3'] font-normal text-[#3d3535] text-lg leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute border border-[rgba(61,53,53,0.16)] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}