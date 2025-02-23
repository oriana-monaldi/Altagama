import React, { useEffect, useRef } from "react";
import performance from "../img/performance.png";
import performance2 from "../img/performance2.png";
import performance3 from "../img/performance3.png";
import performance4 from "../img/performance4.png";
import backgroundCar from "../img/car9.webp";

const ServiceCard = ({ imgSrc, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "translate-y-10");
        }
      },
      {
        threshold: 0.1,  
        rootMargin: "0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group overflow-hidden bg-black/70 p-6 rounded-lg opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="relative flex justify-center transform transition-transform duration-500 group-hover:scale-110">
        <img src={imgSrc} alt={title} className="w-20 h-20 object-cover" />
      </div>

      <div className="text-center text-white mt-4">
        <h3 className="text-xl md:text-2xl font-bold transform transition-transform duration-500 group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="text-sm text-gray-200 max-w-xs mx-auto transform transition-all duration-500 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
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
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-110">
          <img
            src={backgroundCar}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">


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
