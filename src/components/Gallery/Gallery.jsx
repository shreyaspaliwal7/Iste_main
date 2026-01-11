import React, { useEffect, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import memories1 from '../../assets/galleryImages/memories-1.JPG';

// Flair-Haven images
import flairHaven1 from '../../assets/galleryImages/flair-heaven/flair-heaven-3.png';
import flairHaven2 from '../../assets/galleryImages/flair-heaven/flair-heaven-4.png';
import flairHaven3 from '../../assets/galleryImages/flair-heaven/flair-heaven2.png';
import flairHaven4 from '../../assets/galleryImages/flair-heaven/image.png';

const Gallery = () => {
  const pageRef = useRef(null);

  const events = [
    {
      id: 'flair-haven',
      name: 'Flair-Haven',
      images: [flairHaven1, flairHaven2, flairHaven3, flairHaven4],
    },
    {
      id: 'version-beta',
      name: 'Version-Beta',
      images: Array(4).fill(flairHaven1),
    },
    {
      id: 'anubhuti',
      name: 'Anubhuti',
      images: Array(4).fill(flairHaven2),
    },
    {
      id: 'chimera-x',
      name: 'Chimera-X',
      images: Array(4).fill(flairHaven3),
    },
    {
      id: 'codathon',
      name: 'Codathon',
      images: Array(6).fill(flairHaven4),
    },
  ];


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const items = pageRef.current?.querySelectorAll('.gallery-item') || [];
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenis) lenis.destroy();
    };
  }, []);

  const ImageCard = ({ image, alt }) => (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer gallery-item">
      <img src={image} alt={alt} className="w-full h-full object-cover transition-all duration-300" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border-2 border-[#F06F2B]/0 group-hover:border-[#F06F2B]/50 transition-all duration-300" />
    </div>
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#F06F2B] text-center"
            style={{ fontFamily: "'Paytone One', sans-serif" }}
          >
            <strong>Gallery</strong>
          </h1>
        </div>

        <div className="space-y-20">
          {events.map((event) => (
            <section
              key={event.id}
              className="bg-[#151515] rounded-3xl p-6 md:p-10 border border-[#F06F2B]/20"
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-[#F06F2B] mb-8"
                style={{ fontFamily: "'Paytone One', sans-serif" }}
              >
                <strong>{event.name}</strong>
              </h2>

              <div className="gallery-masonry">
                <ImageList variant="masonry" cols={event.images.length === 6 ? 3 : 2} gap={12}>
                  {event.images.map((image, imgIndex) => (
                    <ImageListItem key={imgIndex}>
                      <ImageCard image={image} alt={`${event.name} ${imgIndex + 1}`} />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
