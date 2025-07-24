import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/elements/accordion';
import { AspectRatio } from '@/elements/aspect-ratio';
import { Badge } from '@/elements/badge';
import { Button } from '@/elements/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/elements/collapsible';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/elements/resizable';
import { ScrollArea } from '@/elements/scroll-area';
import { Separator } from '@/elements/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/elements/tabs';
import { ChevronDownIcon, GridIcon, LayoutGridIcon, PanelLeftIcon, SidebarIcon, SquareIcon } from 'lucide-react';
import React from 'react';

export default function LayoutElementsSection() {
    const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h2 className="mb-4" style={{ color: 'var(--lb-black-900)' }}>
                    Layout Elements
                </h2>
                <p  style={{ color: 'var(--lb-black-600)' }}>
                    Structural components for organizing content and building consistent layouts
                </p>
            </div>

            {/* Accordion & Collapsible */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Accordion & Collapsible Components</CardTitle>
                    <CardDescription>
                        Expandable sections for organizing and revealing content
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Accordion */}
                    <div className="space-y-3">
                        <h4 >Accordion (Multiple Items)</h4>
                        <Accordion type="multiple" className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Getting Started</AccordionTrigger>
                                <AccordionContent>
                                    Welcome to our platform! Here you'll find everything you need to get started with your first project.
                                    This section includes setup instructions, basic concepts, and helpful tips.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Advanced Features</AccordionTrigger>
                                <AccordionContent>
                                    Explore powerful features like custom integrations, automation workflows, and advanced analytics.
                                    These tools help you scale your operations and improve efficiency.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Support & Resources</AccordionTrigger>
                                <AccordionContent>
                                    Find documentation, tutorials, community forums, and direct support channels.
                                    Our team is here to help you succeed with comprehensive resources and responsive assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>API Documentation</AccordionTrigger>
                                <AccordionContent>
                                    Complete API reference with endpoints, authentication methods, rate limits, and code examples.
                                    Build powerful integrations with our RESTful API and webhook system.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <Separator />

                    {/* Collapsible */}
                    <div className="space-y-3">
                        <h4 >Collapsible Section</h4>
                        <Collapsible
                            open={isCollapsibleOpen}
                            onOpenChange={setIsCollapsibleOpen}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-4">
                                <h4 >Project Settings</h4>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="small" className="w-9 p-0">
                                        <ChevronDownIcon className="h-4 w-4" />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <div className="rounded-md border px-4 py-3 font-mono">
                                General configuration and basic project information
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className="rounded-md border px-4 py-3 font-mono">
                                    Advanced security settings and access controls
                                </div>
                                <div className="rounded-md border px-4 py-3 font-mono">
                                    Integration configurations and API keys
                                </div>
                                <div className="rounded-md border px-4 py-3 font-mono">
                                    Notification preferences and alert settings
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </CardContent>
            </Card>

            {/* Tabs & Navigation */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Tabs & Content Organization</CardTitle>
                    <CardDescription>
                        Tabbed interfaces for organizing related content
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics">Analytics</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                            <TabsTrigger value="team">Team</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle >Project Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <span>Active Tasks</span>
                                            <Badge variant="secondary">12</Badge>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span>Completed</span>
                                            <Badge variant="secondary">45</Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle >Recent Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p  style={{ color: 'var(--lb-black-600)' }}>
                                            Latest updates and changes to your project timeline and deliverables.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="analytics" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle >Performance Metrics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span>Response Time</span>
                                            <span className="font-mono">120ms</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Success Rate</span>
                                            <span className="font-mono">99.2%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Total Requests</span>
                                            <span className="font-mono">1.2M</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="settings" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle >Configuration</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label >Project Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter project name..."
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label >Description</label>
                                        <textarea
                                            placeholder="Project description..."
                                            className="w-full px-3 py-2 border rounded-md"
                                            rows={3}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="team" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle >Team Members</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--blue-500)' }}>
                                                    J
                                                </div>
                                                <span>John Smith</span>
                                            </div>
                                            <Badge variant="outline">Admin</Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: 'var(--success-green-500)' }}>
                                                    S
                                                </div>
                                                <span>Sarah Johnson</span>
                                            </div>
                                            <Badge variant="outline">Member</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            {/* Resizable Panels */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Resizable Layouts</CardTitle>
                    <CardDescription>
                        Flexible panel layouts that users can resize and customize
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-3">
                        <h4 >Horizontal Panels</h4>
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="max-w-full rounded-lg border"
                        >
                            <ResizablePanel defaultSize={30}>
                                <div className="flex h-32 items-center justify-center p-6">
                                    <div className="text-center">
                                        <SidebarIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span >Sidebar</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={70}>
                                <div className="flex h-32 items-center justify-center p-6">
                                    <div className="text-center">
                                        <LayoutGridIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span >Main Content</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>

                    <div className="space-y-3">
                        <h4 >Vertical Panels</h4>
                        <ResizablePanelGroup
                            direction="vertical"
                            className="max-w-full rounded-lg border"
                        >
                            <ResizablePanel defaultSize={40}>
                                <div className="flex h-24 items-center justify-center p-6">
                                    <div className="text-center">
                                        <PanelLeftIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span >Header Panel</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={60}>
                                <div className="flex h-24 items-center justify-center p-6">
                                    <div className="text-center">
                                        <GridIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span >Content Panel</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </CardContent>
            </Card>

            {/* Scroll Areas & Aspect Ratios */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Scroll Areas & Aspect Ratios</CardTitle>
                    <CardDescription>
                        Controlled scrolling and responsive aspect ratio containers
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Scroll Area */}
                        <div className="space-y-3">
                            <h4 >Scroll Area</h4>
                            <ScrollArea className="h-48 w-full rounded-md border p-4">
                                <div className="space-y-4">
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--blue-100)', color: 'var(--blue-700)' }}>
                                                {i + 1}
                                            </div>
                                            <span >Scrollable item {i + 1} with content</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Aspect Ratio */}
                        <div className="space-y-3">
                            <h4 >Aspect Ratio Container</h4>
                            <AspectRatio ratio={16 / 9} className="rounded-md" style={{ backgroundColor: 'var(--lb-black-100)' }}>
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <SquareIcon className="mx-auto h-8 w-8 mb-2" style={{ color: 'var(--lb-black-400)' }} />
                                        <span  style={{ color: 'var(--lb-black-600)' }}>16:9 Aspect Ratio</span>
                                        <p className="mt-1" style={{ color: 'var(--lb-black-500)' }}>Responsive container</p>
                                    </div>
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Separators & Dividers */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Separators & Dividers</CardTitle>
                    <CardDescription>
                        Visual elements for content separation and organization
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Horizontal Separators</h4>
                        <div className="space-y-4">
                            <p >Content above the separator</p>
                            <Separator />
                            <p >Content below the separator</p>
                            <Separator className="my-6" />
                            <p >Another section with spacing</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 >Vertical Separators</h4>
                        <div className="flex items-center space-x-4">
                            <span >Left content</span>
                            <Separator orientation="vertical" className="h-8" />
                            <span >Middle content</span>
                            <Separator orientation="vertical" className="h-8" />
                            <span >Right content</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive States Demo */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Interactive States System</CardTitle>
                    <CardDescription>
                        Consistent hover, active, and focus states across all interactive elements
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <h4 >Interactive Element Examples</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Interactive Menu Items */}
                            <div className="space-y-2">
                                <h5 >Menu Items (Interactive)</h5>
                                <div className="border rounded-lg p-2 space-y-1">
                                    <div className="luvbox-menu-item px-3 py-2 rounded-md">
                                        Dashboard Overview
                                    </div>
                                    <div className="luvbox-menu-item px-3 py-2 rounded-md" data-state="active">
                                        Current Page (Active)
                                    </div>
                                    <div className="luvbox-menu-item px-3 py-2 rounded-md">
                                        Settings & Preferences
                                    </div>
                                    <div className="luvbox-menu-item px-3 py-2 rounded-md">
                                        User Profile
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Buttons */}
                            <div className="space-y-2">
                                <h5 >Interactive Buttons</h5>
                                <div className="border rounded-lg p-4 space-y-2">
                                    <div className="luvbox-interactive-hover px-4 py-2 rounded-md border cursor-pointer">
                                        Hover for Effect
                                    </div>
                                    <div className="luvbox-interactive-active px-4 py-2 rounded-md border">
                                        Active State
                                    </div>
                                    <Button variant="ghost" className="w-full">
                                        Standard Ghost Button
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h4 >Color Usage Guidelines</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <h5 >Hover State</h5>
                                <div
                                    className="h-12 rounded-md border flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--interactive-hover)' }}
                                >
                                    var(--interactive-hover)
                                </div>
                                <p  style={{ color: 'var(--lb-black-500)' }}>
                                    Purple 20% opacity - Subtle feedback
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 >Active State</h5>
                                <div
                                    className="h-12 rounded-md border flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--interactive-active)' }}
                                >
                                    var(--interactive-active)
                                </div>
                                <p  style={{ color: 'var(--lb-black-500)' }}>
                                    Purple 40% opacity - Clear selection
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 >Implementation</h5>
                                <div className="space-y-1" style={{ color: 'var(--lb-black-600)' }}>
                                    <div>✅ Use CSS variables</div>
                                    <div>✅ 0.2s ease transition</div>
                                    <div>✅ Consistent across components</div>
                                    <div>❌ Never hardcode RGBA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design Standards */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Layout Element Standards</CardTitle>
                    <CardDescription>
                        Design specifications for consistent layout components
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 >Interactive States</h4>
                            <ul >
                                <li>• Hover: var(--interactive-hover) - Purple 20% opacity</li>
                                <li>• Active/Selected: var(--interactive-active) - Purple 40% opacity</li>
                                <li>• Transition: 0.2s ease for smooth feedback</li>
                                <li>• Focus: 3px ring with color-appropriate variants</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 >Component Standards</h4>
                            <ul >
                                <li>• Border radius: 8px (cards), 6px (elements)</li>
                                <li>• Accordion trigger height: 48px</li>
                                <li>• Tab height: 40px</li>
                                <li>• Resizable handle: 4px thick</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <p  style={{ color: 'var(--lb-black-600)' }}>
                            All layout elements follow responsive design principles and maintain consistent spacing across breakpoints
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
