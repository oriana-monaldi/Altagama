import React, { useEffect, useState } from "react";
import carUno from "../img/car1.png";
import carDos from "../img/car2.png";
import carCuatro from "../img/car4.jpg";
import carSiete from "../img/car7.jpg";
import herramientas from "../img/herramientas1.jpg";
import carTres from "../img/car3.avif";

const NuestrosServicios = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      image: carUno,  
      title: "INYECCIÓN ELECTRÓNICA",
      color: "bg-sky-400",
    },
    {
      image: carDos,  
      title: "FRENOS",
      color: "bg-yellow-400",
    },
    {
      image: carCuatro,  
      title: "SISTEMAS ELÉCTRICOS",
      color: "bg-blue-600",
    },
    {
      image: carTres,  
      title: "MECÁNICA",
      color: "bg-red-600",
    },
    {
      image: herramientas, 
      title: "TREN DELANTERO",
      color: "bg-sky-400",
    },
    {
      image: carSiete,  
      title: "LUBRICENTRO",
      color: "bg-yellow-400",
    },
  ];

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 160}px)`,
                width: `${duplicatedServices.length * 160}px`,
              }}
            >
              {duplicatedServices.map((service, index) => (
                <div key={index} className="w-[160px] flex-shrink-0 px-2">
                  <div className="relative w-full h-64 flex flex-col rounded-lg overflow-hidden">
                    <div className="w-full h-48 flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`flex-1 flex items-center justify-center ${service.color} text-white px-2 py-1`}
                    >
                      <h3 className="text-base font-semibold text-center leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;