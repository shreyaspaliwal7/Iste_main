import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Placeholder */}
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 font-paytone text-2xl">Content goes here...</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
