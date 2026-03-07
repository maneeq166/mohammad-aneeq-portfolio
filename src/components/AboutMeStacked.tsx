import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

import artTiles from '../assets/ba31e354731fffed2ccd32d88bc6565b.jpg';
import artPortrait from '../assets/1059b327fdfc271994ab15a0f70718b4.jpg';
import artEnergy from '../assets/87e63b0971f295736202e8a830ba83ca (1).jpg';

const CardArt = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-950">
      <img 
        src={imageUrl} 
        alt="Card Art" 
        className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
      />
      {/* Blue tint overlay to maintain consistency */}
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
    </div>
  );
};

export const AboutMeStacked = () => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  const cards = [
    {
      id: 0,
      title: "Full Stack Development",
      description: "Building scalable applications using modern technologies.",
      imageUrl: artTiles
    },
    {
      id: 1,
      title: "Client Projects",
      description: "Delivering production-ready work for clients with high satisfaction.",
      imageUrl: artPortrait
    },
    {
      id: 2,
      title: "Continuous Learning",
      description: "Currently diving deeper into backend systems and architecture.",
      imageUrl: artEnergy
    }
  ];

  const handleCardClick = (id: number) => {
    setCardOrder(prev => {
      const filtered = prev.filter(cardId => cardId !== id);
      return [...filtered, id];
    });
  };

  return (
    <section className="w-full py-32 border-b border-zinc-800/50 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
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
                  Currently focused on going deeper into <span className="text-zinc-300 font-medium">backend systems</span> and 
                  delivering <span className="text-zinc-300 font-medium border-b border-zinc-800">real client projects</span> with high quality.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[400px] flex items-center justify-center lg:justify-end">
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
                    onClick={() => handleCardClick(card.id)}
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
                      <CardArt imageUrl={card.imageUrl} />
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
          </div>

        </div>
      </div>
    </section>
  );
};
