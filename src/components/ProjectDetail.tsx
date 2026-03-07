import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ExternalLink,
  Code2,
  ChevronLeft,
  Sparkles,
  Loader2
} from 'lucide-react';
import { Project } from '../constants';
import { GoogleGenAI } from "@google/genai";

export const ProjectDetail = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      className="fixed inset-0 z-[150] bg-[#050505] overflow-y-auto"
    >
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex items-center gap-4">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live URL
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        {/* Header Section */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          
          <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Overview</h2>
            <button 
              onClick={generateSummary}
              disabled={isGenerating}
              className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-400 transition-colors disabled:opacity-50 group"
            >
              {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3 group-hover:scale-125 transition-transform" />}
              AI Synthesis
            </button>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              {project.longDescription}
            </p>
            <AnimatePresence>
              {aiSummary && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-blue-500/5 rounded-xl border border-blue-500/20 text-blue-400 text-base font-light leading-relaxed italic"
                >
                  "{aiSummary}"
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Technologies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.tags.map(tag => (
              <li key={tag} className="flex items-center gap-3 text-zinc-400 group">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                <span className="text-sm font-light group-hover:text-zinc-200 transition-colors">{tag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Features Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Features</h2>
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-400">
                <div className="mt-2 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                <span className="text-base font-light leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Development Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Development and Challenges</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            {project.architecture}
          </p>
        </section>

        {/* Technical Snippet Section (Mocked for layout) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">package.json</span>
              <Code2 className="w-3 h-3 text-zinc-600" />
            </div>
            <pre className="p-6 text-sm font-mono text-zinc-400 overflow-x-auto">
              <code>{`{
  "name": "${project.title.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "tailwindcss": "^3.3.0"
  }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="space-y-6 pb-20">
          <h2 className="text-2xl font-bold text-white">Conclusion</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            Building {project.title} was a rewarding experience that enhanced my understanding of modern web development. 
            It allowed me to explore complex technical challenges and deliver a refined user experience.
          </p>
        </section>

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
    </motion.div>
  );
};
