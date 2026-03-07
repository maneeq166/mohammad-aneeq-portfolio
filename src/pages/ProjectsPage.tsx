import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ProjectDetail } from '../components/ProjectDetail';
import { PROJECTS, Project } from '../constants';
import { ExternalLink, Github, Layout, Server, Database, Bot, Globe, Zap, Code } from 'lucide-react';

const ProjectIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'binbot': return <Bot className="w-6 h-6 text-emerald-400" />;
    case 'jamia-connect': return <Globe className="w-6 h-6 text-blue-400" />;
    case 'handicraft-ecommerce': return <Layout className="w-6 h-6 text-orange-400" />;
    case 'url-shortener': return <Zap className="w-6 h-6 text-purple-400" />;
    case 'slack-meme-bot': return <Bot className="w-6 h-6 text-pink-400" />;
    case 'discord-meme-bot': return <Bot className="w-6 h-6 text-indigo-400" />;
    default: return <Code className="w-6 h-6 text-zinc-400" />;
  }
};

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* Header */}
        <div className="space-y-6 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed"
          >
            I've worked on tons of little projects over the years but these are the ones that I'm most proud of. 
            Many of them are open-source, so if you see something that piques your interest, 
            check out the code and contribute if you have ideas on how it can be improved.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all cursor-pointer flex items-center gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors shadow-inner">
                <ProjectIcon id={project.id} />
              </div>
              
              <div className="space-y-1 flex-1">
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-snug line-clamp-2 font-light group-hover:text-zinc-400 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="pt-20 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
            <span>Built with:</span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-zinc-300 transition-colors">React</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-zinc-300 transition-colors">Tailwind</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-zinc-300 transition-colors">Motion</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-zinc-300 transition-colors">Vite</span>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            Copyright © Mohammad Aneeq 2025 All rights Reserved
          </div>
        </div>

      </div>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};
