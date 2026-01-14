import { Phone, MessageSquare, Send } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Greeting from './components/sections/Greeting';
import System from './components/sections/System';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import { useProtection } from './hooks/use-protection';

function App() {
  useProtection();

  return (
    <div className="bg-navy-950 min-h-screen font-sans text-platinum">
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Greeting />
        <System />
        <Pricing />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-navy-700">
        <a
          href="tel:01023033778"
          className="flex-1 bg-navy-900/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-platinum font-bold text-sm border-r border-navy-700 active:bg-accent-teal active:text-navy-900 transition-colors"
        >
          <Phone size={18} />
          전화
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-navy-900/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-platinum font-bold text-sm border-r border-navy-700 active:bg-accent-teal active:text-navy-900 transition-colors"
        >
          <MessageSquare size={18} />
          문자
        </a>
        <a
          href="https://t.me/hscompanyshs"
          target="_blank"
          className="flex-1 bg-[#0088cc]/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-platinum font-bold text-sm active:bg-[#0077b3] transition-colors"
        >
          <Send size={18} />
          텔레그램
        </a>
      </div>
    </div>
  );
}

export default App;
