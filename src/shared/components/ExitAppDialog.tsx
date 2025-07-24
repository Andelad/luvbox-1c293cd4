import { useEffect } from "react";
import { Button } from "../../elements/button";

interface ExitAppDialogProps {
  isOpen: boolean;
  onExit: () => void;
  onStay: () => void;
}

export default function ExitAppDialog({ isOpen, onExit, onStay }: ExitAppDialogProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onStay();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onStay]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onStay}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dialog */}
      <div
        className="relative bg-[var(--lb-black-0)] border border-[var(--lb-black-200)] rounded-xl p-8 max-w-md w-full mx-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">Return to Website?</h2>
          <p className="modal-description">
            Are you sure you want to exit the app and return to the website home page?
          </p>
        </div>
        <div className="modal-footer">
          <Button
            variant="secondary"
            size="large"
            onClick={onStay}
          >
            Stay in App
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={onExit}
          >
            Exit to Website
          </Button>
        </div>
      </div>
    </div>
  );
}