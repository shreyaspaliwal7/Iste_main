import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About Us/Aboutus';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import OldMembers from './components/OldMembers/OldMembers';
import Gallery from './components/Gallery/Gallery';
import ContactPositions from './components/ContactPositions';
import NewTeam from './components/New Team/NewTeam';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="relative">

        {/* The Fixed Perspective Lines */}
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
          <AboutUs />
          <Events />
          <Sponsors />
        </div>
      </div>
      <Footer />
      <Gallery/>
      <ContactPositions/>
      <NewTeam/>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     {/* Use PageLayout as the wrapper */}
    //     <Route path="/" element={<PageLayout />}>
    //       <Route index element={<Home/>} />
    //       <Route path="team" element={<OldMembers/>} />
    //       <Route path="contact" element={<ContactPositions/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
