import type { FeedbackContent, PageContent, SettingsContent } from '../types';

// Individual page contents for easier editing
export const FEEDBACK: FeedbackContent = {
    title: "Feedback",
    description: "We'd love to hear your thoughts and suggestions. Your feedback helps us improve LuvMap and create a better experience for everyone.",
    form: {
        name: "Name",
        email: "Email",
        feedback: "Feedback",
        submit: "Submit Feedback",
        placeholders: {
            name: "Your Name",
            email: "your.email@example.com",
            feedback: "Tell us what you think...",
            thoughts: "Share your thoughts, suggestions, or report any issues..."
        }
    },
    rating: {
        label: "How would you rate your experience?"
    },
    additional: {
        thoughts: "What's on your mind?",
        email: "Contact Email (Optional)",
        submit: "Send Feedback"
    },
    thankYou: "Thank you for your feedback!",
    footerNote: "Your feedback is important to us and helps shape the future of LuvBox. Thank you for taking the time to share your thoughts!"
};

export const SETTINGS: SettingsContent = {
    title: "Settings",
    description: "Manage your profile and preferences",
    profile: {
        title: "User Profile",
        name: "Name",
        dateOfBirth: "Date of Birth",
        placeholders: {
            name: "Enter your name"
        },
        updateSuccess: "Profile updated successfully!",
        updateError: "Error updating profile"
    },
    dealbreakers: {
        updateSuccess: "Dealbreaker lines updated successfully!",
        updateError: "Error updating dealbreakers"
    }
};

export const THE_BOX: PageContent = {
    title: "The Box",
    description: "Explore your relationship dynamics with our interactive 3D experience."
};

export const THE_MAP: PageContent = {
    title: "Reflect on Love",
    subtitle: "Our experience of love is shaped by the information we observe, the narratives we believe, our unique preferences, and the community that surrounds us.",
    footer: "P.S. While love always involves other people, LuvBox focuses on helping you understand and navigate your own experience of love."
};

export const TUTORIAL: PageContent = {
    title: "Tutorial",
    description: "Learn how to use LuvBox effectively"
};

export const COMMUNITY: PageContent = {
    title: "Community",
    description: "Connect with other LuvBox users"
};

export const MY_SNAPSHOTS: PageContent = {
    title: "My Snapshots",
    description: "View and manage your relationship snapshots"
};
