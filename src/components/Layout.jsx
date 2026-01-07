import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Layout } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar will stay at the top on all pages */}
            <Navbar />

            <main className="relative">
                <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="none"
                    >
                        <g stroke="#f97316" strokeWidth="1" strokeOpacity="0.4">
                            <line x1="250" y1="950" x2="-100" y2="0" />
                            <line x1="250" y1="950" x2="-100" y2="400" />
                            <line x1="250" y1="950" x2="-100" y2="700" />
                            <line x1="250" y1="950" x2="1100" y2="1050" />
                            <line x1="250" y1="950" x2="1100" y2="1200" />
                        </g>
                    </svg>
                </div>
                <div className="relative z-10">
                    <Outlet />
                </div>
            </main>

            {/* Footer will stay at the bottom on all pages */}
            <Footer />
        </div>
    );
};

export default Layout;