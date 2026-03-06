import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { MEDIA } from '../constants';

export const MediaSection = () => {
  return (
    <section id="media" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="space-y-20 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
            Cultural <span className="text-zinc-500 not-italic">Artifacts</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">A collection of stories and sounds that inspire my creative process</p>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600">Favorite Cinema</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MEDIA.filter(m => m.type === 'movie').map((movie, i) => (
                <a 
                  key={i} 
                  href={movie.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 glass-card rounded-3xl border-zinc-800/50 hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all group"
                >
                  <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-100 transition-colors truncate pr-4">{movie.title}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-blue-500 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600">Sonic Landscape</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MEDIA.filter(m => m.type === 'music').map((song, i) => (
                <a 
                  key={i} 
                  href={song.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 glass-card rounded-3xl border-zinc-800/50 hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all group"
                >
                  <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-100 transition-colors truncate pr-4">{song.title}</span>
                  <Play className="w-4 h-4 text-zinc-700 group-hover:text-blue-500 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
