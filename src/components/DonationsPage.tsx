import { Search, Heart, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';
import { donations } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

interface DonationsPageProps {
  onNavigate: (page: Page, id?: string) => void;
}

export function DonationsPage({ onNavigate }: DonationsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('All');

  const categories = ['All', 'Environment', 'Education', 'Healthcare', 'Hunger & Nutrition', 'Water & Sanitation', 'Animal Welfare'];
  const urgencyLevels = ['All', 'Critical', 'High', 'Medium'];

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.ngo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || donation.category === selectedCategory;
    const matchesUrgency = selectedUrgency === 'All' || donation.urgency === selectedUrgency;
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Support a Cause</h1>
          <p className="text-gray-600">Make a direct impact by donating to verified NGOs and community projects</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search causes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm text-gray-700 mb-2">Category</label>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency Filter */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Urgency</label>
                <div className="flex gap-2">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedUrgency(level)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm transition-colors ${
                        selectedUrgency === level
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonations.map((donation) => {
            const progressPercentage = (donation.raisedAmount / donation.targetAmount) * 100;
            
            return (
              <div
                key={donation.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-emerald-100"
                onClick={() => onNavigate('donation-detail', donation.id)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={donation.image}
                    alt={donation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {donation.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs ${getUrgencyColor(donation.urgency)}`}>
                    {donation.urgency} Priority
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-1">{donation.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{donation.ngo}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Raised</span>
                      <span className="text-gray-900">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-red-500 h-full transition-all"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹{(donation.raisedAmount / 100000).toFixed(1)}L</span>
                      <span>₹{(donation.targetAmount / 100000).toFixed(1)}L goal</span>
                    </div>
                  </div>

                  {/* Impact Info */}
                  <div className="p-3 bg-green-50 rounded-lg mb-4">
                    <div className="flex items-center text-green-700 text-sm">
                      <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{donation.impactPerRupee}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {donation.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all">
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDonations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No donation projects found matching your criteria</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}