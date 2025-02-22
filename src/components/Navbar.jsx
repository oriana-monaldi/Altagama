import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="flex justify-center items-center p-6 relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-6 text-white text-3xl sm:hidden focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden sm:flex space-x-10 text-lg">
          <li 
            onClick={() => scrollToSection('inicio')}
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
          >
            Inicio
          </li>
          <li 
            onClick={() => scrollToSection('sobre-nosotros')}
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
          >
            Sobre Nosotros
          </li>
          <li 
            onClick={() => scrollToSection('servicios')}
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
          >
            Servicios
          </li>
          <li 
            onClick={() => scrollToSection('contacto')}
            className="text-white font-semibold hover:text-gray-300 cursor-pointer"
          >
            Contacto
          </li>
        </ul>
      </div>

      <div 
        className={`
          fixed inset-0 bg-black/90 transition-opacity duration-300
          sm:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`
            fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={e => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-8 p-6 pt-20">
            <li 
              onClick={() => scrollToSection('inicio')}
              className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            >
              Inicio
            </li>
            <li 
              onClick={() => scrollToSection('servicios')}
              className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            >
              Servicios
            </li>
            <li 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            >
              Sobre Nosotros
            </li>
            <li 
              onClick={() => scrollToSection('contacto')}
              className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            >
              Contacto
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;