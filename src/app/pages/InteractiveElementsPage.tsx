import { PageHeader } from '@/app/components';
import { Button } from '@/elements/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import { Label } from '@/elements/label';
import { Progress } from '@/elements/progress';
import { Separator } from '@/elements/separator';
import { Slider } from '@/elements/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/elements/tabs';
import { Toggle } from '@/elements/toggle';
import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from 'lucide-react';
import { useState } from 'react';

export default function InteractiveElementsPage() {
    const [progressValue, setProgressValue] = useState(60);
    const [sliderValue, setSliderValue] = useState([50]);
    const [volumeSlider, setVolumeSlider] = useState([75]);
    const [toggled, setToggled] = useState(false);
    const [playToggled, setPlayToggled] = useState(false);
    const [muteToggled, setMuteToggled] = useState(false);

    return (
        <div className="page-wrapper">
            <PageHeader breadcrumbs={['Settings', 'Interactive Elements']} />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--lb-black-900)' }}>
                        Interactive Elements
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--lb-black-600)' }}>
                        Buttons, tabs, toggles, and other interactive components with consistent 40px/48px heights
                    </p>
                </div>

                {/* Buttons */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Buttons (40px Small, 48px Large)</CardTitle>
                        <CardDescription>
                            Button variations with consistent height standards
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* Small Buttons */}
                        <div className="space-y-4">
                            <h4 className="text-md font-medium">Small Buttons (40px)</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary" size="small">Primary Small</Button>
                                <Button variant="secondary" size="small">Secondary Small</Button>
                                <Button variant="outline" size="small">Outline Small</Button>
                                <Button variant="ghost" size="small">Ghost Small</Button>
                                <Button variant="destructive" size="small">Destructive Small</Button>
                            </div>
                            <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                Small buttons maintain 40px height, consistent with form elements
                            </div>
                        </div>

                        <Separator />

                        {/* Large Buttons */}
                        <div className="space-y-4">
                            <h4 className="text-md font-medium">Large Buttons (48px)</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary" size="large">Primary Large</Button>
                                <Button variant="secondary" size="large">Secondary Large</Button>
                                <Button variant="outline" size="large">Outline Large</Button>
                                <Button variant="ghost" size="large">Ghost Large</Button>
                                <Button variant="destructive" size="large">Destructive Large</Button>
                            </div>
                            <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                Large buttons use 48px height for enhanced prominence
                            </div>
                        </div>

                        <Separator />

                        {/* Icon Buttons */}
                        <div className="space-y-4">
                            <h4 className="text-md font-medium">Icon Buttons</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="outline" size="icon">
                                    <PlayIcon className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <PauseIcon className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <VolumeXIcon className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Volume2Icon className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                Icon buttons maintain square aspect ratio with consistent padding
                            </div>
                        </div>

                        <Separator />

                        {/* Button States */}
                        <div className="space-y-4">
                            <h4 className="text-md font-medium">Button States</h4>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Normal</Button>
                                <Button variant="primary" disabled>Disabled</Button>
                                <Button variant="outline">Normal Outline</Button>
                                <Button variant="outline" disabled>Disabled Outline</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tabs */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Tabs (40px Height)</CardTitle>
                        <CardDescription>
                            Tab components maintain consistent height with form elements
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Tabs defaultValue="tab1" className="w-full">
                            <TabsList>
                                <TabsTrigger value="tab1">Overview</TabsTrigger>
                                <TabsTrigger value="tab2">Details</TabsTrigger>
                                <TabsTrigger value="tab3">Settings</TabsTrigger>
                                <TabsTrigger value="tab4">Advanced</TabsTrigger>
                            </TabsList>
                            <TabsContent value="tab1" className="mt-6">
                                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--blue-50)' }}>
                                    <h3 className="font-medium mb-2">Overview Tab</h3>
                                    <p>Tabs maintain 40px height for consistency with form elements. This ensures visual harmony across the interface.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="tab2" className="mt-6">
                                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--green-50)' }}>
                                    <h3 className="font-medium mb-2">Details Tab</h3>
                                    <p>All interactive elements follow the same height standard, creating a cohesive user experience.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="tab3" className="mt-6">
                                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--purple-50)' }}>
                                    <h3 className="font-medium mb-2">Settings Tab</h3>
                                    <p>The design system ensures consistent spacing and alignment throughout the application.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="tab4" className="mt-6">
                                <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--orange-50)' }}>
                                    <h3 className="font-medium mb-2">Advanced Tab</h3>
                                    <p>Advanced configuration options maintain the same visual standards as all other components.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Toggles */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Toggle Elements (40px Height)</CardTitle>
                        <CardDescription>
                            Toggle buttons with consistent interactive sizing
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <Label>Basic Toggle</Label>
                                <Toggle
                                    pressed={toggled}
                                    onPressedChange={setToggled}
                                    aria-label="Toggle"
                                >
                                    {toggled ? 'Active' : 'Inactive'}
                                </Toggle>
                                <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                    Status: {toggled ? 'Pressed' : 'Not Pressed'}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Play/Pause Toggle</Label>
                                <Toggle
                                    pressed={playToggled}
                                    onPressedChange={setPlayToggled}
                                    aria-label="Play/Pause"
                                >
                                    {playToggled ? (
                                        <PauseIcon className="h-4 w-4" />
                                    ) : (
                                        <PlayIcon className="h-4 w-4" />
                                    )}
                                </Toggle>
                                <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                    {playToggled ? 'Playing' : 'Paused'}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Mute Toggle</Label>
                                <Toggle
                                    pressed={muteToggled}
                                    onPressedChange={setMuteToggled}
                                    aria-label="Mute"
                                >
                                    {muteToggled ? (
                                        <VolumeXIcon className="h-4 w-4" />
                                    ) : (
                                        <Volume2Icon className="h-4 w-4" />
                                    )}
                                </Toggle>
                                <div className="text-sm" style={{ color: 'var(--lb-black-500)' }}>
                                    {muteToggled ? 'Muted' : 'Unmuted'}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Progress & Sliders */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Progress & Sliders (40px Height)</CardTitle>
                        <CardDescription>
                            Progress bars and sliders with consistent interactive height
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* Progress Bar */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Progress Bar</Label>
                                <span className="text-sm" style={{ color: 'var(--lb-black-600)' }}>
                                    {progressValue}%
                                </span>
                            </div>
                            <Progress value={progressValue} className="w-full" />
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="small"
                                    onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
                                    disabled={progressValue <= 0}
                                >
                                    -10%
                                </Button>
                                <Button
                                    variant="outline"
                                    size="small"
                                    onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                                    disabled={progressValue >= 100}
                                >
                                    +10%
                                </Button>
                                <Button
                                    variant="outline"
                                    size="small"
                                    onClick={() => setProgressValue(0)}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>

                        <Separator />

                        {/* Standard Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Standard Slider</Label>
                                <span className="text-sm" style={{ color: 'var(--lb-black-600)' }}>
                                    Value: {sliderValue[0]}
                                </span>
                            </div>
                            <Slider
                                value={sliderValue}
                                onValueChange={setSliderValue}
                                max={100}
                                step={1}
                                className="w-full"
                            />
                        </div>

                        {/* Volume Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label>Volume Slider</Label>
                                <span className="text-sm" style={{ color: 'var(--lb-black-600)' }}>
                                    Volume: {volumeSlider[0]}%
                                </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <VolumeXIcon className="h-4 w-4" style={{ color: 'var(--lb-black-400)' }} />
                                <Slider
                                    value={volumeSlider}
                                    onValueChange={setVolumeSlider}
                                    max={100}
                                    step={5}
                                    className="flex-1"
                                />
                                <Volume2Icon className="h-4 w-4" style={{ color: 'var(--lb-black-400)' }} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Design Standards */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Interactive Element Standards</CardTitle>
                        <CardDescription>
                            Design specifications for consistent interactive components
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h4 className="font-medium">Button Specifications</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Small buttons: 40px height</li>
                                    <li>• Large buttons: 48px height (default)</li>
                                    <li>• Border radius: 12px</li>
                                    <li>• Icon buttons: Square aspect ratio</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-medium">Interactive Elements</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Tabs: 40px height</li>
                                    <li>• Toggles: 40px height</li>
                                    <li>• Sliders: 40px interactive area</li>
                                    <li>• Progress bars: Consistent with sliders</li>
                                </ul>
                            </div>
                        </div>
                        <Separator />
                        <div className="text-center">
                            <p className="text-sm" style={{ color: 'var(--lb-black-600)' }}>
                                All interactive elements use the <code>.luvbox-interactive-base</code> class and maintain visual consistency with form elements
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
