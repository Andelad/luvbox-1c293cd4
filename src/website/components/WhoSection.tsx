import { CONTENT } from '@/content';
import { AnimatedSection } from '@/shared/components';
import WhoCard from './WhoCard';

interface WhoSectionProps {}

export default function WhoSection({}: WhoSectionProps) {
  const whoContent = CONTENT.website.whoSection;

  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Title */}
        <AnimatedSection animation="slideUp" delay={0} threshold={0.6}>
          <div className="text-center mb-16">
            <h2 className="text-web-hero text-[var(--lb-black-800)] italic">
              {whoContent.title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who this is for */}
          <AnimatedSection
            animation="slideRight"
            delay={100}
            duration={800}
            threshold={0.6}
          >
            <WhoCard
              items={whoContent.whoFor.items}
              iconType="check"
              className="h-full"
            />
          </AnimatedSection>

          {/* Who this isn't for */}
          <AnimatedSection
            animation="slideLeft"
            delay={200}
            duration={800}
            threshold={0.6}
          >
            <WhoCard
              items={whoContent.whoNot.items}
              iconType="x"
              className="h-full"
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
