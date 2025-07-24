import { CONTENT } from '@/content';
import { AnimatedSection } from '@/shared/components';
import Button from '@/shared/components/Button';
import OptimizedCube from '../components/OptimizedCube';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const heroContent = CONTENT.website.heroSection;

  return (
    <div className="w-full relative">
      {/* Hero content positioned to center between header and bottom of screen */}
      <div
        className="w-full flex items-center justify-center absolute"
        style={{
          height: '100vh',
          top: '-200px', // Adjusted offset for header centering
          left: 0,
          right: 0,
          zIndex: 1
        }}
      >
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <AnimatedSection animation="slideLeft" delay={0} threshold={0.2}>
                <h1 className="text-web-hero  italic">
                  {heroContent.title}
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={100} threshold={0.2}>
                <div className="text-web-caption  uppercase tracking-wide">
                  {heroContent.subtitle}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={200} threshold={0.2}>
                <p className="text-web-body  max-w-lg">
                  {heroContent.description}
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="slideUp" delay={300} threshold={0.2}>
              <div className="pt-4">
                <Button onClick={onCTAClick}>
                  {heroContent.cta}
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Cube */}
          <AnimatedSection animation="slideRight" delay={150} threshold={0.2}>
            <div className="flex justify-center lg:justify-end">
              <OptimizedCube />
            </div>
          </AnimatedSection>
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