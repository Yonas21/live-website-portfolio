"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Endorsements = () => {
  const quotes = [
    {
      quote:
        'Yonas consistently translates business objectives into performant, reliable systems. Our deployment errors dropped dramatically after his CI/CD revamp.',
      author: 'Engineering Manager, Mereb Technologies',
    },
    {
      quote:
        'He delivered measurable wins fast — API response times down 40%, and infra bills slashed. Practical and principled.',
      author: 'CTO, Affiliate.com',
    },
  ];

  return (
    <section className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Teams Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500 dark:text-gray-400">— {q.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endorsements;
