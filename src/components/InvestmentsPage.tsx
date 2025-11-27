import { Search, Filter, TrendingUp, Shield, Clock } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';
import { investments } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InvestmentsPageProps {
  onNavigate: (page: Page, id?: string) => void;
}

export function InvestmentsPage({ onNavigate }: InvestmentsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Renewable Energy', 'Education', 'Healthcare', 'Agriculture', 'Water & Sanitation', 'Women Empowerment'];

  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || investment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Impact Investments</h1>
          <p className="text-gray-600">Invest in projects that create financial returns and positive impact</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search investments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvestments.map((investment) => (
            <div
              key={investment.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate('investment-detail', investment.id)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src={investment.image}
                  alt={investment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {investment.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-900">
                  {investment.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">{investment.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {investment.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900">
                      {Math.round((investment.raisedAmount / investment.targetAmount) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all"
                      style={{ width: `${(investment.raisedAmount / investment.targetAmount) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹{(investment.raisedAmount / 100000).toFixed(1)}L raised</span>
                    <span>₹{(investment.targetAmount / 100000).toFixed(1)}L goal</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center text-green-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-gray-600">Returns</div>
                    <div className="text-sm text-gray-900">{investment.expectedReturn}</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-gray-600">Risk</div>
                    <div className="text-sm text-gray-900">{investment.riskLevel}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center text-purple-600 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-gray-600">Duration</div>
                    <div className="text-sm text-gray-900">{investment.duration}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {investment.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredInvestments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No investments found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}