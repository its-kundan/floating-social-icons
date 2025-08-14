#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default configuration template
const defaultConfig = {
  socialLinks: [
    {
      name: "GitHub",
      link: "https://github.com/yourusername",
      icon: "FaGithub",
      color: "text-gray-800 hover:text-gray-600",
      want: true,
      size: 30
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
      icon: "FaLinkedin",
      color: "text-blue-600 hover:text-blue-500",
      want: true,
      size: 30
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yourusername",
      icon: "FaTwitter",
      color: "text-blue-400 hover:text-blue-300",
      want: true,
      size: 30
    },
    {
      name: "Instagram",
      link: "https://instagram.com/yourusername",
      icon: "FaInstagram",
      color: "text-pink-600 hover:text-pink-500",
      want: false,
      size: 30
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@yourusername",
      icon: "FaYoutube",
      color: "text-red-600 hover:text-red-500",
      want: true,
      size: 30
    },
    {
      name: "Facebook",
      link: "https://facebook.com/yourusername",
      icon: "FaFacebook",
      color: "text-blue-600 hover:text-blue-500",
      want: false,
      size: 30
    }
  ]
};

// Function to find the project root (where package.json exists)
function findProjectRoot(startPath) {
  let currentPath = startPath;
  
  while (currentPath !== path.dirname(currentPath)) {
    if (fs.existsSync(path.join(currentPath, 'package.json'))) {
      return currentPath;
    }
    currentPath = path.dirname(currentPath);
  }
  
  return startPath; // Fallback to current directory
}

// Function to generate the config file
function generateConfigFile() {
  try {
    // Find the project root
    const projectRoot = findProjectRoot(process.cwd());
    const configPath = path.join(projectRoot, 'social-links.json');
    
    // Check if config file already exists
    if (fs.existsSync(configPath)) {
      console.log('✅ social-links.json already exists in your project root');
      console.log('📝 You can edit it at:', configPath);
      return;
    }
    
    // Create the config file
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    
    console.log('✅ Created social-links.json in your project root');
    console.log('📝 Please update the links in social-links.json with your actual social media URLs');
    console.log('🔗 You can find the file at:', configPath);
    console.log('');
    console.log('💡 Next steps:');
    console.log('   1. Edit social-links.json with your actual social media links');
    console.log('   2. Set "want": true for icons you want to display');
    console.log('   3. Import and use the FloatingIcons component in your React app');
    
  } catch (error) {
    console.error('❌ Could not create social-links.json:', error.message);
    console.log('📝 Please create social-links.json manually in your project root');
  }
}

// Run the script
generateConfigFile();
