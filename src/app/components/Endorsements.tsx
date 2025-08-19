"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';

const Endorsements = () => {
  const quotes = [
    {
      quote:
        'Yonas consistently translates business objectives into performant, reliable systems. Our deployment errors dropped dramatically after his CI/CD revamp, and the 40% API performance improvement he delivered directly impacted our user retention.',
      author: 'Engineering Manager',
      company: 'Mereb Technologies',
      role: 'Fintech Platform',
      rating: 5,
      avatar: 'YA'
    },
    {
      quote:
        'He delivered measurable wins fast — API response times down 40%, and infra bills slashed by $22K monthly. His pragmatic approach to engineering and cost awareness made him an invaluable team member.',
      author: 'CTO',
      company: 'Affiliate.com',
      role: 'E-commerce Analytics',
      rating: 5,
      avatar: 'CT'
    },
    {
      quote:
        'Yonas led our microservices migration with exceptional technical leadership. His ability to balance technical excellence with business impact is rare. The 35% throughput increase he achieved was game-changing.',
      author: 'Senior Developer',
      company: 'Gaming Platform',
      role: 'Real-time Gaming',
      rating: 5,
      avatar: 'SD'
    },
    {
      quote:
        'Working with Yonas was a game-changer for our government platform. His expertise in scalable architecture and automated workflows improved our citizen engagement by 40%. Highly recommend for any complex technical challenge.',
      author: 'Product Manager',
      company: 'Government Platform',
      role: 'Citizen Services',
      rating: 5,
      avatar: 'PM'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Teams Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from colleagues and stakeholders across different industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-brand-200 dark:text-brand-800 opacity-20 group-hover:opacity-40 transition-opacity">
                <FiMessageSquare size={32} />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(q.rating)].map((_, index) => (
                  <FiStar key={index} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 text-lg">
                "{q.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm">
                    {q.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {q.author}
                  </div>
                  <div className="text-sm text-brand-600 dark:text-brand-400">
                    {q.company}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {q.role}
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-200 dark:group-hover:border-brand-800 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional context */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Available for references upon request</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Endorsements;
