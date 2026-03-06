import React from 'react';
import { SKILLS } from '../constants';

export const SkillsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-10 pointer-events-none" />
      
      <div className="space-y-16 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-4xl md:text-5xl font-light text-zinc-100 tracking-tight">
            Technical <span className="text-zinc-500 not-italic">Arsenal</span>
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Core competencies and specialized tooling</p>
        </div>

        <div className="grid gap-12">
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800/50 pb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.languages.map(s => (
                <span key={s} className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800/50 pb-3">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.frameworks.map(s => (
                <span key={s} className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800/50 pb-3">Specialized</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.tools.map(s => (
                <span key={s} className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
