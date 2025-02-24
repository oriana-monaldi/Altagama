import React from "react";
import performance from "../img/performance.png";
import performance2 from "../img/performance2.png";
import performance3 from "../img/performance3.png";
import performance4 from "../img/performance4.png";
import car9 from "../img/car9.webp";

// Componente que muestra cada tarjeta de servicio
const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg w-full p-6 mb-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left mt-3">
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-24 h-24 object-cover rounded-full"
        />
      </div>
      {/* Contenedor de texto (Título + Descripción) */}
      <div className="flex flex-col lg:ml-4 mt-4 lg:mt-0">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Componente principal de servicios, que incluye el fondo y las tarjetas
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
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${car9})`,
        backgroundAttachment: "fixed",
        paddingTop: "90px",
        paddingBottom: "90px",
        minHeight: "100vh",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      <div className="relative z-10 px-4 w-full lg:w-1/2 ml-auto">
        <div className="flex flex-col gap-8">
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
