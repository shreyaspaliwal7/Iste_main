import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Navbar from "./Navbar";
import { technicalHeads, creativeHeads, managementHeads } from '../assets/VerticalHeads';

const ProfileCard = ({ vertical, name, emailAddress, linkedinProfile, instagramProfile, facebookProfile, xProfile, photo }) => {
    // Image handling validation
    let imageSrc = photo;
    if (!imageSrc || imageSrc.trim() === "") {
        imageSrc = null;
    } else if (imageSrc.includes('drive.google.com')) {
        const idMatch = imageSrc.match(/id=([a-zA-Z0-9_-]+)/);
        if (idMatch) {
            imageSrc = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w500`;
        }
    }

    // Helper for social links
    const SocialLink = ({ url, Icon, colorClass }) => {
        const hasLink = url && url.trim() !== "";

        if (!hasLink) {
            return (
                <div className="text-gray-600 cursor-default">
                    <Icon size={24} />
                </div>
            );
        }

        let href = url;
        if (!href.startsWith('http')) href = `https://${href}`;
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${colorClass} transition-colors`}>
                <Icon size={24} />
            </a>
        );
    };

    return (
        <div className="relative p-6 border border-gray-800 bg-[#151515] rounded-3xl w-full max-w-xl mx-auto group hover:border-[#F06F2B] transition-colors duration-300 overflow-hidden shadow-lg">

            <div className="flex flex-col md:flex-row items-center gap-6 pl-4">

                <div className="relative">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-[3px] border-[#d6c84a] group-hover:border-[#D0DA3B] transition-colors shadow-lg flex-shrink-0">
                        <img src={imageSrc} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                </div>


                <div className="flex-1 space-y-4 text-left w-full overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-white font-paytone text-lg uppercase tracking-wider">{vertical?.replace('Heads', 'Head')}</h3>
                    </div>

                    <div className="space-y-3 text-base font-sans text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-[#F06F2B] flex-shrink-0">Name:</span>
                            <span className="truncate">{name}</span>
                        </div>
                        {emailAddress && (
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="font-bold text-[#F06F2B] flex-shrink-0">Email:</span>
                                <span className="truncate block">{emailAddress}</span>
                            </div>
                        )}
                        {/* Removed Phone as not in data */}
                    </div>


                    <div className="flex gap-4 mt-5 pt-2">
                        <SocialLink url={instagramProfile} Icon={Instagram} colorClass="text-pink-400" />
                        <SocialLink url={facebookProfile} Icon={Facebook} colorClass="text-blue-400" />
                        <SocialLink url={xProfile} Icon={Twitter} colorClass="text-sky-400" />
                        <SocialLink url={linkedinProfile} Icon={Linkedin} colorClass="text-blue-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const DepartmentSection = ({ title, members }) => {
    if (!members || members.length === 0) return null;
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-paytone text-[#F06F2B] mb-10 text-center uppercase tracking-wider">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {members.map((member, index) => (
                    <ProfileCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default function ContactPositions() {

    return (
        <div className="min-h-screen relative overflow-hidden pt-24 pb-12">
            <Navbar />

            {/* Standard Background */}
            <div className="bg-[#141414] fixed inset-0 -z-20 pointer-events-none overflow-hidden">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="none"
                >
                    <g stroke="#f97316" strokeWidth="1" strokeOpacity="0.4">
                        <line x1="250" y1="950" x2="-100" y2="0" />
                        <line x1="250" y1="950" x2="-100" y2="400" />
                        <line x1="250" y1="950" x2="-100" y2="700" />
                        <line x1="250" y1="950" x2="1100" y2="1050" />
                        <line x1="250" y1="950" x2="1100" y2="1200" />
                    </g>
                </svg>
            </div>


            <div className="text-center mb-16 space-y-2">
                <h1 className="text-4xl md:text-5xl font-paytone text-white uppercase tracking-wide">
                    CONTACTS OF VERTICAL HEAD
                </h1>
            </div>


            <DepartmentSection title="TECHNICAL DEPARTMENT" members={technicalHeads} />
            <DepartmentSection title="MANAGEMENT DEPARTMENT" members={managementHeads} />
            <DepartmentSection title="CREATIVE DEPARTMENT" members={creativeHeads} />
        </div>
    );
}