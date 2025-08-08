"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../app/theme/ThemeProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur border-b border-gray-800/60">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-white hover:text-brand-300 transition-colors font-display">Yonas Alem</a>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a></li>
          <li><a href="#experience" className="text-sm text-gray-300 hover:text-white transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
          <li>
            <a href="/Yonas_Alem_Resume.pdf" className="text-sm font-medium text-black bg-brand-400 hover:bg-brand-300 px-4 py-2 rounded-md transition-colors" download>
              Download Resume
            </a>
          </li>
          <li>
            <button onClick={toggle} className="text-sm text-gray-300 hover:text-white transition-colors border border-gray-700/60 px-3 py-1.5 rounded-md">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </li>
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800/60 bg-black/60 backdrop-blur overflow-hidden"
          >
            <div className="container mx-auto px-6 py-3 flex flex-col gap-2">
              <a onClick={() => setOpen(false)} href="#about" className="py-2 text-gray-200">About</a>
              <a onClick={() => setOpen(false)} href="#experience" className="py-2 text-gray-200">Experience</a>
              <a onClick={() => setOpen(false)} href="#projects" className="py-2 text-gray-200">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-gray-200">Contact</a>
              <a onClick={() => setOpen(false)} href="/Yonas_Alem_Resume.pdf" download className="py-2 text-black bg-brand-400 hover:bg-brand-300 rounded-md text-center font-medium">Download Resume</a>
              <button onClick={() => { toggle(); setOpen(false); }} className="mt-1 py-2 text-gray-200 border border-gray-700/60 rounded-md">{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
