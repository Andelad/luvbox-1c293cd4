import React from 'react';
import WebsiteHeader from '../../components/Layout/WebsiteHeader';
import TickerTape from '../../components/sections/TickerTape';
import HeroSection from '../../components/sections/HeroSection';
import StaggeredSection from '../../components/sections/StaggeredSection';
import DiagnosticSection from '../../components/sections/DiagnosticSection';
import TestimonialSection from '../../components/sections/TestimonialSection';
import MapSection from '../../components/sections/MapSection';
import StorySection from '../../components/sections/StorySection';
import { PageType } from '../../types/app';

interface HomePageProps {
  onCTAClick: () => void;
  onNavigate: (page: PageType) => void;
}

export default function HomePage({ onCTAClick, onNavigate }: HomePageProps) {
  return (
    <div className="relative size-full" data-name="Home Page">
      {/* Header - now fixed at top */}
      <WebsiteHeader onNavigate={onNavigate} currentPage="home" />
      
      <div className="flex flex-row justify-center relative size-full">        
        {/* Main content with top padding to account for fixed header */}
        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center pl-4 pr-0 py-0 relative size-full pt-20">
          
          {/* Ticker Tape - 24px gap from header, extends to viewport edges */}
          <div className="w-screen relative left-1/2 transform -translate-x-1/2" style={{ marginTop: '27px', marginBottom: '24px' }}>
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