import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, ChevronRight, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-pragya-ivory selection:bg-pragya-gold selection:text-pragya-darker">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-pragya-darker/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-pragya-gold to-pragya-teal flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-pragya-darker" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-pragya-gold transition-colors">
                PragyaS AI
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-pragya-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact">
                <button className="px-5 py-2 text-sm font-medium bg-white/10 hover:bg-pragya-gold hover:text-pragya-darker border border-white/10 rounded-full transition-all duration-300">
                  Book Strategy Call
                </button>
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-pragya-darker border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-pragya-darker border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 rounded bg-pragya-gold flex items-center justify-center">
                   <BrainCircuit className="w-4 h-4 text-pragya-darker" />
                </div>
                <span className="font-serif text-xl font-bold text-white">PragyaS AI</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Wisdom-Driven AI. Built for real-world impact. Helping founders and enterprises scale with intelligent systems.
              </p>
              <div className="flex space-x-4">
                 {/* Social placeholders */}
                 {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                   <div key={social} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-pragya-gold hover:text-pragya-darker cursor-pointer transition-colors text-xs text-gray-400">
                      {social[0]}
                   </div>
                 ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-pragya-gold transition-colors">AI Voice Agents</Link></li>
                <li><Link to="/services" className="hover:text-pragya-gold transition-colors">Sales Automation</Link></li>
                <li><Link to="/services" className="hover:text-pragya-gold transition-colors">Pitch Deck Design</Link></li>
                <li><Link to="/services" className="hover:text-pragya-gold transition-colors">Brand Identity</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-pragya-gold transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-pragya-gold transition-colors">Insights</Link></li>
                <li><Link to="/case-studies" className="hover:text-pragya-gold transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-pragya-gold transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Join our wisdom circle. No spam, just clarity.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-pragya-gold w-full"
                />
                <button className="bg-pragya-gold text-pragya-darker px-4 py-2 rounded-r-md text-sm font-medium hover:bg-white transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} PragyaS AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
