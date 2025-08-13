import React, { useState, useEffect } from 'react';
import { FloatingIcons, loadConfig } from '../src';

function App() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load configuration from the example JSON file
    loadConfig('/example/social-links.json')
      .then((loadedConfig) => {
        setConfig(loadedConfig);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load config:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-lg">Loading floating icons...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Floating Icons Demo
            </h1>
            <p className="text-gray-600">
              Social media icons floating on the right side
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Welcome to Floating Icons Package
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              This is a demonstration of the floating-icons npm package. 
              The social media icons are floating on the right side of the screen.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Features:
            </h3>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>✅ JSON-based configuration for social media links</li>
              <li>✅ Customizable positioning (left/right side)</li>
              <li>✅ Hover effects and smooth animations</li>
              <li>✅ Tooltips showing social media names</li>
              <li>✅ Responsive design</li>
              <li>✅ TypeScript support</li>
              <li>✅ Tailwind CSS integration</li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Configuration Example:
              </h4>
              <pre className="text-sm text-gray-600 overflow-x-auto">
{`{
  "socialLinks": [
    {
      "name": "GitHub",
      "link": "https://github.com/its-kundan",
      "icon": "FaGithub",
      "color": "text-gray-800 hover:text-gray-600",
      "want": true,
      "size": 30
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Icons Component */}
      {config && (
        <FloatingIcons
          config={config}
          position="right"
          showTooltips={true}
          spacing={16}
          animationDuration={300}
          zIndex={1000}
        />
      )}
    </div>
  );
}

export default App;
