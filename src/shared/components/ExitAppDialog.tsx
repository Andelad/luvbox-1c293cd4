import { Button } from "../../elements/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../elements/dialog";

interface ExitAppDialogProps {
  isOpen: boolean;
  onExit: () => void;
  onStay: () => void;
}

export default function ExitAppDialog({ isOpen, onExit, onStay }: ExitAppDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onStay}>
      <DialogContent className="modal-content max-w-md">
        <DialogHeader className="modal-header">
          <DialogTitle className="modal-title">Return to Website?</DialogTitle>
          <DialogDescription className="modal-description">
            Are you sure you want to exit the app and return to the website home page?
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
}