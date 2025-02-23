import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="w-25 h-25" />

        <p className="text-xs">Alejandro Monaldi</p>

        <div className="text-xs mt-2 mb-">
          <p>Calle 120 N° 188 e/ 530 y 531</p>
          <p>La Plata, Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
