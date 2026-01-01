import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
