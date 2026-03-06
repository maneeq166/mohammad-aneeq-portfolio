import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
              Technical <span className="text-zinc-500 not-italic">Insights</span>
            </h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">Dispatches from the engineering frontier</p>
          </div>
          <button className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors group">
            Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer space-y-6 p-10 glass-card rounded-[3rem] border-zinc-800/50 hover:bg-zinc-900/60 transition-all duration-500"
            >
              <div className="flex gap-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-serif italic text-2xl font-light text-zinc-100 group-hover:text-blue-400 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-3">
                {post.summary}
              </p>
              <div className="pt-6 flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
