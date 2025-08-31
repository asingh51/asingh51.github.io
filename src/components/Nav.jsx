import React, { useState } from "react";
import { Link } from "gatsby";
import { Briefcase, Network, Home, Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between gap-5">
        <Link to="/" className="font-bold text-lg">Abhay Singh</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/projects" className="flex items-center gap-2 hover:text-brand"><Briefcase size={16}/>Projects</Link>
          <Link to="/leadership" className="flex items-center gap-2 hover:text-brand"><Network size={16}/>Leadership</Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-brand"><Home size={16}/>Career</Link>
          <Link to="/resume" className="hover:text-brand text-sm">Resume</Link>
        </div>

        <button className="md:hidden p-2 rounded-lg border" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 rounded-2xl border p-4 space-y-3 text-sm bg-white">
          <Link to="/projects" className="block" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/leadership" className="block" onClick={() => setOpen(false)}>Leadership</Link>
          <Link to="/about" className="block" onClick={() => setOpen(false)}>Career</Link>
          <Link to="/resume" className="block" onClick={() => setOpen(false)}>Resume</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;