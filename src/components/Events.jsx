import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import anubhuti from '../assets/logoLight/anubhuti.png';
import chimerax from '../assets/logoLight/chimerax.png';
import codathon from '../assets/logoLight/codathon.png';
import flairHaven from '../assets/logoLight/flairHaven.png';
import megatrep from '../assets/logoLight/megatrep.png';
import versionBeta from '../assets/logoLight/versionBeta.png';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const events = [
        {
            id: 0,
            name: 'Version Beta',
            heading: 'Version Beta',
            title: 'IDE for your code !',
            img: versionBeta,
            description: "The second iteration of Central India's Largest Hackathon - Version Beta saw new heights this year. Out of the 120+ teams that applied, 31 teams from all over the country were shortlisted to be called on-site for the 36-hour long hackathon. The participating teams had to come up with an innovative solution for the given problem statements. The 5 problem statements were closely related to real-life scenarios. The hackathon was mentored and judged by experts like Mr. Sabyasachi Mukhopadhyay, Mrinal Jain, Abhishek Yagnik, and Sameer Khan from Facebook Developer Circle of Kolkata, Indore, and Bhopal. After an intense competition, the team from MANIT, Bhopal bagged the first prize.",
            date: 'October 2023',
            link: 'https://versionbeta.istemanit.in/',
            isLarge: true
        },
        {
            id: 2,
            name: 'Flair Haven',
            heading: 'Flair Haven',
            title: 'A series of immersive Workshops',
            img: flairHaven,
            description: "With competition skyrocketing, it's more substantial now than ever to be acquainted with the growing needs of the industry. And when it comes to learning in-demand skills and putting them to practical use, nothing is more promising than workshops. To provide learning opportunities with hands-on experience, we at ISTE SC MANIT organize intensive project-based workshops under Flair Haven, which are professionally curated by industry experts. These workshops are a great way to expose yourself to new skills and sharpen the existing ones. We always try to provide incredible learning opportunities to all the participants through our workshops and the incredulous response we receive each year proves just that. At the end of the day, the workshop is an unforgettable experience for both the mentors and the students.",
            date: 'October 2023',
            link: 'https://flairhaven.istemanit.in/',
            isLarge: true
        },
        {
            id: 3,
            name: 'Codathon',
            heading: 'Codathon',
            title: 'Coding Contest',
            img: codathon,
            description: "Codathon '20 can be marked as the beginning of our Annual student conclave - Chimera. It broke all its previous records by completing over 6,500 registrations for the Inter NIT coding contest. The event is designed in a way for everyone to participate. The seven-day coding event consisted of questions to test the problem-solving ability of the participants. Cash prizes totaling up to Rs 32,000, Internship at HackerEarth, and many other goodies like t-shirts, badges, bags, and books from Coding Blocks and HackerEarth were awarded to deserving candidates. The winner of Codathon '20 was Aryaman Arora from NIT Allahabad and the best female coder was bagged by Ritika Mor.",
            date: 'January 2023',
            link: 'https://assessment.hackerearth.com/challenges/college/codathon22/',
            isCodathon: true
        },
        {
            id: 5,
            name: 'Megatreopuz',
            heading: 'Megatreopuz',
            title: 'Online Cryptic Hunt!!!',
            img: megatrep,
            description: 'As ISTE proudly claims Megatreopuz as its one of a kind event each year, this year was no different. A battle of wits in the form of cunning puzzles, coded messages, and mind-boggling questions is what characterizes this hunt. Participants rack their brains for solutions for over 7 days with difficulty increases with every level. Megatreopuz has witnessed participation from all around the globe since its inception and is touted as one of the most intriguing cryptic challenges ever since. The winner this year was Gaurav Loothra, Alumnus of Amity University.',
            date: 'October 2023',
            link: 'https://megatreopuz.istemanit.in/',
            isLarge: true
        },
        {
            id: 6,
            name: 'ChimeraX',
            heading: 'CHIMERA-X',
            title: 'Quizzing Contest',
            img: chimerax,
            description: "Chimera-X is central India's largest and ISTE SC MANIT's flagship-quizzing event under Chimera – ISTE's annual student conclave. The 18th edition of Chimera-X was a huge success and it garnered students from across the country. The prelims were held across 10 cities and received overwhelming participation and extremely positive feedback from everywhere. The quiz consisted of three rounds - written, audio-visual round, and a grand finale. One team from each city was selected for the final round. The grand finale was held at MANIT, Bhopal on 16th February 2020 and was hosted by Quiz Master Mahendra Mohan Das. With over 2000 teams participating, a team from MANIT stood first followed by the team from CBIT, Hyderabad.",
            date: 'March 2023',
            link: 'https://chimerax.istemanit.in/',
            isChimeraX: true,
            isLarge: true
        },
        {
            id: 8,
            name: 'Anubhuti',
            heading: 'ANUBHUTI',
            title: 'Unfloding Hidden Stories!',
            img: anubhuti,
            description: "Anubhuti, an annual talk show is conducted by ISTE each year wherein esteemed guests from different backgrounds and tons of experience are invited. It serves as a medium for students to learn and get inspired. This year it was no different, the two speakers were exemplary individuals filled with success stories. The first was Dharamveer Singh Chauhan, the CEO, and Co-founder of Zostel, a treat for all the curious budding entrepreneurs out there. While a firm believer in the ideology of not giving up, he not only motivated students not to give up but also to never stop innovating. The second speaker – Aaditya Mishra, MANIT's very own visiting his alma mater to share his journey into becoming an IPS. It motivated various students who dream to take UPSC in the next phase of their lives.",
            date: 'March 2023',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScPeoYisaqjsX0MH2vyHzDTCm81fHil152ysWcAnv4t23viLw/closedform',
        },
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedEvent(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className=" w-full py-16 relative overflow-hidden" id='events'>
            <div className="container mx-auto px-12 md:px-32 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-white font-paytone text-4xl tracking-wide uppercase">
                        OUR EVENTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {events.map((event, index) => (
                        <Reveal key={event.id} delay={index * 50} className="w-full h-full">
                            <div

                                className="bg-gradient-to-b from-[#2A2A2A] to-[#151515] rounded-2xl flex flex-col items-center justify-between p-6 md:p-8 min-h-[240px] md:min-h-[280px] h-full transition-transform duration-500 hover:scale-105 border border-white/10 w-full"
                                style={{
                                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 40px, rgba(0, 0, 0, 0.2) 0px -10px 20px'
                                }}
                            >
                                {loading ? (
                                    <div className="w-full h-[80px] md:h-[100px] bg-gray-800 animate-pulse rounded-[10%] mb-3"></div>
                                ) : (
                                    <div className="w-full p-0 m-0 flex justify-center items-center overflow-hidden">
                                        <img
                                            src={event.img}
                                            alt={event.name}

                                            className={`w-full object-contain rounded-[10%] z-20 mb-3 
                                                ${event.isLarge ? 'h-[150px] lg:h-[180px]' : 'h-[80px] lg:h-[100px]'}
                                                ${event.isCodathon ? 'bg-transparent' : ''} 
                                                ${event.isChimeraX ? 'scale-105' : ''}`}
                                        />
                                    </div>
                                )}

                                <div className="w-full flex justify-evenly items-center mt-1">
                                    <a
                                        href={event.link}

                                        className="text-[#BC9040] text-[18px] text-center w-full py-[8px] no-underline hover:text-[#D4A550] transition-colors cursor-pointer"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Visit Website
                                    </a>
                                    <button
                                        onClick={() => openModal(event)}
                                        className="text-[#BC9040] text-[18px] text-center w-full py-[8px] bg-transparent border-none hover:text-[#D4A550] transition-colors cursor-pointer"
                                    >
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
                    onClick={closeModal}
                >

                    <div
                        className="bg-[#1A1A1A] border border-white/10 rounded-2xl w-full max-w-2xl lg:max-w-3xl p-6 md:p-8 relative shadow-2xl flex flex-col items-center max-h-[95vh] overflow-y-auto md:overflow-y-visible"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl md:text-3xl font-paytone text-[#BC9040] text-center mb-1 uppercase tracking-wide">{selectedEvent.heading}</h2>
                        <h3 className="text-lg font-medium text-white text-center mb-2">{selectedEvent.title}</h3>
                        <div className="h-0.5 w-16 bg-[#BD9090] mb-4"></div>
                        <h4 className="text-sm text-gray-400 mb-6 uppercase tracking-widest">{selectedEvent.date}</h4>

                        <p className="text-center text-gray-300 mb-6 px-4 md:px-8 leading-normal text-sm md:text-base">
                            {selectedEvent.description}
                        </p>

                        <div className="flex w-full space-x-4 md:px-12">
                            <a
                                href={selectedEvent.link}
                                target="__blank"
                                className="flex-1 py-3 text-center bg-[#BC9040] text-black font-bold rounded-lg hover:bg-[#D4A550] transition-colors"
                            >
                                Visit Website
                            </a>
                            <button
                                onClick={closeModal}
                                className="flex-1 py-3 text-center border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Events;
