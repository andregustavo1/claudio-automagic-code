
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      // Calculate scroll percentage
      const progress = position / totalHeight;
      setScrollProgress(progress);
      
      // Check if scrolled past threshold
      setScrolled(position > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
          scrolled ? "backdrop-blur-lg bg-claudio-black/80 shadow-md" : "bg-transparent",
          className
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-mono font-bold">
              <span className="text-white">Claudio</span>
              <span className="text-claudio-emerald">.AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Recursos</a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">Como Funciona</a>
            <a href="#use-cases" className="text-white/80 hover:text-white transition-colors">Casos de Uso</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Preços</a>
            <a href="#docs" className="text-white/80 hover:text-white transition-colors">Documentação</a>
            <a 
              href="#try" 
              className="ml-2 px-4 py-2 bg-claudio-emerald text-white rounded-md hover:bg-claudio-emerald/90 transition-all"
            >
              Experimente Grátis
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-claudio-black/95 backdrop-blur-lg p-4 border-t border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Recursos</a>
              <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Como Funciona</a>
              <a href="#use-cases" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Casos de Uso</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Preços</a>
              <a href="#docs" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Documentação</a>
              <a 
                href="#try" 
                className="inline-block px-4 py-2 bg-claudio-emerald text-white rounded-md hover:bg-claudio-emerald/90 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Experimente Grátis
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
