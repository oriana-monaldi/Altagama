import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "/img/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black to-[#1a1a1a] text-white w-full overflow-x-hidden">
      <footer className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="w-full flex flex-col items-center md:items-start md:ml-20 justify-center">
              <p className="text-lg font-semibold mb-4 text-center md:text-left">
                Alejandro Monaldi
              </p>
              <address className="text-xs not-italic text-center md:text-left">
                Calle 120 N° 188 e/ 530 y 531
                <br />
                La Plata, Buenos Aires
              </address>
            </div>

            <div className="w-full flex justify-center py-2 md:py-0">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 md:w-40 md:h-40"
              />
            </div>

            <div className="flex flex-col items-center justify-center -mt-2 md:mt-0">
              <p className="text-lg font-semibold mb-4 text-center">
                Contactate con nosotros
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/AltaGamaBCS/?locale=es_LA"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={18} className="md:size-6" />
                </a>
                <a
                  href="https://www.instagram.com/taller.altagama/"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} className="md:size-6" />
                </a>
                <a
                  href="mailto:talleraltagama@yahoo.com.ar?subject=Consulta&body=Hola,%20quiero%20hacer%20una%20consulta."
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={18} className="md:size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 pt-6 md:pt-8 mt-6 md:mt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Alejandro Monaldi. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;