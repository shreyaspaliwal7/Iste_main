import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/About Us/Aboutus';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import OldMembers from './components/OldMembers/OldMembers';
import Gallery from './components/Gallery/Gallery';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Events />
      <Sponsors />
      <OldMembers />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
