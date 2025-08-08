"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';

const Hero = () => {
  return (
    <section id="top" className="relative isolate text-white py-40 md:py-48 overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl filter animate-blob" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl filter animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute -bottom-40 -right-16 h-[24rem] w-[24rem] rounded-full bg-blue-300/10 blur-3xl filter animate-blob animation-delay-4000" />
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
          <motion.h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight" variants={fadeInUp}>
            Yonas Alem
          </motion.h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-brand-300 mb-8 font-semibold" variants={fadeInUp}>
            Senior Software Engineer · Full‑Stack Developer
          </motion.p>
          <motion.p className="text-base sm:text-lg md:text-xl text-gray-300/90 mb-10 md:mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            I architect high‑performance systems that scale and save costs —
            40% faster APIs, $22K+ monthly cloud savings, and resilient platforms.
          </motion.p>
          <motion.div className="flex justify-center gap-3 sm:gap-4" variants={fadeInUp}>
            <a href="mailto:yonalem21@gmail.com" className="bg-brand-500 hover:bg-brand-400 text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-7 rounded-lg transition-colors shadow-glow">
              Contact Me
            </a>
            <a href="#projects" className="bg-gray-800/80 hover:bg-gray-700 text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-7 rounded-lg transition-colors border border-gray-700">
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
