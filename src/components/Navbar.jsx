import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="flex justify-center items-center p-6 relative w-full">
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-6 text-white text-3xl sm:hidden focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Menú desktop */}
        <ul className="hidden sm:flex space-x-10 text-lg">
          <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
            Inicio
          </li>
          <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
            Sobre Nosotros
          </li>
          <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
            Servicios
          </li>
          <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
            Contacto
          </li>
        </ul>
      </div>

      {/* Menú mobile */}
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
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              Inicio
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              Sobre Nosotros
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              Servicios
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              Contacto
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;