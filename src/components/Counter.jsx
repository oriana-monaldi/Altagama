import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  
  return (
    <div className="flex justify-center gap-0.5 mt-1">
      {[...Array(totalStars)].map((_, index) => {
        if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative">
              <Star
                size={16}
                strokeWidth={2}
                className="text-white fill-transparent"
              />
              <Star
                size={16}
                strokeWidth={0}
                className="absolute top-0 left-0 fill-[#ffc107] [clip-path:inset(0_50%_0_0)]"
              />
            </div>
          );
        }
        return (
          <Star
            key={index}
            size={16}
            strokeWidth={2}
            className={index < fullStars ? 'fill-[#ffc107] text-white' : 'fill-transparent text-white'}
          />
        );
      })}
    </div>
  );
};

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    clientesFelices: 0,
    autosDetallados: 0,
    calificacionClientes: 0,
    anosExperiencia: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounts(prev => {
        const newCounts = {
          clientesFelices: Math.min(prev.clientesFelices + 1, 40),
          autosDetallados: Math.min(prev.autosDetallados + 1, 42),
          calificacionClientes: parseFloat((Math.min(prev.calificacionClientes + 0.1, 4.6)).toFixed(1)),
          anosExperiencia: Math.min(prev.anosExperiencia + 1, 20),
        };

        if (
          newCounts.clientesFelices === 40 &&
          newCounts.autosDetallados === 42 &&
          newCounts.calificacionClientes === 4.6 &&
          newCounts.anosExperiencia === 20
        ) {
          clearInterval(intervalId);
        }

        return newCounts;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="px-4 pt-10 text-white">
      <div className="max-w-6xl mx-auto px-4 lg:w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center relative">
            <h2 className="text-[#ffc107] text-3xl sm:text-4xl font-bold mb-1">
              {counts.clientesFelices}K+
            </h2>
            <p className="text-xs sm:text-sm tracking-wider">CLIENTES</p>
            <div className="absolute right-0 top-1/2 h-12 w-[1px] bg-gray-700 -translate-y-1/2" />
          </div>

          <div className="text-center relative">
            <h2 className="text-[#ffc107] text-3xl sm:text-4xl font-bold mb-1">
              {counts.autosDetallados}K+
            </h2>
            <p className="text-xs sm:text-sm tracking-wider">AUTOS</p>
            <div className="hidden sm:block absolute right-0 top-1/2 h-12 w-[1px] bg-gray-700 -translate-y-1/2" />
          </div>

          <div className="text-center relative mt-8 sm:mt-0">
            <h2 className="text-[#ffc107] text-3xl sm:text-4xl font-bold mb-1">
              {counts.calificacionClientes}
            </h2>
            <StarRating rating={counts.calificacionClientes} />
            <div className="absolute right-0 top-1/2 h-12 w-[1px] bg-gray-700 -translate-y-1/2" />
          </div>

          <div className="text-center mt-8 sm:mt-0">
            <h2 className="text-[#ffc107] text-3xl sm:text-4xl font-bold mb-1">
              {counts.anosExperiencia}+
            </h2>
            <p className="text-xs sm:text-sm tracking-wider">AÑOS DE</p>
            <p className="text-xs sm:text-sm tracking-wider">EXPERIENCIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;