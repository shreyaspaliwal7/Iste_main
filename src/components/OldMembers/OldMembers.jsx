import React, { useState, useMemo } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import team2022 from '../../assets/TeamData2022';
import team2023 from '../../assets/TeamData2023';
import team2024 from '../../assets/TeamData2024';
import team2025 from '../../assets/TeamData2025';
import dummyImg from '../../assets/team_img/dummy.png';

const OldMembers = () => {
  const [showYear2022, setShowYear2022] = useState(false);
  const [showYear2023, setShowYear2023] = useState(false);
  const [showYear2024, setShowYear2024] = useState(false);
  const [showYear2025, setShowYear2025] = useState(false);

  // Filter and format data for year 4 members only
  const formatMemberData = (data) => {
    if (!data || !Array.isArray(data)) {
      return [];
    }
    return data
      .filter((member) => {
        const year = member.year?.toString().toLowerCase() || '';
        return year === '4' || year === '4th' || year.includes('4th');
      })
      .map((member, index) => {
        // Handle photo - could be string URL, require() object, or empty
        let photoSrc = dummyImg;
        if (member.photo) {
          if (typeof member.photo === 'string' && member.photo.trim() !== '') {
            photoSrc = member.photo;
          } else if (typeof member.photo === 'object' && member.photo.default) {
            photoSrc = member.photo.default;
          } else if (typeof member.photo === 'object') {
            photoSrc = member.photo;
          }
        }
        
        return {
          id: index + 1,
          name: member.name || 'Unknown',
          image: photoSrc,
          social: {
            linkedin: member.linkedinProfile || member.linkedInProfile || '',
            instagram: member.instagramProfile || '',
            facebook: member.facebookProfile || '',
            twitter: member.twitterProfile || member.xProfile || '',
          }
        };
      });
  };

  const year2022Members = useMemo(() => formatMemberData(team2022), []);
  const year2023Members = useMemo(() => formatMemberData(team2023), []);
  const year2024Members = useMemo(() => formatMemberData(team2024), []);
  const year2025Members = useMemo(() => formatMemberData(team2025), []);

  const ProfileCard = ({ member }) => {
    const getImageSrc = (photo) => {
      if (!photo) return dummyImg;
      if (typeof photo === 'string') {
        if (photo.trim() === '') return dummyImg;
        return photo;
      }
      if (typeof photo === 'object' && photo.default) {
        return photo.default;
      }
      if (typeof photo === 'object') {
        return photo;
      }
      return dummyImg;
    };

    return (
      <div className="bg-[#303030] rounded-3xl p-6 flex flex-col items-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.45)] border border-white/10 hover:border-[#F06F2B] transition-all duration-300 hover:shadow-[0_0_40px_rgba(240,111,43,0.9)] hover:-translate-y-1 hover:scale-[1.02]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-[3px] border-[#d6c84a] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <img
              src={getImageSrc(member.image)}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = dummyImg;
              }}
            />
          </div>

          <h3
            className="text-lg text-center leading-tight"
            style={{ fontFamily: "'Paytone One', sans-serif" }}
          >
            {member.name}
          </h3>

          <div className="flex gap-4 mt-1 text-white">
            {member.social.linkedin && typeof member.social.linkedin === 'string' && member.social.linkedin.trim() !== '' && member.social.linkedin.toLowerCase() !== 'none' && (
              <a
                href={member.social.linkedin.startsWith('http') ? member.social.linkedin : `https://${member.social.linkedin.replace(/^https?:\/\//, '')}`}
                className="hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={26} />
              </a>
            )}
            {member.social.instagram && typeof member.social.instagram === 'string' && member.social.instagram.trim() !== '' && member.social.instagram.toLowerCase() !== 'none' && (
              <a
                href={member.social.instagram.startsWith('http') ? member.social.instagram : (member.social.instagram.includes('instagram.com') ? `https://${member.social.instagram.replace(/^https?:\/\//, '')}` : `https://instagram.com/${member.social.instagram.replace('@', '').replace(/^instagram\.com\//, '')}`)}
                className="hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={26} />
              </a>
            )}
            {member.social.facebook && typeof member.social.facebook === 'string' && member.social.facebook.trim() !== '' && member.social.facebook.toLowerCase() !== 'none' && (
              <a
                href={member.social.facebook.startsWith('http') ? member.social.facebook : `https://${member.social.facebook.replace(/^https?:\/\//, '')}`}
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={26} />
              </a>
            )}
            {member.social.twitter && typeof member.social.twitter === 'string' && member.social.twitter.trim() !== '' && member.social.twitter.toLowerCase() !== 'none' && (
              <a
                href={member.social.twitter.startsWith('http') ? member.social.twitter : `https://twitter.com/${member.social.twitter.replace('@', '').replace(/^twitter\.com\//, '')}`}
                className="hover:text-sky-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={26} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const CollapsibleSection = ({ year, isOpen, onToggle, members }) => {
    return (
      <div className="mb-14">
        <button
          type="button"
          onClick={onToggle}
          className="w-full flex items-center justify-between bg-[#151515] border border-[#F06F2B]/50 rounded-2xl px-5 py-4 text-left hover:border-[#F06F2B] transition-colors"
        >
          <span
            className="text-2xl md:text-3xl text-white"
            style={{ fontFamily: "'Paytone One', sans-serif" }}
          >
            {year}
          </span>
          <span className={`text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={28} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } }}
              exit={{ opacity: 0, y: 18, filter: 'blur(8px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
              className="mt-6 bg-[#0f0f0f] rounded-3xl p-6 md:p-8 border border-[#F06F2B]/60 shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
            >
              {members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {members.map((member) => (
                    <ProfileCard key={member.id} member={member} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 py-8">No members found for this year.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Orange accent lines in background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {Array.from({ length: 14 }).map((_, idx) => (
          <span
            key={idx}
            className="absolute left-1/2 top-1/2 h-[2px] w-[120%] origin-left bg-gradient-to-r from-[#F06F2B] via-transparent to-transparent"
            style={{ transform: `rotate(${idx * 12 - 45}deg)` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            CONTACTS OF VERTICAL HEAD
          </h1>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            PREVIOUS YEARS TEAMS
          </h2>
        </div>

        <CollapsibleSection
          year="YEAR - 2025"
          isOpen={showYear2025}
          onToggle={() => setShowYear2025((prev) => !prev)}
          members={year2025Members}
        />

        <CollapsibleSection
          year="YEAR - 2024"
          isOpen={showYear2024}
          onToggle={() => setShowYear2024((prev) => !prev)}
          members={year2024Members}
        />

        <CollapsibleSection
          year="YEAR - 2023"
          isOpen={showYear2023}
          onToggle={() => setShowYear2023((prev) => !prev)}
          members={year2023Members}
        />

        <CollapsibleSection
          year="YEAR - 2022"
          isOpen={showYear2022}
          onToggle={() => setShowYear2022((prev) => !prev)}
          members={year2022Members}
        />
      </div>
    </div>
  );
};

export default OldMembers;
