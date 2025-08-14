# Social Floating Icons

[![npm version](https://img.shields.io/npm/v/social-floating-icons.svg)](https://www.npmjs.com/package/social-floating-icons)
[![npm downloads](https://img.shields.io/npm/dm/social-floating-icons.svg)](https://www.npmjs.com/package/social-floating-icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **React Floating Social Media Icons Component** - A customizable React component for displaying floating social media icons with hover effects, animations, and JSON-based configuration. Perfect for portfolios, websites, and React/Next.js projects.

**Keywords**: React floating icons, social media icons, portfolio icons, floating social buttons, React social icons, Next.js social icons, hover effects, animations

## 🎯 What is Social Floating Icons?

**Social Floating Icons** is a React component that creates beautiful, floating social media icons for your website or portfolio. It's designed to be:

- **Easy to use** - Simple installation and setup
- **Highly customizable** - JSON-based configuration
- **Responsive** - Works on all devices
- **Animated** - Smooth hover effects and transitions
- **TypeScript ready** - Full type definitions included

Perfect for developers looking to add professional social media links to their React, Next.js, or any React-based project.

## 🚀 Published on npm

This package is published and available on the npm registry:
- **Package**: [social-floating-icons](https://www.npmjs.com/package/social-floating-icons)
- **Version**: 1.0.0
- **Downloads**: Available for installation via npm/yarn

## 📸 Demo

Here's how the floating social media icons look in a real portfolio website:

![Social Floating Icons Demo](demo-screenshot.png)

*Floating social media icons (Twitter, GitHub, LinkedIn, Telegram, YouTube) positioned on the right side of a portfolio website*

> **Note**: The demo shows floating social media icons integrated into a portfolio website with a dark theme, featuring smooth hover effects and professional styling. The icons are positioned on the far right side and include Twitter, GitHub, LinkedIn, Telegram, and YouTube with their respective brand colors.

**Demo Features:**
- 🎨 Dark theme portfolio with professional styling
- 📱 Responsive design that works on all screen sizes
- 🎯 Floating icons positioned on the right edge
- ✨ Smooth hover animations and transitions
- 🔗 Direct links to social media profiles

## ✨ Features & Benefits

### 🎯 **Easy to Use**
- Simple React component with minimal setup
- Drop-in solution for any React project
- No complex configuration required

### ⚙️ **Highly Configurable**
- JSON-based configuration for social media links
- Easy to customize and maintain
- Support for all major social media platforms

### 🎨 **Customizable Styling**
- Support for Tailwind CSS classes
- Custom colors, sizes, and positioning
- Flexible design system

### 📱 **Responsive Design**
- Works on all screen sizes
- Mobile-friendly floating icons
- Adaptive positioning

### 🎭 **Smooth Animations**
- Hover effects and transitions
- Professional animations
- Performance optimized

### 🔧 **TypeScript Support**
- Full type definitions included
- Better development experience
- IntelliSense support

### 📦 **Framework Agnostic**
- Works with React, Next.js, and other frameworks
- No framework dependencies
- Universal compatibility

## 📦 Installation

```bash
npm install social-floating-icons
# or
yarn add social-floating-icons
```

> **✅ Package is published and available on npm!** 
> 
> You can view it at: https://www.npmjs.com/package/social-floating-icons

### 🎉 Manual Setup

After installation, you need to create a `social-links.json` file in your project root. You can:

1. **Copy the example file** from the package:
```bash
cp node_modules/social-floating-icons/social-links.json ./social-links.json
```

2. **Or run the setup script** (if you have the package source):
```bash
npm run setup
```

3. **Or create it manually** using the configuration example below

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

You need to create a `social-links.json` file in your project root. You can customize this file with your social media links:

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

## ❓ Frequently Asked Questions (FAQ)

### **Q: How do I install social floating icons?**
```bash
npm install social-floating-icons
```

### **Q: I see funding requests and vulnerabilities after installation. Is this normal?**
The funding requests are just informational messages from dependencies asking for support - they don't affect functionality. If you see vulnerabilities, run:
```bash
npm audit fix
```

### **Q: The social-links.json file wasn't created automatically. What should I do?**
You can copy the example file from the package:
```bash
cp node_modules/social-floating-icons/social-links.json ./social-links.json
```
Or create it manually using the configuration example in the README.

### **Q: Can I use this with Next.js?**
Yes! This package works perfectly with Next.js, React, and any React-based framework.

### **Q: How do I customize the social media links?**
Create a JSON configuration file or use the inline configuration options. See the Configuration section above.

### **Q: Does it support TypeScript?**
Yes! Full TypeScript support with complete type definitions.

### **Q: Can I change the position of the icons?**
Yes! You can position the icons on the left or right side of the screen.

### **Q: Is it mobile responsive?**
Absolutely! The component is fully responsive and works on all devices.

## 🔍 Search Terms
- React floating social icons
- Social media icons React
- Floating social buttons
- Portfolio social icons
- React social media component
- Next.js social icons
- Hover effects social icons
- Animated social media icons

## Support

If you have any questions or need help, please open an issue on GitHub.
