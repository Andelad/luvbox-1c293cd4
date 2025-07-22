// Content type definitions for type safety
export interface NavigationContent {
  theBox: string;
  theMap: string;
  mySnapshots: string;
  community: string;
  tutorial: string;
  feedback: string;
  profile: string;
  settings: string;
}

export interface PageContent {
  title: string;
  description?: string;
  subtitle?: string;
}

export interface FeedbackContent extends PageContent {
  form: {
    name: string;
    email: string;
    feedback: string;
    submit: string;
    placeholders: {
      name: string;
      email: string;
      feedback: string;
      thoughts: string;
    };
  };
  rating: {
    label: string;
  };
  additional: {
    thoughts: string;
    email: string;
    submit: string;
  };
  thankYou: string;
  footerNote: string;
}

export interface SettingsContent extends PageContent {
  profile: {
    title: string;
    name: string;
    dateOfBirth: string;
    placeholders: {
      name: string;
    };
    updateSuccess: string;
    updateError: string;
  };
  dealbreakers: {
    updateSuccess: string;
    updateError: string;
  };
}

export interface WebsiteContent {
  header: {
    logo: string;
    menu: {
      blog: string;
      about: string;
      pricing: string;
      contact: string;
      login: string;
    };
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  ticker: string[];
}

export interface AppContent {
  navigation: NavigationContent;
  pages: {
    theBox: PageContent;
    theMap: PageContent;
    feedback: FeedbackContent;
    settings: SettingsContent;
    tutorial: PageContent;
    community: PageContent;
    mySnapshots: PageContent;
  };
  website: WebsiteContent;
  common: {
    breadcrumbs: {
      separator: string;
    };
    loading: string;
    error: string;
    save: string;
    cancel: string;
    close: string;
    menu: string;
  };
}
