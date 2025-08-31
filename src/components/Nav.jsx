import React from "react";
import { Link } from "gatsby";
import { Briefcase, Network, Home, Mail } from "lucide-react";

const Nav = () => (
  <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-5">
    <Link to="/" className="font-bold text-lg">Abhay Singh</Link>
    <div className="flex items-center gap-5 text-sm">
      <Link to="/projects" className="flex items-center gap-2 hover:text-brand"><Briefcase size={16}/>Projects</Link>
      <Link to="/leadership" className="flex items-center gap-2 hover:text-brand"><Network size={16}/>Leadership</Link>
      <Link to="/about" className="flex items-center gap-2 hover:text-brand"><Home size={16}/>Career</Link>
      <Link to="/resume" className="flex items-center gap-2 hover:text-brand">Resume</Link>
    </div>
  </nav>
);

export default Nav;
