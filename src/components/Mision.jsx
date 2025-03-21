import React, { useEffect, useRef } from "react";

const Mision = () => {
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
              entry.target.classList.remove("animate-out");
            }, index * 300);
          } else {
            entry.target.classList.remove("animate-in");
            entry.target.classList.add("animate-out");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    const handleMouseMove = (e) => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(1, 1, 1)
          translateZ(0)
        `;
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const cardContents = [
    {
      h2: "MISIÓN",
      color: "text-red-500",
      content:
        "Nuestra misión es la de construir relaciones duraderas con nuestros clientes, satisfaciendo las necesidades y requerimientos del parque automotriz. Brindamos seguridad, confianza y la más alta calidad en nuestros procesos, lo cual es alcanzado a través de nuestra política de mejora continua, constante innovación en materia tecnológica y el desarrollo de nuestro capital más preciado, nuestros recursos humanos.",
    },
    {
      h2: "VISIÓN",
      color: "text-blue-400",
      content:
        "Constituirnos en una organización de gran escala que pueda atender todas las necesidades en mantenimiento y reparación automotriz, utilizando recursos de excelencia para cumplir siempre con sus expectativas.",
    },
    {
      h2: "QUIÉNES SOMOS",
      color: "text-yellow-400",
      content:
        "Somos un taller mecánico integral con más de 20 años de experiencia en el mercado automotriz. Nuestro equipo de profesionales altamente capacitados está comprometido con brindar el mejor servicio y soluciones efectivas para el mantenimiento y reparación de su vehículo.",
    },
  ];

  return (
    <div id="sobre-nosotros">
      <div className="text-white p-4 sm:p-8 md:p-12 lg:p-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-12 sm:my-16 md:my-20">
          <div className="flex items-center mb-12 sm:mb-16">
            <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl xl:text-5xl p-6 text-center w-full">
              SOBRE NOSOTROS
            </h1>
          </div>
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 relative z-10"
          >
            {cardContents.map((card, index) => (
              <div
                key={card.h2}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`
                  relative group
                  bg-gradient-to-br from-white/10 to-white/5
                  backdrop-blur-lg rounded-xl p-4 sm:p-6
                  w-full max-w-[95%] sm:max-w-[85%] md:max-w-none mx-auto
                  transform-gpu animate-out
                  transition-all duration-700
                  before:absolute before:inset-0
                  before:bg-gradient-to-br
                  before:from-transparent before:to-white/10
                  before:rounded-xl before:opacity-0
                  before:transition-opacity before:duration-500
                  hover:before:opacity-100
                  after:absolute after:inset-0
                  after:bg-gradient-to-br after:from-white/5 after:to-transparent
                  after:rounded-xl after:opacity-0 after:transition-opacity
                  after:duration-500 hover:after:opacity-100
                  shadow-lg shadow-black/20
                `}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative z-10">
                  <h2
                    className={`
                      ${card.color} text-2xl font-bold mb-4 font-[Sprit]
                      transform-gpu transition-transform duration-500
                    `}
                  >
                    {card.h2}
                  </h2>
                  <p className="text-gray-300 transform-gpu transition-all duration-500 group-hover:text-white group-hover:translate-z-10">
                    {card.content}
                  </p>
                </div>
                <div
                  className="
                    absolute inset-0 bg-gradient-to-tr
                    from-white/0 via-white/5 to-white/0
                    rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .animate-in {
          animation: cardAnimateIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center bottom;
        }

        .animate-out {
          animation: cardAnimateOut 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center bottom;
        }

        @keyframes cardAnimateIn {
          0% {
            opacity: 0;
            transform: 
              perspective(1000px)
              rotateX(30deg)
              scale3d(0.8, 0.8, 0.8)
              translateY(100px)
              translateZ(-100px);
          }
          100% {
            opacity: 1;
            transform: 
              perspective(1000px)
              rotateX(0deg)
              scale3d(1, 1, 1)
              translateY(0)
              translateZ(0);
          }
        }

        @keyframes cardAnimateOut {
          0% {
            opacity: 1;
            transform: 
              perspective(1000px)
              rotateX(0deg)
              scale3d(1, 1, 1)
              translateY(0)
              translateZ(0);
          }
          100% {
            opacity: 0;
            transform: 
              perspective(1000px)
              rotateX(30deg)
              scale3d(0.8, 0.8, 0.8)
              translateY(100px)
              translateZ(-100px);
          }
        }
      `}</style>
    </div>
  );
};

export default Mision;