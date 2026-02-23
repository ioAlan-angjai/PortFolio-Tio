import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { DataImage, listTools, listProyek } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20 gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-cyan-400 text-xl font-medium">Welcome to My Portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            I'm <span className="text-cyan-400">Tio Alan</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
           A Junior Web Developer and Student focused on building modern, responsive, and functional web applications.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="bg-cyan-500 px-8 py-3 rounded-full font-bold hover:scale-105 transition">View Project</a>
            <a href="#about" className="border border-cyan-500/50 px-8 py-3 rounded-full font-bold hover:bg-cyan-500/10 transition">About me</a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center" data-aos="zoom-in">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20"></div>
            <img 
              src={DataImage.HeroImage} 
              alt="Hero" 
              className="w-[300px] md:w-[450px] relative z-10 rounded-3xl border-2 border-white/10 shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center bg-[#1e293b]/20 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 italic underline decoration-white/20">About Me</h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Saya memiliki ketertarikan mendalam pada teknologi desain web dan logika pemrograman. Dengan keahlian di bidang HTML, CSS, JavaScript, dan React, saya berusaha memberikan pengalaman pengguna yang terbaik di setiap baris kode yang saya tulis.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-down">My Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {listTools.map((tool) => (
            <div key={tool.id} className="bg-[#1e293b] p-6 rounded-2xl flex flex-col items-center hover:bg-cyan-500/10 transition-colors group" data-aos="flip-up">
              <img src={tool.gambar} className="w-12 h-12 mb-4 group-hover:scale-110 transition" alt={tool.nama} />
              <span className="text-sm font-semibold">{tool.nama}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-[#1e293b]/20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {listProyek.map((pro) => (
            <div key={pro.id} className="bg-[#0f172a] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition shadow-xl" data-aos="fade-up">
              <img src={pro.gambar} className="w-full h-48 object-cover" alt={pro.nama} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{pro.nama}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{pro.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {pro.tools.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-[#1e293b] px-2 py-1 rounded text-cyan-300 uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-10 rounded-[2rem] border border-cyan-500/20" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Ayo Berdiskusi!</h2>
          <p className="text-gray-400 mb-8">Punya ide proyek atau sekadar ingin menyapa? Hubungi saya melalui sosial media.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
             {/* WhatsApp Button */}
             <a 
               href="https://wa.me/628816516325" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-400 transition shadow-lg"
             >
               <FaWhatsapp className="text-2xl" /> WhatsApp
             </a>

             {/* GitHub Button */}
             <a 
               href="https://github.com/ioAlan-angjai" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition shadow-lg border border-white/10"
             >
               <FaGithub className="text-2xl" /> GitHub
             </a>

             {/* Instagram Button */}
             <a 
               href="https://instagram.com/tioo.alan" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
             >
               <FaInstagram className="text-2xl" /> Instagram
             </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-white/5">
        <div className="flex justify-center gap-6 mb-4 text-gray-400">
           <a href="https://github.com/ioAlan-angjai" target="_blank" className="hover:text-cyan-400 transition"><FaGithub size={24}/></a>
           <a href="https://www.instagram.com/tioo.alan?igsh=bzh1Zm9wcWRidXl3" target="_blank" className="hover:text-cyan-400 transition"><FaInstagram size={24}/></a>
           <a href="https://wa.me/628816516325" target="_blank" className="hover:text-cyan-400 transition"><FaWhatsapp size={24}/></a>
        </div>
        <p>&copy; 2026 Tio Alan Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;