import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '../../assets/ui/alert-dialog';

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
            <AlertDialogContent
                className="sm:max-w-[700px] p-8 questionnaire-choice-dialog"
            >
                <AlertDialogHeader className="space-y-6">
                    <AlertDialogTitle
                        className="text-2xl font-semibold text-center"
                        style={{ color: 'var(--lb-black-900)' }}
                    >
                        🎉 Welcome Back!
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-6 text-lg" style={{ color: 'var(--lb-black-700)' }}>
                        <p className="text-lg leading-relaxed">
                            Great news! Your dealbreaker preferences have been saved locally on this device.
                        </p>
                        {hasScores && (
                            <p className="text-lg leading-relaxed">
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
                <AlertDialogFooter className="flex gap-6 pt-8">
                    <AlertDialogCancel
                        onClick={onRecomplete}
                        className="form-button-secondary min-h-[48px] px-8 py-4 text-lg font-semibold"
                    >
                        Retake Questionnaire
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onUseExisting}
                        className="form-button-primary min-h-[48px] px-8 py-4 text-lg font-semibold"
                        style={{
                            backgroundColor: 'var(--success-green-300)',
                            color: 'var(--lb-black-900)'
                        }}
                    >
                        Continue to App
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
