import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';
// You already have this import, now we will actually use it!
import { clients } from '../data/clients';

const Clients: React.FC = () => {
  // DELETE the local 'const clients = [...]' array that was here.
  // The component will now automatically use the 'clients' variable imported above.

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }} 
      ></div>

      <div className="relative z-10 px-8 md:px-16 py-12">
        <header className="flex justify-between items-start mb-20">
          <Link to="/" className="flex flex-col items-start shrink-0 -mt-12 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Logo" className="w-32 md:w-42 h-auto" />
          </Link>

          <div className="flex flex-col gap-6 pr-16 md:pr-24 items-end text-right">
            <div className="flex flex-col w-fit">
              <h1 className="text-3xl md:text-5xl font-black font-michroma leading-tight tracking-wider" style={{ wordSpacing: '0.35em' }}>FOCUL PRODUCTIONS</h1>
              <p className="text-[#E17A00] text-[15px] md:text-[15px] font-bold tracking-[0.74em] mt-1 font-orbitron uppercase">A Media Production Company</p>
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
              <Link to="/portfolio" className="text-gray-400 hover:text-[#E17A00] transition-colors">Portfolio</Link>
              <span className="text-[#E17A00] cursor-default">Clients</span>
              
              <Link to="/contact" className="text-gray-400 hover:text-[#E17A00] transition-colors">Contact Us</Link>
            </motion.nav>
          </div>
        </header>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 flex flex-col items-center justify-center min-h-50 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-24 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-[11px] md:text-xs text-center text-gray-300 font-light tracking-widest uppercase font-orbitron">
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