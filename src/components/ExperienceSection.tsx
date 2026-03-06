import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="space-y-20 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
            Professional <span className="text-zinc-500 not-italic">Trajectory</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Chronological record of engineering impact</p>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 border-l border-zinc-800/50 group"
            >
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3">
                  <h3 className="font-serif italic text-3xl font-light text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400 font-medium text-lg">{exp.company}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-zinc-500 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-full uppercase tracking-widest shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {exp.description.map((item, j) => (
                  <div key={j} className="flex gap-4 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
