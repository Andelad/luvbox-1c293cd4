import React from 'react';
import WebsiteHeader from './WebsiteHeader';
import TickerTape from './TickerTape';
import HeroSection from './sections/HeroSection';
import StaggeredSection from './sections/StaggeredSection';
import DiagnosticSection from './sections/DiagnosticSection';
import TestimonialSection from './sections/TestimonialSection';
import MapSection from './sections/MapSection';
import StorySection from './sections/StorySection';

interface HomePageProps {
  onCTAClick: () => void;
  onNavigate: (page: string) => void;
}

export default function HomePage({ onCTAClick, onNavigate }: HomePageProps) {
  return (
    <div className="relative size-full" data-name="Home Page">
      <div className="flex flex-row justify-center relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-[55px] py-0 relative size-full">
          {/* Header */}
          <WebsiteHeader onNavigate={onNavigate} currentPage="home" />
          
          {/* Ticker Tape - 24px gap from header, extends to viewport edges */}
          <div className="w-screen relative left-1/2 transform -translate-x-1/2" style={{ marginTop: '107px', marginBottom: '24px' }}>
            <TickerTape />
          </div>

          {/* Hero Section - positioned to center content in viewport */}
          <div className="w-full relative">
            <HeroSection onCTAClick={onCTAClick} />
          </div>

          {/* Main Content Sections */}
          <div className="w-full">
            {/* Horizontal Divider */}
            <div className="w-full border-t border-[rgba(0,0,0,0.2)] my-0" />
            
            {/* Staggered Features Section */}
            <StaggeredSection onCTAClick={onCTAClick} />
            
            {/* Horizontal Divider */}
            <div className="w-full border-t border-[rgba(0,0,0,0.2)] my-0" />
            
            {/* Diagnostic Section */}
            <DiagnosticSection onCTAClick={onCTAClick} />
            
            {/* Horizontal Divider */}
            <div className="w-full border-t border-[rgba(0,0,0,0.2)] my-0" />
            
            {/* Testimonial Section */}
            <TestimonialSection />
            
            {/* Horizontal Divider */}
            <div className="w-full border-t border-[rgba(0,0,0,0.2)] my-0" />
            
            {/* Map Section */}
            <MapSection />
            
            {/* Horizontal Divider */}
            <div className="w-full border-t border-[rgba(0,0,0,0.2)] my-0" />
            
            {/* Story Section */}
            <StorySection onCTAClick={onCTAClick} />
          </div>
        </div>
      </div>
    </div>
  );
}