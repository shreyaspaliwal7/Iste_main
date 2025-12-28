import React from 'react';
import contactIcon from '../assets/contact.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-white font-paytone w-full pt-16 pb-8">
            {/* Main Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl tracking-wide uppercase">Contact Us</h2>
            </div>

            <div className="container mx-auto px-4">
                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16 relative">

                    {/* Address Column */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={locationIcon} alt="Address" className="w-6 h-6 object-contain" />
                            <h3 className="text-xl pt-1">Address</h3>
                        </div>
                        <div className="text-lg leading-relaxed">
                            <p>Maulana Azad</p>
                            <p>National Institute of</p>
                            <p>Technology, Bhopal</p>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={contactIcon} alt="Contact" className="w-6 h-6 object-contain" />
                            <h3 className="text-xl pt-1">Contact</h3>
                        </div>
                        <div className="text-lg leading-relaxed space-y-2">
                            <div>
                                <p className="underline decoration-1 underline-offset-4">Vanshika Agarwal</p>
                                <p>+91 9828534432</p>
                            </div>
                            <div>
                                <p className="underline decoration-1 underline-offset-4">Dhananjay Borban</p>
                                <p>+91 9302720803</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Column */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={emailIcon} alt="Email" className="w-6 h-6 object-contain" />
                            <h3 className="text-xl pt-1">Email Address</h3>
                        </div>
                        <a href="mailto:istescmanit@gmail.com" className="text-lg underline decoration-1 underline-offset-4 hover:text-gray-300 transition-colors">
                            istescmanit@gmail.com
                        </a>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="flex justify-end mb-8">
                    <div className="w-full md:w-2/3 h-px bg-red-800/50"></div>
                </div>

                {/* Social Links Section */}
                <div className="flex flex-col items-end mr-4 md:mr-16 mb-16 space-y-4">
                    <h3 className="text-xl mr-2">Social Links</h3>
                    <div className="flex space-x-6">
                        {/* Instagram */}
                        <a href="#" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="hover:opacity-80 transition-opacity bg-white text-black rounded-full p-1 h-[40px] w-[40px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1 h-[40px] w-[40px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm md:text-base pt-4">
                    <span className="text-copyright-rose">Copyright © 2025 by </span>
                    <span className="text-copyright-gold">ISTE-SC MANIT. </span>
                    <span className="text-copyright-rose">All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
