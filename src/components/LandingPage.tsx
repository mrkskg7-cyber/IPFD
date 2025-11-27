import { ArrowRight, TrendingUp, Heart, Shield, Users, BarChart3, Coins, Globe } from 'lucide-react';
import type { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
  onLogin: () => void;
}

export function LandingPage({ onNavigate, onLogin }: LandingPageProps) {
  const features = [
    {
      icon: TrendingUp,
      title: 'Impact Investments',
      description: 'Invest in projects that generate financial returns while creating positive social and environmental impact.',
    },
    {
      icon: Heart,
      title: 'Transparent Donations',
      description: 'Support verified NGOs and track the real-time impact of your contributions with complete transparency.',
    },
    {
      icon: Shield,
      title: 'Blockchain Verified',
      description: 'Every transaction and impact metric is recorded on blockchain for immutable verification and trust.',
    },
    {
      icon: BarChart3,
      title: 'Live Impact Dashboard',
      description: 'Track your financial returns alongside real-world impact metrics like CO₂ saved and lives improved.',
    },
    {
      icon: Users,
      title: 'Impact Communities',
      description: 'Join circles of like-minded changemakers focused on climate, education, health, and more.',
    },
    {
      icon: Coins,
      title: 'AI Portfolios',
      description: 'Get personalized investment recommendations based on your values, risk tolerance, and impact goals.',
    },
  ];

  const impactCategories = [
    { name: 'Climate Action', color: 'bg-green-500', image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjQxODIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Education', color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE5Mzg3N3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Clean Water', color: 'bg-cyan-500', image: 'https://images.unsplash.com/photo-1722081103336-6437cc0bf723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwd2VsbHxlbnwxfHx8fDE3NjQxOTIxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Healthcare', color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNsaW5pY3xlbnwxfHx8fDE3NjQxMzgxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  const stats = [
    { value: '₹500Cr+', label: 'Impact Capital Deployed' },
    { value: '50K+', label: 'Active Investors' },
    { value: '200+', label: 'Impact Projects' },
    { value: '1M+', label: 'Lives Impacted' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-900 to-teal-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mr-2">
                <span className="text-emerald-900">IF</span>
              </div>
              <span className="text-xl text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>IMPACTFUNDER</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onLogin}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-colors shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Invest with Purpose.
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Create Real Impact.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The first platform combining financial returns with verified social and environmental impact. 
              Invest, donate, and track your contribution to a better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLogin}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-colors flex items-center justify-center shadow-lg shadow-emerald-200"
              >
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={onLogin}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border-2 border-emerald-200"
              >
                Explore Projects
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Why Impactfunder?</h2>
            <p className="text-xl text-gray-600">
              A complete ecosystem for impact-driven investing and giving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Choose Your Impact</h2>
            <p className="text-xl text-gray-600">
              Support causes that matter to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCategories.map((category, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Start creating impact in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">1</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Choose Your Values</h3>
              <p className="text-gray-600">
                Complete our quick onboarding to match with causes and projects aligned with your values
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">2</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Invest or Donate</h3>
              <p className="text-gray-600">
                Browse verified projects and choose to invest for returns or donate to support directly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">3</span>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Track Your Impact</h3>
              <p className="text-gray-600">
                Watch your portfolio grow and see real-time impact metrics verified on blockchain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 via-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join thousands of investors creating positive change while building wealth
          </p>
          <button
            onClick={onLogin}
            className="px-8 py-4 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-950 to-teal-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-emerald-900 font-bold">IF</span>
                </div>
                <span className="text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>IMPACTFUNDER</span>
              </div>
              <p className="text-sm">
                Funding for a better tomorrow
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>Investments</li>
                <li>Donations</li>
                <li>Portfolio</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2025 <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}>IMPACTFUNDER</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}