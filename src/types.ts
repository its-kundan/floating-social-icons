import { IconType } from 'react-icons';

/**
 * Configuration for a single social media link
 */
export interface SocialLink {
  /** Display name of the social media platform */
  name: string;
  /** URL to the social media profile */
  link: string;
  /** React icon component name from react-icons */
  icon: string;
  /** Tailwind CSS color classes for styling */
  color: string;
  /** Whether to show this icon */
  want: boolean;
  /** Size of the icon (optional, default: 30) */
  size?: number;
}

/**
 * Configuration object containing all social media links
 */
export interface SocialLinksConfig {
  /** Array of social media links */
  socialLinks: SocialLink[];
}

/**
 * Props for the FloatingIcons component
 */
export interface FloatingIconsProps {
  /** Configuration object for social media links */
  config?: SocialLinksConfig;
  /** Position of the floating icons ('left' | 'right') */
  position?: 'left' | 'right';
  /** Custom CSS classes for styling */
  className?: string;
  /** Whether to show tooltips on hover */
  showTooltips?: boolean;
  /** Custom spacing between icons */
  spacing?: number;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Z-index for the floating container */
  zIndex?: number;
}

/**
 * Icon mapping for react-icons
 */
export interface IconMapping {
  [key: string]: IconType;
}
