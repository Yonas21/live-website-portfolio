"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Real Gaming Poker Platform',
      description: 'Architected and developed an end-to-end real-time multiplayer poker system supporting multiple game variants. Optimized database schema and queries for transaction accuracy at scale, ensuring zero financial discrepancies. Reduced monthly server costs from $30,000 to $8,000 through strategic AWS architecture optimization and resource management.',
      technologies: ['React', 'Material-UI', 'gRPC', 'PHP', 'MySQL', 'Redis', 'AWS', 'Docker', 'DataDog'],
    },
    {
      title: 'Government Constituent Platform',
      description: 'Developed a scalable RESTful API backend processing 1000+ daily complaint submissions with automated approval workflows. Integrated Azure Cognitive Services for voicemail-to-text transcription and intelligent content classification. Implemented an automated citizen communication system with personalized greetings and response templates, improving engagement by 40%.',
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Azure AI', 'ClickUp Integration'],
    },
    {
      title: 'Upplai - AI Resume Platform',
      description: 'Integrated OpenAI GPT models to generate personalized resumes, cover letters, and ATS optimization recommendations. Developed a responsive Vue.js frontend with real-time resume scoring and live document preview functionality. Optimized mobile user experience, reducing page load times by 60% through asset optimization and lazy loading.',
      technologies: ['Vue.js', 'OpenAI API', 'Axios', 'Tailwind CSS', 'Responsive Design'],
    },
  ];

  return (
    <section id="projects" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-brand-300">{project.title}</h3>
                <p className="text-gray-700/90 dark:text-gray-300/90 mb-5 max-h-32 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-brand-50 text-brand-700 dark:bg-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-md border border-brand-200 dark:border-gray-700">{tech}</span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Impact: performance at scale, cost efficiency, reliability.</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
