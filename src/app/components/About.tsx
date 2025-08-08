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
    <section id="about" className="bg-gray-950 text-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
            <motion.div className="md:col-span-2 bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-semibold mb-5 text-brand-300">Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Results‑driven Senior Software Engineer with 5+ years building enterprise systems for fintech, gaming and government. Specialized in full‑stack development, microservices and cloud infrastructure with a strong focus on performance and cost efficiency.
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>40% API performance improvement through caching and query tuning</li>
                <li>$22K+ monthly cloud savings via architecture optimization</li>
                <li>35% throughput increase by migrating to gRPC microservices</li>
                <li>Led and mentored 4+ engineers in agile environments</li>
              </ul>
            </motion.div>
            <motion.div className="md:col-span-3 bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <h3 className="text-2xl font-semibold mb-6 text-brand-300">Core Technical Skills</h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {skills.map((skill, index) => (
                  <motion.span key={index} className="bg-gray-800 text-gray-200 text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-md border border-gray-700 hover:border-brand-400 transition-colors" whileHover={{ scale: 1.05 }}>
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
