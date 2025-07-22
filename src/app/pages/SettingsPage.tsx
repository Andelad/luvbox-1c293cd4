import { DealbreakerSliders } from '@/app/components';
import { CONTENT } from '@/content';
import { useAuth, useUser } from '@/shared/lib/storage';
import { EqualizerArea, EqualizerScores, createEqualizerScores } from '@/shared/types/storage';
import { useEffect, useState } from 'react';

const SettingsPage: React.FC = () => {
  const content = CONTENT.pages.settings;
  const { currentUserId } = useAuth();
  const { user, updateUser } = useUser(currentUserId || undefined);
  const [activeSection, setActiveSection] = useState('profile');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dealbreakerScores, setDealbreakerScores] = useState<EqualizerScores>(
    createEqualizerScores()
  );

  // Listen for side menu changes from the AppLayout
  useEffect(() => {
    const handleMenuChange = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('settingsMenuChange', handleMenuChange as EventListener);
    return () => window.removeEventListener('settingsMenuChange', handleMenuChange as EventListener);
  }, []);

  // Load user data when user changes
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setDateOfBirth(user.dateOfBirth ?
        new Date(user.dateOfBirth).toISOString().split('T')[0] : ''
      );
      setDealbreakerScores(user.dealbreakerScores || createEqualizerScores());
    }
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;

    try {
      await updateUser({
        name,
        email,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : new Date(),
      });
      alert(content.profile.updateSuccess);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(content.profile.updateError);
    }
  };

  const handleSaveDealbreakers = async () => {
    if (!user) return;

    try {
      await updateUser({
        dealbreakerScores,
      });
      alert(content.dealbreakers.updateSuccess);
    } catch (error) {
      console.error('Error updating dealbreakers:', error);
      alert(content.dealbreakers.updateError);
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.profile.title}</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
            {content.profile.name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={content.profile.placeholders.name}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-base font-medium text-gray-700 mb-2">
            {content.profile.dateOfBirth}
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {user ? (
          <button
            onClick={handleSaveProfile}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save Profile
          </button>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-base">
              <strong>Note:</strong> Your profile information is saved locally. Create an account to save it permanently.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const renderDealbreakerSection = () => {
    return (
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dealbreaker Lines</h2>

        <div className="space-y-6">
          <DealbreakerSliders
            scores={dealbreakerScores}
            onChange={handleDealbreakerChange}
            disabled={false}
          />

          {user ? (
            <button
              onClick={handleSaveDealbreakers}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Save Dealbreaker Lines
            </button>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-base">
                <strong>Note:</strong> Your dealbreaker settings are saved locally. Create an account to save them permanently.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {activeSection === 'profile' && renderUserProfileSection()}
      {activeSection === 'dealbreakers' && renderDealbreakerSection()}
    </div>
  );
};

export default SettingsPage;
