import { Alert, AlertDescription, AlertTitle } from '@/elements/alert';
import { Button } from '@/elements/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/elements/dialog';
import { Separator } from '@/elements/separator';
import { useToast } from '@/elements/use-toast';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, XCircleIcon } from 'lucide-react';

export default function FeedbackElementsSection() {
    const { toast } = useToast();

    const showToast = (type: string) => {
        switch (type) {
            case 'success':
                toast({
                    title:"Success!",
                    description:"Your action was completed successfully.",
                });
                break;
            case 'error':
                toast({
                    title:"Error",
                    description:"Something went wrong. Please try again.",
                    variant:"destructive",
                });
                break;
            case 'info':
                toast({
                    title:"Information",
                    description:"Here's some useful information for you.",
                });
                break;
            case 'warning':
                toast({
                    title:"Warning",
                    description:"Please review this action before proceeding.",
                });
                break;
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h2 className="mb-4" style={{ color: 'var(--lb-black-900)' }}>
                    Feedback Elements
                </h2>
                <p  style={{ color: 'var(--lb-black-600)' }}>
                    Alerts, dialogs, toasts, and user feedback components for clear communication
                </p>
            </div>

            {/* Alerts */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Alert Components</CardTitle>
                    <CardDescription>
                        Static feedback messages for different types of information
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Information Alert */}
                    <div className="space-y-3">
                        <h4 >Information Alerts</h4>
                        <Alert>
                            <InfoIcon className="h-4 w-4" />
                            <AlertTitle>Information</AlertTitle>
                            <AlertDescription>
                                This is an informational alert with consistent styling and clear messaging.
                            </AlertDescription>
                        </Alert>
                    </div>

                    {/* Success Alert */}
                    <div className="space-y-3">
                        <h4 >Success Alerts</h4>
                        <Alert className="border-green-200 bg-green-50">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <AlertTitle className="text-green-800">Success</AlertTitle>
                            <AlertDescription className="text-green-700">
                                Your action was completed successfully. All changes have been saved.
                            </AlertDescription>
                        </Alert>
                    </div>

                    {/* Warning Alert */}
                    <div className="space-y-3">
                        <h4 >Warning Alerts</h4>
                        <Alert className="border-yellow-200 bg-yellow-50">
                            <AlertCircleIcon className="h-4 w-4 text-yellow-600" />
                            <AlertTitle className="text-yellow-800">Warning</AlertTitle>
                            <AlertDescription className="text-yellow-700">
                                Please review this action carefully before proceeding. This cannot be undone.
                            </AlertDescription>
                        </Alert>
                    </div>

                    {/* Error Alert */}
                    <div className="space-y-3">
                        <h4 >Error Alerts</h4>
                        <Alert variant="destructive">
                            <XCircleIcon className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Something went wrong. Please check your input and try again.
                            </AlertDescription>
                        </Alert>
                    </div>

                    {/* Critical Alert */}
                    <div className="space-y-3">
                        <h4 >Critical Alerts</h4>
                        <Alert variant="destructive" className="border-red-500 bg-red-50">
                            <AlertTriangleIcon className="h-4 w-4" />
                            <AlertTitle>Critical Error</AlertTitle>
                            <AlertDescription>
                                System error detected. Contact support immediately if this persists.
                            </AlertDescription>
                        </Alert>
                    </div>
                </CardContent>
            </Card>

            {/* Dialogs */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Dialog Components</CardTitle>
                    <CardDescription>
                        Modal dialogs for user interaction and confirmation
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Dialog Examples</h4>
                        <div className="flex flex-wrap gap-3">
                            {/* Confirmation Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Confirmation Dialog</Button>
                                </DialogTrigger>
                                <DialogContent className="luvbox-dialog-base">
                                    <DialogHeader>
                                        <DialogTitle>Confirm Action</DialogTitle>
                                        <DialogDescription>
                                            Are you sure you want to delete this item? This action cannot be undone.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-end space-x-2 mt-4">
                                        <Button variant="outline" size="small">Cancel</Button>
                                        <Button variant="destructive" size="small">Delete</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            {/* Information Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Information Dialog</Button>
                                </DialogTrigger>
                                <DialogContent className="luvbox-dialog-base">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <InfoIcon className="h-5 w-5 text-blue-500" />
                                            About This Feature
                                        </DialogTitle>
                                        <DialogDescription>
                                            This feature helps you manage your data more effectively. Here are the key benefits:
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-3 mt-4">
                                        <ul >
                                            <li>• Automated data processing</li>
                                            <li>• Real-time synchronization</li>
                                            <li>• Advanced filtering options</li>
                                            <li>• Export capabilities</li>
                                        </ul>
                                        <div className="flex justify-end">
                                            <Button variant="primary" size="small">Got it</Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            {/* Form Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Form Dialog</Button>
                                </DialogTrigger>
                                <DialogContent className="luvbox-dialog-base">
                                    <DialogHeader>
                                        <DialogTitle>Create New Item</DialogTitle>
                                        <DialogDescription>
                                            Fill in the details below to create a new item.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 mt-4">
                                        <div className="space-y-2">
                                            <label >Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter item name..."
                                                className="w-full px-3 py-2 border rounded-md"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label >Description</label>
                                            <textarea
                                                placeholder="Enter description..."
                                                className="w-full px-3 py-2 border rounded-md"
                                                rows={3}
                                            />
                                        </div>
                                        <div className="flex justify-end space-x-2">
                                            <Button variant="outline" size="small">Cancel</Button>
                                            <Button variant="primary" size="small">Create</Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Toast Notifications */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Toast Notifications</CardTitle>
                    <CardDescription>
                        Temporary feedback messages that appear and disappear automatically
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Toast Examples</h4>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="outline"
                                onClick={() => showToast('success')}
                            >
                                Show Success Toast
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => showToast('error')}
                            >
                                Show Error Toast
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => showToast('info')}
                            >
                                Show Info Toast
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => showToast('warning')}
                            >
                                Show Warning Toast
                            </Button>
                        </div>
                        <p >
                            Click the buttons above to see different types of toast notifications.
                        </p>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h4 >Toast Behavior</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <h5 >Auto-dismiss</h5>
                                <p >Most toasts automatically disappear after 5 seconds</p>
                            </div>
                            <div className="space-y-2">
                                <h5 >Manual dismiss</h5>
                                <p >Users can click the X button to dismiss early</p>
                            </div>
                            <div className="space-y-2">
                                <h5 >Stacking</h5>
                                <p >Multiple toasts stack vertically</p>
                            </div>
                            <div className="space-y-2">
                                <h5 >Position</h5>
                                <p >Appear in the bottom-right corner</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Loading States */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Loading & Progress Feedback</CardTitle>
                    <CardDescription>
                        Visual feedback for ongoing processes and loading states
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Loading States</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h5 >Button Loading</h5>
                                <div className="flex gap-2">
                                    <Button variant="primary" disabled>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Loading...
                                    </Button>
                                    <Button variant="outline" disabled>
                                        Processing...
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 >Content Loading</h5>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design Standards */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Feedback Element Standards</CardTitle>
                    <CardDescription>
                        Design specifications for consistent user feedback
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 >Alert Specifications</h4>
                            <ul >
                                <li>• Border radius: 8px</li>
                                <li>• Padding: 16px</li>
                                <li>• Icons: 16px, consistent positioning</li>
                                <li>• Color coding: Info (blue), Success (green), Warning (yellow), Error (red)</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 >Dialog & Toast Standards</h4>
                            <ul >
                                <li>• Dialog border radius: 16px</li>
                                <li>• Toast duration: 5 seconds (default)</li>
                                <li>• Max width: 400px for toasts</li>
                                <li>• Overlay: Semi-transparent backdrop</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <p  style={{ color: 'var(--lb-black-600)' }}>
                            All feedback elements follow accessibility guidelines and use consistent color coding for different message types
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
