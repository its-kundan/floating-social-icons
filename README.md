# Social Floating Icons

[![npm version](https://img.shields.io/npm/v/social-floating-icons.svg)](https://www.npmjs.com/package/social-floating-icons)
[![npm downloads](https://img.shields.io/npm/dm/social-floating-icons.svg)](https://www.npmjs.com/package/social-floating-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React component for displaying floating social media icons with customizable configuration.

## 🚀 Published on npm

This package is published and available on the npm registry:
- **Package**: [social-floating-icons](https://www.npmjs.com/package/social-floating-icons)
- **Version**: 1.0.0
- **Downloads**: Available for installation via npm/yarn

## Features

- 🎯 **Easy to use** - Simple React component with minimal setup
- ⚙️ **Highly configurable** - JSON-based configuration for social media links
- 🎨 **Customizable styling** - Support for Tailwind CSS classes
- 📱 **Responsive** - Works on all screen sizes
- 🎭 **Smooth animations** - Hover effects and transitions
- 🔧 **TypeScript support** - Full type definitions included
- 📦 **Framework agnostic** - Works with React, Next.js, and other frameworks

## 📦 Installation

```bash
npm install social-floating-icons
# or
yarn add social-floating-icons
```

> **✅ Package is published and available on npm!** 
> 
> You can view it at: https://www.npmjs.com/package/social-floating-icons

## Quick Start

```jsx
import { FloatingIcons } from 'social-floating-icons';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <FloatingIcons />
    </div>
  );
}

## Configuration

Create a JSON file (e.g., `social-links.json`) with your social media links:

```json
{
  "socialLinks": [
    {
      "name": "GitHub",
      "link": "https://github.com/yourusername",
      "icon": "FaGithub",
      "color": "text-gray-800 hover:text-gray-600",
      "want": true,
      "size": 30
    },
    {
      "name": "LinkedIn",
      "link": "https://linkedin.com/in/yourusername",
      "icon": "FaLinkedin",
      "color": "text-blue-600 hover:text-blue-500",
      "want": true,
      "size": 30
    },
    {
      "name": "Twitter",
      "link": "https://twitter.com/yourusername",
      "icon": "FaTwitter",
      "color": "text-blue-400 hover:text-blue-300",
      "want": false,
      "size": 30
    }
  ]
}
```

## Usage Examples

### Basic Usage

```jsx
import { FloatingIcons } from 'social-floating-icons';

function App() {
  return <FloatingIcons />;
}

### With Custom Configuration

```jsx
import { FloatingIcons, loadConfig } from 'social-floating-icons';
import { useState, useEffect } from 'react';

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    loadConfig('/social-links.json').then(setConfig);
  }, []);

  return config ? <FloatingIcons config={config} /> : null;
}
```

### With Custom Props

```jsx
import { FloatingIcons } from 'social-floating-icons';

function App() {
  return (
    <FloatingIcons
      position="left"
      showTooltips={true}
      spacing={20}
      animationDuration={400}
      zIndex={9999}
      className="my-custom-class"
    />
  );
}

### Inline Configuration

```jsx
import { FloatingIcons, createConfig } from 'social-floating-icons';

function App() {
  const config = createConfig([
    {
      name: "GitHub",
      link: "https://github.com/yourusername",
      icon: "FaGithub",
      color: "text-gray-800 hover:text-gray-600",
      want: true,
      size: 30
    }
  ]);

  return <FloatingIcons config={config} />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `SocialLinksConfig` | `defaultConfig` | Configuration object for social media links |
| `position` | `'left' \| 'right'` | `'right'` | Position of the floating icons |
| `className` | `string` | `''` | Additional CSS classes |
| `showTooltips` | `boolean` | `true` | Whether to show tooltips on hover |
| `spacing` | `number` | `16` | Spacing between icons in pixels |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |
| `zIndex` | `number` | `1000` | Z-index for the floating container |

## Configuration Schema

### SocialLink

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✅ | Display name of the social media platform |
| `link` | `string` | ✅ | URL to the social media profile |
| `icon` | `string` | ✅ | React icon component name from react-icons |
| `color` | `string` | ✅ | Tailwind CSS color classes for styling |
| `want` | `boolean` | ✅ | Whether to show this icon |
| `size` | `number` | ❌ | Size of the icon (default: 30) |

## Available Icons

The package supports all icons from `react-icons`. Common social media icons include:

- `FaGithub` - GitHub
- `FaLinkedin` - LinkedIn
- `FaTwitter` - Twitter
- `FaInstagram` - Instagram
- `FaYoutube` - YouTube
- `FaFacebook` - Facebook
- `FaDiscord` - Discord
- `FaTwitch` - Twitch
- `FaReddit` - Reddit
- `FaTelegram` - Telegram

## Styling

The component uses Tailwind CSS classes for styling. You can customize colors by modifying the `color` property in your configuration:

```json
{
  "color": "text-blue-600 hover:text-blue-500"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build the package
npm run build

# Clean build files
npm run clean
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.
