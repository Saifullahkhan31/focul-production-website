import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';

const Portfolio: React.FC = () => {

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }} 
      ></div>

      <div className="relative z-10 px-8 md:px-16 py-12">
        
        {/* HEADER SECTION: Logo (left) | Title & Nav (right side) */}
        <header className="flex justify-between items-start mb-20">
          {/* LEFT: Logo */}
          <Link to="/" className="flex flex-col items-start shrink-0 -mt-12 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Logo" className="w-32 md:w-42 h-auto" />
          </Link>

          {/* RIGHT: Title & Navigation (stacked vertically) */}
          <div className="flex flex-col gap-6 pr-16 md:pr-24 items-end text-right">
            {/* Title & Subtitle */}
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl md:text-5xl font-black font-michroma leading-tight tracking-wider" style={{ wordSpacing: '0.35em' }}>FOCUL PRODUCTIONS</h1>
              <p className="text-[#E17A00] text-[15px] md:text-[15px] font-bold tracking-[0.74em] mt-1">A MEDIA PRODUCTION COMPANY</p>
            </div>

            {/* Navigation */}
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-6 md:gap-10 text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase"
            >
              <Link to="/" className="text-gray-400 hover:text-[#E17A00] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-[#E17A00] transition-colors">About</Link>
              <Link to="/portfolio" className="text-[#E17A00]">Portfolio</Link>
              <Link to="/clients" className="text-gray-400 hover:text-[#E17A00] transition-colors   ">Clients</Link>
              <Link to="/services" className="text-gray-400 hover:text-[#E17A00] transition-colors">Services</Link>
              <a href="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</a>
            </motion.nav>
          </div>
        </header>

        {/* MAIN CONTENT SECTION */}
        {/* <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        > */}
          {/* Portfolio Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" p-6 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 group cursor-pointer"
              > */}
                {/*bg-white/5 backdrop-blur-md border border-white/10 rounded-lg */}
                {/* <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-24 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-[11px] md:text-xs text-center text-gray-300 font-light tracking-widest uppercase">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Our Expertise */}
            <div>
              <h3 className="text-[#E17A00] text-xs md:text-sm font-bold tracking-[0.3em] mb-6 uppercase">Portfolio</h3>
              <div className="grid grid-cols-2 gap-6 max-w-3xl">
                <ul className="space-y-3">
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Corporate Movies</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Podcast</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Music Videos</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Biographies</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">TV Commercials (TVC)</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">News Conferences</li>
                </ul>
                <ul className="space-y-3">
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Corporate Events</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Fashion Shows</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Event Coverage & Management</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Documentaries</li>
                  <li className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-3 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 text-gray-200 text-base md:text-lg font-light">Promotional Videos</li>
                </ul>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Portfolio;