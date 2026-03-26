import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-bunny-dark' : 'text-white'}`}>Bunny</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Identity', 'Typography', 'Color', 'Interface'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-bunny-red transition-colors ${scrolled ? 'text-bunny-dark' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden">
            <Menu className={scrolled ? 'text-bunny-dark' : 'text-white'} />
        </button>
      </div>
    </header>
  );
};

export default Header;