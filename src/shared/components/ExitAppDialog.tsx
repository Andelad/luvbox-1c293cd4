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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[var(--lb-black-900)] text-web-heading font-serif">Return to Website?</DialogTitle>
          <DialogDescription className="text-[var(--lb-black-600)] text-web-lg">
            Are you sure you want to exit the app and return to the website home page?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 justify-end pt-6">
          <Button
            variant="outline"
            onClick={onStay}
            className="border-[var(--lb-black-300)] text-[var(--lb-black-700)] hover:bg-[var(--lb-black-100)] hover:text-[var(--lb-black-900)] text-web-body font-medium px-6 py-3"
          >
            Stay in App
          </Button>
          <Button
            onClick={onExit}
            className="bg-[var(--purple-300)] text-[var(--lb-black-900)] hover:bg-[var(--purple-400)] text-web-body font-medium px-6 py-3"
          >
            Exit to Website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}