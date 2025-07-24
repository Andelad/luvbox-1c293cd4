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
      <h2 className="text-app-display mb-6">{content.profile.title}</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="form-label-large">
            {content.profile.name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="luvbox-form-base"
            placeholder={content.profile.placeholders.name}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="form-label-large">
            {content.profile.dateOfBirth}
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="luvbox-form-base"
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
          <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
            <p className="text-app-body">
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
        <h2 className="text-app-display mb-6">Dealbreaker Lines</h2>

        <div className="mb-6">
          <p className="text-app-body mb-4">
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
            <div className="p-4 rounded-lg border mt-4 bg-blue-50 border-blue-200">
              <p className="text-app-body">
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
        <h2 className="text-app-display mb-6">Typography System</h2>

        {/* App Typography Scale */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">App Typography Classes</h3>
          <p className="text-app-body mb-6">
            Compact scale optimized for app interface. Responsive sizing: 14px base mobile → 16px base desktop.
          </p>

          <div className="space-y-4 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-display</code>
              <span className="text-app-display truncate">Large display text (1.875rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-heading</code>
              <span className="text-app-heading truncate">Section headings (1.5rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-subheading</code>
              <span className="text-app-subheading truncate">Subsection headings (1.25rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-body</code>
              <span className="text-app-body truncate">Body text, paragraphs (1rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-caption</code>
              <span className="text-app-caption truncate">Captions, small text (0.875rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-code</code>
              <code className="text-app-code truncate">Code text (90% of 0.875rem)</code>
            </div>
          </div>
        </div>

        {/* Website Typography Scale */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Website Typography Classes</h3>
          <p className="text-app-body mb-6">
            Generous scale for website content, optimized for reading and marketing. Same responsive system.
          </p>

          <div className="space-y-4 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-hero</code>
              <span className="text-web-hero truncate">Hero headings (3.25rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-heading-1</code>
              <span className="text-web-heading-1 truncate">H1 headings (2.5rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-heading-2</code>
              <span className="text-web-heading-2 truncate">H2 headings (2rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-heading-3</code>
              <span className="text-web-heading-3 truncate">H3 headings (1.625rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-body</code>
              <span className="text-web-body truncate">Body text, paragraphs (1.25rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-caption</code>
              <span className="text-web-caption truncate">Captions, labels (1.125rem)</span>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-code</code>
              <code className="text-web-code truncate">Code text (90% of 1.125rem)</code>
            </div>
          </div>
        </div>

        {/* Monospace Typography */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Monospace Typography</h3>
          <div className="p-4 rounded-lg border mb-6" style={{ backgroundColor: 'var(--lb-black-100)', borderColor: 'var(--lb-black-200)' }}>
            <p className="text-app-body mb-2">
              <strong>Design Rule:</strong> Spline Sans Mono should always be <strong>90%</strong> of the equivalent Source Sans 3 size, while retaining the same line height.
            </p>
            <p className="text-app-caption">
              This creates visual balance between monospace and sans-serif fonts due to monospace's fixed-width nature.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-app-code</code>
              <code className="text-app-code truncate">App code text (90% of 0.875rem)</code>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-code</code>
              <code className="text-web-code truncate">Website code text (90% of 1.125rem)</code>
            </div>
            <div className="flex items-center gap-4 overflow-hidden">
              <code className="text-app-code min-w-[140px] flex-shrink-0">text-web-mono</code>
              <code className="text-web-mono truncate">General monospace (90% of 1.25rem)</code>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="mt-6 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
            <h4 className="text-app-subheading mb-4">Visual Size Comparison</h4>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-app-body">Source Sans 3 (base):</span>
                <span className="text-app-body">Hello World</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-app-body">Spline Mono (90%):</span>
                <code className="text-app-code">Hello World</code>
              </div>
              <div className="mt-2 text-app-caption">
                Notice how the monospace text appears visually balanced with the sans-serif text despite being smaller.
              </div>
            </div>
          </div>
        </div>

        {/* Font Families */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Font Families</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
              <h4 className="text-app-subheading mb-3">EB Garamond</h4>
              <p className="text-app-caption mb-4">Serif • Headlines • Display</p>
              <div className="space-y-2">
                <p className="text-web-heading-3">The quick brown fox jumps</p>
                <p className="text-app-body">Headlines, display text, elegant content</p>
              </div>
            </div>

            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
              <h4 className="text-app-subheading mb-3">Source Sans 3</h4>
              <p className="text-app-caption mb-4">Sans-serif • Body • UI</p>
              <div className="space-y-2">
                <p className="text-web-body">The quick brown fox jumps</p>
                <p className="text-app-body">Body text, UI elements, readable content</p>
              </div>
            </div>

            <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
              <h4 className="text-app-subheading mb-3">Spline Sans Mono</h4>
              <p className="text-app-caption mb-4">Monospace • Code • Technical</p>
              <div className="space-y-2">
                <code className="text-web-code">const example = 'code';</code>
                <p className="text-app-body">Code, technical content, data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Classes */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Semantic Typography Classes</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App Semantic */}
            <div>
              <h4 className="text-app-subheading mb-4">App Semantic Classes</h4>
              <div className="space-y-4 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-display</code>
                  <p className="text-app-display truncate">Large titles</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-heading</code>
                  <p className="text-app-heading truncate">Section headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-subheading</code>
                  <p className="text-app-subheading truncate">Subsection headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-body</code>
                  <p className="text-app-body truncate">Body text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-caption</code>
                  <p className="text-app-caption truncate">Small text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-app-code</code>
                  <code className="text-app-code truncate">Code text</code>
                </div>
              </div>
            </div>

            {/* Website Semantic */}
            <div>
              <h4 className="text-app-subheading mb-4">Website Semantic Classes</h4>
              <div className="space-y-4 p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-50)', borderColor: 'var(--lb-black-200)' }}>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-hero</code>
                  <p className="text-web-hero truncate">Hero headings</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-heading-1</code>
                  <p className="text-web-heading-1 truncate">Large titles</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-heading-2</code>
                  <p className="text-web-heading-2 truncate">Section headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-heading-3</code>
                  <p className="text-web-heading-3 truncate">Subsection headers</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-body</code>
                  <p className="text-web-body truncate">Body text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-caption</code>
                  <p className="text-web-caption truncate">Small text</p>
                </div>
                <div className="overflow-hidden">
                  <code className="text-app-code">text-web-code</code>
                  <code className="text-web-code truncate">Code text</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Example */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Responsive Typography</h3>
          <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--lb-black-100)', borderColor: 'var(--lb-black-200)' }}>
            <p className="text-app-body mb-4">
              📱 <strong>Mobile (&lt; 768px):</strong> 14px root font size<br />
              🖥️ <strong>Desktop (≥ 768px):</strong> 16px root font size
            </p>
            <p className="text-web-body">
              This text automatically scales from 17.5px on mobile to 20px on desktop!
            </p>
          </div>
        </div>

        {/* Debug Section - Actual computed values */}
        <div className="mb-8">
          <h3 className="text-app-heading mb-4">Debug: Actual Computed Values</h3>
          <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--caution-red-50)', borderColor: 'var(--caution-red-200)' }}>
            <p className="text-app-body mb-4">
              Use browser dev tools to inspect these elements and verify actual computed font sizes:
            </p>

            <div className="space-y-3">
              <div className="p-2 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
                <code className="text-app-code">1rem text:</code>
                <span className="ml-4" id="test-1rem">This should be 16px on desktop</span>
              </div>

              <div className="p-2 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
                <code className="text-app-code">text-app-body:</code>
                <span className="ml-4 text-app-body" id="test-app-base">This should be 16px on desktop</span>
              </div>

              <div className="p-2 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
                <code className="text-app-code">text-web-body:</code>
                <span className="ml-4 text-web-body" id="test-web-base">This should be 20px on desktop</span>
              </div>

              <div className="p-2 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
                <code className="text-app-code">text-app-code:</code>
                <code className="ml-4 text-app-code" id="test-mono-base">This should be 90% of 14px (12.6px)</code>
              </div>

              <div className="p-2 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
                <code className="text-app-code">Raw 16px:</code>
                <span className="ml-4" style={{ fontSize: '16px' }} id="test-raw-16px">This is hardcoded 16px</span>
              </div>
            </div>

            <div className="mt-4 p-3 border rounded" style={{ backgroundColor: 'var(--lb-black-0)', borderColor: 'var(--lb-black-200)' }}>
              <p className="text-app-caption mb-2">Current viewport and root font size info:</p>
              <div className="text-app-code">
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
