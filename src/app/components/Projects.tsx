"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
		{
			title: "Real Gaming Poker Platform",
			description:
				"Architected and developed an end-to-end real-time multiplayer poker system supporting multiple game variants. Optimized database schema and queries for transaction accuracy at scale, ensuring zero financial discrepancies. Reduced monthly server costs from $30,000 to $8,000 through strategic AWS architecture optimization and resource management.",
			technologies: [
				"React",
				"Material-UI",
				"gRPC",
				"PHP",
				"MySQL",
				"Redis",
				"AWS",
				"Docker",
				"DataDog",
			],
			impact: "Cut infra spend 73% ($30k→$8k/mo); ensured zero financial discrepancies; real-time play at scale.",
			demo: "https://play.google.com/store/apps/details?id=com.realpoker.nv.app",
			github: "https://github.com/yonas-alem/poker-platform",
			featured: true,
			metrics: {
				users: "10K+",
				transactions: "1M+",
				savings: "$22K/mo",
			},
		},
		{
			title: "Government Constituent Platform",
			description:
				"Developed a scalable RESTful API backend processing 1000+ daily complaint submissions with automated approval workflows. Integrated Azure Cognitive Services for voicemail-to-text transcription and intelligent content classification. Implemented an automated citizen communication system with personalized greetings and response templates, improving engagement by 40%.",
			technologies: [
				"Python",
				"FastAPI",
				"SQLAlchemy",
				"MySQL",
				"Azure AI",
				"ClickUp Integration",
			],
			impact: "Scaled to 1k+ daily submissions; +40% citizen engagement with automated, personalized outreach.",
			demo: "https://autobridgesystems.com",
			github: "https://github.com/yonas-alem/constituent-platform",
			featured: true,
			metrics: {
				submissions: "1K+",
				engagement: "+40%",
				accuracy: "95%",
			},
		},
		{
			title: "Upplai - AI Resume Platform",
			description:
				"Integrated OpenAI GPT models to generate personalized resumes, cover letters, and ATS optimization recommendations. Developed a responsive Vue.js frontend with real-time resume scoring and live document preview functionality. Optimized mobile user experience, reducing page load times by 60% through asset optimization and lazy loading.",
			technologies: [
				"Vue.js",
				"OpenAI API",
				"Axios",
				"Tailwind CSS",
				"Responsive Design",
			],
			impact: "60% faster page loads; higher conversion via ATS scoring and live preview UX.",
			demo: "https://uppl.ai",
			github: "https://github.com/yonas-alem/upplai",
			featured: false,
			metrics: {
				loadTime: "-60%",
				conversion: "+25%",
				users: "5K+",
			},
		},
		{
			title: "E-Commerce Analytics Dashboard",
			description:
				"Built a comprehensive analytics platform for e-commerce businesses with real-time data visualization, inventory management, and predictive analytics. Implemented automated reporting and alerting systems that saved 20+ hours per month for business operations.",
			technologies: [
				"React",
				"Node.js",
				"PostgreSQL",
				"Chart.js",
				"Redis",
				"AWS Lambda",
			],
			impact: "Automated reporting saved 20+ hours/month; improved decision-making with real-time insights.",
			demo: "https://shopsphere.com",
			github: "https://github.com/Yonas21/ShopSphere",
			featured: false,
			metrics: {
				timeSaved: "20h/mo",
				accuracy: "+95%",
				insights: "Real-time",
			},
		},
  ];

  return (
    <section id="projects" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, cloud architecture, and business impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-brand-300">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-brand-500 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-brand-500 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-brand-500">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-brand-50 text-brand-700 dark:bg-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1.5 rounded-md border border-brand-200 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-brand-300">{project.title}</h3>
                  <div className="flex gap-1">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-brand-500 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-brand-500 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="bg-brand-50 text-brand-700 dark:bg-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded border border-brand-200 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500">+{project.technologies.length - 4} more</span>
                  )}
                </div>
                
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Impact:</strong> {project.impact}
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
          <a
            href="https://github.com/yonas-alem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            View More on GitHub
            <FiArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
