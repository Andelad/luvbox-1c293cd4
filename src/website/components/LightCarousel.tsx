import { useEffect, useState } from 'react';

interface CarouselItem {
  quote: string;
  author: string;
}

interface LightCarouselProps {
  items: CarouselItem[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export default function LightCarousel({
  items,
  slidesToShow = 3,
  autoplay = true,
  autoplaySpeed = 4000
}: LightCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(slidesToShow);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesToShow]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev + visibleSlides >= items.length ? 0 : prev + 1
      );
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, items.length, visibleSlides]);

  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < visibleSlides; i++) {
      const index = (currentSlide + i) % items.length;
      result.push(items[index]);
    }
    return result;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalDots = Math.ceil(items.length / visibleSlides);

  return (
    <div className="w-full">
      {/* Slides Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: `translate3d(-${(currentSlide * 100) / visibleSlides}%, 0, 0)`,
            width: `${(items.length * 100) / visibleSlides}%`
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4"
              style={{ width: `${100 / items.length}%` }}
            >
              <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-8 relative h-64">
                <div className="space-y-4 h-full flex flex-col justify-between">
                  <p className="text-web-body text-[var(--lb-black-800)] italic flex-grow">
                    "{item.quote}"
                  </p>
                  <div className="text-right">
                    <p className="text-web-subheading text-[var(--lb-black-800)]">
                      — {item.author}
                    </p>
                  </div>
                </div>
                <div className="absolute border border-[rgba(61,53,53,0.16)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * visibleSlides)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${Math.floor(currentSlide / visibleSlides) === index
                ? 'bg-[#3d3535]'
                : 'bg-[rgba(61,53,53,0.3)]'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}