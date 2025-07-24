import React, { useEffect } from "react";
import { Button } from "../../elements/button";

interface QuestionnaireChoiceDialogProps {
    isOpen: boolean;
    onUseExisting: () => void;
    onRecomplete: () => void;
    onClose?: () => void;
    hasScores: boolean;
}

export default function QuestionnaireChoiceDialog({
    isOpen,
    onUseExisting,
    onRecomplete,
    onClose,
    hasScores
}: QuestionnaireChoiceDialogProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                // Don't close on escape for this dialog since it requires a choice
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Dialog */}
            <div className="relative bg-[var(--lb-black-0)] border border-[var(--lb-black-200)] rounded-xl p-8 max-w-[700px] w-full mx-4 shadow-lg">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[var(--lb-black-100)] transition-colors"
                    aria-label="Close dialog"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">
                        🎉 Welcome Back!
                    </h2>
                    <div className="modal-description space-y-6">
                        <p>
                            Great news! Your dealbreaker preferences have been saved locally on this device.
                        </p>
                        {hasScores && (
                            <p>
                                Your personalized settings are ready to use in the app, helping you identify
                                compatibility issues based on your relationship priorities.
                            </p>
                        )}
                        <div
                            className="mt-8 p-6 rounded-lg border"
                            style={{
                                backgroundColor: 'var(--blue-50)',
                                borderColor: 'var(--blue-200)'
                            }}
                        >
                            <p
                                className="text-lg font-medium leading-relaxed"
                                style={{ color: 'var(--blue-800)' }}
                            >
                                💾 Data stored locally - Your preferences stay on this device only
                            </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button
                        variant="outline"
                        size="large"
                        onClick={onRecomplete}
                    >
                        Retake Questionnaire
                    </Button>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={onUseExisting}
                    >
                        Continue to App
                    </Button>
                </div>
            </div>
        </div>
    );
}
