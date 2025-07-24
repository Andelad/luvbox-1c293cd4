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
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--lb-black-900)' }}>
                    Layout Elements
                </h2>
                <p className="text-lg" style={{ color: 'var(--lb-black-600)' }}>
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
                        <h4 className="font-medium">Accordion (Multiple Items)</h4>
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
                        <h4 className="font-medium">Collapsible Section</h4>
                        <Collapsible
                            open={isCollapsibleOpen}
                            onOpenChange={setIsCollapsibleOpen}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-4">
                                <h4 className="text-sm font-semibold">Project Settings</h4>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="small" className="w-9 p-0">
                                        <ChevronDownIcon className="h-4 w-4" />
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <div className="rounded-md border px-4 py-3 font-mono text-sm">
                                General configuration and basic project information
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                                    Advanced security settings and access controls
                                </div>
                                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                                    Integration configurations and API keys
                                </div>
                                <div className="rounded-md border px-4 py-3 font-mono text-sm">
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
                                        <CardTitle className="text-lg">Project Status</CardTitle>
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
                                        <CardTitle className="text-lg">Recent Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">
                                            Latest updates and changes to your project timeline and deliverables.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="analytics" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Performance Metrics</CardTitle>
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
                                    <CardTitle className="text-lg">Configuration</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Project Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter project name..."
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Description</label>
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
                                    <CardTitle className="text-lg">Team Members</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                                                    J
                                                </div>
                                                <span>John Smith</span>
                                            </div>
                                            <Badge variant="outline">Admin</Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
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
                        <h4 className="font-medium">Horizontal Panels</h4>
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="max-w-full rounded-lg border"
                        >
                            <ResizablePanel defaultSize={30}>
                                <div className="flex h-32 items-center justify-center p-6">
                                    <div className="text-center">
                                        <SidebarIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span className="text-sm font-medium">Sidebar</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={70}>
                                <div className="flex h-32 items-center justify-center p-6">
                                    <div className="text-center">
                                        <LayoutGridIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span className="text-sm font-medium">Main Content</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-medium">Vertical Panels</h4>
                        <ResizablePanelGroup
                            direction="vertical"
                            className="max-w-full rounded-lg border"
                        >
                            <ResizablePanel defaultSize={40}>
                                <div className="flex h-24 items-center justify-center p-6">
                                    <div className="text-center">
                                        <PanelLeftIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span className="text-sm font-medium">Header Panel</span>
                                    </div>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={60}>
                                <div className="flex h-24 items-center justify-center p-6">
                                    <div className="text-center">
                                        <GridIcon className="mx-auto h-6 w-6 mb-2" />
                                        <span className="text-sm font-medium">Content Panel</span>
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
                            <h4 className="font-medium">Scroll Area</h4>
                            <ScrollArea className="h-48 w-full rounded-md border p-4">
                                <div className="space-y-4">
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-sm">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm">Scrollable item {i + 1} with content</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Aspect Ratio */}
                        <div className="space-y-3">
                            <h4 className="font-medium">Aspect Ratio Container</h4>
                            <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-md">
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <SquareIcon className="mx-auto h-8 w-8 mb-2 text-gray-400" />
                                        <span className="text-sm text-gray-600">16:9 Aspect Ratio</span>
                                        <p className="text-xs text-gray-500 mt-1">Responsive container</p>
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
                        <h4 className="font-medium">Horizontal Separators</h4>
                        <div className="space-y-4">
                            <p className="text-sm">Content above the separator</p>
                            <Separator />
                            <p className="text-sm">Content below the separator</p>
                            <Separator className="my-6" />
                            <p className="text-sm">Another section with spacing</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium">Vertical Separators</h4>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm">Left content</span>
                            <Separator orientation="vertical" className="h-8" />
                            <span className="text-sm">Middle content</span>
                            <Separator orientation="vertical" className="h-8" />
                            <span className="text-sm">Right content</span>
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
                            <h4 className="font-medium">Spacing Standards</h4>
                            <ul className="text-sm space-y-1">
                                <li>• Card padding: 24px</li>
                                <li>• Section spacing: 32px</li>
                                <li>• Element spacing: 16px</li>
                                <li>• Compact spacing: 8px</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-medium">Component Standards</h4>
                            <ul className="text-sm space-y-1">
                                <li>• Border radius: 8px (cards), 6px (elements)</li>
                                <li>• Accordion trigger height: 48px</li>
                                <li>• Tab height: 40px</li>
                                <li>• Resizable handle: 4px thick</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <p className="text-sm" style={{ color: 'var(--lb-black-600)' }}>
                            All layout elements follow responsive design principles and maintain consistent spacing across breakpoints
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
