import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', path: '/projects', hash: '#projects' },
    { name: 'Experience', path: '/experience', hash: '#experience' },
    { name: 'GitHub', path: '/activity', hash: '#activity' },
    { name: 'Blog', path: '/blog', hash: '#blog' },
    { name: 'Media', path: '/media', hash: '#media' },
    { name: 'Contact', path: '/contact', hash: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-8 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto relative glass-card px-8 py-4 rounded-full flex items-center gap-12 border transition-all duration-500 ${
          scrolled ? 'border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl scale-95' : 'border-zinc-800/50 bg-transparent'
        }`}
      >
        <Link to="/" className="font-serif italic text-xl font-bold text-zinc-100 tracking-tighter group">
          MA<span className="text-blue-500 group-hover:text-white transition-colors">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={isHome ? item.hash : item.path}
              className="hover:text-zinc-100 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
        <Link 
          to={isHome ? "#contact" : "/contact"} 
          className="hidden lg:block px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all"
        >
          Contact
        </Link>

        {/* Progress Bar */}
        <motion.div 
          className="absolute -bottom-[1px] left-8 right-8 h-[1px] bg-blue-500 origin-left"
          style={{ scaleX }}
        />
      </motion.div>
    </nav>
  );
};
