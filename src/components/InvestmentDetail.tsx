import { TrendingUp, Shield, Users, Calendar, MapPin, Info, Check, Clock, Leaf, Building, Droplet, ArrowLeft, CheckCircle, Target, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Page } from '../App';
import { investments } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

interface InvestmentDetailProps {
  investmentId: string;
  onNavigate: (page: Page) => void;
}

export function InvestmentDetail({ investmentId, onNavigate }: InvestmentDetailProps) {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    panCard: '',
    companyName: '',
    gstNumber: '',
  });
  const [paymentMode, setPaymentMode] = useState('upi');

  const investment = investments.find(inv => inv.id === investmentId);

  if (!investment) {
    return (
      <div className="min-h-screen w-full bg-gray-50 py-8">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <p className="text-gray-600">Investment not found</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (investment.raisedAmount / investment.targetAmount) * 100;

  const handleInvest = () => {
    if (!investmentAmount || Number(investmentAmount) < investment.minInvestment) {
      alert('Please enter a valid investment amount');
      return;
    }
    setShowDetailsForm(true);
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDetailsForm(false);
    setShowInvestModal(true);
  };

  const confirmInvestment = () => {
    // In real app, this would process the investment
    setShowInvestModal(false);
    alert(`Investment of ₹${investmentAmount} confirmed via ${paymentMode.toUpperCase()}! (Demo)`);
    setInvestmentAmount('');
    setShowDetailsForm(false);
    setUserDetails({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      panCard: '',
      companyName: '',
      gstNumber: '',
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('investments')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Investments
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-6">
              <ImageWithFallback
                src={investment.image}
                alt={investment.title}
                className="w-full h-full object-cover"
              />
              {investment.verified && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Blockchain Verified
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-gray-900">{investment.category}</span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h1 className="text-3xl text-gray-900 mb-4">{investment.title}</h1>
              <p className="text-gray-600 mb-6">{investment.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {investment.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl text-gray-900 mb-4">Investment Metrics</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-600 mb-2">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Expected Returns
                  </div>
                  <div className="text-2xl text-gray-900">{investment.expectedReturn}</div>
                  <div className="text-sm text-gray-600">Annual returns</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center text-blue-600 mb-2">
                    <Shield className="w-5 h-5 mr-2" />
                    Risk Level
                  </div>
                  <div className="text-2xl text-gray-900">{investment.riskLevel}</div>
                  <div className="text-sm text-gray-600">Assessed risk</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center text-purple-600 mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    Duration
                  </div>
                  <div className="text-2xl text-gray-900">{investment.duration}</div>
                  <div className="text-sm text-gray-600">Investment period</div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl text-gray-900 mb-4">Expected Impact</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(investment.impactMetrics).map(([key, value], index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl text-gray-900 mb-4">Project Milestones</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Project Planning Complete</h3>
                    <p className="text-sm text-gray-600">Initial feasibility studies and site selection completed</p>
                    <p className="text-xs text-gray-500 mt-1">Completed: Jan 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Funding Round 1</h3>
                    <p className="text-sm text-gray-600">75% of target funding secured</p>
                    <p className="text-xs text-gray-500 mt-1">In Progress</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Infrastructure Development</h3>
                    <p className="text-sm text-gray-600">Begin construction and deployment</p>
                    <p className="text-xs text-gray-500 mt-1">Expected: Mar 2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">Operations Launch</h3>
                    <p className="text-sm text-gray-600">Full operational capacity reached</p>
                    <p className="text-xs text-gray-500 mt-1">Expected: Sep 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Investment Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-20 mb-6">
              <h3 className="text-xl text-gray-900 mb-4">Invest Now</h3>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Funding Progress</span>
                  <span className="text-gray-900">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-900">₹{(investment.raisedAmount / 100000).toFixed(1)}L</span>
                  <span className="text-gray-600">of ₹{(investment.targetAmount / 100000).toFixed(1)}L</span>
                </div>
              </div>

              {/* Investment Amount */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Investment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₹</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    placeholder={investment.minInvestment.toString()}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Minimum investment: ₹{investment.minInvestment.toLocaleString()}
                </p>
              </div>

              {/* Invest Button */}
              <button
                onClick={handleInvest}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-4 shadow-lg"
              >
                Invest Now
              </button>

              {/* Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>2,450 investors</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Target className="w-4 h-4 mr-2" />
                  <span>30 days left</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Blockchain verified</span>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-yellow-900 mb-1">Investment Risk</h4>
                  <p className="text-xs text-yellow-800">
                    All investments carry risk. Please read the full disclosure documents before investing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Modal */}
      {showInvestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl text-gray-900 mb-4">Confirm Investment</h3>
            <div className="mb-6">
              <p className="text-gray-600 mb-2">You are about to invest:</p>
              <p className="text-3xl text-green-600 mb-4">₹{investmentAmount}</p>
              <p className="text-sm text-gray-600">in {investment.title}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowInvestModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmInvestment}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Form */}
      {showDetailsForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <h3 className="text-xl text-gray-900 mb-4">Enter Your Details</h3>
            <form onSubmit={handleDetailsSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={userDetails.fullName}
                    onChange={(e) => setUserDetails({ ...userDetails, fullName: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={userDetails.phone}
                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={userDetails.address}
                    onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={userDetails.city}
                    onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    value={userDetails.state}
                    onChange={(e) => setUserDetails({ ...userDetails, state: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Pincode</label>
                  <input
                    type="text"
                    value={userDetails.pincode}
                    onChange={(e) => setUserDetails({ ...userDetails, pincode: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">PAN Card</label>
                  <input
                    type="text"
                    value={userDetails.panCard}
                    onChange={(e) => setUserDetails({ ...userDetails, panCard: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={userDetails.companyName}
                    onChange={(e) => setUserDetails({ ...userDetails, companyName: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">GST Number</label>
                  <input
                    type="text"
                    value={userDetails.gstNumber}
                    onChange={(e) => setUserDetails({ ...userDetails, gstNumber: e.target.value })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-2">Payment Mode</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMode === 'upi'}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mr-2"
                  />
                  <span>UPI</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="netbanking"
                    checked={paymentMode === 'netbanking'}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mr-2"
                  />
                  <span>Net Banking</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMode === 'card'}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mr-2"
                  />
                  <span>Credit/Debit Card</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowDetailsForm(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}