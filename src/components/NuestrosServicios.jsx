import React, { useEffect, useState, useRef } from "react";
import carUno from "/img/car1.png";
import carDos from "/img/car2.png";
import carCuatro from "/img/car4.jpg";
import carSiete from "/img/car7.jpg";
import herramientas from "/img/herramientas1.jpg";
import carTres from "/img/car3.avif";

const NuestrosServicios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragged, setDragged] = useState(0);
  const containerRef = useRef(null);
  const autoSlideRef = useRef(null);

  const services = [
    { image: carUno, title: "INYECCIÓN ELECTRÓNICA", color: "bg-sky-400" },
    { image: carDos, title: "FRENOS", color: "bg-yellow-400" },
    { image: carCuatro, title: "SISTEMAS ELÉCTRICOS", color: "bg-blue-600" },
    { image: carTres, title: "MECÁNICA", color: "bg-red-600" },
    { image: herramientas, title: "TREN DELANTERO", color: "bg-sky-400" },
    { image: carSiete, title: "LUBRICENTRO", color: "bg-yellow-400" },
  ];

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); 
    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const handleMouseDown = (e) => {
    stopAutoSlide();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setDragged(delta);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragged < -50) {
      setActiveIndex((prev) => (prev + 1) % services.length);
    } else if (dragged > 50) {
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
    setDragged(0);
    startAutoSlide();
  };

  const handleTouchStart = (e) => {
    stopAutoSlide();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    setDragged(delta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragged < -50) {
      setActiveIndex((prev) => (prev + 1) % services.length);
    } else if (dragged > 50) {
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
    setDragged(0);
    startAutoSlide();
  };

  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(calc(-${activeIndex * 300}px + ${dragged}px))`, 
                width: `${duplicatedServices.length * 300}px`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {duplicatedServices.map((service, index) => (
                <div key={index} className="w-[300px] flex-shrink-0 px-12"> 
                  <div className="relative w-full h-64 flex flex-col rounded-lg overflow-hidden">
                    <div className="w-full h-48 flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`flex-1 flex items-center justify-center ${service.color} text-white px-2 py-1`}
                    >
                      <h3 className="text-base font-semibold text-center leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;
