import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const highlights = [
    "Architecting scalable, end-to-end systems with technical precision",
    "Transforming complex business needs into high-performance digital products",
    "Deepening expertise in distributed systems and cloud-native architectures",
    "Available for strategic freelance partnerships and client collaborations"
  ];

  return (
    <section className="relative w-full py-20 border-b border-zinc-800/50 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Side: Main Text */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 font-bold">
                About Me
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-light leading-tight italic">
                Mohammad Aneeq is a full-stack engineer dedicated to crafting <span className="text-zinc-500 not-italic">high-performance systems</span> and impactful digital experiences.
              </h3>
            </div>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-2xl">
              I specialize in building robust, high-performance web systems that solve real-world problems. By bridging the gap between complex backend engineering and refined user experiences, I deliver production-ready solutions that scale with your business.
            </p>
          </div>

          {/* Right Side: Highlights */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-800 pb-4">
                Core Focus & Highlights
              </h4>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-400 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="leading-relaxed group-hover:text-zinc-200 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Decorative Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
