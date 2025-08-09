"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
  const logos = [
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ];

  return (
    <section aria-label="Trusted stack" className="bg-white dark:bg-gray-950 py-12 overflow-hidden scroll-mt-24" id="logos">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.div
            className="flex gap-10 items-center opacity-80"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
          >
            {[...logos, ...logos].map((l, i) => (
              <div key={`${l.name}-${i}`} className="flex justify-center min-w-[140px]">
                <img src={l.src} alt={l.name} className="h-8 w-auto grayscale dark:invert-0 hover:grayscale-0 transition" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
