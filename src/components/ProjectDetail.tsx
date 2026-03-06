import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Github, 
  Play, 
  Layers, 
  ExternalLink,
  Database,
  Server,
  Code,
  Globe,
  Zap,
  Shield,
  BarChart,
  MessageSquare,
  Bot,
  Sparkles,
  Loader2
} from 'lucide-react';
import { Project } from '../constants';
import { GoogleGenAI } from "@google/genai";

const getTechIcon = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes('react') || t.includes('next.js')) return <Code className="w-3.5 h-3.5" />;
  if (t.includes('node') || t.includes('express')) return <Server className="w-3.5 h-3.5" />;
  if (t.includes('mongo') || t.includes('sql') || t.includes('postgres')) return <Database className="w-3.5 h-3.5" />;
  if (t.includes('gemini') || t.includes('ai') || t.includes('bot')) return <Bot className="w-3.5 h-3.5" />;
  if (t.includes('socket') || t.includes('websocket')) return <Zap className="w-3.5 h-3.5" />;
  if (t.includes('cloudinary') || t.includes('vercel') || t.includes('render')) return <Globe className="w-3.5 h-3.5" />;
  if (t.includes('jwt') || t.includes('oauth') || t.includes('auth')) return <Shield className="w-3.5 h-3.5" />;
  if (t.includes('recharts') || t.includes('analytics')) return <BarChart className="w-3.5 h-3.5" />;
  if (t.includes('slack') || t.includes('discord')) return <MessageSquare className="w-3.5 h-3.5" />;
  return <Layers className="w-3.5 h-3.5" />;
};

export const ProjectDetail = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Summarize this project in one impactful sentence for a senior engineer. Focus on the technical value: ${project.title} - ${project.longDescription}. Tech: ${project.tags.join(', ')}`,
      });
      setAiSummary(response.text || "Failed to generate summary.");
    } catch (error) {
      console.error("AI Summary Error:", error);
      setAiSummary("Could not generate AI summary at this time.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-6 py-32">
        <button 
          onClick={onClose}
          className="mb-20 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-zinc-100 flex items-center gap-3 transition-colors group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Explorations
        </button>

        <div className="space-y-24">
          <div className="space-y-10">
            <h2 className="font-serif italic text-6xl md:text-9xl font-light text-zinc-100 tracking-tighter leading-none">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-900/50 text-zinc-500 text-[10px] font-mono uppercase tracking-widest rounded-full border border-zinc-800">
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="aspect-[21/9] rounded-[4rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40" />
             <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8 space-y-24">
              <section className="space-y-8">
                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-6">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600">The Vision</h3>
                  <button 
                    onClick={generateSummary}
                    disabled={isGenerating}
                    className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-400 transition-colors disabled:opacity-50 group"
                  >
                    {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3 group-hover:scale-125 transition-transform" />}
                    AI Synthesis
                  </button>
                </div>
                <p className="text-3xl text-zinc-400 leading-relaxed font-light font-serif italic">{project.longDescription}</p>
                
                <AnimatePresence>
                  {aiSummary && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-10 bg-blue-500/5 rounded-[3rem] border border-blue-500/20 text-blue-400 text-xl font-light leading-relaxed relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
                      "{aiSummary}"
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              <section className="space-y-10">
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800/50 pb-6">Core Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-6 p-8 glass-card rounded-[2.5rem] border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <span className="text-zinc-500 text-sm leading-relaxed font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-10">
                <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800/50 pb-6">Engineering Approach</h3>
                <div className="p-12 bg-zinc-900/40 border border-zinc-800/50 rounded-[3.5rem] flex flex-col md:flex-row gap-10 items-center">
                  <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800">
                    <Layers className="w-10 h-10 text-zinc-500" />
                  </div>
                  <p className="text-xl leading-relaxed font-light text-zinc-400">{project.architecture}</p>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 glass-card rounded-[3rem] border-zinc-800/50 space-y-10">
                  <h3 className="font-serif italic text-2xl font-light text-zinc-100">Resources</h3>
                  <div className="space-y-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-500 group"
                      >
                        <span className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest">
                          <Github className="w-5 h-5" /> Source
                        </span>
                        <ArrowRight className="w-4 h-4 rotate-[-45deg] opacity-30 group-hover:opacity-100 transition-all" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-500 group"
                      >
                        <span className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest">
                          <Play className="w-5 h-5" /> Live Demo
                        </span>
                        <ArrowRight className="w-4 h-4 rotate-[-45deg] opacity-30 group-hover:opacity-100 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
