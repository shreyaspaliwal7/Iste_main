import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import ashayImg from '../../assets/team_img/ashay.jpg';

const OldMembers = () => {
  // Sample data - you can replace this with actual data
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

  const batch2028 = [
    {
      id: 1,
      name: 'Member Name',
      role: 'Students\' Vice-Chairperson',
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

  const ProfileCard = ({ member }) => {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
        <div className="flex flex-col items-center space-y-3">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500/30">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h3 className="text-white font-semibold text-sm text-center">{member.name}</h3>
          
          {/* Role */}
          <p className="text-gray-400 text-xs text-center">{member.role}</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-2">
            <a 
              href={member.social.instagram} 
              className="text-gray-400 hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={member.social.facebook} 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a 
              href={member.social.twitter} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} />
            </a>
            <a 
              href={member.social.linkedin} 
              className="text-gray-400 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
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

        {/* Batch 2027 Section - No Orange Background */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">BATCH - 2027</h2>
            <div className="text-orange-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {batch2027.map((member) => (
              <ProfileCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Cross Line Component with Orange Color - Using ashay.jpg as placeholder */}
        <div className="flex items-center justify-center my-16">
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-orange-500"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 bg-black">
                <img 
                  src={ashayImg} 
                  alt="Cross line component"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Batch 2028 Section - With Orange Background */}
        <div className="mb-20">
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">BATCH - 2028</h2>
              <div className="text-orange-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {batch2028.map((member) => (
                <ProfileCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldMembers;
