import React from 'react';
import FeatureCard from './FeatureCard';
import Button from '../Button';

interface StaggeredSectionProps {
  onCTAClick: () => void;
}

export default function StaggeredSection({ onCTAClick }: StaggeredSectionProps) {
  const description = "Love is beautiful when it feels effortless. But, what about when its difficult, you feel confused, or you can't let go? LuvBox is your tool for assessing what is happening, what is inspiring your feelings and what to do about them.";
  
  const features = [
    "Untangle mixed feelings",
    "Make sense of past relationships",
    "Learn how to build love", 
    "Overcome repeating patterns",
    "Celebrate your unique love story",
    "Be purposeful in future dating",
    "Set loving boundaries"
  ];

  return (
    <div className="min-h-screen w-full py-20">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* CSS Grid with 2 columns and 8 rows for staggered effect */}
        <div className="staggered-grid-extended">
          {/* First column cards - position 1, 3, 5, 7 */}
          <FeatureCard 
            title={features[0]}
            description={description}
            gridRow="1 / 3"
            className="col-start-1"
          />
          
          <FeatureCard 
            title={features[2]}
            description={description}
            gridRow="3 / 5"
            className="col-start-1"
          />
          
          <FeatureCard 
            title={features[4]}
            description={description}
            gridRow="5 / 7"
            className="col-start-1"
          />

          <FeatureCard 
            title={features[6]}
            description={description}
            gridRow="7 / 9"
            className="col-start-1"
          />

          {/* Second column cards - position 2, 4, 6 */}
          <FeatureCard 
            title={features[1]}
            description={description}
            gridRow="2 / 4"
            className="col-start-2"
          />
          
          <FeatureCard 
            title={features[3]}
            description={description}
            gridRow="4 / 6"
            className="col-start-2"
          />
          
          <FeatureCard 
            title={features[5]}
            description={description}
            gridRow="6 / 8"
            className="col-start-2"
          />
        </div>

        {/* CTA Button centered below grid */}
        <div className="flex justify-center mt-16">
          <Button onClick={onCTAClick}>
            Make love make sense
          </Button>
        </div>
      </div>
    </div>
  );
}