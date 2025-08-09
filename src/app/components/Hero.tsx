"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';

const Hero = () => {
  return (
    <section id="top" className="relative isolate text-gray-900 dark:text-white py-40 md:py-48 overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl filter animate-blob motion-reduce:animate-none" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl filter animate-blob animation-delay-2000 motion-reduce:animate-none" />
      <div className="pointer-events-none absolute -bottom-40 -right-16 h-[24rem] w-[24rem] rounded-full bg-blue-300/10 blur-3xl filter animate-blob animation-delay-4000 motion-reduce:animate-none" />
      <div className="container mx-auto px-6">
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <div className="absolute inset-0 -z-10 blur-3xl opacity-40" style={{
            background:
              'radial-gradient(600px 200px at 50% 0%, rgba(59,130,246,.35), transparent), radial-gradient(600px 300px at 50% 100%, rgba(147,51,234,.25), transparent)'
          }} />
          <div className="mx-auto inline-block max-w-3xl rounded-2xl border border-gray-200/70 bg-white/70 px-6 py-8 shadow-lg ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/40 dark:ring-white/10">
            <motion.h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md" variants={fadeInUp}>
              <span className="bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">Yonas Alem</span>
            </motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-brand-500/90 mb-6 font-semibold" variants={fadeInUp}>
              Senior Software Engineer · Full‑Stack Developer
            </motion.p>
            <motion.p className="text-base sm:text-lg md:text-xl text-gray-700/90 dark:text-gray-300/90 mb-8 md:mb-10" variants={fadeInUp}>
              I architect high‑performance systems that scale and save costs — 40% faster APIs, $22K+ monthly cloud savings, and resilient platforms.
            </motion.p>
            <motion.div className="flex justify-center gap-3 sm:gap-4" variants={fadeInUp}>
              <a
                href="mailto:yonalem21@gmail.com"
                className="bg-brand-500 hover:bg-brand-400 text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-7 rounded-lg transition-colors shadow-lg shadow-brand-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Contact Me
              </a>
              <a
                href="https://calendly.com/yonalem21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-7 rounded-lg transition-colors border border-brand-200 dark:border-gray-700 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Book a Call
              </a>
            </motion.div>
            <motion.div className="mt-4" variants={fadeInUp}>
              <a href="#projects" className="text-sm font-medium text-brand-600 hover:text-brand-700 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded">
                View Projects
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
