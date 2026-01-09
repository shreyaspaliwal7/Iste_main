import React from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer2 = () => {
    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/istemanit/", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/ISTESCMANIT", label: "Facebook" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/iste-sc-manit", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-[#151515] text-white pt-16 pb-12 relative overflow-hidden font-paytone">
            {/* Background decoration matching theme */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-white tracking-wide uppercase drop-shadow-lg">
                        Contact <span className="text-[#BC9040]">Us</span>
                    </h2>
                    <div className="h-1 w-24 bg-[#BC9040] mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-12">

                    {/* Address Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center group space-y-4"
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#BC9040] transition-colors">
                                <MapPin size={24} className="text-[#BC9040]" />
                            </div>
                            <h3 className="text-2xl pt-1 text-gray-200">Address</h3>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-400 leading-relaxed hover:text-[#BC9040] transition-colors"
                        >
                            <p className="text-[#BC9040] mb-1">Maulana Azad</p>
                            <p className="text-[#BC9040] mb-1">National Institute of</p>
                            <p className="text-[#BC9040] mb-1">Technology, Bhopal</p>
                        </a>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center group space-y-4"
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#BC9040] transition-colors">
                                <Phone size={24} className="text-[#BC9040]" />
                            </div>
                            <h3 className="text-2xl pt-1 text-gray-200">Contact</h3>
                        </div>

                        <div className="text-lg text-gray-400 leading-relaxed space-y-3">
                            <div>
                                <p className="text-[#BC9040] mb-1 text-sm uppercase tracking-wider">Sanjana Malani</p>
                                <a href="tel:+917691929205" className="hover:text-white transition-colors block font-sans">+91 7691929205</a>
                            </div>
                            <div>
                                <p className="text-[#BC9040] mb-1 text-sm uppercase tracking-wider">Tanishq Dinkar</p>
                                <a href="tel:+919109896779" className="hover:text-white transition-colors block font-sans">+91 9109896779</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Email Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center group space-y-4"
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#BC9040] transition-colors">
                                <Mail size={24} className="text-[#BC9040]" />
                            </div>
                            <h3 className="text-2xl pt-1 text-gray-200">Email Address</h3>
                        </div>
                        <a
                            href="mailto:istescmanit@gmail.com"
                            className="text-lg text-gray-400 hover:text-[#BC9040] transition-colors border-b border-transparent hover:border-[#BC9040] pb-1 font-sans mt-2"
                        >
                            <p className="text-[#BC9040]">istescmanit@gmail.com</p>
                        </a>
                    </motion.div>
                </div>

                {/* Social Links & Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="border-t border-white/10 pt-8 flex flex-col items-center space-y-8"
                >
                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#BC9040] hover:text-white transition-colors border border-white/10 hover:border-[#BC9040]"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center text-sm md:text-base font-sans text-gray-500">
                        <span className="text-[#BD9090]">Copyright © 2025 by </span>
                        <a href="https://www.istemanit.in/" target="_blank" rel="noopener noreferrer" className="text-[#BC9040] mb-0 hover:text-white transition-colors font-bold">ISTE-SC MANIT. </a>
                        <span className="text-[#BD9090]">All rights reserved</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer2;
