"use client";
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  const items = [
    { value: '40%', label: 'API latency reduction' },
    { value: '$22K+', label: 'monthly cloud savings' },
    { value: '35%', label: 'throughput increase' },
    { value: '10K+', label: 'daily transactions supported' },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = containerRef.current?.querySelectorAll('[data-metric]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((m, i) => (
            <motion.div
              key={i}
              data-metric
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center opacity-0 translate-y-2 transition-all duration-700"
              style={{ transitionDelay: `${i * 120}ms` }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-bold text-brand-300">{m.value}</div>
              <div className="text-sm text-gray-400 mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-in { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </section>
  );
};

export default Metrics;
