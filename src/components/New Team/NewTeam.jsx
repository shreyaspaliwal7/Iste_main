import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ChevronDown, Terminal, Cpu, Database, Scan } from 'lucide-react';
import { motion } from 'framer-motion';

const placeholderImg = "/Images/DhananjayBorban.png";

const TeamCard = ({ member, borderColor, glowColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`relative group bg-[#0a0a0a] border border-${borderColor} hover:border-[#D0DA3B] rounded-xl overflow-hidden transition-all duration-300`}
            style={{
                boxShadow: `0 0 0 1px ${glowColor}20`,
            }}
        >

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, ${glowColor}, transparent)` }}
            />


            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: glowColor }}></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: glowColor }}></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: glowColor }}></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: glowColor }}></div>

            <div className="p-4">

                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:4px_4px] pointer-events-none opacity-20"></div>
                </div>


                <div className="text-center space-y-2 relative z-10">
                    <h3 className="text-white font-bold text-lg tracking-wider" style={{ fontFamily: 'monospace' }}>
                        {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em]" style={{ color: glowColor }}>
                        {member.role}
                    </p>
                    <div className="h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>


                    <div className="flex justify-center gap-4">
                        {[
                            { Icon: Instagram, link: member.social.instagram },
                            { Icon: Facebook, link: member.social.facebook },
                            { Icon: Twitter, link: member.social.twitter },
                            { Icon: Linkedin, link: member.social.linkedin }
                        ].map(({ Icon, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SectorHeader = ({ title, color }) => (
    <div className="flex items-center justify-center gap-4 mb-12 mt-20">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/30"></div>
        <div
            className="px-6 py-2 border border-white/20 bg-[#050505] text-sm md:text-base font-mono uppercase tracking-widest relative"
            style={{ color: color, boxShadow: `0 0 15px ${color}20` }}
        >
            <span className="mr-2 text-white/50">&gt;</span>
            {title}

            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40"></div>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/30"></div>
    </div>
);

const NewTeam = () => {

    const leadership = Array(3).fill({
        name: "Dhananjay Borban",
        role: "Chairperson",
        image: placeholderImg,
        social: { instagram: '#', facebook: '#', twitter: '#', linkedin: '#' }
    });

    const executives = Array(6).fill({
        name: "Dhananjay Borban",
        role: "Executive",
        image: placeholderImg,
        social: { instagram: '#', facebook: '#', twitter: '#', linkedin: '#' }
    });

    const associates = Array(6).fill({
        name: "Dhananjay Borban",
        role: "Associate",
        image: placeholderImg,
        social: { instagram: '#', facebook: '#', twitter: '#', linkedin: '#' }
    });

    return (
        <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-mono">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">

                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_10px_#00FFFF] mb-2">
                            // TEAM_DATABASE
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-[#00ff9d] text-sm tracking-widest animate-pulse">
                            <Terminal size={14} />
                            <span>LOADING PERSONNEL DATA... STATUS: ONLINE</span>
                        </div>
                    </motion.div>
                </div>


                <SectorHeader title="SECTOR_01 :: THE_LEADERSHIP [FINAL_YEAR]" color="#d946ef" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadership.map((member, idx) => (
                        <TeamCard
                            key={idx}
                            member={member}
                            borderColor="purple-500/30"
                            glowColor="#d946ef"
                        />
                    ))}
                </div>


                <SectorHeader title="SECTOR_02 :: THE_EXECUTIVES [THIRD_YEAR]" color="#06b6d4" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {executives.map((member, idx) => (
                        <TeamCard
                            key={idx}
                            member={member}
                            borderColor="cyan-500/30"
                            glowColor="#06b6d4"
                        />
                    ))}
                </div>


                <SectorHeader title="SECTOR_03 :: THE_ASSOCIATES [SECOND_YEAR]" color="#ef4444" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {associates.map((member, idx) => (
                        <TeamCard
                            key={idx}
                            member={member}
                            borderColor="red-500/30"
                            glowColor="#ef4444"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default NewTeam;