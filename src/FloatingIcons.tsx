import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io5';
import { FloatingIconsProps, SocialLink, IconMapping } from './types';
import { defaultConfig } from './config';

/**
 * FloatingIcons component for displaying floating social media icons
 */
export const FloatingIcons: React.FC<FloatingIconsProps> = ({
  config = defaultConfig,
  position = 'right',
  className = '',
  showTooltips = true,
  spacing = 16,
  animationDuration = 300,
  zIndex = 1000
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Combine all icon libraries
  const iconMapping: IconMapping = {
    ...FaIcons,
    ...SiIcons,
    ...IoIcons
  };

  // Filter only the icons that should be displayed
  const visibleLinks = config.socialLinks.filter(link => link.want);

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    [position]: '20px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: `${spacing}px`,
    zIndex,
    transition: `all ${animationDuration}ms ease-in-out`
  };

  const iconStyle: React.CSSProperties = {
    transition: `all ${animationDuration}ms ease-in-out`,
    cursor: 'pointer'
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    [position === 'right' ? 'left' : 'right']: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: position === 'right' ? '10px' : '0',
    marginRight: position === 'left' ? '10px' : '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: hoveredIcon ? 1 : 0,
    transition: `opacity ${animationDuration}ms ease-in-out`
  };

  const handleIconClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMapping[iconName as keyof IconMapping];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in react-icons`);
      return null;
    }
    return IconComponent;
  };

  return (
    <div className={`floating-icons-container ${className}`} style={containerStyle}>
      {visibleLinks.map((link: SocialLink, index: number) => {
        const IconComponent = getIconComponent(link.icon);
        if (!IconComponent) return null;

        return (
          <div
            key={`${link.name}-${index}`}
            className="floating-icon-wrapper"
            style={{ position: 'relative' }}
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`floating-icon ${link.color}`}
              style={{
                ...iconStyle,
                transform: hoveredIcon === link.name ? 'scale(1.1)' : 'scale(1)'
              }}
              onClick={() => handleIconClick(link.link)}
              title={showTooltips ? link.name : undefined}
            >
              <IconComponent size={link.size || 30} />
            </div>
            {showTooltips && (
              <div className="floating-icon-tooltip" style={tooltipStyle}>
                {link.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
