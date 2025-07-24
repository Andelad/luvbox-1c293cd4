import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '../../elements/alert-dialog';

interface QuestionnaireChoiceDialogProps {
    isOpen: boolean;
    onUseExisting: () => void;
    onRecomplete: () => void;
    hasScores: boolean;
}

export default function QuestionnaireChoiceDialog({
    isOpen,
    onUseExisting,
    onRecomplete,
    hasScores
}: QuestionnaireChoiceDialogProps) {
    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent className="questionnaire-choice-dialog sm:max-w-[700px] p-8">
                <AlertDialogHeader className="modal-header">
                    <AlertDialogTitle className="modal-title">
                        🎉 Welcome Back!
                    </AlertDialogTitle>
                    <AlertDialogDescription className="modal-description space-y-6">
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
                            className="mt-8 p-6 rounded-lg border-2"
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
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="modal-footer">
                    <AlertDialogCancel
                        onClick={onRecomplete}
                    >
                        Retake Questionnaire
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onUseExisting}
                    >
                        Continue to App
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
