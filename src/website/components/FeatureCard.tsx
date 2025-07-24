
import { useCenterViewport } from '@/shared/hooks/useCenterViewport';

interface FeatureCardProps {
  title: string;
  description: string;
  gridRow?: string;
  className?: string;
}

export default function FeatureCard({ title, description, gridRow, className = "" }: FeatureCardProps) {
  const { elementRef, isInCenter, centerProgress } = useCenterViewport<HTMLDivElement>();

  // Calculate dynamic background opacity based on center proximity
  // Ranges from 0.05 (far from center) to 0.25 (at center)
  const backgroundOpacity = 0.05 + (centerProgress * 0.2);

  return (
    <div
      ref={elementRef}
      className={`rounded-2xl p-8 relative staggered-card transition-all duration-500 ease-out ${className}`}
      style={{
        gridRow,
        backgroundColor: `color(from var(--lb-black-0) srgb r g b / ${backgroundOpacity})`,
        boxShadow: '0px 4px 12px 0px var(--lb-black-900-alpha-15)'
      }}
    >
      <div className="space-y-6">
        <h3 className="text-web-heading-2">
          {title}
        </h3>
        <p className="text-web-body">
          {description}
        </p>
      </div>
    </div>
  );
}