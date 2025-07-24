import { PageHeader } from '@/app/components';
import { Badge } from '@/elements/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';

export default function ComponentShowcasePage() {
    const handleNavigate = (section: string) => {
        window.dispatchEvent(new CustomEvent('settingsMenuChange', { detail: section }));
    };

    return (
        <div className="page-wrapper">
            <PageHeader breadcrumbs={['Settings', 'Component Showcase']} />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="mb-4" style={{ color: 'var(--lb-black-900)' }}>
                        Component Showcase Overview
                    </h1>
                    <p  style={{ color: 'var(--lb-black-600)' }}>
                        Design system testing organized by component categories
                    </p>
                </div>

                {/* Component Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('form-elements')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Form Elements
                                <Badge variant="outline">40px height</Badge>
                            </CardTitle>
                            <CardDescription>
                                Input fields, selects, textareas, checkboxes, and form controls
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Text inputs (email, password, search)</li>
                                <li>• Select dropdowns</li>
                                <li>• Textarea components</li>
                                <li>• Checkboxes, switches, radio groups</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('interactive-elements')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Interactive Elements
                                <Badge variant="outline">40px/48px</Badge>
                            </CardTitle>
                            <CardDescription>
                                Buttons, tabs, toggles, and interactive components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Buttons (small 40px, large 48px)</li>
                                <li>• Tab components</li>
                                <li>• Toggle buttons</li>
                                <li>• Progress bars and sliders</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('data-display')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Data Display
                                <Badge variant="outline">Variable</Badge>
                            </CardTitle>
                            <CardDescription>
                                Cards, badges, avatars, and data presentation
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Card components</li>
                                <li>• Badge variations</li>
                                <li>• Avatar components</li>
                                <li>• Data presentation elements</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('navigation-elements')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Navigation
                                <Badge variant="outline">Consistent</Badge>
                            </CardTitle>
                            <CardDescription>
                                Breadcrumbs, dropdown menus, and navigation
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Breadcrumb navigation</li>
                                <li>• Dropdown menus</li>
                                <li>• Tooltip components</li>
                                <li>• Navigation elements</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('feedback-elements')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Feedback
                                <Badge variant="outline">Contextual</Badge>
                            </CardTitle>
                            <CardDescription>
                                Alerts, dialogs, and user feedback components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Alert components</li>
                                <li>• Dialog/modal components</li>
                                <li>• Toast notifications</li>
                                <li>• User feedback systems</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="luvbox-card-base cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleNavigate('layout-elements')}>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                Layout
                                <Badge variant="outline">Structural</Badge>
                            </CardTitle>
                            <CardDescription>
                                Accordions, separators, and layout components
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul >
                                <li>• Accordion components</li>
                                <li>• Separator elements</li>
                                <li>• Layout containers</li>
                                <li>• Design token reference</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Design System Summary */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Design System Summary</CardTitle>
                        <CardDescription>
                            Overview of our component consistency standards
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div  style={{ color: 'var(--blue-500)' }}>40px</div>
                                <div >Form & Interactive Height</div>
                            </div>
                            <div className="text-center">
                                <div  style={{ color: 'var(--success-green-400)' }}>12px</div>
                                <div >Standard Border Radius</div>
                            </div>
                            <div className="text-center">
                                <div  style={{ color: 'var(--purple-500)' }}>CSS</div>
                                <div >Design Token System</div>
                            </div>
                        </div>
                        <p  style={{ color: 'var(--lb-black-600)' }}>
                            All components use centralized CSS design tokens for consistent styling across the application.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
