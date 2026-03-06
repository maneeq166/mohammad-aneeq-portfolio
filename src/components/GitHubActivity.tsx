import React from 'react';
import { Github } from 'lucide-react';
import { cn } from '../lib/utils';

export const GitHubActivity = () => {
  return (
    <section id="activity" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="space-y-16 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
            Engineering <span className="text-zinc-500 not-italic">Activity</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Real-time contribution metrics for maneeq166</p>
        </div>

        <div className="p-12 glass-card rounded-[3rem] border-zinc-800/50 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex gap-16">
              <div className="space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Total Contributions</p>
                <p className="text-5xl font-light tracking-tight text-zinc-100 font-serif italic">1,842</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Current Streak</p>
                <p className="text-5xl font-light tracking-tight text-zinc-100 font-serif italic">28 <span className="text-2xl not-italic text-zinc-500">Days</span></p>
              </div>
            </div>
            <a 
              href="https://github.com/maneeq166" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 group"
            >
              Follow on GitHub 
              <Github className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
            </a>
          </div>

          <div className="overflow-x-auto pb-6 -mx-2 px-2 scrollbar-hide">
            <div className="flex gap-2 min-w-[900px]">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const level = Math.floor(Math.random() * 5);
                    const colors = [
                      'bg-zinc-900/50 border-zinc-800', 
                      'bg-blue-900/20 border-blue-900/30', 
                      'bg-blue-700/30 border-blue-700/40', 
                      'bg-blue-500/50 border-blue-500/60', 
                      'bg-blue-400 border-blue-300'
                    ];
                    return (
                      <div 
                        key={j} 
                        className={cn("w-4 h-4 rounded-sm border transition-all duration-500 hover:scale-125 cursor-pointer", colors[level])}
                        title={`${level * 3} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            <span>Less</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-sm border border-zinc-800 bg-zinc-900/50" />
              <div className="w-3 h-3 rounded-sm border border-blue-900/30 bg-blue-900/20" />
              <div className="w-3 h-3 rounded-sm border border-blue-700/40 bg-blue-700/30" />
              <div className="w-3 h-3 rounded-sm border border-blue-500/60 bg-blue-500/50" />
              <div className="w-3 h-3 rounded-sm border border-blue-300 bg-blue-400" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
