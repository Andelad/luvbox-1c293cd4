import SvgIcon5 from '@/assets/icons/DiagnosticIcons';
import Button from '@/shared/components/Button';
import OptimizedCube from '@/website/components/OptimizedCube';

const diagnosticSvgPaths = SvgIcon5;

interface DiagnosticSectionProps {
  onCTAClick: () => void;
}

export default function DiagnosticSection({ onCTAClick }: DiagnosticSectionProps) {
  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-web-hero luvmap-brand text-center lg:text-left">
              Assess past or current relationships
            </h2>

            <div className="space-y-6">
              <p className="text-web-body" style={{ color: 'var(--lb-black-800)' }}>
                Our diagnostic tool helps you think through your relationship, understanding sticking points and why you might not feel 'in love'. It will help you see where things are wrong, and what you could do to improve
              </p>
            </div>

            <div className="pt-4">
              <Button onClick={onCTAClick}>
                Make sense of love today
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <OptimizedCube />
          </div>
        </div>
      </div>
    </div>
  );
}