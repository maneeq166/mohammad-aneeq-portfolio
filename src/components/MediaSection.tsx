import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Play, ArrowRight } from 'lucide-react';
import { MEDIA } from '../constants';

const MOVIES = MEDIA.filter(m => m.type === 'movie');
const MUSIC = MEDIA.filter(m => m.type === 'music');

interface MediaSectionProps {
  showAll?: boolean;
}

export const MediaSection = memo(({ showAll = false }: MediaSectionProps) => {
  const movies = showAll ? MOVIES : MOVIES.slice(0, 6);
  const music = showAll ? MUSIC : MUSIC.slice(0, 3);

  return (
    <section id="media" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="space-y-20 relative z-10">
        <div className="space-y-4">
          <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
            Cultural <span className="text-zinc-500 not-italic">Artifacts</span>
          </h2>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600">Favorite Cinema</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {movies.map((movie, i) => (
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
              {music.map((song, i) => (
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

          {!showAll && <div className="flex justify-center">
            <Link
              to="/media"
              className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:text-zinc-100 hover:bg-zinc-900/60 group"
            >
              <span className="font-mono uppercase tracking-[0.3em] text-[10px]">View all media</span>
              <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </Link>
          </div>}
        </div>
      </div>
    </section>
  );
});
