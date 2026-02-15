import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';
import { clients } from '../data/clients';

const Clients: React.FC = () => {
  // Client logos array - add logo paths in src/assets/clients/
  // const clients = [
  //   { name: 'IDEAS PAKISTAN', logo: '/src/assets/clients/IDEAS 2024.png' },
  //   { name: 'SINDH POLICE', logo: '/src/assets/clients/Sindh Police Logo copy.png' },
  //   { name: 'CHILDLIFE', logo: '/src/assets/clients/ChildLife-logo.png' },
  //   { name: 'FM', logo: '/src/assets/clients/FM Logo.png' },
  //   { name: 'DIFF (DUBAI INTERNATIONAL FILM FESTIVAL)', logo: '/src/assets/clients/DIFF LOGO.png' },
  //   { name: 'AD AVIATION', logo: '/src/assets/clients/AD ADAVIATION.png' },
  //   { name: 'DIPLOMAT BUSINESSMEN CLUB', logo: '/src/assets/clients/Diplomat Businessmen Club.png' },
    
  //   { name: 'EMILY & CHILLY', logo: '/src/assets/clients/Emily & Chilly.png' },
  //   { name: 'HAZBI CHEMICALS', logo: '/src/assets/clients/Hazbi LOGO png 1.png' },
  //   { name: 'URBAND', logo: '/src/assets/clients/URBAND.png' },
  //   { name: 'PELIKAN KNITWEAR', logo: '/src/assets/clients/Pelikan-Logo-2-1 copy.png' },
  //   { name: 'PERFUME BAR - DUBAI', logo: '/src/assets/clients/Perfume Bar.jpg.jpeg' },
  //   { name: 'STREET SMART CLOTHING', logo: '/src/assets/clients/street smart clothing.jpeg' },
  //   { name: 'EMARATECH', logo: '/src/assets/clients/Emaratech Logo.png' },
  //   { name: 'WAFRA', logo: '/src/assets/clients/Wafra.jpg.jpeg' },
  //   { name: 'JENGAN', logo: '/src/assets/clients/Jengan.png' },
  //   { name: 'KARSAZ', logo: '/src/assets/clients/Karsaz-Logo-High-Resolution.png' },
  //   { name: 'AL WARA PERFUMES', logo: '/src/assets/clients/Al Wara Perfumes.jfif.jpeg' },
  //   { name: 'HPSAA', logo: '/src/assets/clients/HPSAA LOGO.png' },
    
    
  //   // Commented out - no logo available
  //   // { name: 'DFW (DUBAI FASHION WEEK)', logo: '/src/assets/clients/dfw.png' },
  //   // { name: 'PAKISTAN INTERNATIONAL SCREEN AWARDS', logo: '/src/assets/clients/pisa.png' },
  //   // { name: 'DESERT LEADERS', logo: '/src/assets/clients/desert-leaders.png' },
  //   // { name: 'CITY STAY HOTEL', logo: '/src/assets/clients/city-stay.png' },
  // ];

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
              <Link to="/portfolio" className="text-gray-400 hover:text-[#E17A00] transition-colors">Portfolio</Link>
              <Link to="/clients" className="text-[#E17A00]">Clients</Link>
              <Link to="/services" className="text-gray-400 hover:text-[#E17A00] transition-colors">Services</Link>
              <a href="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</a>
            </motion.nav>
          </div>
        </header>

        {/* MAIN CONTENT SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" p-6 flex flex-col items-center justify-center min-h-50 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 group cursor-pointer"
              >
                {/*bg-white/5 backdrop-blur-md border border-white/10 rounded-lg */}
                <img 
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
        </motion.section>
      </div>
    </div>
  );
};

export default Clients;
