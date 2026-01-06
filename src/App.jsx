import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About Us/Aboutus';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import ContactPositions from './components/ContactPositions';
import OldMembers from './components/OldMembers/OldMembers';
<<<<<<< HEAD
import Gallery from './components/Gallery/Gallery';
=======
import GeometricBackground from './components/background';
>>>>>>> 3479b6f5c694deab32a98dd3f0b5a0dd333038de
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
<<<<<<< HEAD
      <AboutUs/>
      <Events />
      <Sponsors />
      <OldMembers />
      <Gallery />
=======
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

        {/* These components will scroll over the lines because of z-10 */}
        <div className="relative z-10">
          <AboutUs />
          <Events />
          <Sponsors />
        </div>
      </div>

      {/* <OldMembers /> */}
>>>>>>> 3479b6f5c694deab32a98dd3f0b5a0dd333038de
      <Footer />
      {/* <ContactPositions /> */}
    </div>
  );
}

export default App;
