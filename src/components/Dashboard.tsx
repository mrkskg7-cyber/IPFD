import { TrendingUp, Heart, Leaf, Users, Briefcase, ArrowRight, Shield } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { Page } from '../App';
import { userPortfolio, investments, donations } from '../data/mockData';

interface DashboardProps {
  onNavigate: (page: Page, id?: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const portfolioData = [
    { month: 'Jul', value: 125000, impact: 800 },
    { month: 'Aug', value: 128000, impact: 950 },
    { month: 'Sep', value: 131500, impact: 1050 },
    { month: 'Oct', value: 135000, impact: 1150 },
    { month: 'Nov', value: 138750, impact: 1250 },
  ];

  const impactDistribution = [
    { name: 'Climate', value: 35, color: '#10b981' },
    { name: 'Education', value: 25, color: '#3b82f6' },
    { name: 'Healthcare', value: 20, color: '#ef4444' },
    { name: 'Women', value: 20, color: '#8b5cf6' },
  ];

  const stats = [
    {
      icon: Briefcase,
      label: 'Portfolio Value',
      value: `₹${userPortfolio.currentValue.toLocaleString()}`,
      change: '+11%',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-100',
    },
    {
      icon: Heart,
      label: 'Total Donated',
      value: `₹${userPortfolio.totalDonated.toLocaleString()}`,
      change: '+25%',
      color: 'text-teal-700',
      bgColor: 'bg-teal-100',
    },
    {
      icon: Leaf,
      label: 'CO₂ Offset',
      value: `${userPortfolio.totalImpact.co2Saved} kg`,
      change: 'Equal to 45 trees',
      color: 'text-green-700',
      bgColor: 'bg-green-100',
    },
    {
      icon: Users,
      label: 'Lives Impacted',
      value: userPortfolio.totalImpact.livesImpacted.toLocaleString(),
      change: 'This month',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Welcome back, Investor!</h1>
          <p className="text-gray-600">Here's your impact and investment overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <Shield className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio Growth Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl text-gray-900 mb-1">Portfolio & Impact Growth</h2>
                <p className="text-sm text-gray-600">Financial returns and social impact over time</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                  name="Portfolio Value (₹)"
                />
                <Area 
                  type="monotone" 
                  dataKey="impact" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorImpact)"
                  name="Lives Impacted"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Impact Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl text-gray-900 mb-4">Impact Distribution</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={impactDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {impactDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {impactDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-sm text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Investments */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-gray-900">Your Active Investments</h2>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-green-600 hover:text-green-700 flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {userPortfolio.investments.map((investment) => (
              <div
                key={investment.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onNavigate('investment-detail', investment.id)}
              >
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{investment.title}</h3>
                  <p className="text-sm text-gray-600">
                    Invested: ₹{investment.amountInvested.toLocaleString()} • 
                    Current: ₹{investment.currentValue.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-green-600 mb-1">{investment.return}</div>
                  <div className="text-xs text-gray-500">
                    {Object.values(investment.impactContribution)[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recommended Investments */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900">Recommended for You</h2>
              <button
                onClick={() => onNavigate('investments')}
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {investments.slice(0, 3).map((investment) => (
                <div
                  key={investment.id}
                  className="flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => onNavigate('investment-detail', investment.id)}
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <img 
                      src={investment.image} 
                      alt={investment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{investment.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{investment.category}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-600">{investment.expectedReturn}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{investment.riskLevel} Risk</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Causes */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900">Featured Causes</h2>
              <button
                onClick={() => onNavigate('donations')}
                className="text-green-600 hover:text-green-700 flex items-center"
              >
                Donate
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {donations.slice(0, 3).map((donation) => (
                <div
                  key={donation.id}
                  className="flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => onNavigate('donation-detail', donation.id)}
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <img 
                      src={donation.image} 
                      alt={donation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{donation.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{donation.ngo}</p>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-green-500 h-full"
                        style={{ width: `${(donation.raisedAmount / donation.targetAmount) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      ₹{donation.raisedAmount.toLocaleString()} of ₹{donation.targetAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}