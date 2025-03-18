import React, { useState, useEffect } from "react";
import car4 from "/img/car4.webp";
import car77 from "/img/car77.webp";
import ingresoReal from "/img/ingreso_real.webp";
import logo from "/img/logo.png";
import Counter from "./Counter";
import NuestrosServicios from "./NuestrosServicios";

const images = [ingresoReal, car4, car77];

function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
      <div id="inicio"></div>

      <div className="relative flex items-center justify-center overflow-hidden h-[60vh] w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-30" : "opacity-0"
            }`}
            style={{ objectPosition: "center 15%" }}
          />
        ))}
        <div className="absolute flex flex-col items-center justify-center gap-8 z-20">
          <img
            src={logo}
            alt="logo"
            className="w-80 h-80 object-contain py-8"
          />
          <h1 className="text-white text-2xl font-bold">
            SERVICIO MECÁNICO
          </h1>
        </div>
      </div>

      <div className="w-full flex-1">
        <Counter />
        <NuestrosServicios/>
      </div>
    </div>
  );
}

export default Inicio;