import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import SocialIcons from './SocialIcons';
import fondoServicios from '../img/fondoServicios.jpg';  

const Contacto = () => {
  return (
    <div 
      id="contacto" 
      className="bg-cover bg-center relative"  
      style={{ 
        backgroundImage: `url(${fondoServicios})`, 
        backgroundAttachment: 'fixed',  // Esto hace que el fondo tenga el efecto parallax
        paddingTop: '50px', 
        paddingBottom: '50px', 
      }}
    >
      {/* Capa opaca encima de la imagen */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>  

      <div className="max-w-6xl mx-auto px-4 lg:w-4/5 relative z-10">
        <h1 className="text-white text-5xl p-8 mb-6 text-center font-[Sprit] w-full">
          CONTACTO
        </h1>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-4 text-white">Horarios de Atención</h3>
            </div>
            <div className="space-y-2 ">
              <p className="flex justify-between text-white mb-4 ">
                <span>Lunes a Viernes:</span>
                <span>8:00 - 18:00</span>
              </p>
              <p className="flex justify-between text-gray-400">
                <span>Sábados y Domingos:</span>
                <span>Cerrado</span>
              </p>
            </div>
          </div>
    
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2 ">
              <Phone className="w-6 h-6 mt-2 ml-2 text-yellow-400" />
              <h3 className="text-xl font-semibold mt-2 text-white">Medio de contacto</h3>
            </div>
            <SocialIcons />
          </div>
        </div>

        {/* Mapa dentro de una tarjeta, más largo */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-12">
          <div className="flex items-center gap-2 justify-center mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-semibold text-white">Nuestra Ubicación</h3>
          </div>
          <div className="w-full rounded-lg overflow-hidden ">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7514268020955!2d-57.95878969842563!3d-34.887587767286085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e5ff9f72bde5%3A0x506d278c3b875a4b!2sTaller%20AltaGama!5e0!3m2!1ses-419!2sar!4v1740263236766!5m2!1ses-419!2sar" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
