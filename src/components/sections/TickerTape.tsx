const tickerMessages = [
  "I think I love her, but I'm not sure.",
  "What am I looking for?",
  "Something isn't quite right, but I don't know what.",
  "How do I get him out of my head?"
];

function TickerItem({ text }: { text: string }) {
  return (
    <div className="bg-[#cde6bb] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 rounded-lg shrink-0">
      <div className="font-['Spline_Sans_Mono',_monospace] leading-[0] relative shrink-0 text-[#3d3535] text-[18px] text-left text-nowrap italic tracking-[-0.02em]">
        <p className="block leading-[18px] whitespace-pre">
          "{text}"
        </p>
      </div>
    </div>
  );
}

export default function TickerTape() {
  // Create a longer array with duplicates for seamless loop
  const extendedMessages = [...tickerMessages, ...tickerMessages, ...tickerMessages];

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