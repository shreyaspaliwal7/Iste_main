import { Github, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Navbar from "./Navbar";

const ProfileCard = ({ role, name, email, phone, image }) => (
    <div className="relative p-6 border border-gray-800 bg-black/50 rounded-lg w-full max-w-xl mx-auto group hover:border-[#D0DA3B] transition-colors duration-300 overflow-hidden">
        {/* Left Accent Bar */}
        <div className="absolute top-0 left-0 h-full w-1.5 bg-[#00F3FF] shadow-[0_0_8px_#00F3FF]"></div>

        <div className="flex flex-col md:flex-row items-center gap-6 pl-4">
            {/* Image Section */}
            <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-[#D0DA3B] transition-colors">
                    <img src={image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} alt={name} className="w-full h-full object-cover" />
                </div>
                {/* Status Dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#00ff9d] rounded-full border-2 border-black animate-pulse"></div>
            </div>

            {/* Info Section */}
            <div className="flex-1 space-y-2 text-left">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff9d] text-sm font-mono">{">"}</span>
                    <h3 className="text-white font-mono font-bold uppercase tracking-wider">{role}</h3>
                </div>

                <div className="space-y-1 text-sm font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="text-[#00ff9d]">{">"}</span>
                        <span>NAME : {name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#00ff9d]">{">"}</span>
                        <span>EMAIL : {email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#00ff9d]">{">"}</span>
                        <span>CONTACT_NUMBER : {phone}</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4 pt-2">
                    <a href="#" className="text-gray-400 hover:text-[#D0DA3B] transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#D0DA3B] transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-[#D0DA3B] transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>
        </div>
    </div>
);

const DepartmentSection = ({ title, members }) => (
    <div className="mb-16">
        <div className="flex items-center justify-center mb-8">
            <div className="border border-red-900 bg-red-950/30 px-8 py-2 relative">
                <h2 className="text-red-500 font-mono font-bold tracking-widest uppercase">
                    {">"} {title}
                </h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {members.map((member, index) => (
                <ProfileCard key={index} {...member} />
            ))}
        </div>
    </div>
);

export default function ContactPositions() {
    // Mock Data - Replace with real data
    const technicalDept = [
        { role: "HEAD_TECHNICAL", name: "PRAKHAR_MISHRA", email: "xyz@gmail.com", phone: "99XXXXXXXX", image: "./public/Images/PrakharMishra.jpg" },
        { role: "HEAD_WEB_OPERATIONS", name: "MOHIT_SINGH", email: "abc@gmail.com", phone: "98XXXXXXXX", image: "./public/Images/MohitSingh.jpg" }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <Navbar />

            {/* Header */}
            <div className="text-center mb-16 space-y-2">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-[#00ff9d] text-4xl font-bold font-mono">{"//"}</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-wider text-white drop-shadow-[0_0_10px_#00ffff]">
                        VERTICAL_HEADS_DIRECTORY
                    </h1>
                </div>
                <p className="text-red-500 font-mono text-sm tracking-widest animate-pulse">
                    {"< ESTABLISHING_SECURE_CONNECTION... >"}
                </p>
            </div>

            {/* Departments */}
            <DepartmentSection title="TECHNICAL_DEPARTMENT" members={technicalDept} />
            <DepartmentSection title="MANAGEMENT_DEPARTMENT" members={technicalDept} />
            <DepartmentSection title="CREATIVE_DEPARTMENT" members={technicalDept} />
        </div>
    );
}