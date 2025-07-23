import type { AppContent } from '../types';
import { COMMON } from './common';
import { NAVIGATION } from './navigation';
import { COMMUNITY, FEEDBACK, MY_SNAPSHOTS, SETTINGS, THE_BOX, THE_MAP, TUTORIAL } from './pages';
import { WEBSITE } from './website';

// This recreates your exact same CONTENT object, but sourced from organized files
export const CONTENT_TEST: AppContent = {
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

// Verify it's identical to your original
// You can import this in a component to test
