import { CONTENT } from '@/content';
import { AnimatedSection } from '@/shared/components';
import Button from '@/shared/components/Button';
import FeatureCard from './FeatureCard';

interface StaggeredSectionProps {
  onCTAClick: () => void;
}

export default function StaggeredSection({ onCTAClick }: StaggeredSectionProps) {
  const features = CONTENT.website.features;

  return (
    <div className="min-h-screen w-full py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* CSS Grid with 2 columns and 8 rows for staggered effect */}
        <div className="staggered-grid-extended">
          {/* First column cards - position 1, 3, 5, 7 */}
          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-1"
            style={{ gridRow: "1 / 3" }}
          >
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              gridRow=""
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-1"
            style={{ gridRow: "3 / 5" }}
          >
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              gridRow=""
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-1"
            style={{ gridRow: "5 / 7" }}
          >
            <FeatureCard
              title={features[4].title}
              description={features[4].description}
              gridRow=""
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-1"
            style={{ gridRow: "7 / 9" }}
          >
            <FeatureCard
              title={features[6].title}
              description={features[6].description}
              gridRow=""
            />
          </AnimatedSection>

          {/* Second column cards - position 2, 4, 6 */}
          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-2"
            style={{ gridRow: "2 / 4" }}
          >
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              gridRow=""
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-2"
            style={{ gridRow: "4 / 6" }}
          >
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              gridRow=""
            />
          </AnimatedSection>

          <AnimatedSection
            animation="slideUp"
            delay={0}
            className="col-start-2"
            style={{ gridRow: "6 / 8" }}
          >
            <FeatureCard
              title={features[5].title}
              description={features[5].description}
              gridRow=""
            />
          </AnimatedSection>
        </div>

        {/* CTA Button centered below grid */}
        <AnimatedSection
          className="flex justify-center mt-16"
          animation="slideUp"
          delay={0}
        >
          <Button onClick={onCTAClick}>
            Make love make sense
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}