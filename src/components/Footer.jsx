import React from 'react';
import Reveal from './Reveal';
import contactIcon from '../assets/contact.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-white font-paytone w-full pt-10 pb-8">

            <Reveal>
                <div className="text-center mb-8">
                    <h2 className="text-4xl tracking-wide uppercase">Contact Us</h2>
                </div>
            </Reveal>

            <div className="container mx-auto px-4">

                <Reveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-8 relative">


                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={locationIcon} alt="Address" className="w-6 h-6 object-contain" />
                                <h3 className="text-xl pt-1">Address</h3>
                            </div>
                            <a href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8" target="_blank" rel="noopener noreferrer" className="text-lg leading-relaxed hover:text-[#BC9040] transition-colors block">
                                <p>Maulana Azad</p>
                                <p>National Institute of</p>
                                <p>Technology, Bhopal</p>
                            </a>
                        </div>


                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={contactIcon} alt="Contact" className="w-6 h-6 object-contain" />
                                <h3 className="text-xl pt-1">Contact</h3>
                            </div>
                            <div className="text-lg leading-relaxed space-y-2">
                                <div>
                                    <p className="underline decoration-1 underline-offset-4">Sanjana Malani</p>
                                    <a href="tel:+917691929205" className="hover:text-[#BC9040] transition-colors block">+91 7691929205</a>
                                </div>
                                <div>
                                    <p className="underline decoration-1 underline-offset-4">Tanishq Dinkar</p>
                                    <a href="tel:+919109896779" className="hover:text-[#BC9040] transition-colors block">+91 9109896779</a>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={emailIcon} alt="Email" className="w-6 h-6 object-contain" />
                                <h3 className="text-xl pt-1">Email Address</h3>
                            </div>
                            <a href="mailto:istescmanit@gmail.com" className="text-lg underline decoration-1 underline-offset-4 hover:text-[#BC9040] transition-colors">
                                istescmanit@gmail.com
                            </a>
                        </div>
                    </div>
                </Reveal>


                <Reveal delay={300}>
                    <div className="flex justify-end mb-8">
                        <div className="w-full md:w-2/3 h-px bg-red-800/50"></div>
                    </div>
                </Reveal>


                <Reveal delay={400}>
                    <div className="flex flex-col items-center md:items-end md:mr-16 mb-8 space-y-4">
                        <h3 className="text-xl mr-2">Social Links</h3>
                        <div className="flex space-x-6">

                            <a href="https://www.instagram.com/istemanit/" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>


                            <a href="https://www.facebook.com/ISTESCMANIT" className="hover:opacity-80 transition-opacity bg-white text-black rounded-full p-1 h-[40px] w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>


                            <a href="https://www.linkedin.com/company/iste-sc-manit" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1 h-[40px] w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </Reveal>


                <div className="text-center text-sm md:text-base pt-4">
                    <span className="text-copyright-rose">Copyright © 2025 by </span>
                    <a href="https://www.istemanit.in/" target="_blank" rel="noopener noreferrer" className="text-copyright-gold hover:text-white transition-colors">ISTE-SC MANIT. </a>
                    <span className="text-copyright-rose">All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
