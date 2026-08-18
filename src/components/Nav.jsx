import React, { useState } from "react";
import { Link } from "gatsby";
import { Briefcase, Network, User, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const activeClassName = "text-brand dark:text-sky-400";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-5">
          <Link to="/" className="font-bold text-lg">
            Abhay Singh
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <Link
              to="/projects"
              activeClassName={activeClassName}
              className="flex items-center gap-2 hover:text-brand dark:hover:text-sky-400"
            >
              <Briefcase size={16} />
              Projects
            </Link>
            <Link
              to="/leadership"
              activeClassName={activeClassName}
              className="flex items-center gap-2 hover:text-brand dark:hover:text-sky-400"
            >
              <Network size={16} />
              Leadership
            </Link>
            <Link
              to="/about"
              activeClassName={activeClassName}
              className="flex items-center gap-2 hover:text-brand dark:hover:text-sky-400"
            >
              <User size={16} />
              About
            </Link>
            <Link
              to="/resume"
              activeClassName={activeClassName}
              className="hover:text-brand dark:hover:text-sky-400"
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-gray-200 p-4 space-y-3 text-sm bg-white dark:bg-gray-900 dark:border-gray-800">
            <Link to="/projects" className="block" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/leadership" className="block" onClick={() => setOpen(false)}>
              Leadership
            </Link>
            <Link to="/about" className="block" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/resume" className="block" onClick={() => setOpen(false)}>
              Resume
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
