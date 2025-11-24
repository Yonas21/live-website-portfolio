"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';
import { SiNextdotjs, SiTypescript, SiAmazon, SiDocker } from 'react-icons/si';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden py-20 md:py-32 hero-minimal">
      <div className="container mx-auto px-6 relative">
        <motion.div
          className="relative grid max-w-6xl mx-auto items-center gap-12 md:gap-16 lg:gap-20 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Text content */}
          <div className="order-2 md:order-1">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for remote opportunities worldwide
            </motion.div>

            <motion.h1
              className="mt-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white"
              variants={fadeInUp}
              aria-label="Yonas Alem, Senior Software Engineer"
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Yonas Alem</span>
            </motion.h1>

            <motion.p className="mt-6 text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium" variants={fadeInUp}>
              Senior Software Engineer • Full‑Stack Developer
            </motion.p>

            <motion.p className="mt-6 max-w-xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed" variants={fadeInUp}>
              I don't just write code—I architect solutions that <span className="font-semibold text-neutral-900 dark:text-white">save companies thousands</span> while <span className="font-semibold text-neutral-900 dark:text-white">delighting users</span>. Specialized in cloud architecture, microservices, and full-stack development with a proven track record of reducing costs by 73% and improving performance by 40%.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center gap-4" variants={fadeInUp}>
              <a
                href="mailto:yonalem21@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium"
                aria-label="Email Yonas"
              >
                Let's Connect
              </a>
              <a
                href="/Yonas_Alem_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border border-neutral-200 dark:border-neutral-700 shadow-soft hover:shadow-medium"
                aria-label="View resume PDF"
              >
                Download Résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group transition-colors"
                aria-label="Skip to Projects"
              >
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

            <motion.div className="mt-8 flex items-center gap-5 text-2xl" variants={fadeInUp}>
              <a
                href="https://github.com/yonas-alem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                <SiGithub />
              </a>
              <a
                href="https://linkedin.com/in/yonas-alem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                <SiLinkedin />
              </a>
              <span className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">#OpenToWork</span>
            </motion.div>

            {/* Quick stats */}
            <motion.div className="mt-10 flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-400" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>5+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                <span>40+ projects delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                <span>Remote-first</span>
              </div>
            </motion.div>
          </div>

          {/* Visual / avatar side */}
          <motion.div
            className="order-1 md:order-2 relative mx-auto h-64 w-64 md:h-80 md:w-80"
            variants={fadeInUp}
          >
            {/* Profile Photo */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-neutral-200 dark:border-neutral-700 shadow-card overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/profile-photo.png"
                alt="Yonas Alem - Senior Software Engineer"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Floating tech badges - simplified */}
            <motion.div
              className="absolute -top-2 -right-2 flex items-center gap-2 rounded-full bg-white dark:bg-neutral-800 px-3 py-2 text-sm font-medium shadow-medium border border-neutral-200 dark:border-neutral-700"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiNextdotjs className="text-neutral-800 dark:text-white" />
              <span className="text-neutral-700 dark:text-neutral-200">Next.js</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-2 flex items-center gap-2 rounded-full bg-white dark:bg-neutral-800 px-3 py-2 text-sm font-medium shadow-medium border border-neutral-200 dark:border-neutral-700"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <SiTypescript className="text-blue-600" />
              <span className="text-neutral-700 dark:text-neutral-200">TypeScript</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-4 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full bg-white dark:bg-neutral-800 px-3 py-2 text-sm font-medium shadow-medium border border-neutral-200 dark:border-neutral-700"
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiAmazon className="text-orange-500" />
              <span className="text-neutral-700 dark:text-neutral-200">AWS</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-4 hidden md:flex -translate-y-1/2 items-center gap-2 rounded-full bg-white dark:bg-neutral-800 px-3 py-2 text-sm font-medium shadow-medium border border-neutral-200 dark:border-neutral-700"
              animate={{ x: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SiDocker className="text-blue-500" />
              <span className="text-neutral-700 dark:text-neutral-200">Docker</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
