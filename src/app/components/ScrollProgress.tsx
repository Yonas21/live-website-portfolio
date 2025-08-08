"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] origin-left h-1 bg-gradient-to-r from-brand-500 to-purple-500"
    />
  );
};

export default ScrollProgress;
