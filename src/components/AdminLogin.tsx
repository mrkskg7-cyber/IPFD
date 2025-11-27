import { useState } from 'react';
import { Shield, Lock, User, AlertCircle } from 'lucide-react';
import logo from 'figma:asset/dd1b3a822900592c28a41fdb0ab7ea686e2ed1f3.png';
import type { Page } from '../App';

interface AdminLoginProps {
  onAdminLogin: () => void;
  onNavigate: (page: Page) => void;
}

export function AdminLogin({ onAdminLogin, onNavigate }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Demo credentials - In production, this would be a secure backend call
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        onAdminLogin();
      } else {
        setError('Invalid credentials. Please try again.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back to Home Link */}
        <button
          onClick={() => onNavigate('landing')}
          className="absolute -top-12 left-0 text-white/70 hover:text-white transition-colors text-sm flex items-center"
        >
          ← Back to Home
        </button>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <img src={logo} alt="IPFD" className="h-10 w-auto mx-auto mb-3 rounded-lg shadow-lg" />
            <h1 
              className="text-2xl text-white tracking-wider mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}
            >
              IPFD ADMIN
            </h1>
            <p className="text-purple-100 text-sm">Secure Access to Platform Management</p>
          </div>

          {/* Login Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm text-red-900 mb-1">Authentication Failed</h4>
                    <p className="text-xs text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Username Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Admin Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter admin username"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  'Sign In to Admin Portal'
                )}
              </button>

              {/* Demo Credentials Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-xs text-blue-900 mb-2">Demo Credentials:</h4>
                <div className="text-xs text-blue-700 space-y-1">
                  <p><span className="font-semibold">Username:</span> admin</p>
                  <p><span className="font-semibold">Password:</span> admin123</p>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>© 2025 IPFD</span>
              <div className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                <span>Secure Connection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center text-white/70 text-xs">
          <p>This is a secure area. All access attempts are logged.</p>
          <p className="mt-1">Unauthorized access is strictly prohibited.</p>
        </div>
      </div>
    </div>
  );
}
