import { memo } from 'react';
import { motion } from 'motion/react';

export const AboutMeStacked = memo(() => {
  return (
    <section className="w-full py-32 border-b border-zinc-800/50 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 font-bold">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-zinc-100 font-light leading-snug">
                  Hi, I'm <span className="font-semibold text-white">Mohammad Aneeq</span>, 
                  a <span className="italic font-serif text-blue-400">full-stack developer</span> building 
                  scalable web applications.
                </p>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Software Engineering Intern at <span className="text-zinc-300 font-medium">Unthinkable Solutions</span>, 
                  pursuing a company-sponsored <span className="text-zinc-300 font-medium border-b border-zinc-800">BITS BTech</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
