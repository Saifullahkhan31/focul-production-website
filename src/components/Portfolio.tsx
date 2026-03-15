import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';
import { services } from '../data/services';

const Portfolio: React.FC = () => {
  const location = useLocation();
  const cameFromServices = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return Boolean(params.get('section'));
  }, [location.search]);

  useEffect(() => {
    // Get the section parameter from URL query string
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section) {
      // Find the corresponding section ID and scroll to it
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const renderServiceContent = (serviceId: string) => {
    if (serviceId === 'podcast') {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* YouTube Thumbnails as placeholders */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer relative overflow-hidden rounded-lg">
            <div className="w-full aspect-video bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
              <span className="text-white text-sm">Podcast #1</span>
            </div>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer relative overflow-hidden rounded-lg">
            <div className="w-full aspect-video bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
              <span className="text-white text-sm">Podcast #2</span>
            </div>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer relative overflow-hidden rounded-lg">
            <div className="w-full aspect-video bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
              <span className="text-white text-sm">Podcast #3</span>
            </div>
          </a>
        </div>
      );
    }

    // For other services, show placeholder from assets folder
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-700/50 aspect-video rounded-lg flex items-center justify-center border border-gray-600">
          <span className="text-gray-400 text-center text-sm">Content placeholder<br/>from assets</span>
        </div>
        <div className="bg-gray-700/50 aspect-video rounded-lg flex items-center justify-center border border-gray-600">
          <span className="text-gray-400 text-center text-sm">Content placeholder<br/>from assets</span>
        </div>
        <div className="bg-gray-700/50 aspect-video rounded-lg flex items-center justify-center border border-gray-600">
          <span className="text-gray-400 text-center text-sm">Content placeholder<br/>from assets</span>
        </div>
      </div>
    );
  };

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
                  <Link to="/services" className="text-gray-400 hover:text-[#E17A00] transition-colors">Services</Link>
                  <span className="text-[#E17A00] cursor-default">Portfolio</span>
                  <Link to="/clients" className="text-gray-400 hover:text-[#E17A00] transition-colors">Clients</Link>
                  <Link to="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</Link>
                </motion.nav>
              </div>
            </header>

        {/* MAIN CONTENT SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-20 pb-20"
        >
          {/* Render all service sections */}
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-40"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Service Heading */}
                <h2 className="text-2xl md:text-4xl font-black tracking-wider mt-10 mb-8 text-[#E17A00] uppercase">
                  {service.name}
                </h2>

                {/* Service Content */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
                  {renderServiceContent(service.id)}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.section>
      </div>

      {cameFromServices ? (
        <Link
          to="/services"
          className="fixed bottom-6 right-6 z-30 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white backdrop-blur-lg shadow-lg transition-all duration-300 hover:border-[#E17A00]/60 hover:bg-white/20"
        >
          &larr; Back to all services
        </Link>
      ) : null}
    </div>
  );
};

export default Portfolio;
