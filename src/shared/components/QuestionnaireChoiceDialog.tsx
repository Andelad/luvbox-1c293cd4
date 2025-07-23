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
            <AlertDialogContent className="sm:max-w-[600px] !animate-none !duration-0 !transition-none">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-[var(--lb-black-900)] text-web-display font-serif italic">
                        🎉 Welcome Back!
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-[var(--lb-black-600)] text-web-lg space-y-4">
                        <p>
                            Great news! Your dealbreaker preferences have been saved locally on this device.
                        </p>
                        {hasScores && (
                            <p>
                                Your personalized settings are ready to use in the app, helping you identify
                                compatibility issues based on your relationship priorities.
                            </p>
                        )}
                        <div className="mt-6 p-4 bg-[var(--blue-50)] border border-[var(--blue-200)] rounded-lg">
                            <p className="text-[var(--blue-800)] text-web-body font-medium">
                                💾 Data stored locally - Your preferences stay on this device only
                            </p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex gap-4 pt-6">
                    <AlertDialogCancel
                        onClick={onRecomplete}
                        className="border-[var(--lb-black-300)] text-[var(--lb-black-700)] hover:bg-[var(--lb-black-100)] hover:text-[var(--lb-black-900)] text-web-body font-medium px-6 py-3"
                    >
                        Retake Questionnaire
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onUseExisting}
                        className="bg-[var(--success-green-300)] text-[var(--lb-black-900)] hover:bg-[var(--success-green-400)] text-web-body font-medium px-6 py-3"
                    >
                        Continue to App
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
