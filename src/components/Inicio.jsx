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
    <div className="w-full h-screen overflow-x-hidden flex flex-col">
      <div id="inicio"></div>

      <div className="relative flex items-center justify-center overflow-hidden h-[50vh] w-full">
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
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 object-contain z-20 py-8"
        />
        <h1 className="text-white text-2xl mt-60 font-bold z-20">
          SERVICIO MECÁNICO
        </h1>
      </div>
      <div className="w-full">
        <Counter />
        <NuestrosServicios/>
      </div>
    </div>
  );
}

export default Inicio;