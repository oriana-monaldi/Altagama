import React from "react";
import performance from "../img/performance.png";
import performance2 from "../img/performance2.png"; 
import performance3 from "../img/performance3.png";
import performance4 from "../img/performance4.png";
import backgroundCar from "../img/car9.webp";

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden bg-black/70 p-6 rounded-lg">
      <div className="relative flex justify-center">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-20 h-20 object-cover"
        />
      </div>

      <div className="text-center text-white mt-4">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200 max-w-xs mx-auto">{description}</p>
      </div>
    </div>
  );
};


const ServicesGrid = () => {
  const services = [
    {
      imgSrc: performance,
      title: "Mantenimiento Experto",
      description: "Servicio integral para flotas y vehículos particulares con máxima eficiencia.",
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
    <section className="relative w-full overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundCar}
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
    </section>
  );
};

export default ServicesGrid;