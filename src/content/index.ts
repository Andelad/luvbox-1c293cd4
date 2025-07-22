import type { AppContent } from './types';

export const CONTENT: AppContent = {
  navigation: {
    theBox: "The Box",
    theMap: "The Map",
    mySnapshots: "My Snapshots",
    community: "Community",
    tutorial: "Tutorial",
    feedback: "Feedback",
    profile: "Profile",
    settings: "Settings"
  },

  pages: {
    theBox: {
      title: "The Box",
      description: "Explore your relationship dynamics with our interactive 3D experience."
    },

    theMap: {
      title: "Reflect on Love",
      subtitle: "Our experience of love is shaped by the information we observe, the narratives we believe, our unique preferences, and the community that surrounds us.",
      footer: "P.S. While love always involves other people, LuvBox focuses on helping you understand and navigate your own experience of love."
    },

    feedback: {
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
    },

    settings: {
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
    },

    tutorial: {
      title: "Tutorial",
      description: "Learn how to use LuvBox effectively"
    },

    community: {
      title: "Community",
      description: "Connect with other LuvBox users"
    },

    mySnapshots: {
      title: "My Snapshots",
      description: "View and manage your relationship snapshots"
    }
  },

  website: {
    header: {
      logo: "LuvMap 1.0",
      menu: {
        blog: "Blog",
        about: "About",
        pricing: "Pricing",
        contact: "Contact",
        login: "Login"
      }
    },
    features: [
      {
        title: "Understand mixed feelings",
        description: "When emotions feel tangled, LuvBox helps you map what you're actually experiencing. See where different feelings come from so you can understand what's happening and know what to address."
      },
      {
        title: "Make sense of past relationships",
        description: "Map out how your relationships unfolded and where key feelings developed. LuvBox helps you organize this history so you can understand your patterns and find appropriate support."
      },
      {
        title: "Stop repeating bad patterns",
        description: "See the cycles in your relationships clearly mapped out. LuvBox helps you recognize what's happening so you can seek the right guidance to break unhelpful patterns."
      },
      {
        title: "Learn how to build love",
        description: "LuvBox shows you how love actually develops and what influences it. Understanding these patterns helps you see where to focus and where to seek the right guidance."
      },
      {
        title: "Celebrate your story",
        description: "Your love journey might not look like others, but it can be love just the same. LuvBox helps you see your story clearly, without getting distracted by comparison or what you think should have happened."
      },
      {
        title: "Set loving boundaries",
        description: "LuvBox helps you see how to give your love wisely. Understand where generous love serves well and where it doesn't, so you can love within healthy limits."
      },
      {
        title: "Be purposeful in future dating",
        description: "Transform dating from guesswork into intentional choices. LuvBox helps you think through what value you can offer and receive, and shows you caution zones to navigate thoughtfully."
      }
    ],
    map: {
      title: "Reflect on Love",
      description: "Our environment shapes our expectations of love. Learn to build a map of your love environment so that you can make better choices."
    },
    ticker: [
      "I think I love her, but I'm not sure.",
      "What am I looking for?",
      "Something isn't quite right, but I don't know what.",
      "How do I get him out of my head?"
    ]
  },

  common: {
    breadcrumbs: {
      separator: "/"
    },
    loading: "Loading...",
    error: "An error occurred",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    menu: "Menu"
  }
};

// Only export the main CONTENT object to avoid circular dependencies
