import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/elements/breadcrumb';
import { Button } from '@/elements/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/elements/dropdown-menu';
import { Separator } from '@/elements/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/elements/tooltip';
import { BellIcon, ChevronDownIcon, HomeIcon, InfoIcon, MenuIcon, SearchIcon, SettingsIcon, UserIcon } from 'lucide-react';

export default function NavigationElementsSection() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-app-display mb-4">
                    Navigation Elements
                </h2>
                <p className="text-app-caption">
                    Navigation and wayfinding components for app structure
                </p>
            </div>

            {/* Breadcrumbs */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Breadcrumb Navigation</CardTitle>
                    <CardDescription>
                        Hierarchical navigation showing current location in the application
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Standard Breadcrumb */}
                    <div className="space-y-3">
                        <h4 >Standard Breadcrumb</h4>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">
                                        <HomeIcon className="h-4 w-4" />
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Navigation Elements</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <Separator />

                    {/* Deep Navigation Breadcrumb */}
                    <div className="space-y-3">
                        <h4 >Deep Navigation Example</h4>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">
                                        <HomeIcon className="h-4 w-4" />
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/app">Application</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/app/settings">Settings</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/app/settings/components">Components</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <Separator />

                    {/* Simple Text Breadcrumb */}
                    <div className="space-y-3">
                        <h4 >Simple Text Breadcrumb</h4>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Project Alpha</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </CardContent>
            </Card>

            {/* Dropdown Menus */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Dropdown Menus</CardTitle>
                    <CardDescription>
                        Context menus and dropdown navigation components
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* User Menu */}
                    <div className="space-y-4">
                        <h4 >User Account Menu</h4>
                        <div className="flex space-x-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        User Menu
                                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="luvbox-dropdown-base">
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        <SettingsIcon className="mr-2 h-4 w-4" />
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        <BellIcon className="mr-2 h-4 w-4" />
                                        Notifications
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item" variant="destructive">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <MenuIcon className="mr-2 h-4 w-4" />
                                        Actions
                                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="luvbox-dropdown-base">
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Create New
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Import Data
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Export Data
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item" variant="destructive">
                                        Delete All
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <Separator />

                    {/* Context Menu */}
                    <div className="space-y-4">
                        <h4 >Context Menu Example</h4>
                        <div className="p-4 border-2 border-dashed rounded-lg text-center" style={{ borderColor: 'var(--form-border)' }}>
                            <p >Right-click area for context menu</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="small">
                                        Right-click simulation
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="luvbox-dropdown-base">
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Copy
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Paste
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item">
                                        Cut
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="luvbox-dropdown-item" variant="destructive">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tooltips */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Tooltip Components</CardTitle>
                    <CardDescription>
                        Helpful hover information and guidance tooltips
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Tooltip Examples</h4>
                        <div className="flex flex-wrap gap-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <InfoIcon className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>This is helpful information</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <SettingsIcon className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Open settings panel</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <SearchIcon className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Search through content</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <BellIcon className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View notifications (3 unread)</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h4 >Complex Tooltip Content</h4>
                        <div className="flex gap-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">
                                            Hover for rich tooltip
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs">
                                        <div className="space-y-2">
                                            <p >Advanced Feature</p>
                                            <p >This feature provides enhanced functionality with multiple options and settings.</p>
                                            <p className="text-gray-500">Available in Pro plan</p>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline">
                                            Keyboard shortcut
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <div className="flex items-center gap-2">
                                            <span>Save file</span>
                                            <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl+S</kbd>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design Standards */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Navigation Element Standards</CardTitle>
                    <CardDescription>
                        Design specifications for consistent navigation components
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 >Breadcrumb Specifications</h4>
                            <ul >
                                <li>• Separator:"/" or chevron</li>
                                <li>• Current page: Non-clickable, emphasized</li>
                                <li>• Links: Clickable, hover states</li>
                                <li>• Icons: 16px, consistent spacing</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 >Dropdown & Tooltip Standards</h4>
                            <ul >
                                <li>• Dropdown: Consistent border radius</li>
                                <li>• Menu items: 40px height minimum</li>
                                <li>• Tooltips: Dark background, white text</li>
                                <li>• Hover delays: 500ms show, 200ms hide</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <p className="text-app-caption">
                            All navigation elements use the <code>.luvbox-dropdown-base</code> classes and consistent interactive patterns
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
