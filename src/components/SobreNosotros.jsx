import React from 'react';
import background from '../img/herramientas2.jpg'; // Asegúrate de importar la imagen correctamente

function SobreNosotros() {
  return (
    <div className="relative">
      {/* Fondo con la imagen */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background} 
          alt="Fondo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Filtro oscuro para mejorar la visibilidad del texto */}
      </div>

      {/* Información en la card más transparente */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="w-40 ml-4 mt-4 text-white bg-red-primary rounded-lg relative">
          <p className="m-2 text-center text-xs">¿QUIÉNES SOMOS?</p>
        </div>

        <div className="relative bg-black bg-opacity-20 p-6 rounded-lg mt-4  bg-black/70"> {/* Menor opacidad */}
          <h1 className="text-white text-3xl pt-4 font-[Michroma] text-center">
            Servicio Mecánico Integral Altagama
          </h1>
          <p className="text-white mt-4 m-4">
            Somos una empresa integrada por personal altamente especializado e
            idóneo en la prestación de servicios para el mantenimiento y
            reparación de flotas vehiculares.
          </p>
          
          {/* Información adicional */}
          <div className="flex flex-col items-start mt-4 mr-4">
            <div className="flex items-center gap-2 mr-4">
              <div className="w-5 h-5 bg-yellow-500 rounded border-2 border-yellow-600 ml-4" />
              <p className="text-white mr-4">400 m² de superficie</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500 rounded border-2 mt-2 border-yellow-600 ml-4" />
              <p className="text-white mt-2">Elevadores electrohidráulicos</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500 rounded border-2 mt-2 border-yellow-600 ml-4" />
              <p className="text-white mt-2">Salón con venta de repuestos</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 mt-2 bg-yellow-500 rounded border-2 border-yellow-600 ml-4" />
              <p className="text-white mt-2">Sala de espera</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
