import React, { useEffect, useRef } from "react";

const Mision = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-x-0", "scale-100");
          entry.target.classList.remove("opacity-0", "translate-x-4", "scale-95");
        } else {
          entry.target.classList.remove("opacity-100", "translate-x-0", "scale-100");
          entry.target.classList.add("opacity-0", "translate-x-4", "scale-95");
        }
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8 relative">
      <div id="sobre-nosotros"></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h1 className="text-white text-3xl pt-4 text-center font-[Sprit]">
            SOBRE NOSOTROS
          </h1>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 overflow-hidden">
          {/* Misión */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 opacity-0 translate-x-4 scale-95 transition-all duration-700 ease-in-out"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4 font-[Sprit]">
              MISIÓN
            </h2>
            <p className="text-gray-300">
              Nuestra misión es la de construir relaciones duraderas con nuestros
              clientes, satisfaciendo las necesidades y requerimientos del parque
              automotor. Brindamos seguridad, confianza y la más alta calidad en
              nuestros procesos, lo cual es alcanzado a través de nuestra política
              de mejora continua, constante innovación en materia tecnológica y el
              desarrollo de nuestro capital más preciado, nuestros recursos humanos.
            </p>
          </div>

          {/* Quiénes Somos */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 opacity-0 translate-x-4 scale-95 transition-all duration-700 ease-in-out"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 font-[Sprit]">
              QUIÉNES SOMOS
            </h2>
            <p className="text-gray-300">
              Somos un taller mecánico integral con más de 10 años de experiencia
              en el mercado automotriz. Nuestro equipo de profesionales altamente
              capacitados está comprometido con brindar el mejor servicio y soluciones
              efectivas para el mantenimiento y reparación de su vehículo.
            </p>
          </div>

          {/* Visión */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 opacity-0 translate-x-4 scale-95 transition-all duration-700 ease-in-out"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-4 font-[Sprit]">
              VISIÓN
            </h2>
            <p className="text-gray-300">
              Constituirnos en una organización de gran escala que pueda atender
              todas las necesidades en mantenimiento y reparación automotriz,
              utilizando recursos de excelencia para cumplir siempre con sus expectativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
