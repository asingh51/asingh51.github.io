import React from "react";

const Footer = () => (
  <footer className="border-t border-gray-100 dark:border-gray-800 mt-16 py-8 text-sm text-gray-500 dark:text-gray-400">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p>© {new Date().getFullYear()} Abhay Singh. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="mailto:abhaysingh200009@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-200">Email</a>
        <a href="https://www.linkedin.com/in/abbi/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">LinkedIn</a>
        <a href="https://github.com/asingh51" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-200">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
