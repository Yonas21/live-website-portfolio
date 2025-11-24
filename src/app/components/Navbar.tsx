"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../app/theme/ThemeProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur border-b bg-white/90 border-neutral-200 shadow-minimal dark:bg-neutral-900/90 dark:border-neutral-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white hover:text-primary-600 transition-colors font-display">Yonas Alem</a>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">About</a></li>
          <li><a href="#experience" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Projects</a></li>
          <li><a href="#case-studies" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#blog" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Blog</a></li>
          <li><a href="#how-i-work" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">How I Work</a></li>
          <li><a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">Contact</a></li>
          <li>
            <a href="/Yonas_Alem_Resume.pdf" className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors shadow-soft" download>
              Download Resume
            </a>
          </li>
          <li>
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex items-center justify-center rounded-lg p-2 border border-neutral-300 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
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
