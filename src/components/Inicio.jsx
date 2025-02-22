import React from "react";
import car7 from "../img/car7.jpg";
import firulete from "../img/firulete.svg";
import logo from "../img/logo.png";
import Navbar from "./Navbar";

function Inicio() {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img
          src={car7}
          alt="car7"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <Navbar />
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 object-contain"
        />
      </div>
      <div>
        <img
          src={firulete}
          alt="firulete"
          className="absolute right-0 w-200 h-70"
        />
      </div>
    </div>
  );
}

export default Inicio;
