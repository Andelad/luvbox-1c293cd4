import { useCenterViewport } from '@/shared/hooks/useCenterViewport';

interface WhoCardProps {
  items: string[];
  iconType: 'check' | 'x';
  className?: string;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--success-green-400)' }}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--caution-red-400)' }}>
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function WhoCard({ items, iconType, className = "" }: WhoCardProps) {
  const { elementRef, isInCenter, centerProgress } = useCenterViewport<HTMLDivElement>();

  // Calculate dynamic background opacity based on center proximity
  // Ranges from 0.05 (far from center) to 0.25 (at center)
  const backgroundOpacity = 0.05 + (centerProgress * 0.2);

  const Icon = iconType === 'check' ? CheckIcon : XIcon;

  return (
    <div
      ref={elementRef}
      className={`rounded-2xl p-8 relative transition-all duration-500 ease-out ${className}`}
      style={{
        backgroundColor: `color(from var(--lb-black-0) srgb r g b / ${backgroundOpacity})`,
        boxShadow: '0px 4px 12px 0px var(--lb-black-900-alpha-15)'
      }}
    >
      <div className="space-y-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Icon />
              <span className="text-web-body text-[var(--lb-black-800)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
