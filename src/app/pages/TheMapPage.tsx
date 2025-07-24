import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';
import React, { useEffect, useState } from 'react';
import './TheMapPage.css';

// Import map section images
import bookImage from '@/assets/icons/book.png';
import communityImage from '@/assets/icons/community.png';
import cubeImage from '@/assets/icons/cube.png';
import personImage from '@/assets/icons/person.png';

const TheMapPage: React.FC = () => {
  const content = CONTENT.pages.theMap;
  const [activeSection, setActiveSection] = useState('overview');

  const [imagesLoaded, setImagesLoaded] = useState({
    cube: false,
    book: false,
    person: false,
    community: false
  });

  // Listen for side menu changes from the AppLayout
  useEffect(() => {
    const handleMenuChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('mapMenuChange', handleMenuChange as EventListener);
    return () => window.removeEventListener('mapMenuChange', handleMenuChange as EventListener);
  }, []);

  const handleImageLoad = (imageName: string) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Update breadcrumbs
    window.dispatchEvent(new CustomEvent('mapMenuChange', { detail: section }));
  };

  const getBreadcrumbs = () => {
    const sectionNames = {
      'overview': [content.title],
      'luvbox-info': [content.title, 'The LuvBox'],
      'scripts': [content.title, 'My Scripts'],
      'self': [content.title, 'Myself'],
      'community': [content.title, 'Community']
    };
    return sectionNames[activeSection as keyof typeof sectionNames] || [content.title];
  };

  const renderOverviewSection = () => (
    <div className="map-content">
      <div className="visual-content">
        <div className="diagram diamond-layout">

          {/* Images positioned in a diamond layout with click handlers */}
          <div
            className="diagram-element diagram-cube animate-float-cube cursor-pointer"
            style={{
              width: '100px',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            onClick={() => handleSectionChange('luvbox-info')}
          >
            <span className="element-label">
              The LuvBox
            </span>
            <img
              src={cubeImage}
              alt="The LuvBox Cube"
              onLoad={() => handleImageLoad('cube')}
              style={{ opacity: imagesLoaded.cube ? 1 : 0 }}
            />
          </div>

          <div
            className="diagram-element book animate-float-simple cursor-pointer"
            style={{
              width: '100px',
              top: '200px',
              left: '20%',
              animationDelay: '1.5s'
            }}
            onClick={() => handleSectionChange('scripts')}
          >
            <span className="element-label">
              My Scripts
            </span>
            <img
              src={bookImage}
              alt="My Scripts Book"
              onLoad={() => handleImageLoad('book')}
              style={{ opacity: imagesLoaded.book ? 1 : 0 }}
            />
          </div>

          <div
            className="diagram-element person animate-float-simple cursor-pointer"
            style={{
              width: '80px',
              top: '200px',
              right: '20%',
              animationDelay: '3s'
            }}
            onClick={() => handleSectionChange('self')}
          >
            <span className="element-label">
              Myself
            </span>
            <img
              src={personImage}
              alt="Myself"
              onLoad={() => handleImageLoad('person')}
              style={{ opacity: imagesLoaded.person ? 1 : 0 }}
            />
          </div>

          <div
            className="diagram-element community animate-float-community cursor-pointer"
            style={{
              width: '90px',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            onClick={() => handleSectionChange('community')}
          >
            <span className="element-label">
              Community
            </span>
            <img
              src={communityImage}
              alt="Community"
              onLoad={() => handleImageLoad('community')}
              style={{ opacity: imagesLoaded.community ? 1 : 0 }}
            />
          </div>
        </div>
      </div>

      {content.footer && (
        <div className="map-footer">
          <p className="ps-note">
            {content.footer}
          </p>
        </div>
      )}
    </div>
  );

  const renderLuvBoxInfoSection = () => (
    <div className="page-content">
      <div className="content-section">
        <button
          onClick={() => handleSectionChange('overview')}
          className="back-button mb-6 text-primary hover:underline"
        >
          ← Back to Map
        </button>

        <h2 className="text-app-heading mb-4">
          The LuvBox
        </h2>
        <p className="text-app-body mb-8">
          Your diagnostic tool for dating and love. Learn how to use the LuvBox Cube to explore different aspects of your relationships.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">How to Use the LuvBox Cube</h3>
            <p className="text-gray-600 leading-relaxed">
              The LuvBox Cube is a powerful tool designed to help you navigate and understand your relationships. By visualizing different aspects of love and connection, the cube provides insights that can guide your decisions and enhance your experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Setting Up Your Cube</h3>
            <p className="text-gray-600 leading-relaxed mb-3">To get started with the LuvBox Cube, follow these steps:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Complete the initial assessment to personalize your cube</li>
              <li>Navigate to the Cube section from the main menu</li>
              <li>Begin exploring its features and insights</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Interactive Visualization:</strong> Rotate and explore the cube to see different aspects of your relationship</li>
              <li><strong>Personalized Insights:</strong> Receive tailored advice based on your assessment results</li>
              <li><strong>Progress Tracking:</strong> Monitor changes and improvements over time</li>
              <li><strong>Resource Library:</strong> Access articles, videos, and tools to support your relationship journey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScriptsSection = () => (
    <div className="page-content">
      <div className="content-section">
        <button
          onClick={() => handleSectionChange('overview')}
          className="back-button mb-6 text-primary hover:underline"
        >
          ← Back to Map
        </button>

        <h2 className="text-app-heading mb-4">
          My Scripts
        </h2>
        <p className="text-app-body mb-8">
          Discover and create scripts for better relationships. Learn conversation starters, conflict resolution techniques, and communication strategies.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">Understanding Your Love Narratives</h3>
            <p className="text-gray-600 leading-relaxed">
              Love narratives are the stories we tell ourselves about love, relationships, and what they should look like. These scripts influence our expectations, behaviors, and interpretations of romantic experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-3">How Scripts Work</h3>
            <p className="text-gray-600 leading-relaxed mb-3">Your love narratives are shaped by:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Past relationship experiences</li>
              <li>Cultural and family influences</li>
              <li>Media representations of love</li>
              <li>Personal values and beliefs</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Identifying Your Scripts</h3>
            <p className="text-gray-600 leading-relaxed">
              By completing our assessment, you can discover which love narratives resonate most with you and understand how they influence your relationship choices.
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p >
              Complete the dealbreakers assessment and narrative ranking to see your personalized results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSelfSection = () => (
    <div className="page-content">
      <div className="content-section">
        <button
          onClick={() => handleSectionChange('overview')}
          className="back-button mb-6 text-primary hover:underline"
        >
          ← Back to Map
        </button>

        <h2 className="text-app-heading mb-4">
          Myself
        </h2>
        <p className="text-app-body mb-8">
          Understanding yourself is the foundation of healthy relationships.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">The Intelligence of Your Gut</h3>
            <p className="text-gray-600 leading-relaxed">
              Your intuition is a powerful tool in relationships. It processes countless subtle cues and experiences to provide insights that your conscious mind might miss.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Your Unique Perspective</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Everyone brings their own unique perspective to relationships based on their experiences, values, and personal growth. Understanding your perspective helps you:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Recognize your relationship patterns</li>
              <li>Understand your emotional responses</li>
              <li>Identify areas for growth</li>
              <li>Communicate your needs effectively</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Trusting Your Direction</h3>
            <p className="text-gray-600 leading-relaxed">
              Learning to trust yourself in relationships means balancing intuition with rational thinking, understanding your values, and being honest about your needs and boundaries.
            </p>
          </div>

          <div>
            <h3 className="mb-3">A Living Partnership</h3>
            <p className="text-gray-600 leading-relaxed">
              The relationship you have with yourself sets the foundation for all other relationships. By understanding and nurturing this relationship, you create the capacity for deeper, more authentic connections with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunitySection = () => (
    <div className="page-content">
      <div className="content-section">
        <button
          onClick={() => handleSectionChange('overview')}
          className="back-button mb-6 text-primary hover:underline"
        >
          ← Back to Map
        </button>

        <h2 className="text-app-heading mb-4">
          Community
        </h2>
        <p className="text-app-body mb-8">
          The people around us shape our understanding and experience of love.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">Building Real Connections</h3>
            <p className="text-gray-600 leading-relaxed">
              Authentic community provides a supportive environment where we can explore questions about love and relationships without judgment. It offers perspectives that help us grow and understand ourselves better.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Shared Experiences</h3>
            <p className="text-gray-600 leading-relaxed mb-3">Community allows us to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Learn from others' relationship experiences</li>
              <li>Share our own insights and challenges</li>
              <li>Find support during difficult times</li>
              <li>Celebrate relationship milestones together</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Growing Together</h3>
            <p className="text-gray-600 leading-relaxed">
              Community creates a space for mutual growth and learning. Through discussion, reflection, and shared wisdom, we can challenge our assumptions and develop new perspectives on love and connection.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Support Network</h3>
            <p className="text-gray-600 leading-relaxed">
              A strong community provides a foundation of support that can help us navigate the complexities of relationships, especially during major decisions, challenges, transitions, and moments of celebration.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Future Features</h3>
            <p className="text-gray-600 leading-relaxed">
              We're working on building community features that will allow LuvBox users to connect, share experiences, and support each other on their relationship journeys. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="map-page">
      <PageHeader
        breadcrumbs={getBreadcrumbs()}
      />

      <div className="map-container">
        {activeSection === 'overview' && (
          <>
            <h1 className="map-title">
              {content.title}
            </h1>

            <div className="map-subtitle">
              <p>
                {content.subtitle}
              </p>
            </div>

            {renderOverviewSection()}
          </>
        )}

        {activeSection === 'luvbox-info' && renderLuvBoxInfoSection()}
        {activeSection === 'scripts' && renderScriptsSection()}
        {activeSection === 'self' && renderSelfSection()}
        {activeSection === 'community' && renderCommunitySection()}
      </div>
    </div>
  );
};

export default TheMapPage;
