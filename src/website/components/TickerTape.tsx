import { CONTENT } from '@/content';

function TickerItem({ text }: { text: string }) {
  return (
    <div className="bg-[var(--success-green-100)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 rounded-lg shrink-0">
      <div className="text-web-mono text-[var(--lb-black-800)] italic tracking-[-0.02em] text-nowrap">
        <p className="block whitespace-pre">
          "{text}"
        </p>
      </div>
    </div>
  );
}

export default function TickerTape() {
  // Create a longer array with duplicates for seamless loop
  const extendedMessages = [...CONTENT.website.ticker, ...CONTENT.website.ticker, ...CONTENT.website.ticker];

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="ticker-container">
        <div className="ticker-content">
          {extendedMessages.map((message, index) => (
            <TickerItem key={index} text={message} />
          ))}
        </div>
      </div>
    </div>
  );
}