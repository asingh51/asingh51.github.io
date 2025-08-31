import React from "react";

const Footer = () => (
  <footer className="border-t mt-16 py-8 text-sm text-gray-500">
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <p>© {new Date().getFullYear()} Abhay Singh. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/abbi/" target="_blank" rel="noreferrer" className="hover:text-gray-700">LinkedIn</a>
        <a href="https://github.com/asingh51" target="_blank" rel="noreferrer" className="hover:text-gray-700">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
