import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 text-gray-700 mt-auto w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 
              className="text-2xl text-gray-900 mb-4 tracking-wider"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: '800',
                letterSpacing: '0.1em'
              }}
            >
              IPFD
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Empowering impact investors and changemakers to create a sustainable future through transparent, verified investments.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-emerald-200 hover:bg-emerald-300 rounded-full transition-colors">
                <Facebook className="w-4 h-4 text-emerald-700" />
              </a>
              <a href="#" className="p-2 bg-emerald-200 hover:bg-emerald-300 rounded-full transition-colors">
                <Twitter className="w-4 h-4 text-emerald-700" />
              </a>
              <a href="#" className="p-2 bg-emerald-200 hover:bg-emerald-300 rounded-full transition-colors">
                <Instagram className="w-4 h-4 text-emerald-700" />
              </a>
              <a href="#" className="p-2 bg-emerald-200 hover:bg-emerald-300 rounded-full transition-colors">
                <Linkedin className="w-4 h-4 text-emerald-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-emerald-700 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">For Corporates</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">For NGOs</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">ESG Framework</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-700 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>123 Impact Street, Green Tower, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+91 22 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>hello@ipfd.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-gray-900 text-sm mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none border border-emerald-200"
                />
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-200">
          <div className="flex flex-col items-center text-gray-600 text-sm">
            <div className="flex space-x-6 mb-4">
              <a href="#" className="hover:text-emerald-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-700 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-700 transition-colors">Cookies</a>
              <a href="#" className="hover:text-emerald-700 transition-colors">Accessibility</a>
            </div>
            <p>© 2025 IPFD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
