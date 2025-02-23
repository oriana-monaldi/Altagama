import React from 'react';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';
import SocialIcons from './SocialIcons'; 

const Contacto = () => {
  return (
    <div id="contacto" className="bg-cover bg-center" style={{ backgroundImage: 'url(../img/car4.jpg)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white font-[Sprit]">CONTACTO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Horarios de Atención</h3>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between text-white">
                <span>Lunes a Viernes:</span>
                <span>8:00 - 18:00</span>
              </p>
              <p className="flex justify-between text-gray-400">
                <span>Sábados y Domingos:</span>
                <span>Cerrado</span>
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-400" />
                <a 
                  href="https://api.whatsapp.com/send?phone=542213533444&text=Deseo%20hacerle%20una%20consulta...%20escriba%20aqui%20su%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors text-white"
                >
                  WhatsApp: 2213533444
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-red-400" />
                <a 
                  href="mailto:talleraltagama@yahoo.com.ar"
                  className="hover:text-red-400 transition-colors text-white"
                >
                  talleraltagama@yahoo.com.ar
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Redes Sociales</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 justify-center mb-8">
            <MapPin className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl  font-semibold text-white">Nuestra Ubicación</h3>
          </div>
          <div className="w-full rounded-lg overflow-hidden mb-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7514268020955!2d-57.95878969842563!3d-34.887587767286085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e5ff9f72bde5%3A0x506d278c3b875a4b!2sTaller%20AltaGama!5e0!3m2!1ses-419!2sar!4v1740263236766!5m2!1ses-419!2sar" 
              width="100%" 
              height="450" 
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
