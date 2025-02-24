import React from "react";
import performance from "/img/performance.png";
import performance2 from "/img/performance2.png";
import performance3 from "/img/performance3.png";
import performance4 from "/img/performance4.png";
import car9 from "/img/car9.webp";

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={imgSrc}
            alt={title}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start w-full">
          <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-center sm:text-left text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

function Servicios() {
  const services = [
    {
      imgSrc: performance,
      title: "Mantenimiento Experto",
      description:
        "Servicio integral para flotas y vehículos particulares con máxima eficiencia.",
    },
    {
      imgSrc: performance2,
      title: "Tecnología y Precisión",
      description: "Diagnóstico y reparación con equipos de última generación.",
    },
    {
      imgSrc: performance3,
      title: "Calidad y Confianza",
      description: "Repuestos premium y estándares de excelencia.",
    },
    {
      imgSrc: performance4,
      title: "Atención Personalizada",
      description: "Asesoramiento y seguimiento a medida.",
    },
  ];

  return (
    <div
      id="servicios"
      className="bg-cover bg-center relative flex justify-center items-center min-h-screen py-16 sm:py-20"
      style={{
        backgroundImage: `url(${car9})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Servicios;
