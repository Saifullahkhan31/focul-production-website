import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;