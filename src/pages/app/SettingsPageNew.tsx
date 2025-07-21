import React, { useState, useEffect } from 'react';
import { useUser } from '../../lib/storage/hooks';
import { EqualizerArea, EqualizerScores, createEqualizerScores } from '../../types/storage';
import PageWrapperWithSideMenu from '../../components/sections/PageWrapperWithSideMenu';

// Icons for menu items
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
  </svg>
);

const EqualizerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="4" width="2" height="8" fill="currentColor"/>
    <rect x="6" y="2" width="2" height="12" fill="currentColor"/>
    <rect x="10" y="6" width="2" height="8" fill="currentColor"/>
    <rect x="14" y="3" width="2" height="10" fill="currentColor"/>
  </svg>
);

const menuItems = [
  { id: 'profile', label: 'User Profile', icon: <UserIcon /> },
  { id: 'dealbreakers', label: 'Dealbreaker Lines', icon: <EqualizerIcon /> },
];

const SettingsPage: React.FC = () => {
  const { currentUser, updateCurrentUser } = useUser();
  const [activeSection, setActiveSection] = useState('profile');
  
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dealbreakerScores, setDealbreakerScores] = useState<EqualizerScores>(
    createEqualizerScores()
  );

  // Load user data when user changes
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
      setDateOfBirth(currentUser.dateOfBirth ? 
        new Date(currentUser.dateOfBirth).toISOString().split('T')[0] : ''
      );
      setDealbreakerScores(currentUser.dealbreakerScores || createEqualizerScores());
    }
  }, [currentUser]);

  const handleSaveProfile = async () => {
    if (!currentUser) return;
    
    try {
      await updateCurrentUser({
        name,
        email,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : new Date(),
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleSaveDealbreakers = async () => {
    if (!currentUser) return;
    
    try {
      await updateCurrentUser({
        dealbreakerScores,
      });
      alert('Dealbreaker lines updated successfully!');
    } catch (error) {
      console.error('Error updating dealbreakers:', error);
      alert('Error updating dealbreakers');
    }
  };

  const handleDealbreakerChange = (area: EqualizerArea, value: number) => {
    setDealbreakerScores(prev => ({
      ...prev,
      [area]: value,
    }));
  };

  const renderUserProfileSection = () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h2>
      
      {!currentUser ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            No user account found. Please create an account first.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save Profile
          </button>
        </div>
      )}
    </div>
  );

  const renderDealbreakerSection = () => {
    const areas: { key: EqualizerArea; label: string }[] = [
      { key: 'communication', label: 'Communication' },
      { key: 'physical_attraction', label: 'Physical Attraction' },
      { key: 'emotional_connection', label: 'Emotional Connection' },
      { key: 'shared_values', label: 'Shared Values' },
      { key: 'lifestyle_compatibility', label: 'Lifestyle Compatibility' },
      { key: 'future_goals', label: 'Future Goals' },
      { key: 'trust_respect', label: 'Trust & Respect' },
    ];

    return (
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dealbreaker Lines</h2>
        
        {!currentUser ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              No user account found. Please create an account first.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-600 mb-6">
              Set your minimum acceptable scores (0-10) for each area. These represent your personal dealbreaker lines.
            </p>
            
            {areas.map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <span className="text-sm font-semibold text-blue-600">
                    {dealbreakerScores[key]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={dealbreakerScores[key]}
                  onChange={(e) => handleDealbreakerChange(key, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            ))}

            <button
              onClick={handleSaveDealbreakers}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Save Dealbreaker Lines
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <PageWrapperWithSideMenu
      title="Settings"
      menuItems={menuItems}
      activeMenuItem={activeSection}
      onMenuItemChange={setActiveSection}
      defaultOpenOnLargeScreen={true} // Only settings page defaults to open
    >
      <div className="p-6">
        {activeSection === 'profile' && renderUserProfileSection()}
        {activeSection === 'dealbreakers' && renderDealbreakerSection()}
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </PageWrapperWithSideMenu>
  );
};

export default SettingsPage;
