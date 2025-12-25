import React from 'react';
import { Link } from 'react-router-dom';
import { DynamicImage } from '../components/DynamicImage';
import { Mic, BarChart, PenTool, Layout as LayoutIcon, MessageSquare, Briefcase, UserCheck, Share2 } from 'lucide-react';
import { Button } from '../components/Button';

const agentServices = [
  { icon: <Mic />, title: "AI Voice Agents", desc: "Human-like calling for support & booking." },
  { icon: <Briefcase />, title: "AI Sales Agents", desc: "Automate follow-ups and lead qualification." },
  { icon: <BarChart />, title: "AI Marketing Agents", desc: "Campaigns and copy on autopilot." },
  { icon: <MessageSquare />, title: "Business Bots", desc: "Smart chatbots for web & WhatsApp." },
];

const artistServices = [
  { icon: <LayoutIcon />, title: "Pitch Deck Design", desc: "Investor-ready decks created with AI speed." },
  { icon: <PenTool />, title: "Graphic Design", desc: "High-end visuals for social & ads." },
  { icon: <UserCheck />, title: "Resume & LinkedIn", desc: "Personal branding optimization." },
  { icon: <Share2 />, title: "Brand Identity", desc: "Logos and stories that resonate." },
];

export const Services: React.FC = () => {
  return (
    <div className="bg-pragya-darker min-h-screen">
      <div className="py-20 text-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-400">Two powerhouses. One goal: Your Growth.</p>
      </div>

      {/* AI Agents Section */}
      <section className="py-20 bg-pragya-midnight/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center mb-12">
             <div className="flex-1">
                <span className="text-pragya-teal font-bold tracking-widest uppercase text-sm mb-2 block">The Engine</span>
                <h2 className="font-serif text-4xl font-bold text-white mb-4">AI Agents</h2>
                <p className="text-gray-300 max-w-lg">
                  Deploy a digital workforce that never sleeps. From handling customer calls to closing sales, our intelligent agents integrate seamlessly into your workflow.
                </p>
             </div>
             <div className="flex-1 mt-8 md:mt-0 flex justify-end">
                <Link to="/contact">
                   <Button variant="secondary">Build Your Agent</Button>
                </Link>
             </div>
           </div>
           
           <div className="grid md:grid-cols-4 gap-6">
             {agentServices.map((s, i) => (
               <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                 <div className="w-10 h-10 rounded bg-pragya-teal/10 text-pragya-teal flex items-center justify-center mb-4 group-hover:bg-pragya-teal group-hover:text-pragya-darker transition-colors">
                   {s.icon}
                 </div>
                 <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                 <p className="text-sm text-gray-400">{s.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* AI Artist Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center mb-12">
             <div className="flex-1 order-2 md:order-1">
                <Link to="/contact">
                   <Button variant="primary">Start Creative Project</Button>
                </Link>
             </div>
             <div className="flex-1 order-1 md:order-2 text-right">
                <span className="text-pragya-gold font-bold tracking-widest uppercase text-sm mb-2 block">The Soul</span>
                <h2 className="font-serif text-4xl font-bold text-white mb-4">AI Artist</h2>
                <p className="text-gray-300 max-w-lg ml-auto">
                  Where creativity meets intelligence. We use advanced generative models guided by world-class design principles to create stunning brand assets.
                </p>
             </div>
           </div>
           
           <div className="grid md:grid-cols-4 gap-6">
             {artistServices.map((s, i) => (
               <div key={i} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                 <div className="w-10 h-10 rounded bg-pragya-gold/10 text-pragya-gold flex items-center justify-center mb-4 group-hover:bg-pragya-gold group-hover:text-pragya-darker transition-colors">
                   {s.icon}
                 </div>
                 <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                 <p className="text-sm text-gray-400">{s.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-16 h-80 rounded-2xl overflow-hidden relative">
              <DynamicImage 
                prompt="Collage of futuristic high-end business presentation slides, minimalist logos, and vibrant abstract art, deep blue and gold theme, photorealistic 8k"
                alt="Creative Showcase"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pragya-darker via-transparent to-transparent flex items-end p-8">
                 <p className="text-white font-serif italic text-lg">"Design is intelligence made visible."</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
