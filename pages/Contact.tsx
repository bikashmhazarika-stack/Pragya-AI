import React from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-pragya-darker min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div>
            <h1 className="font-serif text-5xl font-bold mb-6">Let's Build the Future.</h1>
            <p className="text-xl text-gray-300 mb-10">
              Ready to deploy AI agents or elevate your brand? Schedule a strategy call with our experts.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pragya-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white">hello@pragyas.ai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pragya-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call / WhatsApp</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pragya-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="text-white">San Francisco • Bangalore • Dubai</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-pragya-midnight to-pragya-darker border border-white/10">
              <p className="font-serif text-lg italic text-pragya-teal mb-2">"PragyaS AI transformed our customer support workflow in 2 weeks."</p>
              <p className="text-sm text-gray-400">— CEO, TechFlow Inc.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-serif mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pragya-gold transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pragya-gold transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pragya-gold transition-colors" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pragya-gold transition-colors">
                  <option className="bg-pragya-darker">AI Voice Agents</option>
                  <option className="bg-pragya-darker">AI Sales Automation</option>
                  <option className="bg-pragya-darker">Pitch Deck / Design</option>
                  <option className="bg-pragya-darker">General Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pragya-gold transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <Button type="submit" className="w-full">Send Request</Button>
              <p className="text-xs text-center text-gray-500 mt-4">By submitting, you agree to our Privacy Policy.</p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
