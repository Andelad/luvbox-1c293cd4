import { Button } from "../../assets/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../assets/ui/dialog";

interface ExitAppDialogProps {
  isOpen: boolean;
  onExit: () => void;
  onStay: () => void;
}

export default function ExitAppDialog({ isOpen, onExit, onStay }: ExitAppDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onStay}>
      <DialogContent className="sm:max-w-[600px] p-8">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-[var(--lb-black-900)] text-2xl font-semibold text-center">Return to Website?</DialogTitle>
          <DialogDescription className="text-[var(--lb-black-600)] text-lg leading-relaxed text-center">
            Are you sure you want to exit the app and return to the website home page?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-6 justify-center pt-8">
          <Button
            variant="outline"
            onClick={onStay}
            className="border-[var(--lb-black-300)] text-[var(--lb-black-700)] hover:bg-[var(--lb-black-100)] hover:text-[var(--lb-black-900)] text-lg font-semibold min-h-[48px] px-8 py-4"
          >
            Stay in App
          </Button>
          <Button
            onClick={onExit}
            className="bg-[var(--purple-300)] text-[var(--lb-black-900)] hover:bg-[var(--purple-400)] text-lg font-semibold min-h-[48px] px-8 py-4"
          >
            Exit to Website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}