import React, { useState, useEffect } from "react";
import car7 from "/img/car7.jpg";
import car4 from "/img/car4.jpg";
import ingresoReal from "/img/ingreso_real.jpg";
import logo from "/img/logo.png";
import Navbar from "./Navbar";
import Counter from "./Counter";
import SobreNosotros from "./SobreNosotros";

const images = [ingresoReal, car7, car4];

function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="inicio"></div>

      <div className="relative flex items-center justify-center overflow-hidden h-[40vh]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-20 " : "opacity-0 z-0"
            }`}
          />
        ))}
        <Navbar />
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-70 object-contain z-20"
        />
        <h1 className="text-white text-xl mt-50 ">
          SERVICIO MECÁNICO
        </h1>
      </div>
      <SobreNosotros />
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default Inicio;
