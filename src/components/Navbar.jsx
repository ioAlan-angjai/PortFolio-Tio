import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          PortFolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skill</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Project</a></li>
          <li>
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full text-[#0f172a] font-bold transition-all shadow-lg shadow-cyan-500/20">
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" /> : <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#1e293b] p-4 text-center border-t border-white/10`}>
        <a href="#home" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Beranda</a>
        <a href="#about" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</a>
        <a href="#skills" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skill</a>
        <a href="#projects" className="block py-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Project</a>
        <a href="#contact" className="block bg-cyan-500 mt-2 py-2 rounded-lg text-white" onClick={() => setIsOpen(false)}>Kontak</a>
      </div>
    </nav>
  );
};

export default Navbar;