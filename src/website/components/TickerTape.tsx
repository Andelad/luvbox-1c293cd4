import { CONTENT } from '@/content';

function TickerItem({ text, index }: { text: string; index: number }) {
  // Alternate triangle direction based on index
  const isLeftTriangle = index % 2 === 0;

  return (
    <div className="relative mb-3">
      {/* Main speech bubble container */}
      <div className="bg-[var(--success-green-100)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 rounded-lg shrink-0">
        <div className="text-web-mono text-[var(--lb-black-800)] italic tracking-[-0.02em] text-nowrap">
          <p className="block whitespace-pre">
            "{text}"
          </p>
        </div>
      </div>

      {/* Speech bubble triangle tail using SVG for better visibility */}
      <svg
        className={`absolute top-full ${isLeftTriangle ? 'left-4' : 'right-4'}`}
        width="16"
        height="12"
        style={{ transform: 'translateY(-1px)', zIndex: 10 }}
      >
        <polygon
          points="0,0 16,0 8,12"
          fill="var(--success-green-100)"
          stroke="none"
        />
      </svg>
    </div>
  );
}

export default function TickerTape() {
  // Create a longer array with duplicates for seamless loop
  const extendedMessages = [...CONTENT.website.ticker, ...CONTENT.website.ticker, ...CONTENT.website.ticker];

  return (
    <div className="w-full overflow-x-hidden overflow-y-visible bg-transparent pb-4">
      <div className="ticker-container">
        <div className="ticker-content">
          {extendedMessages.map((message, index) => (
            <TickerItem key={index} text={message} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}