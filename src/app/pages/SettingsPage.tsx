import { DealbreakerSliders } from '@/app/widgets';
import { CONTENT } from '@/content';
import { Button } from '@/elements/button';
import { useAuth, useUser } from '@/shared/lib/storage';
import { EqualizerArea, EqualizerScores, createEqualizerScores } from '@/shared/types/storage';
import { useEffect, useState } from 'react';

// Import component showcase sections
import ComponentShowcaseSection from '@/app/components/ComponentShowcaseSection';
import DataDisplaySection from '@/app/components/DataDisplaySection';
import FeedbackElementsSection from '@/app/components/FeedbackElementsSection';
import FormElementsSection from '@/app/components/FormElementsSection';
import InteractiveElementsSection from '@/app/components/InteractiveElementsSection';
import LayoutElementsSection from '@/app/components/LayoutElementsSection';
import NavigationElementsSection from '@/app/components/NavigationElementsSection';

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
          <label htmlFor="name" className="form-label">
            {content.profile.name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder={content.profile.placeholders.name}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="form-label">
            {content.profile.dateOfBirth}
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="form-input"
          />
        </div>

        {user ? (
          <Button
            variant="primary"
            size="large"
            onClick={handleSaveProfile}
          >
            Save Profile
          </Button>
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
          <Button
            variant="outline"
            size="large"
            onClick={() => {
              if ((window as any).retakeQuestionnaire) {
                (window as any).retakeQuestionnaire();
              }
            }}
            className="mb-4"
          >
            Retake Questionnaire
          </Button>
        </div>

        <div className="space-y-6">
          <DealbreakerSliders
            scores={dealbreakerScores}
            onChange={handleDealbreakerChange}
            disabled={false}
          />

          <Button
            variant="primary"
            size="large"
            onClick={handleSaveDealbreakers}
          >
            Save Dealbreaker Lines
          </Button>

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

  // Typography showcase section
  const renderTypographySection = () => {
    return (
      <div className="max-w-4xl">
        <h2 className="text-app-3xl font-serif font-semibold text-foreground mb-6">Typography System</h2>

        {/* App Typography Scale */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">App Typography Scale</h3>
          <p className="text-app-base font-sans text-muted-foreground mb-6">
            Compact scale optimized for app interface. Responsive sizing: 14px base mobile → 16px base desktop.
          </p>

          <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-xs</code>
              <span className="text-app-xs font-sans text-foreground truncate">Fine print, metadata (0.75rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-sm</code>
              <span className="text-app-sm font-sans text-foreground truncate">Captions, labels (0.875rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-base</code>
              <span className="text-app-base font-sans text-foreground truncate">Body text, paragraphs (1rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-lg</code>
              <span className="text-app-lg font-sans text-foreground truncate">Emphasized text (1.125rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-xl</code>
              <span className="text-app-xl font-sans text-foreground truncate">Subheadings (1.25rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-2xl</code>
              <span className="text-app-2xl font-sans text-foreground truncate">Section headings (1.5rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-3xl</code>
              <span className="text-app-3xl font-sans text-foreground truncate">Page titles (1.875rem)</span>
            </div>
          </div>
        </div>

        {/* Website Typography Scale */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Website Typography Scale</h3>
          <p className="text-app-base font-sans text-muted-foreground mb-6">
            Generous scale for website content, optimized for reading and marketing. Same responsive system.
          </p>

          <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-xs</code>
              <span className="text-web-xs font-sans text-foreground truncate">Fine print, metadata (1rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-sm</code>
              <span className="text-web-sm font-sans text-foreground truncate">Captions, labels (1.125rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-base</code>
              <span className="text-web-base font-sans text-foreground truncate">Body text, paragraphs (1.25rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-lg</code>
              <span className="text-web-lg font-sans text-foreground truncate">Emphasized text (1.375rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-xl</code>
              <span className="text-web-xl font-sans text-foreground truncate">Subheadings (1.625rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-2xl</code>
              <span className="text-web-2xl font-sans text-foreground truncate">Section headings (2rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-3xl</code>
              <span className="text-web-3xl font-sans text-foreground truncate">Page titles (2.5rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-4xl</code>
              <span className="text-web-4xl font-sans text-foreground truncate">Hero headings (3.25rem)</span>
            </div>
          </div>
        </div>

        {/* Monospace Typography Scale */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Monospace Typography Scale</h3>
          <div className="bg-accent/50 p-4 rounded-lg border border-accent mb-6">
            <p className="text-app-base font-sans text-foreground mb-2">
              <strong>Design Rule:</strong> Spline Sans Mono should always be <strong>90%</strong> of the equivalent Source Sans 3 size, while retaining the same line height.
            </p>
            <p className="text-app-sm font-sans text-muted-foreground">
              This creates visual balance between monospace and sans-serif fonts due to monospace's fixed-width nature.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App Monospace Scale */}
            <div>
              <h4 className="text-app-xl font-serif font-semibold text-foreground mb-4">App Monospace Scale</h4>
              <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-xs</code>
                  <code className="text-app-mono-xs font-mono text-foreground truncate">console.log('xs');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-sm</code>
                  <code className="text-app-mono-sm font-mono text-foreground truncate">console.log('sm');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-base</code>
                  <code className="text-app-mono-base font-mono text-foreground truncate">console.log('base');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-lg</code>
                  <code className="text-app-mono-lg font-mono text-foreground truncate">console.log('lg');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-xl</code>
                  <code className="text-app-mono-xl font-mono text-foreground truncate">console.log('xl');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-2xl</code>
                  <code className="text-app-mono-2xl font-mono text-foreground truncate">console.log('2xl');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-app-mono-3xl</code>
                  <code className="text-app-mono-3xl font-mono text-foreground truncate">console.log('3xl');</code>
                </div>
              </div>
            </div>

            {/* Website Monospace Scale */}
            <div>
              <h4 className="text-app-xl font-serif font-semibold text-foreground mb-4">Website Monospace Scale</h4>
              <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-xs</code>
                  <code className="text-web-mono-xs font-mono text-foreground truncate">console.log('xs');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-sm</code>
                  <code className="text-web-mono-sm font-mono text-foreground truncate">console.log('sm');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-base</code>
                  <code className="text-web-mono-base font-mono text-foreground truncate">console.log('base');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-lg</code>
                  <code className="text-web-mono-lg font-mono text-foreground truncate">console.log('lg');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-xl</code>
                  <code className="text-web-mono-xl font-mono text-foreground truncate">console.log('xl');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-2xl</code>
                  <code className="text-web-mono-2xl font-mono text-foreground truncate">console.log('2xl');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-3xl</code>
                  <code className="text-web-mono-3xl font-mono text-foreground truncate">console.log('3xl');</code>
                </div>
                <div className="flex items-center gap-4 overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground min-w-[140px] flex-shrink-0">text-web-mono-4xl</code>
                  <code className="text-web-mono-4xl font-mono text-foreground truncate">console.log('4xl');</code>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="mt-6 bg-background p-6 rounded-lg border border-border">
            <h5 className="text-app-lg font-serif font-semibold text-foreground mb-4">Visual Size Comparison</h5>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-app-base font-sans text-foreground">Source Sans 3 (base):</span>
                <span className="text-app-base font-sans text-foreground">Hello World</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-app-base font-sans text-foreground">Spline Mono (90%):</span>
                <code className="text-app-mono-base font-mono text-foreground">Hello World</code>
              </div>
              <div className="mt-2 text-app-sm font-sans text-muted-foreground">
                Notice how the monospace text appears visually balanced with the sans-serif text despite being smaller.
              </div>
            </div>
          </div>
        </div>

        {/* Font Families */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Font Families</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h4 className="text-app-lg font-serif font-semibold text-foreground mb-3">EB Garamond</h4>
              <p className="text-app-sm font-sans text-muted-foreground mb-4">Serif • Headlines • Display</p>
              <div className="space-y-2">
                <p className="text-web-lg font-serif font-medium text-foreground">The quick brown fox jumps</p>
                <p className="text-app-base font-serif text-foreground">Headlines, display text, elegant content</p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h4 className="text-app-lg font-serif font-semibold text-foreground mb-3">Source Sans 3</h4>
              <p className="text-app-sm font-sans text-muted-foreground mb-4">Sans-serif • Body • UI</p>
              <div className="space-y-2">
                <p className="text-web-lg font-sans font-medium text-foreground">The quick brown fox jumps</p>
                <p className="text-app-base font-sans text-foreground">Body text, UI elements, readable content</p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border">
              <h4 className="text-app-lg font-serif font-semibold text-foreground mb-3">Spline Sans Mono</h4>
              <p className="text-app-sm font-sans text-muted-foreground mb-4">Monospace • Code • Technical</p>
              <div className="space-y-2">
                <p className="text-web-lg font-mono font-normal text-foreground">const example = 'code';</p>
                <p className="text-app-base font-sans text-foreground">Code, technical content, data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Classes */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Semantic Typography Classes</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App Semantic */}
            <div>
              <h4 className="text-app-xl font-serif font-semibold text-foreground mb-4">App Semantic Classes</h4>
              <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-display</code>
                  <p className="text-app-display font-serif font-semibold text-foreground truncate">Large titles</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-heading</code>
                  <p className="text-app-heading font-serif font-semibold text-foreground truncate">Section headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-subheading</code>
                  <p className="text-app-subheading font-serif font-medium text-foreground truncate">Subsection headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-body</code>
                  <p className="text-app-body font-sans text-foreground truncate">Body text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-caption</code>
                  <p className="text-app-caption font-sans text-foreground truncate">Small text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-app-code</code>
                  <code className="text-app-code font-mono text-foreground truncate">Code text</code>
                </div>
              </div>
            </div>

            {/* Website Semantic */}
            <div>
              <h4 className="text-app-xl font-serif font-semibold text-foreground mb-4">Website Semantic Classes</h4>
              <div className="space-y-4 bg-muted p-6 rounded-lg border border-border">
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-hero</code>
                  <p className="text-web-hero font-serif font-semibold text-foreground truncate">Hero headings</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-display</code>
                  <p className="text-web-display font-serif font-semibold text-foreground truncate">Large titles</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-heading</code>
                  <p className="text-web-heading font-serif font-semibold text-foreground truncate">Section headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-subheading</code>
                  <p className="text-web-subheading font-serif font-medium text-foreground truncate">Subsection headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-body</code>
                  <p className="text-web-body font-sans text-foreground truncate">Body text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-caption</code>
                  <p className="text-web-caption font-sans text-foreground truncate">Small text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code font-mono text-muted-foreground">text-web-code</code>
                  <code className="text-web-code font-mono text-foreground truncate">Code text</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Example */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Responsive Typography</h3>
          <div className="bg-accent p-6 rounded-lg border border-border">
            <p className="text-app-base font-sans text-muted-foreground mb-4">
              📱 <strong>Mobile (&lt; 768px):</strong> 14px root font size<br />
              🖥️ <strong>Desktop (≥ 768px):</strong> 16px root font size
            </p>
            <p className="text-web-lg font-serif text-foreground">
              This text automatically scales from 19.25px on mobile to 22px on desktop!
            </p>
          </div>
        </div>

        {/* Debug Section - Actual computed values */}
        <div className="mb-8">
          <h3 className="text-app-2xl font-serif font-semibold text-foreground mb-4">Debug: Actual Computed Values</h3>
          <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
            <p className="text-app-base font-sans text-foreground mb-4">
              Use browser dev tools to inspect these elements and verify actual computed font sizes:
            </p>

            <div className="space-y-3">
              <div className="p-2 bg-background border border-border rounded">
                <code className="text-app-code font-mono text-muted-foreground">1rem text:</code>
                <span className="ml-4 text-base font-sans text-foreground" id="test-1rem">This should be 16px on desktop</span>
              </div>

              <div className="p-2 bg-background border border-border rounded">
                <code className="text-app-code font-mono text-muted-foreground">text-app-base:</code>
                <span className="ml-4 text-app-base font-sans text-foreground" id="test-app-base">This should be 16px on desktop</span>
              </div>

              <div className="p-2 bg-background border border-border rounded">
                <code className="text-app-code font-mono text-muted-foreground">text-web-base:</code>
                <span className="ml-4 text-web-base font-sans text-foreground" id="test-web-base">This should be 20px on desktop</span>
              </div>

              <div className="p-2 bg-background border border-border rounded">
                <code className="text-app-code font-mono text-muted-foreground">text-app-mono-base:</code>
                <code className="ml-4 text-app-mono-base font-mono text-foreground" id="test-mono-base">This should be 90% of 16px (14.4px)</code>
              </div>

              <div className="p-2 bg-background border border-border rounded">
                <code className="text-app-code font-mono text-muted-foreground">Raw 16px:</code>
                <span className="ml-4 font-sans text-foreground" style={{ fontSize: '16px' }} id="test-raw-16px">This is hardcoded 16px</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-background border border-border rounded">
              <p className="text-app-sm font-sans text-muted-foreground mb-2">Current viewport and root font size info:</p>
              <div className="text-app-code font-mono text-foreground">
                <div>Viewport width: <span id="viewport-width">--</span>px</div>
                <div>Root font size: <span id="root-font-size">--</span>px</div>
                <div>1rem computed: <span id="one-rem-computed">--</span>px</div>
              </div>
            </div>

            <script dangerouslySetInnerHTML={{
              __html: `
              function updateDebugInfo() {
                try {
                  document.getElementById('viewport-width').textContent = window.innerWidth;
                  
                  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                  document.getElementById('root-font-size').textContent = rootFontSize;
                  
                  const testElement = document.getElementById('test-1rem');
                  if (testElement) {
                    const computedSize = parseFloat(getComputedStyle(testElement).fontSize);
                    document.getElementById('one-rem-computed').textContent = computedSize;
                  }
                } catch (e) {
                  console.error('Debug info update failed:', e);
                }
              }
              
              // Update on load and resize
              if (typeof window !== 'undefined') {
                updateDebugInfo();
                window.addEventListener('resize', updateDebugInfo);
                // Update after a delay to ensure styles are loaded
                setTimeout(updateDebugInfo, 100);
                setTimeout(updateDebugInfo, 500);
              }
            `}} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {activeSection === 'profile' && renderUserProfileSection()}
      {activeSection === 'dealbreakers' && renderDealbreakerSection()}
      {activeSection === 'typography' && renderTypographySection()}
      {activeSection === 'component-showcase' && <ComponentShowcaseSection />}
      {activeSection === 'form-elements' && <FormElementsSection />}
      {activeSection === 'interactive-elements' && <InteractiveElementsSection />}
      {activeSection === 'data-display' && <DataDisplaySection />}
      {activeSection === 'navigation-elements' && <NavigationElementsSection />}
      {activeSection === 'feedback-elements' && <FeedbackElementsSection />}
      {activeSection === 'layout-elements' && <LayoutElementsSection />}
    </div>
  );
};

export default SettingsPage;
