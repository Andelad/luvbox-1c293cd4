import { CONTENT } from './index';
import { CONTENT_TEST } from './test-split/index';

// Quick test component to verify they're identical
export const ContentTest = () => {
    const original = JSON.stringify(CONTENT, null, 2);
    const split = JSON.stringify(CONTENT_TEST, null, 2);
    const isIdentical = original === split;

    return (
        <div>
            <h2>Content Structure Test</h2>
            <p>Split files produce identical content: {isIdentical ? '✅ YES' : '❌ NO'}</p>

            {/* Test a few values to confirm */}
            <div>
                <h3>Sample Values:</h3>
                <p>Hero title: {CONTENT_TEST.website.heroSection.title}</p>
                <p>Feedback title: {CONTENT_TEST.pages.feedback.title}</p>
                <p>Navigation - The Box: {CONTENT_TEST.navigation.theBox}</p>
            </div>
        </div>
    );
};
