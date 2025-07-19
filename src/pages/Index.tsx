import React from 'react';
import WebsiteHeader from '../components/Layout/WebsiteHeader';
import TickerTape from '../components/sections/TickerTape';
import HeroSection from '../components/sections/HeroSection';
import StaggeredSection from '../components/sections/StaggeredSection';
import DiagnosticSection from '../components/sections/DiagnosticSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import MapSection from '../components/sections/MapSection';
import StorySection from '../components/sections/StorySection';
import { PageType } from '../types/app';

interface HomePageProps {
  onCTAClick: () => void;
  onNavigate: (page: PageType) => void;
}

export default function HomePage({ onCTAClick, onNavigate }: HomePageProps) {
  console.log('HomePage rendering');
  
  try {
    return (
      <div className="min-h-screen w-full p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to LuvBox</h1>
        <div className="text-center">
          <button 
            onClick={onCTAClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
        
        {/* Temporarily comment out complex components */}
        {/* <WebsiteHeader onNavigate={onNavigate} currentPage="home" />
        <TickerTape />
        <HeroSection onCTAClick={onCTAClick} />
        <StaggeredSection onCTAClick={onCTAClick} />
        <DiagnosticSection onCTAClick={onCTAClick} />
        <TestimonialSection />
        <MapSection />
        <StorySection onCTAClick={onCTAClick} /> */}
      </div>
    );
  } catch (error) {
    console.error('HomePage error:', error);
    return (
      <div className="min-h-screen w-full p-8">
        <h1 className="text-4xl font-bold text-center text-red-600">Error in HomePage</h1>
        <p className="text-center mt-4">{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }
}