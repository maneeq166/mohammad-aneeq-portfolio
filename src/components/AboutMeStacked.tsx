import React from 'react';
import { motion } from 'motion/react';

export const AboutMeStacked = () => {

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
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  Software Engineering Intern at <span className="text-zinc-300 font-medium">Unthinkable Solutions</span>, 
                  pursuing a company-sponsored <span className="text-zinc-300 font-medium border-b border-zinc-800">BITS BTech</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* <div className="relative h-[400px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[280px]">
              {cardOrder.map((cardId, visualIndex) => {
                const card = cards.find(c => c.id === cardId)!;
                const reverseIndex = cardOrder.length - 1 - visualIndex;
                const xOffset = reverseIndex * 16;
                const yOffset = reverseIndex * -16;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    onClick={handleCardClick}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: xOffset,
                      y: yOffset,
                      zIndex: visualIndex + 10,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      layout: { duration: 0.4 }
                    }}
                    whileHover={{ 
                      y: yOffset - 8,
                      transition: { duration: 0.2 }
                    }}
                    className="absolute inset-0 rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl cursor-pointer group transition-shadow duration-300 hover:shadow-blue-500/20"
                  >
                    <div className="relative h-[60%] w-full border-b border-zinc-800">
                      <CardArt imageUrl={card.imageUrl} title={card.title} />
                    </div>

                    <div className="p-6 space-y-2">
                      <h4 className="text-base font-medium text-zinc-100 tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};
