import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Temple Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">Sri Venkateswara Temple</h3>
            <p className="mb-4 text-gray-200">
              A sacred space dedicated to Lord Venkateswara, bringing spiritual enlightenment and divine blessings to the community.
            </p>
            <p className="text-sm text-gray-300">
              Trust Registration: 12345-ABCDE <br />
              PAN: ABCDE1234F <br />
              80G Tax Exemption: AAA-111-2222
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Donate Now', path: '/donate' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Events Calendar', path: '/events' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-200 hover:text-gold-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-saffron-500 flex-shrink-0 mt-0.5" />
                <span>123 Temple Street, Spiritual Gardens, Tirupati, Andhra Pradesh 517501</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-saffron-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-saffron-500 flex-shrink-0" />
                <a href="mailto:info@srivenkateswara.org" className="hover:text-gold-300 transition-colors">
                  info@srivenkateswara.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold-500">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-gold-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Subscribe for Updates</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-maroon-700 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gold-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-saffron-600 hover:bg-saffron-700 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-maroon-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Sri Venkateswara Temple. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4 text-sm text-gray-300">
            <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-300 transition-colors">
              Terms of Use
            </Link>
          </div>
          <div className="flex items-center mt-4 md:mt-0 text-sm text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-saffron-500" />
            <span>and devotion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;