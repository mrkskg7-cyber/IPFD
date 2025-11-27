import { Users, MessageCircle, Calendar, TrendingUp, Heart, UserPlus, Search, Filter, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

interface CommunityPageProps {
  onNavigate: (page: Page) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>(['com-1']);

  const communities = [
    {
      id: 'com-1',
      name: 'Climate Action Circle',
      description: 'Join thousands of climate warriors investing in renewable energy and sustainable solutions',
      members: 12450,
      totalImpact: '₹185 Cr impact',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500',
    },
    {
      id: 'com-2',
      name: 'Education Champions',
      description: 'Empowering underprivileged children through quality education initiatives',
      members: 8320,
      totalImpact: '₹120 Cr impact',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500',
    },
    {
      id: 'com-3',
      name: 'Healthcare Heroes',
      description: 'Supporting healthcare access in rural and underserved communities',
      members: 6890,
      totalImpact: '��95 Cr impact',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500',
    },
    {
      id: 'com-4',
      name: 'Women Empowerment',
      description: 'Investing in women-led businesses and gender equality projects',
      members: 9540,
      totalImpact: '₹142 Cr impact',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
    },
  ];

  const toggleJoin = (communityId: string) => {
    if (joinedCommunities.includes(communityId)) {
      setJoinedCommunities(joinedCommunities.filter(id => id !== communityId));
    } else {
      setJoinedCommunities([...joinedCommunities, communityId]);
    }
  };

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', impact: '₹25L invested', avatar: 'PS' },
    { rank: 2, name: 'Rahul Kumar', impact: '₹18L invested', avatar: 'RK' },
    { rank: 3, name: 'Anita Desai', impact: '₹15L invested', avatar: 'AD' },
    { rank: 4, name: 'Vikram Singh', impact: '₹12L invested', avatar: 'VS' },
    { rank: 5, name: 'Sneha Patel', impact: '₹10L invested', avatar: 'SP' },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best renewable energy projects in 2025?',
      author: 'Amit Verma',
      replies: 23,
      community: 'Climate Action Circle',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Impact measurement strategies',
      author: 'Neha Gupta',
      replies: 15,
      community: 'Education Champions',
      time: '5 hours ago',
    },
    {
      id: 3,
      title: 'Tax benefits on impact investments',
      author: 'Rajesh Iyer',
      replies: 31,
      community: 'Climate Action Circle',
      time: '1 day ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Impact Communities</h1>
          <p className="text-gray-600">Connect with like-minded changemakers and amplify your impact</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl text-gray-900 mb-1">32,450</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-2xl text-gray-900 mb-1">₹650 Cr</div>
            <div className="text-sm text-gray-600">Collective Impact</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl text-gray-900 mb-1">1,248</div>
            <div className="text-sm text-gray-600">Active Discussions</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Communities List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl text-gray-900 mb-6">Explore Communities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {communities.map((community) => {
                const isJoined = joinedCommunities.includes(community.id);
                
                return (
                  <div
                    key={community.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-40 bg-gray-200">
                      <ImageWithFallback
                        src={community.image}
                        alt={community.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg text-white">{community.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {community.description}
                      </p>

                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{community.members.toLocaleString()} members</span>
                        </div>
                        <div className="text-green-600">
                          {community.totalImpact}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleJoin(community.id)}
                        className={`w-full py-2 rounded-lg transition-colors ${
                          isJoined
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {isJoined ? (
                          <span className="flex items-center justify-center">
                            <Users className="w-4 h-4 mr-2" />
                            Joined
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Join Community
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Discussions */}
            <div className="mt-8">
              <h2 className="text-xl text-gray-900 mb-6">Recent Discussions</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {discussions.map((discussion, index) => (
                  <div
                    key={discussion.id}
                    className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                      index !== discussions.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <h3 className="text-gray-900 mb-2">{discussion.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {discussion.replies} replies
                      </span>
                      <span>•</span>
                      <span>{discussion.time}</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                        {discussion.community}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Top Contributors */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 text-sm text-gray-700">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-600">{user.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h3 className="text-lg text-blue-900 mb-3">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Be respectful and supportive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Share knowledge and experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Focus on creating positive impact</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No spam or self-promotion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}