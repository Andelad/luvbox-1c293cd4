import { COMMON } from './common';
import { NAVIGATION } from './navigation';
import { COMMUNITY, FEEDBACK, MY_SNAPSHOTS, SETTINGS, THE_BOX, THE_MAP, TUTORIAL } from './pages';
import type { AppContent } from './types';
import { WEBSITE } from './website';

// Content assembled from organized files for better maintainability
export const CONTENT: AppContent = {
  navigation: NAVIGATION,

  pages: {
    theBox: THE_BOX,
    theMap: THE_MAP,
    mySnapshots: MY_SNAPSHOTS,
    community: COMMUNITY,
    tutorial: TUTORIAL,
    feedback: FEEDBACK,
    settings: SETTINGS
  },

  website: WEBSITE,

  common: COMMON
};

// Only export the main CONTENT object to avoid circular dependencies
