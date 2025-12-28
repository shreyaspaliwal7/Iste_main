import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'EVENTS', href: '#' },
    { name: 'SPONSORS', href: '#' },
    { name: 'OUR TEAM', href: '#' },
    { name: 'CONTACT US', href: '#' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      {/* Container with 70% opacity black background and glass effect */}
      <div className="bg-black/70 backdrop-blur-sm rounded-full px-8 py-3 flex items-center justify-between border border-white/10 shadow-2xl overflow-hidden relative">
        
        {/* Abstract Background Accents (The orange glows in your image) */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/40 to-transparent rotate-45 transform scale-150"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/40 to-transparent rotate-45 transform scale-150"></div>

        <img src="https://www.istemanit.in/static/media/ISTElogo.a74f1bcec9b36f8b044934b3c92f6b69.svg" alt="" />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 z-10">
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
      </div>
    </nav>
  );
};

export default Navbar;