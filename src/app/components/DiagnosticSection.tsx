import SvgIcon5 from '@/assets/icons/DiagnosticIcons';
import { CONTENT } from '@/content';
import { AnimatedSection } from '@/shared/components';
import Button from '@/shared/components/Button';
import OptimizedCube from '@/website/components/OptimizedCube';

const diagnosticSvgPaths = SvgIcon5;

interface DiagnosticSectionProps {
  onCTAClick: () => void;
}

export default function DiagnosticSection({ onCTAClick }: DiagnosticSectionProps) {
  const diagnosticContent = CONTENT.website.diagnosticSection;

  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <AnimatedSection animation="slideLeft" delay={0} threshold={0.2}>
                <h2 className="text-web-hero luvmap-brand text-center lg:text-left">
                  {diagnosticContent.title}
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={200} threshold={0.2}>
                <p className="text-web-body" style={{ color: 'var(--lb-black-800)' }}>
                  {diagnosticContent.description}
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="slideUp" delay={300} threshold={0.2}>
              <div className="pt-4">
                <Button onClick={onCTAClick}>
                  {diagnosticContent.cta}
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Illustration */}
          <AnimatedSection animation="slideRight" delay={150} threshold={0.2}>
            <div className="flex justify-center lg:justify-end">
              <OptimizedCube />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}