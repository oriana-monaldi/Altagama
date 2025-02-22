import React from "react";
const Mision = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div id="sobre-nosotros"></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Misión</h2>
            <p className="text-gray-300">
              Nuestra misión es la de construir relaciones duraderas con
              nuestros clientes, satisfaciendo las necesidades y requerimientos
              del parque automotor. Brindamos seguridad, confianza y la más alta
              calidad en nuestros procesos, lo cual es alcanzado a través de
              nuestra política de mejora continua, constante innovación en
              materia tecnológica y el desarrollo de nuestro capital más
              preciado, nuestros recursos humanos.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Quiénes Somos
            </h2>
            <p className="text-gray-300">
              Somos un taller mecánico integral con más de 10 años de
              experiencia en el mercado automotriz. Nuestro equipo de
              profesionales altamente capacitados está comprometido con brindar
              el mejor servicio y soluciones efectivas para el mantenimiento y
              reparación de su vehículo.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Visión</h2>
            <p className="text-gray-300">
              Constituirnos en una organización de gran escala que pueda atender
              todas las necesidades en mantenimiento y reparación automotriz,
              utilizando recursos de excelencia para cumplir siempre con sus
              expectativas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
