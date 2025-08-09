"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiGithub, SiLinkedin } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="top" className="relative isolate text-gray-900 dark:text-white py-28 md:py-36 overflow-hidden hero-surface">

      <div className="container mx-auto px-6">
        <motion.div
          className="relative grid max-w-6xl mx-auto items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Text content */}
          <div className="order-2 md:order-1">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/60 px-3 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-brand-200"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance & full‑time
            </motion.div>

            <motion.h1
              className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              variants={fadeInUp}
              aria-label="Yonas Alem, Senior Software Engineer"
            >
              Hi, I’m <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500 bg-clip-text text-transparent">Yonas Alem</span>
            </motion.h1>

            <motion.p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700/90 dark:text-gray-300/90 font-semibold" variants={fadeInUp}>
              Senior Software Engineer • Full‑Stack Developer
            </motion.p>

            <motion.p className="mt-5 max-w-xl text-base sm:text-lg text-gray-700/90 dark:text-gray-300/90" variants={fadeInUp}>
              I ship performant, resilient software—faster APIs, rock‑solid reliability, and lower cloud spend.
            </motion.p>

            <motion.div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4" variants={fadeInUp}>
              <a
                href="mailto:yonalem21@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-5 sm:px-6 rounded-lg transition-colors shadow-lg shadow-brand-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label="Email Yonas"
              >
                Contact Me
              </a>
              <a
                href="/Yonas_Alem_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-semibold py-3 px-5 sm:px-6 rounded-lg transition-colors border border-gray-200 dark:border-white/15 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label="View resume PDF"
              >
                View Résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200 font-medium underline underline-offset-4"
                aria-label="Skip to Projects"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div className="mt-6 flex items-center gap-4 text-2xl" variants={fadeInUp}>
              <a
                href="https://github.com/yonas-alem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <SiGithub />
              </a>
              <a
                href="https://linkedin.com/in/yonas-alem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <SiLinkedin />
              </a>
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">#OpenToWork</span>
            </motion.div>
          </div>

          {/* Visual / avatar side */}
          <motion.div
            className="order-1 md:order-2 relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80"
            variants={fadeInUp}
          >
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/30 via-purple-500/20 to-transparent blur-2xl" />

            {/* Avatar placeholder with initials */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-white/70 shadow-2xl ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <span className="select-none text-6xl sm:text-7xl font-extrabold bg-gradient-to-br from-brand-500 to-purple-500 bg-clip-text text-transparent">YA</span>
            </div>

            {/* Floating tech chips */}
            <div className="absolute -top-3 -right-3 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium shadow ring-1 ring-black/5 backdrop-blur dark:bg-white/10">
              <SiNextdotjs className="text-gray-800 dark:text-white" />
              <span className="text-gray-700 dark:text-gray-200">Next.js</span>
            </div>
            <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium shadow ring-1 ring-black/5 backdrop-blur dark:bg-white/10">
              <SiTypescript className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-200">TypeScript</span>
            </div>
            <div className="absolute top-1/2 -left-6 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium shadow ring-1 ring-black/5 backdrop-blur dark:bg-white/10">
              <SiTailwindcss className="text-sky-500" />
              <span className="text-gray-700 dark:text-gray-200">Tailwind</span>
            </div>
            <div className="absolute top-1/2 -right-6 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium shadow ring-1 ring-black/5 backdrop-blur dark:bg-white/10">
              <SiFirebase className="text-amber-500" />
              <span className="text-gray-700 dark:text-gray-200">Firebase</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
