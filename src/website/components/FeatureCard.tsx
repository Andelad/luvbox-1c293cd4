
import { useCenterViewport } from '@/shared/hooks/useCenterViewport';

interface FeatureCardProps {
  title: string;
  description: string;
  gridRow: string;
  className?: string;
}

export default function FeatureCard({ title, description, gridRow, className = "" }: FeatureCardProps) {
  const { elementRef, isInCenter } = useCenterViewport<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className={`rounded-2xl p-8 relative staggered-card transition-all duration-400 ease-out ${className}`}
      style={{
        gridRow,
        backgroundColor: isInCenter ? 'var(--lb-black-0-alpha-15)' : 'var(--lb-black-0-alpha-10)',
        boxShadow: '0px 4px 12px 0px var(--lb-black-900-alpha-25)'
      }}
    >
      <div className="space-y-4">
        <h3 className="text-web-heading text-[var(--lb-black-800)] italic">
          {title}
        </h3>
        <p className="text-web-body text-[var(--lb-black-800)]">
          {description}
        </p>
      </div>
      <div className="absolute border border-[rgba(61,53,53,0.16)] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}