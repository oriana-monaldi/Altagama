import { useState, useEffect } from "react";

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    clientesFelices: 0,
    autosDetallados: 0,
    calificacionClientes: 0,
    anosExperiencia: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        clientesFelices: Math.min(prev.clientesFelices + 1, 25),
        autosDetallados: Math.min(prev.autosDetallados + 1, 15),
        calificacionClientes: parseFloat((Math.min(prev.calificacionClientes + 0.1, 4,6)).toFixed(1)),
        anosExperiencia: Math.min(prev.anosExperiencia + 1, 15),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mt-8 mb-4 p-4 text-white font-[Arial]">
      <div className="max-w-[360px] mx-auto">
        <div className="grid grid-cols-2 gap-0 mb-8">
          <div className="text-center relative">
            <h2 className="text-[#ffc107] text-3xl md:text-4xl font-bold mb-1">
              {counts.clientesFelices}K+
            </h2>
            <p className="text-xs md:text-sm tracking-wider">CLIENTES</p>
            <div className="absolute right-0 top-1/2 h-12 w-[1px] bg-gray-700 -translate-y-1/2" />
          </div>

          <div className="text-center">
            <h2 className="text-[#ffc107] text-3xl md:text-4xl font-bold mb-1">
              {counts.autosDetallados}K+
            </h2>
            <p className="text-xs md:text-sm tracking-wider">CAR DETAILED</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0">
          <div className="text-center relative">
            <h2 className="text-[#ffc107] text-3xl md:text-4xl font-bold mb-1">
              {counts.calificacionClientes}
            </h2>
            <p className="text-xs md:text-sm tracking-wider">CLIENT RATING</p>
            <div className="absolute right-0 top-1/2 h-12 w-[1px] bg-gray-700 -translate-y-1/2" />
          </div>

          <div className="text-center">
            <h2 className="text-[#ffc107] text-3xl md:text-4xl font-bold mb-1">
              {counts.anosExperiencia}+
            </h2>
            <p className="text-xs md:text-sm tracking-wider">YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;