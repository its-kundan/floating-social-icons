import { SocialLinksConfig } from './types';

/**
 * Default configuration for social media links
 */
export const defaultConfig: SocialLinksConfig = {
  socialLinks: [
    {
      name: "GitHub",
      link: "https://github.com/username",
      icon: "FaGithub",
      color: "text-gray-800 hover:text-gray-600",
      want: true,
      size: 30
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/username",
      icon: "FaLinkedin",
      color: "text-blue-600 hover:text-blue-500",
      want: true,
      size: 30
    },
    {
      name: "Twitter",
      link: "https://twitter.com/username",
      icon: "FaTwitter",
      color: "text-blue-400 hover:text-blue-300",
      want: true,
      size: 30
    },
    {
      name: "Instagram",
      link: "https://instagram.com/username",
      icon: "FaInstagram",
      color: "text-pink-600 hover:text-pink-500",
      want: true,
      size: 30
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@username",
      icon: "FaYoutube",
      color: "text-red-600 hover:text-red-500",
      want: true,
      size: 30
    },
    {
      name: "Facebook",
      link: "https://facebook.com/username",
      icon: "FaFacebook",
      color: "text-blue-600 hover:text-blue-500",
      want: true,
      size: 30
    }
  ]
};

/**
 * Load configuration from a JSON file
 * @param configPath - Path to the configuration JSON file
 * @returns Promise<SocialLinksConfig>
 */
export const loadConfig = async (configPath: string): Promise<SocialLinksConfig> => {
  try {
    const response = await fetch(configPath);
    const config = await response.json();
    return validateConfig(config);
  } catch (error) {
    console.warn('Failed to load config from file, using default config:', error);
    return defaultConfig;
  }
};

/**
 * Validate configuration object
 * @param config - Configuration object to validate
 * @returns SocialLinksConfig
 */
export const validateConfig = (config: any): SocialLinksConfig => {
  if (!config || typeof config !== 'object') {
    return defaultConfig;
  }

  if (!Array.isArray(config.socialLinks)) {
    return defaultConfig;
  }

  // Validate each social link
  const validatedLinks = config.socialLinks
    .filter((link: any) => 
      link && 
      typeof link.name === 'string' &&
      typeof link.link === 'string' &&
      typeof link.icon === 'string' &&
      typeof link.color === 'string' &&
      typeof link.want === 'boolean'
    )
    .map((link: any) => ({
      ...link,
      size: typeof link.size === 'number' ? link.size : 30
    }));

  return {
    socialLinks: validatedLinks.length > 0 ? validatedLinks : defaultConfig.socialLinks
  };
};

/**
 * Create a configuration object from individual parameters
 * @param socialLinks - Array of social media links
 * @returns SocialLinksConfig
 */
export const createConfig = (socialLinks: any[]): SocialLinksConfig => {
  return validateConfig({ socialLinks });
};
