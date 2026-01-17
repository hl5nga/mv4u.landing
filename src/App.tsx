import Hero from './components/Hero';
import Features from './components/Features';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Modules />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
