import { Menu, Bell, User, LogOut, X, Home, Calendar, TrendingUp, Heart, Users } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';
import logo from 'figma:asset/dd1b3a822900592c28a41fdb0ab7ea686e2ed1f3.png';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export function Header({ currentPage, onNavigate, onLogout, isLoggedIn }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Clean Energy Investment Webinar',
      date: 'Dec 5, 2024',
      time: '3:00 PM IST',
      type: 'Investment',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Learn about new solar energy opportunities in rural India'
    },
    {
      id: 2,
      title: 'NGO Donation Drive - Education',
      date: 'Dec 8, 2024',
      time: 'All Day',
      type: 'Donation',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'Special matching campaign for education projects'
    },
    {
      id: 3,
      title: 'Community Circle: Climate Action',
      date: 'Dec 10, 2024',
      time: '6:00 PM IST',
      type: 'Community',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Monthly meetup to discuss climate initiatives'
    },
    {
      id: 4,
      title: 'Impact Report Release',
      date: 'Dec 15, 2024',
      time: '10:00 AM IST',
      type: 'Update',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Q4 2024 impact metrics and achievements'
    }
  ];

  const navItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: Home },
    { id: 'investments' as Page, label: 'Investments' },
    { id: 'donations' as Page, label: 'Donations' },
    { id: 'portfolio' as Page, label: 'Portfolio' },
    { id: 'community' as Page, label: 'Community' },
  ];

  return (
    <header className="bg-gradient-to-r from-emerald-900 to-teal-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('dashboard')}
            >
              <img src={logo} alt="IMPACTFUNDER" className="h-12 w-auto rounded-xl shadow-md" />
              <span 
                className="ml-3 text-xl text-white tracking-wider" 
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  fontWeight: '800',
                  letterSpacing: '0.1em'
                }}
              >
                IMPACTFUNDER
              </span>
            </div>
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
          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-700 text-emerald-100 rounded-lg hover:bg-emerald-600 transition-colors relative"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {upcomingEvents.length}
              </span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-100 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-100 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
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
              <button
                onClick={onLogout}
                className="px-4 py-2 text-left text-gray-200 hover:bg-emerald-800"
              >
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Notifications Popup Modal */}
      {notificationsOpen && (
        <div className="fixed top-20 right-8 z-[60] animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-96 overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg text-gray-900">Upcoming Events</h3>
                  <p className="text-xs text-gray-600 mt-1">{upcomingEvents.length} events scheduled</p>
                </div>
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Events List */}
            <div className="max-h-96 overflow-y-auto p-3">
              <div className="space-y-2">
                {upcomingEvents.map((event) => {
                  const EventIcon = event.icon;
                  return (
                    <div key={event.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-pointer border border-gray-200 hover:border-emerald-300">
                      <div className="flex items-start">
                        <div className={`p-2 ${event.bgColor} rounded-lg flex-shrink-0`}>
                          <EventIcon className={`w-4 h-4 ${event.color}`} />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-sm text-gray-900">{event.title}</h4>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{event.description}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="mr-2">{event.date}</span>
                            <span>• {event.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-center">
              <button 
                className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                onClick={() => setNotificationsOpen(false)}
              >
                View All Events →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}