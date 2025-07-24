import { CONTENT } from '@/content';
import { useState } from 'react';

// Import map section images
import bookImage from '@/assets/icons/book.png';
import communityImage from '@/assets/icons/community.png';
import cubeImage from '@/assets/icons/cube.png';
import personImage from '@/assets/icons/person.png';

export default function MapSection() {
  const [imagesLoaded, setImagesLoaded] = useState({
    cube: false,
    book: false,
    person: false,
    community: false
  });

  const handleImageLoad = (imageName: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  return (
    <div className="min-h-screen w-full py-20 flex items-center">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-web-hero  italic mb-6">
            {CONTENT.website.map.title}
          </h2>
          <p className="text-web-body  max-w-2xl mx-auto">
            {CONTENT.website.map.description}
          </p>
        </div>

        {/* Interactive Map with Floating Images */}
        <div className="relative max-w-5xl mx-auto" style={{ height: '500px' }}>
          <div className="relative w-full h-full max-w-800px max-h-500px mx-auto">

            {/* The LuvBox - Top Center */}
            <div
              className="absolute animate-float-cube z-2 text-center"
              style={{
                width: '100px',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <span className="block italic  mb-2.5">
                The LuvBox
              </span>
              <img
                src={cubeImage}
                alt="The LuvBox Cube"
                draggable={false}
                onLoad={() => handleImageLoad('cube')}
                style={{
                  opacity: imagesLoaded.cube ? 1 : 0,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '120px',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>

            {/* My Scripts - Left Side */}
            <div
              className="absolute animate-float-simple z-2 text-center"
              style={{
                width: '100px',
                top: '200px',
                left: '20%',
                animationDelay: '1.5s'
              }}
            >
              <span className="block italic  mb-2.5">
                My Scripts
              </span>
              <img
                src={bookImage}
                alt="My Scripts Book"
                draggable={false}
                onLoad={() => handleImageLoad('book')}
                style={{
                  opacity: imagesLoaded.book ? 1 : 0,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100px',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>

            {/* Myself - Right Side */}
            <div
              className="absolute animate-float-simple z-2 text-center"
              style={{
                width: '80px',
                top: '200px',
                right: '20%',
                animationDelay: '3s'
              }}
            >
              <span className="block italic  mb-2.5">
                Myself
              </span>
              <img
                src={personImage}
                alt="Myself"
                draggable={false}
                onLoad={() => handleImageLoad('person')}
                style={{
                  opacity: imagesLoaded.person ? 1 : 0,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '80px',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>

            {/* Community - Bottom Center */}
            <div
              className="absolute animate-float-community z-2 text-center"
              style={{
                width: '90px',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <span className="block italic  mb-2.5">
                Community
              </span>
              <img
                src={communityImage}
                alt="Community"
                draggable={false}
                onLoad={() => handleImageLoad('community')}
                style={{
                  opacity: imagesLoaded.community ? 1 : 0,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '90px',
                  transition: 'opacity 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}