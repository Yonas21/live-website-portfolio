"use client";
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiZap, FiUsers } from 'react-icons/fi';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    { 
      value: '40%', 
      label: 'API latency reduction',
      icon: <FiZap className="text-yellow-500" size={24} />,
      description: 'Through caching and query optimization'
    },
    { 
      value: '$22K+', 
      label: 'monthly cloud savings',
      icon: <FiDollarSign className="text-green-500" size={24} />,
      description: 'Via architecture optimization'
    },
    { 
      value: '35%', 
      label: 'throughput increase',
      icon: <FiTrendingUp className="text-blue-500" size={24} />,
      description: 'After microservices migration'
    },
    { 
      value: '10K+', 
      label: 'daily transactions',
      icon: <FiUsers className="text-purple-500" size={24} />,
      description: 'Supported at scale'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Measurable impact across multiple projects and technologies
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              
              <motion.div 
                className="text-4xl font-bold text-brand-300 mb-2"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {item.value}
              </motion.div>
              
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {item.label}
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </div>
              
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-200 dark:group-hover:border-brand-800 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional context */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These metrics represent real-world impact across fintech, gaming, and government projects. 
            Each improvement directly contributed to business growth and user satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
