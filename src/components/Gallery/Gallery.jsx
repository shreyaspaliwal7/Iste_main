import React from 'react';
import { motion } from 'framer-motion';
import memories1 from '../../assets/galleryImages/memories-1.JPG';

const Gallery = () => {

  const events = [
    {
      id: 'flair-haven',
      name: 'Flair-Haven',
      images: Array(4).fill(memories1),
    },
    {
      id: 'version-beta',
      name: 'Version-Beta',
      images: Array(4).fill(memories1),
    },
    {
      id: 'anubhuti',
      name: 'Anubhuti',
      images: Array(4).fill(memories1),
    },
    {
      id: 'chimera-x',
      name: 'Chimera-X',
      images: Array(4).fill(memories1),
    },
    {
      id: 'codathon',
      name: 'Codathon',
      images: Array(6).fill(memories1),
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const getItemVariants = (index) => {
    const isEven = index % 2 === 0;
    return {
      hidden: {
        opacity: 0,
        x: isEven ? -100 : 100,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const ImageCard = ({ image, index }) => {
    const itemVariants = getItemVariants(index);

    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        className="relative overflow-hidden rounded-lg group cursor-pointer"
      >
        <motion.img
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
          variants={imageHoverVariants}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 border-2 border-[#F06F2B]/0 group-hover:border-[#F06F2B]/50 transition-all duration-300" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold text-[#F06F2B] text-center"
            style={{ fontFamily: "'Paytone One', sans-serif" }}
          >
            Gallery
          </h1>
        </motion.div>


        <div className="space-y-20">
          {events.map((event, eventIndex) => (
            <motion.section
              key={event.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: eventIndex * 0.2 }}
              className="bg-[#151515] rounded-3xl p-6 md:p-10 border border-[#F06F2B]/20"
            >

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-[#F06F2B] mb-8"
                style={{ fontFamily: "'Paytone One', sans-serif" }}
              >
                {event.name}
              </motion.h2>


              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`grid gap-4 ${event.images.length === 4
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : event.images.length === 6
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  }`}
              >
                {event.images.map((image, imgIndex) => (
                  <ImageCard key={imgIndex} image={image} index={imgIndex} />
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
