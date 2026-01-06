import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ashayImg from '../../assets/team_img/ashay.jpg';

const OldMembers = () => {
  // Sample data - replace with actual members and photos
  const batch2027 = [
    {
      id: 1,
      name: 'Member Name',
      role: 'Student',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Member Name',
      role: 'Student',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Member Name',
      role: 'Student',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
  ];

  // This will visually be shown as BATCH - 2026 (non-collapsible)
  const batch2026 = [
    {
      id: 1,
      name: 'Member Name',
      role: "Students' Vice-Chairperson",
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Member Name',
      role: 'Student Vice-Chairperson',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Member Name',
      role: 'Student Vice-Chairperson',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Member Name',
      role: 'Student Vice-Chairperson',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Member Name',
      role: 'Student Vice-Chairperson',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Member Name',
      role: 'Student Vice-Chairperson',
      image: ashayImg,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
  ];

  const [showBatch2026, setShowBatch2026] = useState(false);
  const [showBatch2027, setShowBatch2027] = useState(false);

  const ProfileCard = ({ member }) => {
    return (
      <div className="bg-[#151515] rounded-3xl p-6 flex flex-col items-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.45)] border border-white/10 hover:border-[#F06F2B] transition-all duration-300">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[#d6c84a] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3
            className="text-lg text-center leading-tight"
            style={{ fontFamily: "'Paytone One', sans-serif" }}
          >
            {member.name}
          </h3>

          <p className="text-gray-200 text-xs text-center font-semibold leading-tight">
            {member.role}
          </p>

          <div className="flex gap-4 mt-1 text-white">
            <a
              href={member.social.instagram}
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={26} />
            </a>
            <a
              href={member.social.facebook}
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={26} />
            </a>
            <a
              href={member.social.twitter}
              className="hover:text-sky-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={26} />
            </a>
            <a
              href={member.social.linkedin}
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Orange accent lines in background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {Array.from({ length: 14 }).map((_, idx) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className="absolute left-1/2 top-1/2 h-[2px] w-[120%] origin-left bg-gradient-to-r from-[#F06F2B] via-transparent to-transparent"
            style={{ transform: `rotate(${idx * 12 - 45}deg)` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            CONTACTS OF VERTICAL HEAD
          </h1>
        </div>

        {/* MEMBERS Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            MEMBERS
          </h2>
        </div>

        {/* Batch 2026 Section - collapsible, black background when open */}
        <div className="mb-14">
          <button
            type="button"
            onClick={() => setShowBatch2026((prev) => !prev)}
            className="w-full flex items-center justify-between bg-[#151515] border border-[#F06F2B]/50 rounded-2xl px-5 py-4 text-left hover:border-[#F06F2B] transition-colors"
          >
            <span
              className="text-2xl md:text-3xl text-white"
              style={{ fontFamily: "'Paytone One', sans-serif" }}
            >
              BATCH - 2026
            </span>
            <span className={`text-white transition-transform ${showBatch2026 ? 'rotate-180' : ''}`}>
              <ChevronDown size={28} />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showBatch2026 && (
              <motion.div
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } }}
                exit={{ opacity: 0, y: 18, filter: 'blur(8px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
                className="mt-6 bg-[#0f0f0f] rounded-3xl p-6 md:p-8 border border-[#F06F2B]/60 shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {batch2026.map((member) => (
                    <ProfileCard key={member.id} member={member} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Batch 2027 Section - collapsible, orange background (shown below 2026) */}
        <div className="mb-20">
          <button
            type="button"
            onClick={() => setShowBatch2027((prev) => !prev)}
            className="w-full flex items-center justify-between bg-[#151515] border border-[#F06F2B]/50 rounded-2xl px-5 py-4 text-left hover:border-[#F06F2B] transition-colors"
          >
            <span
              className="text-2xl md:text-3xl text-white"
              style={{ fontFamily: "'Paytone One', sans-serif" }}
            >
              BATCH - 2027
            </span>
            <span className={`text-white transition-transform ${showBatch2027 ? 'rotate-180' : ''}`}>
              <ChevronDown size={28} />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showBatch2027 && (
              <motion.div
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } }}
                exit={{ opacity: 0, y: 18, filter: 'blur(8px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
                className="mt-6 bg-[#F06F2B] rounded-3xl p-6 md:p-8 border border-[#F06F2B]/60 shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {batch2027.map((member) => (
                    <ProfileCard key={member.id} member={member} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OldMembers;
