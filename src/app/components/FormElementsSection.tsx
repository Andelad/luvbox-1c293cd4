import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/elements/card';
import { Checkbox } from '@/elements/checkbox';
import { Input } from '@/elements/input';
import { Label } from '@/elements/label';
import { RadioGroup, RadioGroupItem } from '@/elements/radio-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/elements/select';
import { Separator } from '@/elements/separator';
import { Switch } from '@/elements/switch';
import { Textarea } from '@/elements/textarea';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export default function FormElementsSection() {
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [switched, setSwitched] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-app-display mb-4">
                    Form Elements
                </h2>
                <p className="text-app-caption">
                    All form inputs maintain consistent 40px height for uniform user experience
                </p>
            </div>

            {/* Text Input Fields */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Text Input Fields (40px Height)</CardTitle>
                    <CardDescription>
                        Standard text inputs with consistent height and styling
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Text Input */}
                        <div className="space-y-3">
                            <Label>Text Input</Label>
                            <Input
                                type="text"
                                placeholder="Enter text..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="luvbox-form-base"
                            />
                            <div className="text-app-caption">
                                Height: 40px • Border radius: 12px
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="space-y-3">
                            <Label>Email Input</Label>
                            <Input
                                type="email"
                                placeholder="user@example.com"
                                className="luvbox-form-base"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-3">
                            <Label>Password Input</Label>
                            <Input
                                type="password"
                                placeholder="Enter password..."
                                className="luvbox-form-base"
                            />
                        </div>

                        {/* Search Input */}
                        <div className="space-y-3">
                            <Label>Search Input</Label>
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="luvbox-form-base pl-10"
                                />
                            </div>
                        </div>

                        {/* Number Input */}
                        <div className="space-y-3">
                            <Label>Number Input</Label>
                            <Input
                                type="number"
                                placeholder="0"
                                min="0"
                                max="100"
                                className="luvbox-form-base"
                            />
                        </div>

                        {/* Disabled Input */}
                        <div className="space-y-3">
                            <Label>Disabled Input</Label>
                            <Input
                                type="text"
                                placeholder="This is disabled..."
                                disabled
                                className="luvbox-form-base"
                            />
                        </div>
                    </div>

                    {/* Character Count Display */}
                    <div className="text-app-caption bg-blue-50 text-blue-700 p-3 rounded">
                        Current text input character count: {inputValue.length}
                    </div>
                </CardContent>
            </Card>

            {/* Select Dropdown */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Select Dropdown (40px Height)</CardTitle>
                    <CardDescription>
                        Dropdown selection with consistent form styling
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <Label>Standard Select</Label>
                            <Select value={selectValue} onValueChange={setSelectValue}>
                                <SelectTrigger className="luvbox-select-trigger">
                                    <SelectValue placeholder="Choose an option..." />
                                </SelectTrigger>
                                <SelectContent className="luvbox-select-content">
                                    <SelectItem value="option1" className="luvbox-select-item">
                                        Option One
                                    </SelectItem>
                                    <SelectItem value="option2" className="luvbox-select-item">
                                        Option Two
                                    </SelectItem>
                                    <SelectItem value="option3" className="luvbox-select-item">
                                        A Very Long Option That Tests Text Wrapping
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-3">
                            <Label>Disabled Select</Label>
                            <Select disabled>
                                <SelectTrigger className="luvbox-select-trigger">
                                    <SelectValue placeholder="Disabled select..." />
                                </SelectTrigger>
                            </Select>
                        </div>
                    </div>

                    {selectValue && (
                        <div className="text-app-caption bg-green-50 text-green-700 p-3 rounded">
                            Selected value: {selectValue}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Textarea */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Textarea (Variable Height)</CardTitle>
                    <CardDescription>
                        Multi-line text input with expandable height
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-3">
                        <Label>Large Text Input</Label>
                        <Textarea
                            placeholder="Enter a longer message..."
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)}
                            className="min-h-32"
                        />
                        <div className="text-app-caption">
                            <span>Character count: {textareaValue.length}</span>
                            <span>Min height: 128px</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Form Controls */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Form Controls</CardTitle>
                    <CardDescription>
                        Checkboxes, switches, and radio groups
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Checkbox */}
                        <div className="space-y-3">
                            <Label>Checkbox</Label>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="checkbox"
                                    checked={checked}
                                    onCheckedChange={(checked) => setChecked(checked === true)}
                                />
                                <Label htmlFor="checkbox">Accept terms and conditions</Label>
                            </div>
                            <div className="text-app-caption">
                                Status: {checked ? 'Checked' : 'Unchecked'}
                            </div>
                        </div>

                        {/* Switch */}
                        <div className="space-y-3">
                            <Label>Switch</Label>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="switch"
                                    checked={switched}
                                    onCheckedChange={setSwitched}
                                />
                                <Label htmlFor="switch">Enable notifications</Label>
                            </div>
                            <div className="text-app-caption">
                                Status: {switched ? 'Enabled' : 'Disabled'}
                            </div>
                        </div>

                        {/* Radio Group */}
                        <div className="space-y-3">
                            <Label>Radio Group</Label>
                            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option1" id="radio1" />
                                    <Label htmlFor="radio1">Option 1</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option2" id="radio2" />
                                    <Label htmlFor="radio2">Option 2</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option3" id="radio3" />
                                    <Label htmlFor="radio3">Option 3</Label>
                                </div>
                            </RadioGroup>
                            <div className="text-app-caption">
                                Selected: {radioValue}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design System Summary */}
            <Card className="luvbox-card-base">
                <CardHeader>
                    <CardTitle>Form Element Design Standards</CardTitle>
                    <CardDescription>
                        Consistent styling specifications for all form elements
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 >Input Dimensions</h4>
                            <ul >
                                <li>• Height: 40px (all text inputs and selects)</li>
                                <li>• Border radius: 12px</li>
                                <li>• Padding: 0 12px</li>
                                <li>• Border: 1px solid</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 >Visual States</h4>
                            <ul >
                                <li>• Focus: Blue ring with 2px offset</li>
                                <li>• Disabled: 50% opacity, not-allowed cursor</li>
                                <li>• Error: Red border and focus ring</li>
                                <li>• Placeholder: Muted text color</li>
                            </ul>
                        </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                        <p className="text-app-caption">
                            All form elements use the <code>.luvbox-form-base</code> class and design tokens from <code>/src/styles/colors.css</code>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
