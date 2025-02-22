import React from "react";

function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex justify-center p-6">
      <ul className="flex space-x-10 text-lg">
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
    </nav>
  );
}

export default Navbar;
