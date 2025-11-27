import { TrendingUp, TrendingDown, Leaf, Users, Heart, Droplet, Building, ArrowUpRight, AlertCircle, Download, Calendar } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import type { Page } from '../App';
import { userPortfolio } from '../data/mockData';
import { Footer } from './Footer';

interface PortfolioProps {
  onNavigate: (page: Page, id?: string) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  const performanceData = [
    { month: 'Jun', portfolio: 120000, benchmark: 118000 },
    { month: 'Jul', portfolio: 125000, benchmark: 122000 },
    { month: 'Aug', portfolio: 128000, benchmark: 125000 },
    { month: 'Sep', portfolio: 131500, benchmark: 127500 },
    { month: 'Oct', portfolio: 135000, benchmark: 130000 },
    { month: 'Nov', portfolio: 138750, benchmark: 132000 },
  ];

  const impactData = [
    { category: 'CO₂ Saved', value: userPortfolio.totalImpact.co2Saved, unit: 'kg', icon: Leaf, color: 'text-green-600', bgColor: 'bg-green-100' },
    { category: 'Jobs Created', value: userPortfolio.totalImpact.jobsCreated, unit: 'jobs', icon: Building, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { category: 'Lives Impacted', value: userPortfolio.totalImpact.livesImpacted, unit: 'people', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { category: 'Trees Planted', value: userPortfolio.totalImpact.treesPlanted, unit: 'trees', icon: Leaf, color: 'text-green-600', bgColor: 'bg-green-100' },
  ];

  const totalReturn = ((userPortfolio.currentValue - userPortfolio.totalInvested) / userPortfolio.totalInvested) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">My Portfolio</h1>
            <p className="text-gray-600">Track your investments and impact</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Invested</span>
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl text-gray-900 mb-1">₹{userPortfolio.totalInvested.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Principal amount</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Current Value</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl text-gray-900 mb-1">₹{userPortfolio.currentValue.toLocaleString()}</div>
            <div className="text-xs text-green-600">+{totalReturn.toFixed(2)}% returns</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Gain</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl text-green-600 mb-1">
              +₹{(userPortfolio.currentValue - userPortfolio.totalInvested).toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">Unrealized gains</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Donated</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-2xl text-gray-900 mb-1">₹{userPortfolio.totalDonated.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Philanthropic giving</div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl text-gray-900 mb-6">Portfolio Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="portfolio" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Your Portfolio"
                dot={{ fill: '#10b981', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="benchmark" 
                stroke="#9ca3af" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Market Benchmark"
                dot={{ fill: '#9ca3af', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl text-gray-900 mb-6">Your Total Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {impactData.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${impact.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${impact.color}`} />
                  </div>
                  <div className="text-2xl text-gray-900 mb-1">{impact.value.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 mb-1">{impact.category}</div>
                  <div className="text-xs text-gray-500">{impact.unit}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Investments */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl text-gray-900 mb-6">Active Investments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm text-gray-600">Project</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-600">Invested</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-600">Current Value</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-600">Returns</th>
                  <th className="text-right py-3 px-4 text-sm text-gray-600">Impact</th>
                </tr>
              </thead>
              <tbody>
                {userPortfolio.investments.map((investment) => (
                  <tr
                    key={investment.id}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => onNavigate('investment-detail', investment.id)}
                  >
                    <td className="py-4 px-4">
                      <div className="text-gray-900">{investment.title}</div>
                    </td>
                    <td className="py-4 px-4 text-right text-gray-700">
                      ₹{investment.amountInvested.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-900">
                      ₹{investment.currentValue.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-green-600">
                      {investment.return}
                    </td>
                    <td className="py-4 px-4 text-right text-sm text-gray-600">
                      {Object.values(investment.impactContribution)[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl text-gray-900 mb-6">Recent Donations</h2>
          <div className="space-y-4">
            {userPortfolio.donations.map((donation) => (
              <div
                key={donation.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onNavigate('donation-detail', donation.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{donation.title}</h3>
                    <p className="text-sm text-gray-600">{donation.impact}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 mb-1">₹{donation.amount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(donation.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}