import { useState } from 'react';
import { Users, TrendingUp, Heart, DollarSign, Shield, Building, Search, Filter, Download, Eye, CheckCircle, XCircle, Clock, ArrowUpRight, ArrowDownRight, Edit, Trash2, Plus } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Page } from '../App';
import { Footer } from './Footer';

interface AdminDashboardProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function AdminDashboard({ onNavigate, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'investments' | 'donations' | 'users' | 'companies' | 'projects'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock Admin Data
  const platformStats = {
    totalUsers: 52340,
    totalInvestors: 48230,
    totalCompanies: 4110,
    totalInvestments: '₹548 Cr',
    totalInvestmentsRaw: 54800000000,
    totalDonations: '₹142 Cr',
    totalDonationsRaw: 14200000000,
    totalImpact: '₹690 Cr',
    activeProjects: 287,
    completedProjects: 156,
    ongoingProjects: 131,
    pendingApprovals: 23,
    growthRate: 23.5,
  };

  const recentInvestments = [
    {
      id: 'INV-2401',
      investor: 'Priya Sharma',
      project: 'Solar Farm Maharashtra',
      amount: '₹25,00,000',
      date: '2025-11-27',
      status: 'completed',
      type: 'investment',
    },
    {
      id: 'INV-2402',
      investor: 'Rahul Kumar',
      project: 'Clean Water Initiative',
      amount: '₹15,00,000',
      date: '2025-11-27',
      status: 'pending',
      type: 'investment',
    },
    {
      id: 'INV-2403',
      investor: 'Anita Desai',
      project: 'Renewable Energy Fund',
      amount: '₹30,00,000',
      date: '2025-11-26',
      status: 'completed',
      type: 'investment',
    },
    {
      id: 'INV-2404',
      investor: 'Vikram Singh',
      project: 'Healthcare Access Program',
      amount: '₹12,00,000',
      date: '2025-11-26',
      status: 'processing',
      type: 'investment',
    },
    {
      id: 'INV-2405',
      investor: 'Meera Patel',
      project: 'Education for All',
      amount: '₹18,00,000',
      date: '2025-11-25',
      status: 'completed',
      type: 'investment',
    },
  ];

  const recentDonations = [
    {
      id: 'DON-3501',
      donor: 'Amit Verma',
      ngo: 'Teach India Foundation',
      amount: '₹50,000',
      date: '2025-11-27',
      status: 'completed',
      type: 'donation',
      recurring: true,
    },
    {
      id: 'DON-3502',
      donor: 'Sneha Reddy',
      ngo: 'Clean Water Trust',
      amount: '₹1,00,000',
      date: '2025-11-27',
      status: 'completed',
      type: 'donation',
      recurring: false,
    },
    {
      id: 'DON-3503',
      donor: 'Rajesh Iyer',
      ngo: 'Healthcare Heroes',
      amount: '₹75,000',
      date: '2025-11-26',
      status: 'pending',
      type: 'donation',
      recurring: true,
    },
    {
      id: 'DON-3504',
      donor: 'Neha Gupta',
      ngo: 'Green Earth Initiative',
      amount: '₹2,00,000',
      date: '2025-11-26',
      status: 'completed',
      type: 'donation',
      recurring: false,
    },
    {
      id: 'DON-3505',
      donor: 'Karan Malhotra',
      ngo: 'Women Empowerment Fund',
      amount: '₹60,000',
      date: '2025-11-25',
      status: 'completed',
      type: 'donation',
      recurring: true,
    },
  ];

  const usersList = [
    { id: 1, name: 'Priya Sharma', email: 'priya@example.com', type: 'Investor', joined: '2024-03-15', status: 'active', investments: 12, totalInvested: '₹85L' },
    { id: 2, name: 'Rahul Kumar', email: 'rahul@example.com', type: 'Investor', joined: '2024-05-20', status: 'active', investments: 8, totalInvested: '₹62L' },
    { id: 3, name: 'Tech Solutions Pvt Ltd', email: 'contact@techsol.com', type: 'Company', joined: '2024-02-10', status: 'active', investments: 5, totalInvested: '₹2.5Cr' },
    { id: 4, name: 'Anita Desai', email: 'anita@example.com', type: 'Investor', joined: '2024-07-12', status: 'active', investments: 15, totalInvested: '₹1.2Cr' },
    { id: 5, name: 'GreenCorp Industries', email: 'info@greencorp.com', type: 'Company', joined: '2024-01-05', status: 'active', investments: 8, totalInvested: '₹5Cr' },
  ];

  const monthlyTrends = [
    { month: 'Jun', investments: 45, donations: 120 },
    { month: 'Jul', investments: 52, donations: 135 },
    { month: 'Aug', investments: 48, donations: 142 },
    { month: 'Sep', investments: 61, donations: 158 },
    { month: 'Oct', investments: 58, donations: 168 },
    { month: 'Nov', investments: 73, donations: 185 },
  ];

  const categoryDistribution = [
    { name: 'Climate Action', value: 35, color: '#10b981' },
    { name: 'Education', value: 28, color: '#3b82f6' },
    { name: 'Healthcare', value: 22, color: '#ef4444' },
    { name: 'Water & Sanitation', value: 15, color: '#06b6d4' },
  ];

  const projectsList = [
    {
      id: 'PRJ-001',
      name: 'Solar Farm Maharashtra',
      category: 'Renewable Energy',
      status: 'ongoing',
      progress: 75,
      targetAmount: '₹50L',
      raisedAmount: '₹37.5L',
      investors: 2450,
      startDate: '2025-01-15',
      expectedCompletion: '2026-03-30',
      impactMetrics: { co2Saved: '1,250 tons/year', householdsServed: '50,000' },
    },
    {
      id: 'PRJ-002',
      name: 'Clean Water Initiative',
      category: 'Water & Sanitation',
      status: 'ongoing',
      progress: 60,
      targetAmount: '₹35L',
      raisedAmount: '₹21L',
      investors: 1850,
      startDate: '2025-02-01',
      expectedCompletion: '2026-06-30',
      impactMetrics: { waterAccess: '25,000 people', wellsBuilt: '150' },
    },
    {
      id: 'PRJ-003',
      name: 'Rural Education Program',
      category: 'Education',
      status: 'completed',
      progress: 100,
      targetAmount: '₹20L',
      raisedAmount: '₹20L',
      investors: 3200,
      startDate: '2024-06-01',
      completionDate: '2025-11-15',
      impactMetrics: { studentsHelped: '5,000', schoolsBuilt: '25' },
    },
    {
      id: 'PRJ-004',
      name: 'Healthcare Access Program',
      category: 'Healthcare',
      status: 'ongoing',
      progress: 45,
      targetAmount: '₹45L',
      raisedAmount: '₹20.25L',
      investors: 1620,
      startDate: '2025-03-10',
      expectedCompletion: '2026-09-30',
      impactMetrics: { clinicsEstablished: '30', patientsServed: '15,000/month' },
    },
    {
      id: 'PRJ-005',
      name: 'Urban Waste Management',
      category: 'Environment',
      status: 'completed',
      progress: 100,
      targetAmount: '₹30L',
      raisedAmount: '₹30L',
      investors: 2100,
      startDate: '2024-08-20',
      completionDate: '2025-10-30',
      impactMetrics: { wasteProcessed: '500 tons/day', jobsCreated: '250' },
    },
    {
      id: 'PRJ-006',
      name: 'Women Empowerment Fund',
      category: 'Social Impact',
      status: 'ongoing',
      progress: 85,
      targetAmount: '₹25L',
      raisedAmount: '₹21.25L',
      investors: 2850,
      startDate: '2024-12-01',
      expectedCompletion: '2026-02-28',
      impactMetrics: { womenTrained: '1,200', businessesStarted: '350' },
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 shadow-lg w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div>
                <h1 
                  className="text-xl text-white tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}
                >
                  IPFD ADMIN
                </h1>
                <p className="text-xs text-purple-300">Platform Management & Analytics</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-emerald-600" />
              <div className="flex items-center text-emerald-600 text-sm">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">{platformStats.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Users</div>
            <div className="text-xs text-gray-500 mt-2">
              Investors: {platformStats.totalInvestors.toLocaleString()} | Companies: {platformStats.totalCompanies.toLocaleString()}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <div className="flex items-center text-blue-600 text-sm">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+{platformStats.growthRate}%</span>
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">{platformStats.totalInvestments}</div>
            <div className="text-sm text-gray-600">Total Investments</div>
            <div className="text-xs text-gray-500 mt-2">
              Active: {platformStats.activeProjects} projects
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-8 h-8 text-pink-600" />
              <div className="flex items-center text-pink-600 text-sm">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+18%</span>
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">{platformStats.totalDonations}</div>
            <div className="text-sm text-gray-600">Total Donations</div>
            <div className="text-xs text-gray-500 mt-2">
              Recurring donors: 8,432
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-purple-600" />
              <div className="flex items-center text-purple-600 text-sm">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse" />
                <span>Live</span>
              </div>
            </div>
            <div className="text-3xl text-gray-900 mb-1">{platformStats.pendingApprovals}</div>
            <div className="text-sm text-gray-600">Pending Approvals</div>
            <div className="text-xs text-gray-500 mt-2">
              Requires immediate attention
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Trends */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg text-gray-900 mb-4">Monthly Trends</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investments" stroke="#3b82f6" strokeWidth={2} name="Investments" />
                <Line type="monotone" dataKey="donations" stroke="#ec4899" strokeWidth={2} name="Donations" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg text-gray-900 mb-4">Impact Category Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name} (${entry.value}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: Shield },
                { id: 'investments', label: 'Investments', icon: TrendingUp },
                { id: 'donations', label: 'Donations', icon: Heart },
                { id: 'users', label: 'Users', icon: Users },
                { id: 'companies', label: 'Companies', icon: Building },
                { id: 'projects', label: 'Projects', icon: Building },
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <TabIcon className="w-5 h-5 mr-2" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Project Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Building className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl mb-1">{platformStats.activeProjects}</div>
                    <div className="text-sm text-blue-100">Total Projects</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-100">Active</span>
                  <span>{platformStats.ongoingProjects}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl mb-1">{platformStats.completedProjects}</div>
                    <div className="text-sm text-green-100">Completed</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-100">Success Rate</span>
                  <span>95%</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl mb-1">{platformStats.totalImpact}</div>
                    <div className="text-sm text-purple-100">Total Impact</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-100">Growth</span>
                  <span className="flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    {platformStats.growthRate}%
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Recent Activity</h3>
                <button className="flex items-center px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </button>
              </div>

              <div className="space-y-4">
                {[...recentInvestments.slice(0, 3), ...recentDonations.slice(0, 2)].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.type === 'investment' ? 'bg-blue-100' : 'bg-pink-100'
                      }`}>
                        {item.type === 'investment' ? (
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Heart className="w-5 h-5 text-pink-600" />
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-900">
                          {'investor' in item ? item.investor : item.donor}
                        </div>
                        <div className="text-xs text-gray-600">
                          {'project' in item ? item.project : item.ngo}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900">{item.amount}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'investments' && (
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search & Filter */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search investments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                </select>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Investments Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Investor</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentInvestments.map((investment) => (
                    <tr key={investment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.investor}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{investment.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${getStatusBadge(investment.status)}`}>
                          {investment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-purple-600 hover:text-purple-900">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search & Filter */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search donations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Donations Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Donor</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">NGO</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentDonations.map((donation) => (
                    <tr key={donation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.donor}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{donation.ngo}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {donation.recurring ? (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Recurring</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">One-time</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${getStatusBadge(donation.status)}`}>
                          {donation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-purple-600 hover:text-purple-900">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search & Filter */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="all">All Users</option>
                  <option value="investors">Investors</option>
                  <option value="companies">Companies</option>
                </select>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Investments</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Total Invested</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {usersList.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          user.type === 'Company' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {user.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.investments}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.totalInvested}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${getStatusBadge(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-purple-600 hover:text-purple-900">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search & Filter */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="ongoing">Ongoing</option>
                </select>
                <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </button>
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Projects Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Target Amount</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Raised Amount</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Investors</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Expected Completion</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Impact Metrics</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projectsList.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{project.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.progress}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.targetAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.raisedAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.investors}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.status === 'completed' ? project.completionDate : project.expectedCompletion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {Object.entries(project.impactMetrics).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-bold">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                            {value}
                          </div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center gap-2">
                          <button 
                            className="text-purple-600 hover:text-purple-900"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button 
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit Project"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-900"
                            title="Delete Project"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}