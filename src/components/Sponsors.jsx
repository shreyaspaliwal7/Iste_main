import React, { useMemo } from 'react';
import Reveal from './Reveal';

const Sponsors = () => {

    const images = import.meta.glob('../assets/sponsors/*.{png,jpeg,jpg,svg,jfif,PNG,JPG,JPEG}', { eager: true });


    const sponsorList = useMemo(() => Object.values(images).map(img => img.default), [images]);

    return (
        <section className=" w-full py-16" id='sponsors'>
            <div className="container mx-auto px-8 md:px-12 max-w-5xl">

                <div className="text-center mb-12">
                    <h2 className="text-[#f06f2b] font-paytone text-4xl tracking-wide uppercase">
                        OUR SPONSORS
                    </h2>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsorList.map((src, index) => (
                        <Reveal key={index} delay={index * 20} className="h-full">
                            <div
                                className="bg-[#6b6b6b] border border-white/10 rounded-2xl h-36 flex items-center justify-center p-6 hover:scale-105 hover:border-[#f06f2b] hover:shadow-[0_0_15px_rgba(188,144,64,0.3)] transition-all duration-300"
                            >
                                <img
                                    src={src}
                                    alt={`Sponsor ${index + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
