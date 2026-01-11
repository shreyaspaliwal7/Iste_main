import React, { useEffect, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import memories1 from '../../assets/galleryImages/memories-1.JPG';

const Gallery = () => {
  const pageRef = useRef(null);

  // Dynamically import all gallery images organized by event folders
  // Structure: galleryImages/event-name/image1.jpg, image2.jpg, etc.
  const eventImagesMap = useMemo(() => {
    const imagesMap = {};
    
    // Define event names
    const eventNames = ['flair-heaven', 'version-beta', 'anubhuti', 'chimera-x', 'codathon'];
    
    // Try to load images from event-specific folders
    // Note: import.meta.glob requires static paths, so we need to check each folder separately
    try {
      // Flair-Haven
      const flairHavenImages = import.meta.glob(
        '../assets/galleryImages/flair-heaven/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
        { eager: true }
      );
      if (Object.keys(flairHavenImages).length > 0) {
        imagesMap['flair-heaven'] = Object.values(flairHavenImages).map(img => img.default || img).filter(Boolean);
      }
    } catch (error) {
      console.warn('Could not load images for flair-haven:', error);
      imagesMap['flair-heaven'] = [];
    }

    try {
      // Version-Beta
      const versionBetaImages = import.meta.glob(
        '../assets/galleryImages/version-beta/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
        { eager: true }
      );
      if (Object.keys(versionBetaImages).length > 0) {
        imagesMap['version-beta'] = Object.values(versionBetaImages).map(img => img.default || img).filter(Boolean);
      }
    } catch (error) {
      console.warn('Could not load images for version-beta:', error);
      imagesMap['version-beta'] = [];
    }

    try {
      // Anubhuti
      const anubhutiImages = import.meta.glob(
        '../assets/galleryImages/anubhuti/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
        { eager: true }
      );
      if (Object.keys(anubhutiImages).length > 0) {
        imagesMap['anubhuti'] = Object.values(anubhutiImages).map(img => img.default || img).filter(Boolean);
      }
    } catch (error) {
      console.warn('Could not load images for anubhuti:', error);
      imagesMap['anubhuti'] = [];
    }

    try {
      // Chimera-X
      const chimeraXImages = import.meta.glob(
        '../assets/galleryImages/chimera-x/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
        { eager: true }
      );
      if (Object.keys(chimeraXImages).length > 0) {
        imagesMap['chimera-x'] = Object.values(chimeraXImages).map(img => img.default || img).filter(Boolean);
      }
    } catch (error) {
      console.warn('Could not load images for chimera-x:', error);
      imagesMap['chimera-x'] = [];
    }

    try {
      // Codathon
      const codathonImages = import.meta.glob(
        '../assets/galleryImages/codathon/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
        { eager: true }
      );
      if (Object.keys(codathonImages).length > 0) {
        imagesMap['codathon'] = Object.values(codathonImages).map(img => img.default || img).filter(Boolean);
      }
    } catch (error) {
      console.warn('Could not load images for codathon:', error);
      imagesMap['codathon'] = [];
    }
    
    // Fallback: Load all images from main galleryImages folder if event folders don't exist
    if (Object.keys(imagesMap).length === 0) {
      try {
        const allImages = import.meta.glob(
          '../assets/galleryImages/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}',
          { eager: true }
        );
        
        const imageArray = Object.values(allImages).map(img => {
          if (typeof img === 'string') return img;
          if (img.default) return img.default;
          return img;
        }).filter(Boolean);
        
        // If images are found in main folder, distribute them (you can manually organize them later)
        if (imageArray.length > 0) {
          console.log('Found images in main folder, distributing across events');
          // Distribute images across events
          eventNames.forEach((eventName, index) => {
            const startIdx = index * 4;
            const endIdx = eventName === 'codathon' ? startIdx + 6 : startIdx + 4;
            imagesMap[eventName] = imageArray.slice(startIdx, endIdx).filter(Boolean);
          });
        }
      } catch (error) {
        console.error('Error loading gallery images:', error);
      }
    }
    
    console.log('Event images map:', imagesMap);
    return imagesMap;
  }, []);

  const events = [
    {
      id: 'flair-heaven',
      name: 'Flair-Haven',
      images: eventImagesMap['flair-heaven'] || [],
    },
    {
      id: 'version-beta',
      name: 'Version-Beta',
      images: eventImagesMap['version-beta'] || [],
    },
    {
      id: 'anubhuti',
      name: 'Anubhuti',
      images: eventImagesMap['anubhuti'] || [],
    },
    {
      id: 'chimera-x',
      name: 'Chimera-X',
      images: eventImagesMap['chimera-x'] || [],
    },
    {
      id: 'codathon',
      name: 'Codathon',
      images: eventImagesMap['codathon'] || [],
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
