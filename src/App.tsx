import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustMetrics from '@/components/TrustMetrics';
import Treatments from '@/components/Treatments';
import About from '@/components/About';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import Appointment from '@/components/Appointment';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';

function App() {
  return (
    <div className="min-h-screen bg-ivory-100 font-sans text-charcoal-900">
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <Treatments />
        <About />
        <Results />
        <Reviews />
        <Appointment />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

export default App;
