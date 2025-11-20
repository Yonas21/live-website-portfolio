"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiGithub, SiLinkedin, SiAmazon, SiDocker } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden py-28 md:py-36 hero-modern mesh-gradient noise">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-medium text-brand-700 dark:text-brand-300 shadow-glow-sm ring-1 ring-brand-500/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Available for remote opportunities worldwide
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              variants={fadeInUp}
              aria-label="Yonas Alem, Senior Software Engineer"
            >
              Hi, I'm <span className="gradient-text glow-text">Yonas Alem</span>
            </motion.h1>

            <motion.p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700/90 dark:text-gray-300/90 font-semibold" variants={fadeInUp}>
              Senior Software Engineer • Full‑Stack Developer
            </motion.p>

            <motion.p className="mt-5 max-w-xl text-base sm:text-lg text-gray-700/90 dark:text-gray-300/90 leading-relaxed" variants={fadeInUp}>
              I don't just write code—I architect solutions that <span className="font-semibold text-brand-600 dark:text-brand-400">save companies thousands</span> while <span className="font-semibold text-brand-600 dark:text-brand-400">delighting users</span>. Specialized in cloud architecture, microservices, and full-stack development with a proven track record of reducing costs by 73% and improving performance by 40%.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap items-center gap-4" variants={fadeInUp}>
              <a
                href="mailto:yonalem21@gmail.com"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg magnetic-button overflow-hidden"
                aria-label="Email Yonas"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="/Yonas_Alem_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass-strong hover:glass font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 border border-brand-200/50 dark:border-white/20 shadow-sm hover:shadow-glow-sm magnetic-button"
                aria-label="View resume PDF"
              >
                Download Résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200 font-medium group"
                aria-label="Skip to Projects"
              >
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
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

            {/* Quick stats */}
            <motion.div className="mt-8 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>5+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>40+ projects delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Remote-first</span>
              </div>
            </motion.div>
          </div>

          {/* Visual / avatar side */}
          <motion.div
            className="order-1 md:order-2 relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80"
            variants={fadeInUp}
          >
            {/* Animated Glow ring */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-500/40 via-purple-500/30 to-pink-500/20 blur-3xl animate-pulse" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/30 via-brand-500/20 to-transparent blur-2xl animate-glow" />

            {/* Profile Photo */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-white/30 dark:border-white/20 shadow-glow-lg ring-4 ring-brand-500/30 backdrop-blur-md overflow-hidden bg-gradient-to-br from-brand-500/10 to-purple-500/10 animate-float">
              <Image
                src="/profile-photo.png"
                alt="Yonas Alem - Senior Software Engineer"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Floating tech chips with modern styling */}
            <motion.div
              className="absolute -top-3 -right-3 flex items-center gap-2 rounded-full glass-strong px-3 py-2 text-sm font-medium shadow-glow-sm ring-1 ring-brand-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiNextdotjs className="text-gray-800 dark:text-white" />
              <span className="text-gray-700 dark:text-gray-200">Next.js</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full glass-strong px-3 py-2 text-sm font-medium shadow-glow-sm ring-1 ring-brand-500/20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <SiTypescript className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-200">TypeScript</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-6 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full glass-strong px-3 py-2 text-sm font-medium shadow-glow-sm ring-1 ring-brand-500/20"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiAmazon className="text-orange-500" />
              <span className="text-gray-700 dark:text-gray-200">AWS</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-6 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full glass-strong px-3 py-2 text-sm font-medium shadow-glow-sm ring-1 ring-brand-500/20"
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SiDocker className="text-blue-500" />
              <span className="text-gray-700 dark:text-gray-200">Docker</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
