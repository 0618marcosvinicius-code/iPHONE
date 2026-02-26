import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = ['Serviços', 'Avaliações', 'Garantia', 'Localização'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'border-gray-100 shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-black text-white p-2 rounded-xl flex items-center justify-center">
                <Smartphone size={22} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-xl tracking-tight text-gray-900">
                Casa do Phone
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/5583999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md hover:shadow-black/10 transition-all items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Orçamento em 5 Min
              </a>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-gray-900 hover:text-gray-600 focus:outline-none p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px]"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-gray-100">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
              <span className="font-semibold text-lg tracking-tight text-gray-900">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-full flex items-center justify-center min-h-[44px] min-w-[44px]"
                aria-label="Fechar menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="flex items-center min-h-[56px] px-4 text-base font-medium text-gray-600 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50">
              <a 
                href="https://wa.me/5583999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gray-900 to-black text-white px-6 py-4 rounded-full text-base font-medium hover:shadow-md hover:shadow-black/10 transition-all min-h-[56px]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Orçamento em 5 Min
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
