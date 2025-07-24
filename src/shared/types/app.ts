export type PageType =
  | 'home'
  | 'about'
  | 'contact'
  | 'the-box'
  | 'the-map'
  | 'my-snapshots'
  | 'community'
  | 'tutorial'
  | 'settings'
  | 'feedback';

export interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

export interface HomePageProps {
  onCTAClick?: () => void;
  onNavigate?: (page: PageType) => void;
}

export interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

export interface HomePageProps {
  onCTAClick?: () => void;
  onNavigate?: (page: PageType) => void;
}
