import React from 'react';
import { motion } from 'motion/react';

export const Marquee = ({ text, speed = 20 }: { text: string, speed?: number }) => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-zinc-800/50 bg-zinc-900/10 py-4">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-700 mx-12">
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 flex whitespace-nowrap"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-700 mx-12">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
