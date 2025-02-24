import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black  text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1  md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center ml-18 md:items-start">
        <p className="text-lg mt-8 mb-4  font-semibold">Alejandro Monaldi</p>
          <address className="text-xs mt-2 not-italic">
            Calle 120 N° 188 e/ 530 y 531
            <br />
            <p className="text-center"> La Plata, Buenos Aires
              </p>
              
          </address>
        </div>

        <div className="flex flex-col items-center md:items-center">
          <img src={logo} alt="Logo" className="w-40 h-40 mb-4" />
        </div>

        <div className="flex flex-col items-center md:items-start">
        <p className="text-lg mt-8 mb-4  ml-25 font-semibold">Contactate con nosotros</p>
        <div className="flex space-x-4  ml-40">
            <a
              href="https://www.facebook.com/AltaGamaBCS/?locale=es_LA"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/taller.altagama/"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:talleraltagama@yahoo.com.ar?subject=Consulta&body=Hola,%20quiero%20hacer%20una%20consulta."
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-2 border-t border-gray-700">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Alejandro Monaldi. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;