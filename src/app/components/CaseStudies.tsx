"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiTrendingUp, FiDollarSign } from 'react-icons/fi';

export default function CaseStudies() {
  const studies = [
    {
      title: 'Real Gaming Poker Platform – Cost and Scale Optimization',
      problem: 'High infrastructure costs ($30K/month) and latency issues under load were affecting margins and user experience. The monolithic architecture couldn\'t handle the scale needed for real-time gaming.',
      solution: 'Re-architected to microservices using gRPC, implemented Redis caching layer, optimized database schema with proper indexing, and redesigned AWS infrastructure with auto-scaling and cost-effective storage strategies.',
      results: [
        '40% reduction in API latency through caching and query optimization',
        '$22K+ monthly savings via S3 cold storage and resource optimization',
        'Zero financial discrepancies at scale with improved transaction handling',
        '35% throughput increase after microservices migration'
      ],
      technologies: ['gRPC', 'Redis', 'AWS', 'Docker', 'MySQL', 'React'],
      metrics: {
        latency: '40% ↓',
        cost: '$22K/mo ↓',
        throughput: '35% ↑',
        uptime: '99.9%'
      },
      diagram: 'Architecture: Client → Load Balancer → API Gateway → Microservices (Game, User, Payment) → Redis Cache → MySQL Cluster'
    },
    {
      title: 'Government Constituent Platform – Scalability and Automation',
      problem: 'Manual processing of 1000+ daily citizen complaints was inefficient and error-prone. The system lacked automated workflows and intelligent content classification.',
      solution: 'Built scalable RESTful API with FastAPI, integrated Azure Cognitive Services for voicemail-to-text transcription, implemented automated approval workflows, and created personalized communication system.',
      results: [
        'Scaled to handle 1000+ daily submissions with automated processing',
        '40% improvement in citizen engagement through personalized outreach',
        '95% accuracy in content classification using AI services',
        'Automated reporting saved 20+ hours per month'
      ],
      technologies: ['Python', 'FastAPI', 'Azure AI', 'MySQL', 'Vue.js'],
      metrics: {
        submissions: '1K+/day',
        engagement: '40% ↑',
        accuracy: '95%',
        timeSaved: '20h/mo'
      },
      diagram: 'Flow: Citizen Input → AI Classification → Automated Workflow → Personalized Response → Analytics Dashboard'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep dives into complex technical challenges and their solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {studies.map((study, i) => (
            <motion.div 
              key={i} 
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-brand-500">{study.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 text-xs font-medium px-3 py-1 rounded-md border border-brand-200 dark:border-brand-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Problem & Solution */}
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiTarget className="text-red-500" size={20} />
                      <h4 className="font-semibold text-red-700 dark:text-red-300">Problem</h4>
                    </div>
                    <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiZap className="text-blue-500" size={20} />
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">Solution</h4>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                
                {/* Results & Metrics */}
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiTrendingUp className="text-green-500" size={20} />
                      <h4 className="font-semibold text-green-700 dark:text-green-300">Results</h4>
                    </div>
                    <ul className="text-green-600 dark:text-green-400 text-sm space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiDollarSign className="text-purple-500" size={20} />
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">Key Metrics</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{value}</div>
                          <div className="text-xs text-purple-500 dark:text-purple-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Architecture Diagram */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Technical Architecture</h4>
                <div className="bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{study.diagram}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more technical details or discuss a similar challenge?
          </p>
          <a
            href="mailto:yonalem21@gmail.com?subject=Technical Case Study Discussion"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            Let's Discuss
          </a>
        </motion.div>
      </div>
    </section>
  );
}
