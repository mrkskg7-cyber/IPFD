import { Menu, X, User, Wallet } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
}

export function Header({ currentPage, onNavigate, isLoggedIn }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard' as Page, label: 'Dashboard' },
    { id: 'investments' as Page, label: 'Investments' },
    { id: 'donations' as Page, label: 'Donations' },
    { id: 'portfolio' as Page, label: 'Portfolio' },
    { id: 'community' as Page, label: 'Community' },
  ];

  return (
    <header className="bg-gradient-to-r from-emerald-900 to-teal-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('dashboard')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mr-2">
              <span className="text-emerald-900 font-bold">IF</span>
            </div>
            <span className="text-xl text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>IMPACTFUNDER</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-emerald-300 border-b-2 border-emerald-400'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-700 text-emerald-100 rounded-lg hover:bg-emerald-600 transition-colors">
              <Wallet className="w-4 h-4" />
              <span>₹12,450</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-100 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-emerald-300 bg-emerald-800'
                      : 'text-gray-200 hover:bg-emerald-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('profile');
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-left text-gray-200 hover:bg-emerald-800"
              >
                Profile
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}