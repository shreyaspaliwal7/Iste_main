import React from 'react'
import "./Hero.css"
// import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <img className='absolute w-full -z-40' src="\Images\3284223.jpg" alt="" />
            <div className="mt-10 flex flex-col items-center justify-center min-h-screen gap-10 px-4 text-center">
                {/* Title with "Outlined" / Multiline effect */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                    <span className=" fonthead text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                        style={{ WebkitTextStroke: '1px #ea580c' }}>
                        ISTE SC MANIT
                    </span>
                </h1>

                {/* Description Text */}
                <p className="fonthead max-w-2xl font-m text-white font-black uppercase text-lg md:text-xl tracking-wider mb-12">
                    Best Students' Chapter in Madhya Pradesh - <br className="hidden md:block" />
                    Chhattisgarh Region from 3 consecutive years.
                </p>

                {/* Decorative Horizontal Lines */}
                <div className="flex flex-col items-center w-full max-w-md gap-2 mb-12">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                    <div className="w-3/4 h-[2px] bg-black"></div>
                    <div className="w-1/2 h-[2px] bg-black"></div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-6">
                    {/* LinkedIn */}
                    <a href="#" className="bg-black text-white p-3 rounded-sm hover:scale-110 transition-transform">
                        <img src="https://www.svgrepo.com/show/494209/linkedin.svg" alt="" />
                    </a>

                    {/* Instagram - Circular variant from image */}
                    {/* <a href="#" className="bg-white border-2 border-gray-300 p-2 rounded-full shadow-inner hover:scale-110 transition-transform">
                        <div className="bg-black text-white rounded-full p-1">
                            <FaInstagram size={18} />
                        </div>
                    </a> */}

                    {/* Facebook */}
                    {/* <a href="#" className="bg-black text-white p-3 rounded-sm hover:scale-110 transition-transform">
                        <FaFacebookF size={24} />
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Hero