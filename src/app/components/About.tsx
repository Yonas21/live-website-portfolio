"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'TypeScript', 'JavaScript', 'Python', 'Go', 'PHP', 'SQL',
    'React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'FastAPI', 'Django',
    'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'
  ];

  return (
    <section id="about" className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
            <motion.div className="md:col-span-2 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft hover:shadow-medium transition-shadow" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-semibold mb-5 text-primary-600 dark:text-primary-400">Summary</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Results‑driven Senior Software Engineer with 5+ years building enterprise systems for fintech, gaming and government. Specialized in full‑stack development, microservices and cloud infrastructure with a strong focus on performance and cost efficiency.
              </p>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 list-disc list-inside">
                <li>40% API performance improvement through caching and query tuning</li>
                <li>$22K+ monthly cloud savings via architecture optimization</li>
                <li>35% throughput increase by migrating to gRPC microservices</li>
                <li>Led and mentored 4+ engineers in agile environments</li>
              </ul>
            </motion.div>
            <motion.div className="md:col-span-3 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-soft hover:shadow-medium transition-shadow" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">Core Technical Skills</h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {skills.map((skill, index) => (
                  <motion.span key={index} className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors" whileHover={{ scale: 1.05 }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
