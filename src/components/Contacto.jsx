import React, { useEffect, useState } from "react";
import { Clock, Phone, MapPin } from "lucide-react";
import SocialIcons from "./SocialIcons";
import fondoServicios from "/img/fondoServicios.webp";

const Contacto = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar si el local está abierto
    const checkIfOpen = () => {
      // Obtener la fecha actual con el timezone de Argentina (UTC-3)
      const now = new Date();
      
      // Forzar a usar el timezone de Argentina
      const argentinaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}));
      
      const day = argentinaTime.getDay(); // 0 = Domingo, 1 = Lunes, etc.
      const hours = argentinaTime.getHours();
      const minutes = argentinaTime.getMinutes();
      const currentTime = hours + minutes / 60;

      // Establecer el día actual
      const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      setCurrentDay(days[day]);
      setCurrentDayIndex(day);
      
      // Formato para mostrar fecha y hora para debugging
      setCurrentDateTime(
        `${argentinaTime.toLocaleDateString('es-AR')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
      );

      // Verificar si está abierto (Lunes a Viernes de 8:00 a 18:00)
      setIsOpen(day >= 1 && day <= 5 && currentTime >= 8 && currentTime < 18);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    checkIfOpen();

    // Actualizar el estado cada minuto
    const interval = setInterval(checkIfOpen, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="contacto"
      className="relative overflow-hidden"
      style={{ minHeight: isMobile ? "auto" : "100vh" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondoServicios})`,
          willChange: "background-image",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full opacity-0 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 lg:w-4/5 relative z-10 pt-16">
        <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl xl:text-5xl p-6 mb-6 text-center w-full">
          CONTACTO
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">
                  Horarios de Atención
                </h3>
              </div>
              <div className={`px-3 py-1 rounded-lg text-sm font-medium ${isOpen ? 'bg-green-500/80' : 'bg-red-500/80'}`}>
                {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
              </div>
            </div>
            <div className="space-y-2">
              <p className={`flex justify-between ${currentDayIndex === 1 ? (isOpen ? "text-green-400 font-bold" : "text-red-400 font-bold") : "text-white"}`}>
                <span>Lunes:</span>
                <span>
                  {currentDayIndex === 1 && !isOpen && <span className="text-red-400 mr-2">Cerrado</span>}
                  {currentDayIndex === 1 && isOpen && <span className="text-green-400 mr-2">Abierto</span>}
                  8:00 - 18:00
                </span>
              </p>
              <p className={`flex justify-between ${currentDayIndex === 2 ? (isOpen ? "text-green-400 font-bold" : "text-red-400 font-bold") : "text-white"}`}>
                <span>Martes:</span>
                <span>
                  {currentDayIndex === 2 && !isOpen && <span className="text-red-400 mr-2">Cerrado</span>}
                  {currentDayIndex === 2 && isOpen && <span className="text-green-400 mr-2">Abierto</span>}
                  8:00 - 18:00
                </span>
              </p>
              <p className={`flex justify-between ${currentDayIndex === 3 ? (isOpen ? "text-green-400 font-bold" : "text-red-400 font-bold") : "text-white"}`}>
                <span>Miércoles:</span>
                <span>
                  {currentDayIndex === 3 && !isOpen && <span className="text-red-400 mr-2">Cerrado</span>}
                  {currentDayIndex === 3 && isOpen && <span className="text-green-400 mr-2">Abierto</span>}
                  8:00 - 18:00
                </span>
              </p>
              <p className={`flex justify-between ${currentDayIndex === 4 ? (isOpen ? "text-green-400 font-bold" : "text-red-400 font-bold") : "text-white"}`}>
                <span>Jueves:</span>
                <span>
                  {currentDayIndex === 4 && !isOpen && <span className="text-red-400 mr-2">Cerrado</span>}
                  {currentDayIndex === 4 && isOpen && <span className="text-green-400 mr-2">Abierto</span>}
                  8:00 - 18:00
                </span>
              </p>
              <p className={`flex justify-between ${currentDayIndex === 5 ? (isOpen ? "text-green-400 font-bold" : "text-red-400 font-bold") : "text-white"}`}>
                <span>Viernes:</span>
                <span>
                  {currentDayIndex === 5 && !isOpen && <span className="text-red-400 mr-2">Cerrado</span>}
                  {currentDayIndex === 5 && isOpen && <span className="text-green-400 mr-2">Abierto</span>}
                  8:00 - 18:00
                </span>
              </p>
              <p className={`flex justify-between ${currentDayIndex === 0 || currentDayIndex === 6 ? "text-red-400 font-bold" : "text-gray-400"}`}>
                <span>Sábados y Domingos:</span>
                <span>
                  {(currentDayIndex === 0 || currentDayIndex === 6) && <span className="text-red-400 mr-2">Cerrado</span>}
                  Cerrado
                </span>
              </p>

            </div>
          </div>

          <div className="bg-white/5 item-center backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center mt-2 gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">
                Contactate con nosotros
              </h3>
            </div>
            <SocialIcons />
          </div>
        </div>

        <div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-12"
          style={{ minHeight: "500px" }}
        >
          <div className="w-full rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 justify-center mb-8">
              <MapPin className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-semibold text-white">
                Nuestra Ubicación
              </h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7514268020955!2d-57.95878969842563!3d-34.887587767286085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e5ff9f72bde5%3A0x506d278c3b875a4b!2sTaller%20AltaGama!5e0!3m2!1ses-419!2sar!4v1740263236766!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;