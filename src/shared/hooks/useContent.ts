import { CONTENT } from '../../content';
import type { AppContent } from '../../content/types';

/**
 * Custom hook for accessing content strings throughout the app
 * Provides type-safe access to all text content
 */
export function useContent() {
  return CONTENT;
}

/**
 * Hook for accessing specific page content
 */
export function usePageContent(page: keyof AppContent['pages']): any {
  return CONTENT.pages[page];
}

/**
 * Hook for accessing navigation content
 */
export function useNavigation() {
  return CONTENT.navigation;
}

/**
 * Hook for accessing website content
 */
export function useWebsiteContent() {
  return CONTENT.website;
}

/**
 * Hook for accessing common/shared content
 */
export function useCommonContent() {
  return CONTENT.common;
}
