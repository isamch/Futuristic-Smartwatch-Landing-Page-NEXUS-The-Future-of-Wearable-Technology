
import { Mail, Phone, MapPin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-16 px-4 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NEXUS
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering the future of wearable technology with innovation, 
              precision, and uncompromising quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@nexus.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NEXUS. All rights reserved. Designed for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;