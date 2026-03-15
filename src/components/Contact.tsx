import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLocationDot, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg-placeholder.jpeg';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceSelectRef = useRef<HTMLDivElement | null>(null);

  const services = [
    'Corporate Movies',
    'TVC (TV Commercials)',
    'Music Videos',
    'Documentaries',
    'Promotional Videos',
    'Podcast',
    'Event Coverage',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setServiceOpen(false);
  };

  useEffect(() => {
    if (!serviceOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!serviceSelectRef.current) return;
      if (!serviceSelectRef.current.contains(event.target as Node)) {
        setServiceOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [serviceOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialIcons = [
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaInstagram, link: '#', label: 'Instagram' },
    { icon: FaFacebook, link: '#', label: 'Facebook' },
    { icon: FaTwitter, link: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '+92 (0)21 111-801-700', link: 'tel:+922111180170' },
    { icon: FaEnvelope, label: 'Email', value: 'hello@foculproductions.com', link: 'mailto:hello@foculproductions.com' },
    { icon: FaLocationDot, label: 'Location', value: 'Karachi, Pakistan', link: '#' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="relative z-10 px-8 md:px-16 py-12">

        {/* HEADER SECTION: Logo (left) | Title & Nav (right side) */}
        <header className="flex justify-between items-start mb-16 md:mb-20">
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
              className="flex gap-6 md:gap-10 text-[8px] md:text-xs font-bold tracking-[0.2em] uppercase flex-wrap justify-end"
            >
              <Link to="/" className="text-gray-400 hover:text-[#E17A00] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-[#E17A00] transition-colors">About</Link>
              <Link to="/services" className="text-gray-400 hover:text-[#E17A00] transition-colors">Services</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-[#E17A00] transition-colors">Portfolio</Link>
              <Link to="/clients" className="text-gray-400 hover:text-[#E17A00] transition-colors">Clients</Link>
              <span className="text-[#E17A00]">Contact Us</span>
            </motion.nav>
          </div>
        </header>

        {/* MAIN CONTENT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 mb-20 overflow-visible"
        >
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border mt-[7.2%] border-white/10 rounded-lg p-8 md:p-12 hover:bg-white/8 transition-all duration-500 shadow-xl hover:shadow-2xl hover:border-[#E17A00]/30"
          >
            <h2 className="text-[#E17A00] text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">LET'S CREATE SOMETHING AMAZING</h2>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-5xl" style={{ wordSpacing: '0.165em' }}>
              We'd love to hear from you. Whether you have an exciting project in mind or just want to chat, reach out to us and let's bring your vision to life.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">

            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1 space-y-6 overflow-visible lg:pl-1"
            >
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="block w-full relative bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 group cursor-pointer shadow-lg overflow-visible"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-[#E17A00]/20 rounded-lg blur-md -z-10"></div>
                        <info.icon className="text-[#E17A00] text-3xl group-hover:scale-110 transition-transform duration-300 relative z-20" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-gray-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-1">{info.label}</p>
                        <p className="text-white text-sm md:text-base font-light">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/8 hover:border-[#E17A00]/30 transition-all duration-300 shadow-lg"
              >
                <p className="text-gray-400 text-xs font-bold tracking-[0.2em] mb-4 uppercase">Follow Us</p>
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.2, color: '#E17A00' }}
                      className="text-white text-xl hover:text-[#E17A00] transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-gray-300 text-xs font-bold tracking-[0.2em] uppercase mb-3">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E17A00]/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    <label className="block text-gray-300 text-xs font-bold tracking-[0.2em] uppercase mb-3">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E17A00]/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Service Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-gray-300 text-xs font-bold tracking-[0.2em] uppercase mb-3">Service Interested In</label>
                  <div ref={serviceSelectRef} className="relative">
                    <input type="hidden" name="service" value={formData.service} />
                    <button
                      type="button"
                      onClick={() => setServiceOpen(prev => !prev)}
                      className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 md:px-6 py-3 md:py-4 text-left text-white focus:outline-none focus:border-[#E17A00]/60 focus:bg-white/15 transition-all duration-300"
                      aria-haspopup="listbox"
                      aria-expanded={serviceOpen}
                    >
                      <span className={formData.service ? 'text-white' : 'text-gray-500'}>
                        {formData.service || 'Select a service...'}
                      </span>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#E17A00] text-xs">
                        {serviceOpen ? '▲' : '▼'}
                      </span>
                    </button>

                    {serviceOpen ? (
                      <div
                        role="listbox"
                        className="absolute z-20 mt-2 w-full max-h-64 overflow-auto rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
                      >
                        {services.map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            role="option"
                            aria-selected={formData.service === service}
                            onClick={() => handleServiceSelect(service)}
                            className="w-full text-left px-4 md:px-6 py-3 text-sm text-white/90 hover:text-white hover:bg-white/15 transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <label className="block text-gray-300 text-xs font-bold tracking-[0.2em] uppercase mb-3">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project and vision..."
                    rows={6}
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#E17A00]/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {submitted ? (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full bg-green-500/20 border border-green-500/50 rounded-lg px-6 py-4 font-bold tracking-[0.2em] uppercase text-green-400 text-sm transition-all duration-300"
                      disabled
                    >
                      ✓ MESSAGE SENT SUCCESSFULLY!
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(225, 122, 0, 0.15)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#E17A00]/10 border border-[#E17A00]/50 rounded-lg px-6 py-4 font-bold tracking-[0.2em] uppercase text-[#E17A00] text-sm hover:bg-[#E17A00]/20 hover:border-[#E17A00] transition-all duration-300 hover:shadow-lg hover:shadow-[#E17A00]/20"
                    >
                      Send Message
                    </motion.button>
                  )}
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-linear-to-r from-white/5 via-white/5 to-[#E17A00]/5 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 hover:bg-white/8 transition-all duration-500 text-center hover:border-[#E17A00]/30 mt-12"
          >
            <h3 className="text-[#E17A00] text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">Response Time</h3>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-5xl mx-auto" style={{ wordSpacing: '0.165em' }}>
              We typically respond to inquiries within 12-24 hours. For urgent matters, feel free to call us directly.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
