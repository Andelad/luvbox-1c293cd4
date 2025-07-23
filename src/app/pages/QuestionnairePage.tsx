import { DealbreakerSlider } from '@/app/components';
import { RELATIONSHIP_AREAS } from '@/content/LuvBoxContentLogic';
import { EqualizerArea, EqualizerScores, createEqualizerScores } from '@/shared/types/storage';
import WebsiteLayout from '@/website/layout/WebsiteLayout';
import React, { useEffect, useState } from 'react';

interface QuestionnaireStepData {
    key: EqualizerArea;
    label: string;
    description: string;
}

const QuestionnairePage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState<EqualizerScores>(createEqualizerScores());
    const [isLoading, setIsLoading] = useState(false);

    const steps: QuestionnaireStepData[] = [
        {
            key: 'communication',
            label: RELATIONSHIP_AREAS.personality.label,
            description: RELATIONSHIP_AREAS.personality.shortDescription
        },
        {
            key: 'physical_attraction',
            label: RELATIONSHIP_AREAS.physical_attraction.label,
            description: RELATIONSHIP_AREAS.physical_attraction.shortDescription
        },
        {
            key: 'emotional_connection',
            label: RELATIONSHIP_AREAS.close_circle_vibes.label,
            description: RELATIONSHIP_AREAS.close_circle_vibes.shortDescription
        },
        {
            key: 'shared_values',
            label: RELATIONSHIP_AREAS.values.label,
            description: RELATIONSHIP_AREAS.values.shortDescription
        },
        {
            key: 'lifestyle_compatibility',
            label: RELATIONSHIP_AREAS.goals.label,
            description: RELATIONSHIP_AREAS.goals.shortDescription
        },
        {
            key: 'future_goals',
            label: RELATIONSHIP_AREAS.behaviour.label,
            description: RELATIONSHIP_AREAS.behaviour.shortDescription
        },
        {
            key: 'trust_respect',
            label: RELATIONSHIP_AREAS.viability.label,
            description: RELATIONSHIP_AREAS.viability.shortDescription
        },
    ];

    // Load existing scores from localStorage
    useEffect(() => {
        const savedScores = localStorage.getItem('luvbox_dealbreaker_scores');
        if (savedScores) {
            try {
                const parsedScores = JSON.parse(savedScores);
                setScores(parsedScores);
                console.log('✅ Loaded existing dealbreaker scores from localStorage:', parsedScores);
            } catch (error) {
                console.error('❌ Error parsing saved dealbreaker scores:', error);
            }
        }
    }, []);

    const currentStepData = steps[currentStep];
    const totalSteps = steps.length;
    const isLastStep = currentStep === totalSteps - 1;
    const isFirstStep = currentStep === 0;

    const handleSliderChange = (value: number) => {
        setScores(prev => ({
            ...prev,
            [currentStepData.key]: value
        }));
    };

    const handleNext = () => {
        if (!isLastStep) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (!isFirstStep) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = async () => {
        console.log('=== COMPLETE BUTTON CLICKED ===');
        console.log('Current scores:', scores);

        setIsLoading(true);

        try {
            // Save dealbreaker scores directly to localStorage
            localStorage.setItem('luvbox_dealbreaker_scores', JSON.stringify(scores));
            console.log('✅ Dealbreaker scores saved to localStorage:', scores);

            // Store completion flag in localStorage
            localStorage.setItem('luvbox_questionnaire_completed', 'true');
            console.log('✅ Completion flag set in localStorage');

            console.log('🎉 Calling onComplete callback...');
            onComplete();
            console.log('✅ onComplete called successfully');

        } catch (error) {
            console.error('❌ Error saving questionnaire:', error);
            alert(`Error saving your responses: ${error.message || 'Unknown error'}. Please try again.`);
        } finally {
            setIsLoading(false);
            console.log('🔄 Loading state reset');
        }
    };

    if (!currentStepData) {
        return <div>Loading...</div>;
    }

    return (
        <WebsiteLayout
            onNavigate={() => { }} // No navigation needed in questionnaire
            currentPage="questionnaire"
            isInitialLoad={false}
            hideNavigation={true}
        >
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-2xl">
                    {/* Progress indicator */}
                    <div className="mb-8">
                        <div className="mb-6">
                            <h1 className="text-app-display text-[var(--lb-black-900)]">
                                Set Your Dealbreaker Lines
                            </h1>
                            <p className="text-app-body text-[var(--lb-black-600)] mt-2">
                                Set your minimum acceptable score (0-10) for each area. This represents your personal dealbreaker line -
                                the lowest score you'd accept in a potential partner.
                            </p>
                            <span className="text-app-body text-[var(--lb-black-600)] mt-4 block">
                                {currentStep + 1} of {totalSteps}
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-2 bg-[var(--lb-black-200)] rounded-lg overflow-hidden">
                            <div
                                className="h-full bg-[var(--success-green-300)] transition-all duration-300 ease-out"
                                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Questionnaire card */}
                    <div className="bg-[var(--lb-black-0)] rounded-lg shadow-lg border border-[var(--lb-black-200)] p-8 mb-6">
                        <div className="mb-6">
                            <h2 className="text-app-heading text-[var(--lb-black-900)] mb-2">
                                Step {currentStep + 1}: {currentStepData.label}
                            </h2>
                        </div>

                        <DealbreakerSlider
                            area={currentStepData.key}
                            label={currentStepData.label}
                            description={currentStepData.description}
                            value={scores[currentStepData.key]}
                            onChange={handleSliderChange}
                            showTitle={false}
                            showDescription={true}
                        />
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-end items-center space-x-4">
                        <button
                            onClick={handlePrevious}
                            disabled={isFirstStep}
                            className={`px-6 py-3 rounded-lg text-app-button transition-all duration-200 ${isFirstStep
                                    ? 'bg-[var(--lb-black-200)] text-[var(--lb-black-400)] cursor-not-allowed'
                                    : 'bg-[var(--lb-black-100)] text-[var(--lb-black-700)] hover:bg-[var(--lb-black-200)] border border-[var(--lb-black-300)]'
                                }`}
                        >
                            Previous
                        </button>

                        {(() => {
                            // Debug info
                            console.log('🔍 Button render debug:', { currentStep, totalSteps, isLastStep, stepsLength: steps.length });
                            return null;
                        })()}

                        {isLastStep ? (
                            <button
                                onClick={() => {
                                    console.log('🔘 Complete button clicked!');
                                    handleSubmit();
                                }}
                                disabled={isLoading}
                                className={`px-6 py-3 rounded-lg text-app-button transition-all duration-200 ${isLoading
                                        ? 'bg-[var(--lb-black-400)] text-[var(--lb-black-0)] cursor-not-allowed'
                                        : 'bg-[var(--success-green-300)] text-[var(--lb-black-900)] hover:bg-[var(--success-green-400)]'
                                    }`}
                            >
                                {isLoading ? 'Saving...' : 'Complete'}
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    console.log('➡️ Next button clicked!');
                                    handleNext();
                                }}
                                className="px-6 py-3 rounded-lg text-app-button bg-[var(--success-green-300)] text-[var(--lb-black-900)] hover:bg-[var(--success-green-400)] transition-all duration-200"
                            >
                                Next
                            </button>
                        )}
                    </div>

                    {/* Skip option */}
                    <div className="text-center mt-6">
                        <button
                            onClick={onComplete}
                            className="text-app-body text-[var(--lb-black-500)] hover:text-[var(--lb-black-700)] transition-colors duration-200"
                        >
                            Skip for now
                        </button>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default QuestionnairePage;
