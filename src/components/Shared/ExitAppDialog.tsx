import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";

interface ExitAppDialogProps {
  isOpen: boolean;
  onExit: () => void;
  onStay: () => void;
}

export default function ExitAppDialog({ isOpen, onExit, onStay }: ExitAppDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onStay}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#3d3535]">Return to Website?</DialogTitle>
          <DialogDescription className="text-[#3d3535] opacity-80">
            Are you sure you want to exit the app and return to the website home page?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 justify-end pt-4">
          <Button
            variant="outline"
            onClick={onStay}
            className="border-[#3d3535] text-[#3d3535] hover:bg-[#3d3535] hover:text-white"
          >
            Stay in App
          </Button>
          <Button
            onClick={onExit}
            className="bg-[#8881cc] text-white hover:bg-[#7770bb]"
          >
            Exit to Website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}