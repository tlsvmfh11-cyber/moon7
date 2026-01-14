import { useState, useEffect } from 'react';
import { Menu, X, Send, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#intro' },
    { name: 'System', href: '#system' },
    { name: 'Price', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-platinum tracking-wider">
          DALTO<span className="text-accent-teal">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-gray hover:text-accent-teal transition-colors text-sm font-medium font-sans"
              >
                <span className="text-accent-teal mr-1">0{navLinks.indexOf(link) + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="https://t.me/hscompanyshs" 
            target="_blank" 
            className="px-4 py-2 border border-accent-teal text-accent-teal rounded hover:bg-accent-teal/10 transition-colors text-sm font-mono"
          >
            Telegram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent-teal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="md:hidden fixed top-0 right-0 w-[80%] h-full bg-navy-800 shadow-2xl p-8 flex flex-col items-center justify-center gap-8 z-50"
          >
             <button className="absolute top-6 right-6 text-accent-teal" onClick={() => setIsOpen(false)}>
                <X size={30} />
             </button>

            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-display text-platinum hover:text-accent-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent-teal text-lg font-mono mr-2">0{idx + 1}.</span>
                {link.name}
              </a>
            ))}
            
            <div className="mt-8 flex gap-4">
                 <a href="tel:01023033778" className="p-3 bg-navy-700 rounded-full text-platinum">
                    <Phone size={24} />
                 </a>
                 <a href="https://t.me/hscompanyshs" target="_blank" className="p-3 bg-navy-700 rounded-full text-accent-teal">
                    <Send size={24} />
                 </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Backdrop for Mobile Menu */}
      {isOpen && (
          <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </nav>
  );
}
