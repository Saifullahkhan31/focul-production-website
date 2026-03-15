import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';

interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      
      {/* 1. Background Image - Clear and Visible */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }} 
      ></div>

      {/* 2. Main Hero Content - Changed to justify-center with a gap */}
      <main className="relative z-10 flex flex-col md:flex-row min-h-screen items-center justify-between gap-12 md:gap-32 px-6 md:px-12 py-12">
        
        {/* LEFT: Logo & Arced Navigation */}
        <div className="relative flex items-center justify-center md:w-auto select-none -mt-12 -ml-8">
          {/* Main Logo */}
          <img 
            src={logoImg}
            alt="Focul Productions Logo" 
            className="w-95 md:w-145 h-auto drop-shadow-2xl"
          />

          {/* Arced Nav: Adjusted positioning for better clearance */}
          <nav className="absolute left-[75%] md:left-[82%] top-[51.8%] -translate-y-1/2 flex flex-col gap-4 md:gap-6 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap">
            <Link to="/" className="text-[#E17A00] ml-0 transition-all hover:translate-x-2">Home</Link>
            <Link to="/about" className="hover:text-[#E17A00] transition-all ml-8 hover:translate-x-2">About</Link>
            <Link to="/services" className="hover:text-[#E17A00] transition-all ml-12 hover:translate-x-2">Services</Link>
            <Link to="/portfolio" className="hover:text-[#E17A00] transition-all ml-12 hover:translate-x-2">Portfolio</Link>
            <Link to="/clients" className="hover:text-[#E17A00] transition-all ml-8 hover:translate-x-2">Clients</Link>            
            <Link to="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</Link>
          </nav>
        </div>

        {/* RIGHT: Branding Text - Removed extra padding to keep group centered */}
        <div className="md:w-auto mt-16 md:mt-0 text-left flex flex-col justify-center -ml-12">
          <p className="text-[#E17A00] font-bold tracking-[0.4em] text-[9px] md:text-[10px] mb-3 font-orbitron">
            A MEDIA PRODUCTION COMPANY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.85] mb-4 uppercase font-michroma">
            FOCUL <br /> 
            <span className="inline-block mt-1">PRODUCTIONS</span>
          </h1>
          <p className="text-white italic text-xs md:text-sm tracking-widest font-light">
            "Precision in Every Frame"
          </p>
        </div>
      </main>

      {/* 3. Social Media Footer (Bottom Right) */}
      <footer className="absolute bottom-8 right-8 z-20 flex gap-4">
        <SocialIcon icon={<FaYoutube />} link="https://youtube.com/@foculproductions" />
        <SocialIcon icon={<FaFacebookF />} link="https://www.facebook.com/people/Focul-Productions/61565742337775/" />
        <SocialIcon icon={<FaInstagram />} link="https://instagram.com/foculproductions" />
        <SocialIcon icon={<FaXTwitter />} link="https://x.com/FoculP31671" />
      </footer>
    </div>
  );
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out bg-black/40 backdrop-blur-sm"
  >
    {icon}
  </a>
);

export default Home;