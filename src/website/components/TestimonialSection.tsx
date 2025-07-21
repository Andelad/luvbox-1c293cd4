import React from 'react';
import LightCarousel from './LightCarousel';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "LuvBox helped me understand patterns in my relationships that I never noticed before. It's like having a therapist in your pocket.",
      author: "Sarah M."
    },
    {
      quote: "I was skeptical at first, but the diagnostic tool really opened my eyes to what I was bringing to my relationships.",
      author: "Michael T."
    },
    {
      quote: "The love scripts feature showed me how my past was affecting my present. Game-changing insights.",
      author: "Jennifer L."
    },
    {
      quote: "Finally, a tool that doesn't judge but helps you understand your unique love story. Highly recommend.",
      author: "David R."
    },
    {
      quote: "LuvBox gave me the clarity I needed to have better conversations with my partner about our future.",
      author: "Amanda K."
    }
  ];

  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-['EB_Garamond'] font-semibold italic text-[#3d3535] text-5xl lg:text-6xl mb-6">
            What our users say
          </h2>
          <p className="font-['Source_Sans_3'] font-normal text-[#3d3535] text-lg max-w-2xl mx-auto">
            Discover how LuvBox has helped people gain clarity and understanding in their love lives.
          </p>
        </div>

        <LightCarousel 
          items={testimonials}
          slidesToShow={3}
          autoplay={true}
          autoplaySpeed={4000}
        />
      </div>
    </div>
  );
}