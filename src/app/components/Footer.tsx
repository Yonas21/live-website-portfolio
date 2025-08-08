import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Yonas Alem. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
