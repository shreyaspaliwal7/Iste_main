

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'HOME', href: '/', type: 'link' },
    { name: 'ABOUT US', href: '#about', type: 'hash' },
    { name: 'EVENTS', href: '#events', type: 'hash' },
    { name: 'SPONSORS', href: '#sponsors', type: 'hash' },
    location.pathname === '/new-team'
      ? { name: 'OLD TEAM', href: '/old-members', type: 'link' }
      : { name: 'OUR TEAM', href: '/new-team', type: 'link' },
    { name: 'GALLERY', href: '/gallery', type: 'link' },
    { name: 'CONTACT US', href: '/contact-positions', type: 'link' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.type === 'link') {
      navigate(link.href);
      window.scrollTo(0, 0);
    } else {
      // Handle Hash Links
      if (location.pathname !== '/') {
        // If not on home, go to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[85%] max-w-7xl z-50">
      <div className="bg-black/70 backdrop-blur-md rounded-full px-4 md:px-8 py-[0.1rem] flex items-center justify-between border border-white/10 shadow-2xl relative">


        <img
          className='w-[5.5rem] md:w-[5.5rem] py-1'
          src="https://www.istemanit.in/static/media/ISTElogo.a74f1bcec9b36f8b044934b3c92f6b69.svg"
          alt="ISTE Logo"
        />


        <ul className="hidden md:flex items-center gap-8 lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-white text-sm font-semibold hover:text-orange-400 transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>


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


      {isOpen && (
        <div className="absolute top-16 left-0 w-full md:hidden transition-all duration-300">
          <ul className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-6 shadow-2xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white text-lg font-semibold hover:text-orange-400 transition-colors cursor-pointer"
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
