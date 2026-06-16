import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Projects', path: '/projects', hash: '#projects' },
  { name: 'Experience', path: '/experience', hash: '#experience' },
  { name: 'Contact', path: '/contact', hash: '#contact' },
] as const;

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string, hash?: string) => {
    if (isHome && hash) return location.hash === hash;
    return location.pathname === path;
  };

  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-[100] flex justify-center px-4 pt-5 sm:px-6 sm:pt-6">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`pointer-events-auto relative flex w-full max-w-md items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:max-w-lg sm:gap-6 sm:px-5 sm:py-3 md:max-w-xl ${
          scrolled
            ? 'border-zinc-800/90 bg-zinc-950/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-2xl'
            : 'border-zinc-800/40 bg-zinc-950/30 backdrop-blur-md'
        }`}
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-blue-500/25 to-transparent" />

        <Link
          to="/"
          className="group relative shrink-0 font-instrument-serif text-xl tracking-tight text-zinc-100 sm:text-2xl"
          aria-label="Home"
        >
          MA
          <span className="text-blue-500 transition-colors group-hover:text-blue-400">.</span>
        </Link>

        <div className="hidden h-4 w-px bg-zinc-800/80 sm:block" />

        <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const active = isActive(item.path, item.hash);
            return (
              <Link
                key={item.name}
                to={isHome && item.hash ? item.hash : item.path}
                className={`relative rounded-full px-2.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.18em] transition-all duration-300 sm:px-3.5 sm:py-2 sm:text-[10px] sm:tracking-[0.22em] ${
                  active
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-zinc-500 hover:bg-zinc-900/60 hover:text-zinc-100'
                }`}
              >
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full border border-blue-500/20 bg-blue-500/5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <motion.div
          className="absolute right-5 bottom-0 left-5 h-px origin-left bg-linear-to-r from-blue-500/80 via-blue-400/40 to-transparent sm:right-6 sm:left-6"
          style={{ scaleX }}
        />
      </motion.div>
    </nav>
  );
};
