"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../app/theme/ThemeProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur border-b bg-white/80 border-gray-200/70 shadow-sm dark:bg-gray-950/90 dark:border-gray-900/80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-brand-300 transition-colors font-display">Yonas Alem</a>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">About</a></li>
          <li><a href="#experience" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a></li>
          <li><a href="#case-studies" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#blog" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Blog</a></li>
          <li><a href="#how-i-work" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">How I Work</a></li>
          <li><a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a></li>
          <li>
            <a href="/Yonas_Alem_Resume.pdf" className="text-sm font-medium text-black bg-brand-400 hover:bg-brand-300 px-4 py-2 rounded-md transition-colors" download>
              Download Resume
            </a>
          </li>
          <li>
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex items-center justify-center rounded-md p-2 border border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-black/5 dark:border-gray-700/60 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </li>
        </ul>
        {/* Mobile menu button */}
        {/* Mobile menu button removed; using BottomNav on mobile */}
      </div>
      {/* Mobile panel removed; using persistent BottomNav */}
    </nav>
  );
};

export default Navbar;
