import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10">
            Open to remote opportunities globally. Fastest way to reach me is email.
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <a href="mailto:yonalem21@gmail.com" className="flex items-center gap-2 sm:gap-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-7 rounded-lg transition-colors shadow-glow">
              <FiMail size={22} />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/yonasalem21" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
              <FiLinkedin size={30} className="sm:h-[34px] sm:w-[34px]" />
            </a>
            <a href="https://github.com/Yonas21" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
              <FiGithub size={30} className="sm:h-[34px] sm:w-[34px]" />
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-500">Addis Ababa, Ethiopia · English, Amharic, Tigrinya</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
