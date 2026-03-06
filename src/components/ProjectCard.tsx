import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Server, 
  Code, 
  Cpu, 
  Globe, 
  Zap, 
  Shield, 
  BarChart, 
  MessageSquare,
  Bot,
  Layers
} from 'lucide-react';
import { Project } from '../constants';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: React.Key;
}

const getTechIcon = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes('react') || t.includes('next.js')) return <Code className="w-3 h-3" />;
  if (t.includes('node') || t.includes('express')) return <Server className="w-3 h-3" />;
  if (t.includes('mongo') || t.includes('sql') || t.includes('postgres')) return <Database className="w-3 h-3" />;
  if (t.includes('gemini') || t.includes('ai') || t.includes('bot')) return <Bot className="w-3 h-3" />;
  if (t.includes('socket') || t.includes('websocket')) return <Zap className="w-3 h-3" />;
  if (t.includes('cloudinary') || t.includes('vercel') || t.includes('render')) return <Globe className="w-3 h-3" />;
  if (t.includes('jwt') || t.includes('oauth') || t.includes('auth')) return <Shield className="w-3 h-3" />;
  if (t.includes('recharts') || t.includes('analytics')) return <BarChart className="w-3 h-3" />;
  if (t.includes('slack') || t.includes('discord')) return <MessageSquare className="w-3 h-3" />;
  return <Layers className="w-3 h-3" />;
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer glass-card rounded-[2.5rem] overflow-hidden card-hover border-zinc-800/50"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-60" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 right-6 z-20">
          <div className="p-3 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-zinc-100 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-500">
            <ArrowRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
          </div>
        </div>
      </div>
      <div className="p-10 space-y-6 relative z-20">
        <div className="space-y-3">
          <h3 className="font-serif italic text-3xl font-light text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 text-zinc-500 text-[10px] font-mono uppercase tracking-widest rounded-full border border-zinc-800">
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1.5 bg-zinc-900/50 text-zinc-600 text-[10px] font-mono uppercase tracking-widest rounded-full border border-zinc-800">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
