import React from 'react';
import { EDUCATION } from '../constants';

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden h-full">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="space-y-16 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-4xl md:text-5xl font-light text-zinc-100 tracking-tight">
            Academic <span className="text-zinc-500 not-italic">Foundation</span>
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Institutional background and formal training</p>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="p-8 glass-card rounded-[2rem] border-zinc-800/50 space-y-4 hover:bg-zinc-900/60 transition-all duration-500 group">
              <div className="flex justify-between items-start">
                <h3 className="font-serif italic text-xl font-light text-zinc-100 group-hover:text-blue-400 transition-colors">{edu.institution}</h3>
                <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest">{edu.period}</span>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-400 text-sm font-medium">{edu.degree}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
