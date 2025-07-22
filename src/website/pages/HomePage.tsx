import DiagnosticSection from '@/app/components/DiagnosticSection';
import { AnimatedSection } from '@/shared/components';
import {
  HeroSection,
  MapSection,
  StaggeredSection,
  StorySection,
  TestimonialSection,
  TickerTape
} from '@/website/components';
import type { PageType } from '../../shared/types/app';
import WebsiteHeader from '../components/WebsiteHeader';

interface HomePageProps {
  onCTAClick: () => void;
  onNavigate: (page: PageType) => void;
}

export default function HomePage({ onCTAClick, onNavigate }: HomePageProps) {
  return (
    <div className="relative size-full" data-name="Home Page">
      {/* Bubble Animation - Hidden for now */}
      {/* <BubbleAnimation isActive={true} /> */}

      {/* Header - now fixed at top */}
      <AnimatedSection animation="fade" delay={0} threshold={0} triggerOnce={true}>
        <WebsiteHeader onNavigate={onNavigate} currentPage="home" />
      </AnimatedSection>

      <div className="flex flex-row justify-center relative size-full">
        {/* Main content with top padding to account for fixed header */}
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-0 py-0 relative size-full pt-20">

          {/* Ticker Tape - Restored */}
          <div className="w-screen relative left-1/2 transform -translate-x-1/2" style={{ marginTop: '27px', marginBottom: '24px' }}>
            <TickerTape />
          </div>

          {/* Hero Section - positioned to center content in viewport */}
          <AnimatedSection animation="slideUp" delay={0} className="w-full relative" style={{ zIndex: 2 }}>
            <HeroSection onCTAClick={onCTAClick} />
          </AnimatedSection>

          {/* Main Content Sections */}
          <div className="w-full relative" style={{ zIndex: 2 }}>
            {/* Horizontal Divider */}
            <AnimatedSection animation="fade" delay={100}>
              <div className="w-full border-t border-[var(--lb-black-900-alpha-20)] my-0" />
            </AnimatedSection>

            {/* Staggered Features Section */}
            <AnimatedSection animation="slideUp" delay={100}>
              <StaggeredSection onCTAClick={onCTAClick} />
            </AnimatedSection>

            {/* Horizontal Divider */}
            <AnimatedSection animation="fade" delay={200}>
              <div className="w-full border-t border-[var(--lb-black-900-alpha-20)] my-0" />
            </AnimatedSection>

            {/* Diagnostic Section */}
            <AnimatedSection animation="slideLeft" delay={100}>
              <DiagnosticSection onCTAClick={onCTAClick} />
            </AnimatedSection>

            {/* Horizontal Divider */}
            <AnimatedSection animation="fade" delay={200}>
              <div className="w-full border-t border-[var(--lb-black-900-alpha-20)] my-0" />
            </AnimatedSection>

            {/* Testimonial Section */}
            <AnimatedSection animation="slideRight" delay={100}>
              <TestimonialSection />
            </AnimatedSection>

            {/* Horizontal Divider */}
            <AnimatedSection animation="fade" delay={200}>
              <div className="w-full border-t border-[var(--lb-black-900-alpha-20)] my-0" />
            </AnimatedSection>

            {/* Map Section */}
            <AnimatedSection animation="slideUp" delay={100}>
              <MapSection />
            </AnimatedSection>

            {/* Horizontal Divider */}
            <AnimatedSection animation="fade" delay={200}>
              <div className="w-full border-t border-[var(--lb-black-900-alpha-20)] my-0" />
            </AnimatedSection>

            {/* Story Section */}
            <AnimatedSection animation="slideUp" delay={100}>
              <StorySection onCTAClick={onCTAClick} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}