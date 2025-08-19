"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const articles = [
		{
			title: "Honest Review of Gemini CLI",
			excerpt:
				"I had my first taste of AI agents and I was blown away by the potential. I'm not sure if this is the future of software development, but it's definitely something to keep an eye on.",
			category: "Performance",
			readTime: "8 min read",
			date: "2024-01-15",
			url: "https://medium.com/@yonalem21/my-honest-review-of-gemini-cli-an-ai-agent-for-the-terminal-two-months-ago-i-had-my-first-taste-o-4b644e644ded",
			featured: true,
			tags: ["API", "Performance", "Scalability", "Redis"],
		},
		{
			title: "Microservices Migration: From Monolith to gRPC in 6 Months",
			excerpt:
				"A comprehensive guide to migrating from a monolithic architecture to gRPC microservices, including lessons learned and best practices.",
			category: "Architecture",
			readTime: "12 min read",
			date: "2023-12-20",
			url: "https://dev.to/yonas-alem/microservices-migration",
			featured: false,
			tags: ["Microservices", "gRPC", "Architecture", "Migration"],
		},
		{
			title: "Cost Optimization in Cloud Infrastructure: Saving $22K Monthly",
			excerpt:
				"Practical strategies for reducing cloud costs without compromising performance, based on real-world experience with AWS and GCP.",
			category: "Cloud",
			readTime: "10 min read",
			date: "2023-11-10",
			url: "https://hashnode.com/@yonas-alem/cloud-cost-optimization",
			featured: false,
			tags: ["AWS", "Cost Optimization", "Cloud", "Infrastructure"],
		},
		{
			title: "Building Resilient Systems: SLOs, Error Budgets, and On-Call Best Practices",
			excerpt:
				"How to design and maintain systems that are both performant and reliable, with real examples from production environments.",
			category: "Reliability",
			readTime: "15 min read",
			date: "2023-10-25",
			url: "https://medium.com/@yonas-alem/resilient-systems",
			featured: false,
			tags: ["SLOs", "Reliability", "Monitoring", "Best Practices"],
		},
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Thought Leadership</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights on software architecture, performance optimization, and industry best practices
          </p>
        </div>
        
        {/* Featured Article */}
        {articles.filter(a => a.featured).map((article, index) => (
          <motion.div
            key={index}
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 rounded-xl border border-brand-200 dark:border-brand-800 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(article.date)}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {article.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, i) => (
                  <span key={i} className="bg-white dark:bg-gray-800 text-brand-700 dark:text-brand-300 text-xs font-medium px-3 py-1 rounded-md border border-brand-200 dark:border-brand-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Read Full Article
                <FiExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
        
        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.filter(a => !a.featured).map((article, index) => (
            <motion.article
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <FiCalendar size={12} />
                    {formatDate(article.date)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <FiClock size={12} />
                    {article.readTime}
                  </div>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-500 transition-colors"
                  >
                    <FiArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
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
            href="https://medium.com/@yonas-alem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            View All Articles
            <FiExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
