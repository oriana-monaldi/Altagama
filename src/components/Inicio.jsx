import React from "react";
import car7 from "../img/car7.jpg";
import logo from "../img/logo.png";
import ingresoReal from "../img/ingreso_real.jpg";
import Navbar from "./Navbar";
import Counter from "./Counter";

function Inicio() {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img
          src={car7}
          alt="car7"
          className="w-full h-[40vh] object-cover opacity-30"
        />
        <Navbar />
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-60 object-contain"
        />
      </div>
      <div className="relative">
        <div className="w-40 ml-4 mt-4 text-white bg-red-primary rounded-lg relative">
          <p className="m-2 text-center text-xs">¿QUIÉNES SOMOS?</p>
        </div>
      </div>
      <h1 className="text-white text-3xl pt-4 font-[Michroma] text-center">
        Servicio Mecánico Integral Altagama
      </h1>
      <div>
        <p className="text-white mt-4 m-4">
          Somos una empresa integrada por personal altamente especializado e
          idóneo en la prestación de servicios para el mantenimiento y
          reparación de flotas vehiculares.
        </p>
      </div>
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
      <img
        src={ingresoReal}
        alt="ingresoReal"
        className="w-[340px] h-[250px] rounded-2xl mx-auto mt-4"
      />
    <div>
      <Counter/>
    </div>
    </div>
  );
}

export default Inicio;
