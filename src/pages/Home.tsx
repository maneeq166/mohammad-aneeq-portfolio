import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutMeStacked } from '../components/AboutMeStacked';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { SkillsSection } from '../components/SkillsSection';
import { GitHubActivity } from '../components/GitHubActivity';
import { BlogSection } from '../components/BlogSection';
import { MediaSection } from '../components/MediaSection';
import { ContactSection } from '../components/ContactSection';
import { Marquee } from '../components/Marquee';

const SectionWrapper = ({ children, number, id }: { children: React.ReactNode, number: string, id?: string }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    className="relative"
  >
    <div className="absolute top-0 left-6 md:left-12 lg:left-24 flex items-center gap-4 -translate-y-1/2 z-20">
      <span className="text-[10px] font-mono font-bold text-blue-500 bg-[#050505] px-2">{number}</span>
      <div className="h-[1px] w-12 bg-zinc-800" />
    </div>
    {children}
  </motion.div>
);

export const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      <SectionWrapper number="01" id="about">
        <AboutMeStacked />
      </SectionWrapper>
      
      <SectionWrapper number="02" id="projects">
        <section className="section-padding relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl relative z-10 space-y-10">
            <div className="space-y-6">
              <h2 className="font-serif italic text-5xl md:text-7xl font-light text-zinc-100 tracking-tight">
                Selected <span className="text-zinc-500 not-italic">Works</span>
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                  I've engineered a diverse range of digital solutions, from <span className="text-zinc-100 font-medium">high-performance backend systems</span> to 
                  <span className="text-zinc-100 font-medium">immersive frontend experiences</span>.
                </p>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  Each project is a deep dive into specific technical challenges, focusing on scalability, 
                  performance, and refined user interactions.
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-100 group-hover:text-blue-400 transition-colors">
                  Explore all projects
                </span>
                <div className="w-12 h-[1px] bg-zinc-800 group-hover:bg-blue-400 transition-colors" />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </Link>
            </motion.div>
          </div>
        </section>
      </SectionWrapper>

      <Marquee text="Full Stack Engineering • Neural Interfaces • Digital Trajectories • High Performance Systems • Refined Aesthetics •" />

      <SectionWrapper number="03" id="experience">
        <ExperienceSection />
      </SectionWrapper>
      
      <SectionWrapper number="04" id="foundation">
        <div className="grid lg:grid-cols-2 gap-0 border-y border-zinc-800/50">
          <div className="border-r border-zinc-800/50">
            <EducationSection />
          </div>
          <div>
            <SkillsSection />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper number="05" id="activity">
        <GitHubActivity />
      </SectionWrapper>
      
      <SectionWrapper number="06" id="blog">
        <div className="bg-zinc-900/20">
          <BlogSection />
        </div>
      </SectionWrapper>

      <SectionWrapper number="07" id="media">
        <MediaSection />
      </SectionWrapper>

      <Marquee text="Available for new projects • Let's build the extraordinary • Engineering digital futures • Systems online •" speed={30} />

      <SectionWrapper number="08" id="contact">
        <ContactSection />
      </SectionWrapper>
    </div>
  );
};
