import Button from '@/shared/components/Button';
import OptimizedCube from './OptimizedCube';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <div className="w-full relative">
      {/* Hero content positioned to center in viewport */}
      <div
        className="w-full flex items-center justify-center absolute"
        style={{
          height: '100vh',
          top: 'calc(-107px - 24px)', // Offset to account for ticker margins
          left: 0,
          right: 0,
          zIndex: 1
        }}
      >
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-web-hero text-[var(--lb-black-800)] italic">
                Do I love<br />them?
              </h1>
              <div className="text-web-caption text-[var(--lb-black-800)] uppercase tracking-wide">
                LUVBOX IS YOUR LOVE & DATING DIAGNOSTICS TOOL
              </div>
              <p className="text-web-body text-[var(--lb-black-800)] max-w-lg">
                Can't find it? Had it but lost it? Not sure if it exists? LuvBox is your tool to assess relationships past and present, and your beliefs about love so you can take charge and write your own love story.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={onCTAClick}>
                Make sense of love today
              </Button>
            </div>
          </div>

          {/* Right Column - Cube */}
          <div className="flex justify-center lg:justify-end">
            <OptimizedCube />
          </div>
        </div>
      </div>

      {/* Spacer to maintain page flow */}
      <div
        className="w-full"
        style={{ height: 'calc(100vh - 83px - 107px - 24px)' }}
      />
    </div>
  );
}