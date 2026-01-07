
import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center text-[#1A1A1A] font-sans pb-20 relative" id='about'>

            <h2 className='absolute text-4xl font-paytone top-10 right-[45%] text-white z-10 '>ABOUT US</h2>

            <main className=" max-w-6xl mx-auto mt-16 px-6 space-y-24">


                <div className="bg-black/70 top-16 p-10 rounded-[2.5rem] shadow-xl relative">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start flex items-center justify-center">
                        <div className="space-y-4">


                            <div className="bg-white rounded-xl overflow-hidden border-[6px] border-[#2A2A2A]">
                                <img
                                    src="\Images\DSC06543.JPG"
                                    alt="Laptop Workspace"
                                    className="w-full h-auto block"
                                />

                            </div>

                        </div>

                        <div className="pt-8">
                            <p className="text-white text-base leading-relaxed">
                                Indian Society for Technical Education (ISTE) is a National level non-profit Society for the Technical Education System in our country. ISTE assists and contributes to the production and development of top quality professional technocrats. It has over 1505 Student Chapters at the institutional level, one such chapter is ISTE SC MANIT. ISTE SC MANIT is one of the oldest student organizations in MANIT. Started in 2003, it has been actively contributing towards the professional and technical education of the students at MANIT and beyond. It has been conducting national level events like ChimeraX - The Multi-city Quizzing Competition, CODATHON - The Inter NIT Coding Contest, Anubhuti - The Talkshow, Megatreopuz - The Online Cryptic Hunt, Version β - The National level Hackathon. Events like these have gifted ISTE SC MANIT the Best Students' Chapter Award in the MP & Chhattisgarh region, not once but thrice.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div >
    );
};

export default AboutPage;