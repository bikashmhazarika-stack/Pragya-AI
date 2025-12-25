import React from 'react';
import { DynamicImage } from '../components/DynamicImage';

export const About: React.FC = () => {
  return (
    <div className="bg-pragya-darker">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-30">
          <DynamicImage 
            prompt="A serene, minimalist zen garden with futuristic digital elements, floating geometric shapes, soft lighting, indigo and ivory tones, high quality" 
            alt="Zen Tech"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Philosophy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Merging ancient wisdom ("Pragya") with the infinite potential of Artificial Intelligence.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-24 space-y-24">
        
        {/* Story */}
        <section>
          <h2 className="font-serif text-3xl text-pragya-gold mb-6">The Origin</h2>
          <div className="prose prose-lg prose-invert text-gray-300">
            <p className="mb-4">
              PragyaS AI was born from a realization: The world is racing towards automation, but often without clarity. 
              We saw a gap between raw technological capability and strategic, ethical implementation.
            </p>
            <p>
              Our founders, a blend of tech visionaries and creative strategists, envisioned a firm that didn't just sell "bots", 
              but delivered <strong>Wisdom ("Pragya")</strong>. We build systems that understand context, nuance, and long-term impact.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-pragya-teal mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To be the global bridge between human intent and machine execution. We envision a future where AI handles the repetitive, 
              allowing humans to focus on the creative, the strategic, and the empathetic.
            </p>
            <div className="pl-4 border-l-2 border-pragya-teal">
              <p className="italic text-gray-400">"Technology without wisdom is noise. Technology with wisdom is evolution."</p>
            </div>
          </div>
          <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
             <DynamicImage 
                prompt="Futuristic handshake between human hand and robotic hand made of light particles, cinematic, deep blue background, hope and trust theme"
                alt="Collaboration"
                className="w-full h-full"
             />
          </div>
        </section>

        {/* Values */}
        <section>
           <h2 className="font-serif text-3xl text-white mb-10 text-center">Core Values</h2>
           <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Clarity', desc: 'We simplify the complex. No jargon, just results.' },
                { title: 'Ethics', desc: 'We build AI that respects privacy and human agency.' },
                { title: 'Excellence', desc: 'Global standards, delivered with precision.' }
              ].map((val, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5">
                   <h3 className="text-xl font-serif text-pragya-gold mb-3">{val.title}</h3>
                   <p className="text-sm text-gray-400">{val.desc}</p>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};
