import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Hero/>

      <Footer />
    </div>
  );
}

export default App;
