import React from 'react';
import { Link } from 'react-router-dom';
import { DynamicImage } from '../components/DynamicImage';
import { Button } from '../components/Button';
import { ArrowRight, BrainCircuit, Cpu, Paintbrush, ShieldCheck, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
           <DynamicImage 
             prompt="Abstract cinematic visualization of artificial intelligence inspired by ancient wisdom, neural networks flowing like rivers, deep indigo and gold color palette, ultra-high resolution, modern, premium, minimal, futuristic"
             alt="Wisdom AI Hero"
             className="w-full h-full"
           />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-pragya-gold text-sm tracking-widest uppercase font-medium">
            The Future of Intelligence
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pragya-ivory via-white to-pragya-ivory/70 drop-shadow-2xl">
            Wisdom-Driven AI.<br />
            Built for Real-World Impact.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We design intelligent AI systems, agents, and creative solutions that help businesses think, sell, and scale better. Combining ancient clarity with futuristic tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary">Book a Strategy Call</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">Explore Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Verticals */}
      <section className="py-24 bg-pragya-darker relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Agents */}
            <div className="glass-panel p-10 rounded-2xl hover:border-pragya-gold/30 transition-all duration-300 group">
              <Cpu className="w-12 h-12 text-pragya-teal mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-pragya-teal transition-colors">AI Agents</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Automate operations with intelligent voice, sales, and marketing agents that work 24/7 with human-like empathy.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-teal" /> Voice & Support Bots</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-teal" /> Sales & Lead Gen Agents</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-teal" /> Workflow Automation</li>
              </ul>
              <Link to="/services">
                <span className="text-pragya-teal font-medium flex items-center group-hover:underline">Explore Agents <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Link>
            </div>

            {/* AI Artist */}
            <div className="glass-panel p-10 rounded-2xl hover:border-pragya-gold/30 transition-all duration-300 group">
              <Paintbrush className="w-12 h-12 text-pragya-gold mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-pragya-gold transition-colors">AI Artist</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Elevate your brand with creative intelligence. From pitch decks to brand identity, we blend AI speed with human artistry.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-gold" /> Pitch Deck Design</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-gold" /> Brand Identity & Logos</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-pragya-gold" /> Marketing Collaterals</li>
              </ul>
              <Link to="/services">
                <span className="text-pragya-gold font-medium flex items-center group-hover:underline">Explore Creative <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why PragyaS */}
      <section className="py-24 bg-gradient-to-b from-pragya-darker to-pragya-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why PragyaS AI?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Where ancient wisdom meets cutting-edge execution.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                 <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-pragya-gold" />
                 </div>
                 <h4 className="font-serif text-xl font-bold mb-3">Ethical & Grounded</h4>
                 <p className="text-gray-400 text-sm">We believe in responsible AI. Systems that enhance human potential, not replace it.</p>
              </div>
              <div className="text-center p-6">
                 <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-pragya-teal" />
                 </div>
                 <h4 className="font-serif text-xl font-bold mb-3">Speed & Scale</h4>
                 <p className="text-gray-400 text-sm">Deploy agents in days, not months. Scale your operations instantly with AI workforce.</p>
              </div>
              <div className="text-center p-6">
                 <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <BrainCircuit className="w-8 h-8 text-indigo-400" />
                 </div>
                 <h4 className="font-serif text-xl font-bold mb-3">Strategic Wisdom</h4>
                 <p className="text-gray-400 text-sm">Technology is the tool, strategy is the driver. We bring CXO-level thinking to AI.</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DynamicImage 
            prompt="Abstract neural network nodes connecting in a golden constellation against deep blue void, cinematic lighting, 8k resolution" 
            alt="Neural Network"
            className="w-full h-full opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-10">Join the forward-thinking founders and enterprises leveraging Wisdom-Driven AI.</p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-4">Book Your Strategy Call</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};