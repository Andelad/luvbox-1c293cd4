import { useEffect, useRef, useState } from 'react';

interface CarouselItem {
  quote: string;
  author: string;
}

interface LightCarouselProps {
  items: CarouselItem[];
  slidesToShow?: number;
}

export default function LightCarousel({
  items,
  slidesToShow = 3,
}: LightCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, items.length - visibleSlides);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  const slideWidth = 100 / visibleSlides;

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="#3d3535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide >= maxSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="#3d3535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden py-4">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              style={{ flexBasis: `${slideWidth}%` }}
            >
              <div className="h-full mx-3">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] border border-[rgba(61,53,53,0.16)] h-full">
                  <div className="space-y-4">
                    <p className="text-web-body text-[var(--lb-black-800)] italic">
                      "{item.quote}"
                    </p>
                    <div className="text-right">
                      <p className="text-web-subheading text-[var(--lb-black-800)]">
                        — {item.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}