import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In']
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-xs text-gray-500 space-y-2">
            <p>More ways to shop: <span className="text-blue-600 hover:underline cursor-pointer">Find an Apple Store</span> or <span className="text-blue-600 hover:underline cursor-pointer">other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
            <div className="flex flex-wrap items-center justify-between pt-4">
              <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Terms of Use</a>
                <span>|</span>
                <a href="#" className="hover:underline">Sales and Refunds</a>
                <span>|</span>
                <a href="#" className="hover:underline">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;