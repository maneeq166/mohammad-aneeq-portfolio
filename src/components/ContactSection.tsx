import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <footer id="contact" className="section-padding relative overflow-hidden border-t border-zinc-800/50">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-2xl">
            <h2 className="font-serif italic text-6xl md:text-8xl font-light text-zinc-100 tracking-tight leading-none">
              Let's build the <span className="text-zinc-500 not-italic">extraordinary</span> together.
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              Currently accepting new engineering challenges and technical collaborations.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <a 
              href="mailto:aneeqmohd1233@gmail.com" 
              className="group flex items-center justify-between p-8 glass-card rounded-[2rem] border-zinc-800/50 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-500"
            >
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-600">Direct Message</p>
                <p className="text-xl font-medium">Email</p>
              </div>
              <Mail className="w-6 h-6 group-hover:rotate-[-45deg] transition-transform" />
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/maneeq166" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between gap-4 p-6 glass-card rounded-3xl border-zinc-800/50 hover:bg-zinc-900/80 transition-all"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-100">GitHub</span>
                <Github className="w-4 h-4 text-zinc-700 group-hover:text-zinc-100 shrink-0" />
              </a>
              <a 
                href="https://linkedin.com/in/mohammad-aneeq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between gap-4 p-6 glass-card rounded-3xl border-zinc-800/50 hover:bg-zinc-900/80 transition-all"
              >
                <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-100">LinkedIn</span>
                <Linkedin className="w-4 h-4 text-zinc-700 group-hover:text-zinc-100 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
          <div className="flex gap-8">
            <p>© 2026 Mohammad Aneeq</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-8">
            <p>Built with Precision</p>
            <p>V. 2.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
