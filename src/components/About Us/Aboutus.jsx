// import React from 'react';

// const AboutUs = () => {
//     return (
//         <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 overflow-hidden">
//             {/* The Background Layer 
//           bg-black/70 creates the 70% opacity black overlay 
//       */}
//             <div className='absolute text-4xl font-paytone top-10 text-white z-50 '>ABOUT US</div>
//             <div className="absolute inset-0 z-0">
//                 <img
//                     src="\Images\Screenshot 2026-01-03 111819.png"
//                     alt="Office Background"
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Content Container */}
//             <div className="relative z-20 max-w-7xl mx-auto w-full">
//                 <div className="absolute bg-black/70 h-full z-10 rounded-xl" />

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                     {/* Left Side: Photo */}
//                     <div className="order-2 lg:order-1">
//                         <div className="relative group">

//                             <img
//                                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
//                                 alt="Our Team"
//                                 className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side: Text Content */}
//                     <div className="order-1 lg:order-2 text-white space-y-6">
//                         Indian Society for Technical Education (ISTE) is a National level non-profit Society for the Technical Education System in our country. ISTE assists and contributes to the production and development of top quality professional technocrats. It has over 1505 Student Chapters at the institutional level, one such chapter is ISTE SC MANIT. ISTE SC MANIT is one of the oldest student organizations in MANIT. Started in 2003, it has been actively contributing towards the professional and technical education of the students at MANIT and beyond. It has been conducting national level events like ChimeraX - The Multi-city Quizzing Competition, CODATHON - The Inter NIT Coding Contest, Anubhuti - The Talkshow, Megatreopuz - The Online Cryptic Hunt, Version β - The National level Hackathon. Events like these have gifted ISTE SC MANIT the Best Students' Chapter Award in the MP & Chhattisgarh region, not once but thrice.
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };
// //  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
// export default AboutUs;
import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center text-[#1A1A1A] font-sans pb-20 relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="\Images\Screenshot 2026-01-03 111819.png"
                    alt="Office Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className='absolute text-4xl font-paytone top-10 right-[45%] text-white z-50 '>ABOUT US</h2>

            <main className=" max-w-6xl mx-auto mt-16 px-6 space-y-24">

                {/* --- First Section --- */}
                <div className="bg-black/70 top-16 p-10 rounded-[2.5rem] shadow-xl relative">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start flex items-center justify-center">
                        <div className="space-y-4">
                            {/* Dark Image Container */}

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