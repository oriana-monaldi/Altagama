import React from "react";
import performance from "/img/performance.png";
import performance2 from "/img/performance2.png";
import performance3 from "/img/performance3.png";
import performance4 from "/img/performance4.png";
import car9 from "/img/car9.webp";
const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg w-full max-w-3xl p-6 mb-6 flex flex-col items-center">
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-24 h-24 object-cover mb-4"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xl font-semibold text-center text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
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
        className="bg-cover bg-center relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${car9})`,
          backgroundAttachment: "fixed",
          paddingTop: "90px",
          paddingBottom: "90px",
          minHeight: "100vh",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
  
        <div className="relative z-10 px-4 w-full lg:w-3/4 xl:w-1/2">
          <div className="flex flex-col gap-8 items-center">
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
