import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/dd1b3a822900592c28a41fdb0ab7ea686e2ed1f3.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="IMPACTFUNDER" className="h-20 w-auto rounded-2xl shadow-lg" />
            </div>
            <p className="text-emerald-100 text-sm mb-4">
              Empowering impact investors and changemakers to create a sustainable future through transparent, verified investments.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-800 hover:bg-emerald-700 rounded-full transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-emerald-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Corporates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For NGOs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-emerald-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG Framework</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-emerald-100 text-sm">
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
                <span>hello@impactfunder.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                />
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-emerald-200 text-sm">
            <p>© 2025 IMPACTFUNDER. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
