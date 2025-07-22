
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
        <h3 className="text-web-heading text-[var(--lb-black-800)]">
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