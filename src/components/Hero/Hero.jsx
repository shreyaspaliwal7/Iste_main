import React from 'react'
import "./Hero.css"
// import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            {/* <div className="w-full bg-cover bg-center bg-no-repeat transition-all duration-500
                    bg-[url('\Images\3284223 (1).jpg')] 
                    md:bg-[url('\Images\3284223.jpg')]"> */}
                <img className='absolute h-full bg-cover w-full -z-10 hidden md:block' src="\Images\914.jpg" alt="" />
                <img className='absolute w-full h-full bg-cover -z-10 block md:hidden' src="\Images\914 (1).jpg" alt="" />
                <img className='absolute w-full h-full bg-cover -z-10 block sm:hidden' src="\Images\914 (2).jpg" alt="" />
                <div className="mt-10 flex flex-col items-center justify-center min-h-[94vh] gap-10 px-4 text-center">
                    {/* Title with "Outlined" / Multiline effect */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        <span className=" fonthead text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                            style={{ WebkitTextStroke: '1px #ea580c' }}>
                            ISTE   SC MANIT
                        </span>
                    </h1>

                    {/* Description Text */}
                    <p className="fonthead max-w-2xl font-m text-white font-black uppercase text-lg md:text-xl tracking-wider mt-8 mb-12">
                        Best Students' Chapter in Madhya Pradesh - <br className="hidden md:block" />
                        Chhattisgarh Region from 3 consecutive years.
                    </p>

                    {/* Social Media Icons */}
                    <div className='flex gap-5'>
                        {/* LinkedIn */}
                        {/* Instagram */}
                        <a href="https://www.instagram.com/istemanit/" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/ISTESCMANIT" className="hover:opacity-80 transition-opacity bg-white text-black rounded-full p-1 h-[40px] w-[40px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/iste-sc-manit" className="hover:opacity-80 transition-opacity bg-white text-black rounded-lg p-1 h-[40px] w-[40px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Hero



