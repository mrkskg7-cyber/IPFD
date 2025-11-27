import { Heart, Shield, Users, Calendar, MapPin, Target, TrendingUp, ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';
import { donations } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

interface DonationDetailProps {
  donationId: string;
  onNavigate: (page: Page) => void;
}

export function DonationDetail({ donationId, onNavigate }: DonationDetailProps) {
  const [donationAmount, setDonationAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const donation = donations.find(don => don.id === donationId);

  if (!donation) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">Donation project not found</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (donation.raisedAmount / donation.targetAmount) * 100;

  const quickAmounts = [500, 1000, 2500, 5000];

  const handleDonate = () => {
    setShowDonateModal(true);
  };

  const confirmDonation = () => {
    setShowDonateModal(false);
    alert(`Donation of ₹${donationAmount} confirmed! (Demo)`);
    setDonationAmount('');
  };

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
        {/* Back Button */}
        <button
          onClick={() => onNavigate('donations')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Donations
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-6">
              <ImageWithFallback
                src={donation.image}
                alt={donation.title}
                className="w-full h-full object-cover"
              />
              {donation.verified && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Verified NGO
                </div>
              )}
              <div className={`absolute top-4 left-4 px-3 py-2 rounded-lg ${getUrgencyColor(donation.urgency)}`}>
                {donation.urgency} Priority
              </div>
            </div>

            {/* Title and Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h1 className="text-3xl text-gray-900 mb-2">{donation.title}</h1>
              <p className="text-lg text-gray-600 mb-4">by {donation.ngo}</p>
              <p className="text-gray-700 mb-6">{donation.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {donation.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* About the NGO */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl text-gray-900 mb-4">About {donation.ngo}</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  A registered non-profit organization dedicated to {donation.category.toLowerCase()} 
                  initiatives across India. With over 10 years of experience, we have impacted thousands 
                  of lives through sustainable and transparent programs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Operating in 15 states</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-gray-400" />
                    <span>5,000+ volunteers</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Established in 2015</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>80G Tax Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How Your Money Helps */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl text-gray-900 mb-4">How Your Donation Helps</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-white text-sm">₹</span>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">₹500</div>
                    <div className="text-sm text-gray-600">Provides 10 meals to children</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-white text-sm">₹</span>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">₹1,000</div>
                    <div className="text-sm text-gray-600">Feeds a child for a month</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-white text-sm">₹</span>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">₹2,500</div>
                    <div className="text-sm text-gray-600">Supports nutrition for 5 children</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-white text-sm">₹</span>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">₹5,000</div>
                    <div className="text-sm text-gray-600">Feeds a family for a month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl text-gray-900 mb-4">Recent Updates</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="text-sm text-gray-500 mb-1">5 days ago</div>
                  <p className="text-gray-900 mb-1">Reached 1,000 beneficiaries milestone</p>
                  <p className="text-sm text-gray-600">Thanks to our donors, we've successfully provided meals to over 1,000 children this month.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="text-sm text-gray-500 mb-1">12 days ago</div>
                  <p className="text-gray-900 mb-1">New school partnership announced</p>
                  <p className="text-sm text-gray-600">Partnered with 3 additional schools to expand our midday meal program.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <div className="text-sm text-gray-500 mb-1">20 days ago</div>
                  <p className="text-gray-900 mb-1">Monthly impact report published</p>
                  <p className="text-sm text-gray-600">View our transparency report showing exactly how donations were utilized.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Donation Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-20 mb-6">
              <h3 className="text-xl text-gray-900 mb-4">Make a Donation</h3>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Raised</span>
                  <span className="text-gray-900">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-900">₹{(donation.raisedAmount / 100000).toFixed(1)}L</span>
                  <span className="text-gray-600">of ₹{(donation.targetAmount / 100000).toFixed(1)}L</span>
                </div>
              </div>

              {/* Quick Amounts */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Quick Select
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`py-2 px-3 border rounded-lg text-sm transition-colors ${
                        donationAmount === amount.toString()
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₹</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {donation.impactPerRupee}
                </p>
              </div>

              {/* Recurring Donation */}
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="mr-2 w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                  />
                  <span className="text-sm text-gray-700">Make this a monthly donation</span>
                </label>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={!donationAmount || Number(donationAmount) <= 0}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed mb-4"
              >
                Donate Now
              </button>

              {/* Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>8,450 donors</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>80G Tax benefits</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>100% Transparent</span>
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm text-green-900 mb-1">Tax Benefits</h4>
                  <p className="text-xs text-green-800">
                    Eligible for 50% tax deduction under Section 80G. You'll receive an instant tax receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Confirm Donation</h3>
              <p className="text-sm text-gray-600">Thank you for your generosity!</p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">You are donating:</p>
              <p className="text-3xl text-pink-600 mb-2">₹{donationAmount}</p>
              {isRecurring && (
                <p className="text-sm text-gray-600">Monthly recurring donation</p>
              )}
              <p className="text-sm text-gray-600 mt-2">to {donation.title}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDonateModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDonation}
                className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}