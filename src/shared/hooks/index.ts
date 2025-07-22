// Shared hooks barrel export
export { useIsMobile } from './use-mobile';
export * from './use-toast';
export { useScrollAnimation } from './useScrollAnimation';

// Re-export storage hooks for convenience
export { useAuth, useInterests, useSnapshots, useUser } from '@/shared/lib/storage';

// Export content hooks
export { useCommonContent, useContent, useNavigation, usePageContent, useWebsiteContent } from './useContent';

