import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';

const Services: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }} 
      ></div>

      <div className="relative z-10 px-8 md:px-16 py-12 flex flex-col min-h-screen">
        
        {/* HEADER SECTION: Stays pinned to top (z-20) */}
        <header className="relative z-20 flex justify-between items-start">
          <Link to="/" className="flex flex-col items-start shrink-0 -mt-12 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Logo" className="w-32 md:w-42 h-auto" />
          </Link>

          <div className="flex flex-col gap-6 pr-16 md:pr-24 items-end text-right">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl md:text-5xl font-black font-michroma leading-tight tracking-wider" style={{ wordSpacing: '0.35em' }}>FOCUL PRODUCTIONS</h1>
              <p className="text-[#E17A00] text-[15px] md:text-[15px] font-bold tracking-[0.74em] mt-1">A MEDIA PRODUCTION COMPANY</p>
            </div>

            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-6 md:gap-10 text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase"
            >
              <Link to="/" className="text-gray-400 hover:text-[#E17A00] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-[#E17A00] transition-colors">About</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-[#E17A00] transition-colors">Portfolio</Link>
              <Link to="/clients" className="text-gray-400 hover:text-[#E17A00] transition-colors   ">Clients</Link>
              <span className="text-[#E17A00] cursor-default">Services</span>
              <Link to="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</Link>
            </motion.nav>
          </div>
        </header>

        {/* MAIN CONTENT SECTION - Tightened from Top AND Bottom */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          /* -mt-24: Pulls content up toward Nav
             -mb-24: Pulls the "invisible" bottom edge up
             z-10: Stays behind header (z-20)
          */
          className="flex-1 flex items-center justify-center -mt-24 md:-mt-32 -mb-24 md:-mb-32 relative z-10"
        >
          <div className="relative w-full max-w-2xl lg:max-w-3xl aspect-square flex items-center justify-center">
            {/* Center Logo */}
            <img
              src={logoImg}
              alt="Focul Productions Logo"
              className="w-95 md:w-145 h-auto drop-shadow-2xl opacity-90"
            />

            {/* Services Layout (Preserved Positioning) */}
            <nav className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full pointer-events-auto">
                <Link to="/portfolio" className="absolute top-[25%] left-[35%] -translate-x-1/2 text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">PODCAST</Link>
                <a href="#" className="absolute top-[34%] left-[12%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">MUSIC VIDEOS</a>
                <a href="#corporate movies" className="absolute top-[43%] left-[0.5%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">CORPORATE MOVIES</a>
                <a href="#" className="absolute top-[58%] left-[20%] -translate-y-1/2 text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">FILMS</a>
                <a href="#" className="absolute bottom-[31%] left-[15.5%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">TV DRAMAS</a>
                <a href="#" className="absolute bottom-[23%] left-[17%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">TV COMMERCIALS</a>
                <a href="#" className="absolute bottom-[23%] right-[-3%] -translate-x-1/2 text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">PRESS CONFERENCE</a>
                <a href="#" className="absolute bottom-[31%] right-[11%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">BIOGRAPHY</a>
                <a href="#" className="absolute top-[56.3%] right-[2%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">MOVIE PREMIER</a>
                <a href="#" className="absolute top-[44.5%] right-[-2.3%] -translate-y-1/2 text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">POST PRODUCTION</a>
                <a href="#" className="absolute top-[34%] right-[-4%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">PROMOTIONAL VIDEOS</a>
                <a href="#" className="absolute top-[25%] right-[13.5%] text-[10px] md:text-[18px] font-bold text-white tracking-widest uppercase hover:text-[#E17A00] transition-colors">EVENT COVERAGE</a>
              </div>
            </nav>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;