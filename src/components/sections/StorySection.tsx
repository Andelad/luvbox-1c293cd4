import React from 'react';
import Button from './Button';

interface StorySectionProps {
  onCTAClick: () => void;
}

export default function StorySection({ onCTAClick }: StorySectionProps) {
  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="font-['EB_Garamond'] font-semibold italic text-[#3d3535] text-5xl lg:text-6xl mb-8">
            Take charge and write your own love story
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-['Source_Sans_3'] font-normal text-[#3d3535]">
              You are the author of your love story. Whether you're single, dating, or in a relationship, you have the power to shape your romantic future. LuvBox helps you understand your patterns, heal from past wounds, and make intentional choices about love.
            </p>
            
            <p className="font-['Source_Sans_3'] font-normal text-[#3d3535]">
              Stop leaving love to chance. Start taking charge of your story today.
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
            <Button onClick={onCTAClick}>
              Make sense of love today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}