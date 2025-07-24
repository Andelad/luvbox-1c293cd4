import { PageHeader } from '@/app/components';
import { Avatar, AvatarFallback, AvatarImage } from '@/elements/avatar';
import { Badge } from '@/elements/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import { Separator } from '@/elements/separator';
import { AlertTriangleIcon, CheckIcon, InfoIcon, StarIcon, UserIcon } from 'lucide-react';

export default function DataDisplayPage() {
    return (
        <div className="page-wrapper">
            <PageHeader breadcrumbs={['Settings', 'Data Display']} />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-app-display mb-4">
                        Data Display
                    </h1>
                    <p className="text-app-caption">
                        Data visualization and display components with consistent styling
                    </p>
                </div>

                {/* Cards */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Card Components</CardTitle>
                        <CardDescription>
                            Consistent card styling with 12px border radius
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Basic Card */}
                            <Card className="luvbox-card-base">
                                <CardHeader>
                                    <CardTitle>Basic Card</CardTitle>
                                    <CardDescription>Simple card with header and content</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>This is a basic card example. All cards use consistent border radius, shadows, and padding.</p>
                                </CardContent>
                            </Card>

                            {/* Card with Avatar */}
                            <Card className="luvbox-card-base">
                                <CardHeader>
                                    <CardTitle>User Profile Card</CardTitle>
                                    <CardDescription>Card with avatar and user information</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p >John Doe</p>
                                            <p >Software Developer</p>
                                            <div className="flex items-center space-x-1 mt-1">
                                                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <StarIcon className="h-3 w-3 text-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Card with Badges */}
                            <Card className="luvbox-card-base">
                                <CardHeader>
                                    <CardTitle>Status Card</CardTitle>
                                    <CardDescription>Card demonstrating badge usage</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span>Project Status</span>
                                            <Badge variant="default">In Progress</Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Priority</span>
                                            <Badge variant="destructive">High</Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Team Size</span>
                                            <Badge variant="secondary">5 members</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Statistics Card */}
                            <Card className="luvbox-card-base">
                                <CardHeader>
                                    <CardTitle>Statistics</CardTitle>
                                    <CardDescription>Numerical data presentation</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div style={{ color: 'var(--blue-500)' }}>127</div>
                                            <div >Active Users</div>
                                        </div>
                                        <div className="text-center">
                                            <div style={{ color: 'var(--green-500)' }}>98%</div>
                                            <div >Uptime</div>
                                        </div>
                                        <div className="text-center">
                                            <div style={{ color: 'var(--purple-500)' }}>42</div>
                                            <div >Projects</div>
                                        </div>
                                        <div className="text-center">
                                            <div style={{ color: 'var(--orange-500)' }}>15</div>
                                            <div >Pending</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>

                {/* Badges */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Badge Variations</CardTitle>
                        <CardDescription>
                            Different badge styles for various use cases
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Status Badges */}
                        <div className="space-y-3">
                            <h4 >Status Badges</h4>
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="destructive">Error</Badge>
                                <Badge variant="outline">Outline</Badge>
                            </div>
                        </div>

                        <Separator />

                        {/* Badge with Icons */}
                        <div className="space-y-3">
                            <h4 >Badges with Icons</h4>
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="default" className="flex items-center gap-1">
                                    <CheckIcon className="h-3 w-3" />
                                    Completed
                                </Badge>
                                <Badge variant="destructive" className="flex items-center gap-1">
                                    <AlertTriangleIcon className="h-3 w-3" />
                                    Warning
                                </Badge>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <InfoIcon className="h-3 w-3" />
                                    Information
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                    <UserIcon className="h-3 w-3" />
                                    User
                                </Badge>
                            </div>
                        </div>

                        <Separator />

                        {/* Size Variations */}
                        <div className="space-y-3">
                            <h4 >Badge Sizing</h4>
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="default" className="px-2 py-1">Small</Badge>
                                <Badge variant="default">Standard</Badge>
                                <Badge variant="default" >Large</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Avatars */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Avatar Components</CardTitle>
                        <CardDescription>
                            User avatar display with fallback support
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Standard Avatars */}
                        <div className="space-y-3">
                            <h4 >Standard Avatars</h4>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>AB</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>CD</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>
                                        <UserIcon className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>EF</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <Separator />

                        {/* Avatar Sizes */}
                        <div className="space-y-3">
                            <h4 >Avatar Sizes</h4>
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback >SM</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>MD</AvatarFallback>
                                </Avatar>
                                <Avatar className="h-12 w-12">
                                    <AvatarFallback>LG</AvatarFallback>
                                </Avatar>
                                <Avatar className="h-16 w-16">
                                    <AvatarFallback >XL</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <Separator />

                        {/* Avatar with Status */}
                        <div className="space-y-3">
                            <h4 >Avatars with Status</h4>
                            <div className="flex items-center space-x-6">
                                <div className="relative">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg" />
                                        <AvatarFallback>ON</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                                </div>
                                <div className="relative">
                                    <Avatar>
                                        <AvatarFallback>AW</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-yellow-500 border-2 border-white"></div>
                                </div>
                                <div className="relative">
                                    <Avatar>
                                        <AvatarFallback>OF</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gray-400 border-2 border-white"></div>
                                </div>
                            </div>
                            <div >
                                Status indicators: Online (green), Away (yellow), Offline (gray)
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Design Standards */}
                <Card className="luvbox-card-base">
                    <CardHeader>
                        <CardTitle>Data Display Standards</CardTitle>
                        <CardDescription>
                            Design specifications for consistent data presentation
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h4 >Card Specifications</h4>
                                <ul >
                                    <li>• Border radius: 12px</li>
                                    <li>• Padding: 24px (header), 16px (content)</li>
                                    <li>• Shadow: Subtle drop shadow</li>
                                    <li>• Background: White with border</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 >Badge & Avatar Standards</h4>
                                <ul >
                                    <li>• Badge padding: 4px 8px</li>
                                    <li>• Badge border radius: 6px</li>
                                    <li>• Avatar default size: 40px</li>
                                    <li>• Avatar border radius: 50% (circular)</li>
                                </ul>
                            </div>
                        </div>
                        <Separator />
                        <div className="text-center">
                            <p style={{ color: 'var(--lb-black-600)' }}>
                                All data display components use the <code>.luvbox-card-base</code> class and consistent spacing
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
