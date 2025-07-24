import { CONTENT } from '@/content';
import { AnimatedSection } from '@/shared/components';
import Button from '@/shared/components/Button';
import FeatureCard from '../components/FeatureCard';

interface StaggeredSectionProps {
  onCTAClick: () => void;
}

export default function StaggeredSection({ onCTAClick }: StaggeredSectionProps) {
  const features = CONTENT.website.features;

  return (
    <div className="min-h-screen w-full py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Title */}
        <AnimatedSection animation="slideUp" delay={0} threshold={0.6}>
          <div className="text-center mb-16">
            <h2 className="text-web-hero text-[var(--lb-black-800)] italic">
              {CONTENT.website.staggeredSection.title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Use individual AnimatedSection for each card to trigger based on individual scroll position */}
        <div className="staggered-grid-extended">
          {/* Cards in order of appearance */}
          <div
            className="col-start-1 staggered-card-scroll"
            style={{ gridRow: "1 / 3" }}
          >
            <AnimatedSection
              animation="slideRight"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[0].title}
                description={features[0].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-2 staggered-card-scroll"
            style={{ gridRow: "2 / 4" }}
          >
            <AnimatedSection
              animation="slideLeft"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[1].title}
                description={features[1].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-1 staggered-card-scroll"
            style={{ gridRow: "3 / 5" }}
          >
            <AnimatedSection
              animation="slideRight"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[2].title}
                description={features[2].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-2 staggered-card-scroll"
            style={{ gridRow: "4 / 6" }}
          >
            <AnimatedSection
              animation="slideLeft"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[3].title}
                description={features[3].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-1 staggered-card-scroll"
            style={{ gridRow: "5 / 7" }}
          >
            <AnimatedSection
              animation="slideRight"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[4].title}
                description={features[4].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-2 staggered-card-scroll"
            style={{ gridRow: "6 / 8" }}
          >
            <AnimatedSection
              animation="slideLeft"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[5].title}
                description={features[5].description}
              />
            </AnimatedSection>
          </div>

          <div
            className="col-start-1 staggered-card-scroll"
            style={{ gridRow: "7 / 9" }}
          >
            <AnimatedSection
              animation="slideRight"
              delay={0}
              duration={800}
              threshold={0.8}
              triggerOnce={false}
            >
              <FeatureCard
                title={features[6].title}
                description={features[6].description}
              />
            </AnimatedSection>
          </div>
        </div>

        {/* CTA Button centered below grid */}
        <div className="flex justify-center mt-16">
          <AnimatedSection
            animation="slideUp"
            delay={200}
          >
            <Button onClick={onCTAClick}>
              Make love make sense
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}