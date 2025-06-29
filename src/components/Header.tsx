import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <header className="bg-black text-white relative z-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-center py-2 text-sm">
        <p>Save up to $230 on a new Mac with trade-in.* <span className="text-blue-400 cursor-pointer hover:underline">Shop Mac</span></p>
      </div>
      
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Apple logo */}
          <div className="flex-shrink-0">
            <svg 
              className="w-5 h-5 fill-white hover:fill-gray-300 transition-colors cursor-pointer" 
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
            <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm hover:text-gray-300 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;