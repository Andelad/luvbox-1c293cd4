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

  // Load dealbreaker scores from localStorage (works with or without user account)
  useEffect(() => {
    const savedScores = localStorage.getItem('luvbox_dealbreaker_scores');
    if (savedScores) {
      try {
        const parsedScores = JSON.parse(savedScores);
        setDealbreakerScores(parsedScores);
        console.log('✅ Loaded dealbreaker scores from localStorage in Settings:', parsedScores);
      } catch (error) {
        console.error('❌ Error parsing saved dealbreaker scores:', error);
      }
    }
  }, []);

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
    try {
      // Always save to localStorage for consistency with questionnaire
      localStorage.setItem('luvbox_dealbreaker_scores', JSON.stringify(dealbreakerScores));
      console.log('✅ Dealbreaker scores saved to localStorage:', dealbreakerScores);

      // If user is logged in, also save to user account
      if (user) {
        await updateUser({
          dealbreakerScores,
        });
        console.log('✅ Dealbreaker scores also saved to user account');
      }

      alert(content.dealbreakers.updateSuccess);
    } catch (error) {
      console.error('Error updating dealbreakers:', error);
      alert(content.dealbreakers.updateError);
    }
  };

  const handleDealbreakerChange = (area: EqualizerArea, value: number) => {
    const newScores = {
      ...dealbreakerScores,
      [area]: value,
    };
    setDealbreakerScores(newScores);

    // Auto-save to localStorage on every change for instant persistence
    localStorage.setItem('luvbox_dealbreaker_scores', JSON.stringify(newScores));
    console.log('✅ Auto-saved dealbreaker change to localStorage:', { area, value });
  };

  const renderUserProfileSection = () => (
    <div className="max-w-2xl">
      <h2 className="text-app-display text-[var(--lb-black-900)] mb-6">{content.profile.title}</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-app-label text-[var(--lb-black-700)] mb-2">
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
          <label htmlFor="dateOfBirth" className="block text-app-label text-[var(--lb-black-700)] mb-2">
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
            <p className="text-[var(--blue-800)] text-app-body">
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
        <h2 className="text-app-display text-[var(--lb-black-900)] mb-6">Dealbreaker Lines</h2>

        <div className="mb-6">
          <p className="text-app-body text-[var(--lb-black-600)] mb-4">
            Your dealbreaker lines help you identify potential compatibility issues early. You can adjust these anytime.
          </p>

          {/* Retake Questionnaire Button */}
          <button
            onClick={() => {
              if ((window as any).retakeQuestionnaire) {
                (window as any).retakeQuestionnaire();
              }
            }}
            className="mb-4 px-4 py-2 bg-[var(--lime-500)] text-[var(--lb-black-900)] rounded-md hover:bg-[var(--lime-600)] focus:outline-none focus:ring-2 focus:ring-[var(--lime-500)] focus:ring-offset-2 transition-colors text-app-button"
          >
            Retake Questionnaire
          </button>
        </div>

        <div className="space-y-6">
          <DealbreakerSliders
            scores={dealbreakerScores}
            onChange={handleDealbreakerChange}
            disabled={false}
          />

          <button
            onClick={handleSaveDealbreakers}
            className="px-6 py-2 bg-[var(--blue-500)] text-[var(--lb-black-0)] rounded-md hover:bg-[var(--blue-600)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)] focus:ring-offset-2 transition-colors text-app-button"
          >
            Save Dealbreaker Lines
          </button>

          {!user && (
            <div className="bg-[var(--blue-50)] border border-[var(--blue-200)] rounded-lg p-4 mt-4">
              <p className="text-[var(--blue-800)] text-app-body">
                <strong>Note:</strong> Your dealbreaker settings are saved locally. Create an account to save them permanently across devices.
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
