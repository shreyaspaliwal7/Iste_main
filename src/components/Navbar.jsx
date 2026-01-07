

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'EVENTS', href: '#events' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'OUR TEAM', href: '#team' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-black/70 backdrop-blur-md rounded-full px-6 md:px-8 py-1 flex items-center justify-between border border-white/10 shadow-2xl relative">
        
        {/* Logo */}
        <img 
          className='w-15 md:w-15 py-1' 
          src="https://www.istemanit.in/static/media/ISTElogo.a74f1bcec9b36f8b044934b3c92f6b69.svg" 
          alt="ISTE Logo" 
        />

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white text-sm font-semibold hover:text-orange-400 transition-colors duration-300 tracking-wide"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Shown on Mobile only) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden transition-all duration-300">
          <ul className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-6 shadow-2xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu when link is clicked
                  className="text-white text-lg font-semibold hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
