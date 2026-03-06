import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CurtainBackground } from './CurtainBackground';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Reactive background transforms
  const spotlightX = useTransform(mouseXSpring, [0, 1], ['30%', '70%']);
  const spotlightY = useTransform(mouseYSpring, [0, 1], ['30%', '70%']);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] px-6 py-24"
    >
      {/* Subtle Reactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <CurtainBackground />

        <motion.div
          style={{
            left: spotlightX,
            top: spotlightY,
            x: '-50%',
            y: '-50%'
          }}
          className="absolute w-[800px] h-[800px] bg-blue-500/5 blur-[160px] rounded-full"
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="group relative border border-zinc-800/50 rounded-2xl p-12 md:p-24 lg:p-32 overflow-hidden hover:border-zinc-700/80 transition-colors duration-700"
        >
          {/* Internal Frame Content */}
          <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-zinc-100 italic">
                Mohammad Aneeq <br />
                <span className="text-zinc-500 not-italic">Full-Stack Developer</span>
              </h1>
            </div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed font-light"
            >
              I build scalable web applications and backend systems using modern technologies.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
            >
              <motion.a 
                href="#projects"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-56 px-10 py-5 bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-xl font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 group overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]"
              >
                {/* Premium Gradient Sweep Layers - Darker Highlights */}
                <span className="absolute inset-0 gradient-sweep-slow bg-gradient-to-r from-transparent via-blue-900/30 to-transparent pointer-events-none" />
                <span className="absolute inset-0 gradient-sweep bg-gradient-to-r from-transparent via-blue-600/20 to-transparent pointer-events-none" />
                
                <span className="relative z-10 flex items-center gap-3">
                  Explore Work
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  borderColor: "#a1a1aa", // zinc-400
                  color: "#f4f4f5" // zinc-100
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-56 px-10 py-5 border border-zinc-800 rounded-xl font-bold text-[11px] uppercase tracking-[0.25em] text-zinc-400 transition-all duration-300 flex items-center justify-center relative overflow-hidden group shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]"
              >
                {/* Continuous Subtle Pulse */}
                <div className="absolute inset-0 animate-subtle-pulse border border-zinc-700 rounded-xl pointer-events-none" />
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/50 transition-colors duration-300" />
                <span className="relative z-10">Get in touch</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Subtle Frame Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-700/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-700/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-700/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-700/30 rounded-br-2xl" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-transparent" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
