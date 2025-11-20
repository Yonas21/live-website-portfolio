"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

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
      image: "/projects/poker-platform.png",
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
      image: "/projects/government-platform.png",
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
      image: "/projects/ai-resume.png",
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
      image: "/projects/ecommerce-dashboard.png",
      metrics: {
        timeSaved: "20h/mo",
        accuracy: "+95%",
        insights: "Real-time",
      },
    },
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A selection of projects showcasing my expertise in full-stack development, cloud architecture, and business impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              className="group relative glass-strong rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-500 border border-white/20 dark:border-white/10 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-strong rounded-full text-white hover:text-brand-300 transition-colors shadow-glow-sm"
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
                      className="p-3 glass-strong rounded-full text-white hover:text-brand-300 transition-colors shadow-glow-sm"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 rounded-xl glass bg-gradient-to-br from-brand-500/10 to-purple-500/10">
                      <div className="text-2xl font-bold gradient-text">{value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize mt-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="glass px-3 py-1.5 rounded-lg text-xs font-medium text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-500/30 hover:border-brand-400 dark:hover:border-brand-400 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-gray-700 dark:text-gray-300 glass-dark p-4 rounded-xl border border-brand-200/30 dark:border-brand-500/20">
                  <strong className="text-brand-600 dark:text-brand-400">Impact:</strong> {project.impact}
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

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
