import type { AppContent } from './types';
import { NAVIGATION } from './navigation';
import { WEBSITE } from './website';
import { FEEDBACK, SETTINGS, THE_BOX, THE_MAP, TUTORIAL, COMMUNITY, MY_SNAPSHOTS } from './pages';
import { COMMON } from './common';

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
