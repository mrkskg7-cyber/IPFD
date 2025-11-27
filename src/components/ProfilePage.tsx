import { User, Mail, Phone, MapPin, Shield, Bell, Lock, CreditCard, Award } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';

interface ProfilePageProps {
  onNavigate: (page: Page) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'values' | 'settings'>('profile');

  const userValues = [
    { name: 'Climate Action', selected: true },
    { name: 'Education', selected: true },
    { name: 'Healthcare', selected: false },
    { name: 'Women Empowerment', selected: true },
    { name: 'Clean Water', selected: false },
    { name: 'Poverty Alleviation', selected: true },
    { name: 'Fair Labor', selected: false },
    { name: 'Renewable Energy', selected: true },
  ];

  const achievements = [
    { icon: Award, title: 'Early Adopter', description: 'Joined in the first 1000 users', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { icon: Shield, title: 'Verified Investor', description: 'Completed KYC verification', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: Award, title: 'Impact Champion', description: 'Impacted over 1000 lives', color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { icon: Award, title: 'Generous Donor', description: 'Donated over ₹10,000', color: 'text-red-600', bgColor: 'bg-red-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center text-white text-3xl mb-3">
                  AI
                </div>
                <h3 className="text-lg text-gray-900 mb-1">Ananya Iyer</h3>
                <p className="text-sm text-gray-600">Impact Investor</p>
                <div className="mt-3 flex items-center justify-center text-xs text-green-600">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Profile Details
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'values'
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Impact Values
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Settings
                </button>
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-sm text-gray-600 mb-4">Account Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="text-gray-900">Jan 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Investments</span>
                  <span className="text-gray-900">3 Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Donations</span>
                  <span className="text-gray-900">2 Made</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Communities</span>
                  <span className="text-gray-900">1 Joined</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Details Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          defaultValue="Ananya Iyer"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          defaultValue="ananya.iyer@email.com"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          defaultValue="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          defaultValue="Mumbai, Maharashtra"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Investment Profile */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl text-gray-900 mb-6">Investment Profile</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Risk Tolerance</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Conservative</option>
                        <option selected>Moderate</option>
                        <option>Aggressive</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Investment Horizon</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Short Term (1-3 years)</option>
                        <option selected>Medium Term (3-5 years)</option>
                        <option>Long Term (5+ years)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Monthly Investment Budget</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₹</span>
                        <input
                          type="number"
                          defaultValue="10000"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl text-gray-900 mb-6">Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                          <div className={`w-10 h-10 ${achievement.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${achievement.color}`} />
                          </div>
                          <div>
                            <h3 className="text-gray-900 mb-1">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Impact Values Tab */}
            {activeTab === 'values' && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl text-gray-900 mb-4">Your Impact Values</h2>
                <p className="text-gray-600 mb-6">
                  Select the causes that matter most to you. We'll use these preferences to recommend 
                  personalized investment opportunities and donation projects.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {userValues.map((value, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        value.selected
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={value.selected}
                        className="mr-3 w-5 h-5 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className={`${value.selected ? 'text-green-700' : 'text-gray-700'}`}>
                        {value.name}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Update Values
                  </button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                {/* Notifications */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <Bell className="w-5 h-5 text-gray-400 mr-2" />
                    <h2 className="text-xl text-gray-900">Notifications</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <span className="text-gray-700">Email notifications</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-700">Investment updates</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-700">Impact milestones</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-700">Community discussions</span>
                      <input type="checkbox" className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                    </label>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-700">Monthly reports</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                    </label>
                  </div>
                </div>

                {/* Security */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <Lock className="w-5 h-5 text-gray-400 mr-2" />
                    <h2 className="text-xl text-gray-900">Security</h2>
                  </div>
                  <div className="space-y-4">
                    <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      Change Password
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      Enable Two-Factor Authentication
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      Manage Connected Devices
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
                    <h2 className="text-xl text-gray-900">Payment Methods</h2>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-gray-900">•••• 4567</div>
                          <div className="text-xs text-gray-600">Expires 12/26</div>
                        </div>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    + Add Payment Method
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
