import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full flex flex-col ml-20 justify-center">
            <p className="text-lg font-semibold mb-4 ">Alejandro Monaldi</p>
            <address className="text-xs not-italic">
              Calle 120 N° 188 e/ 530 y 531
              <br />
              La Plata, Buenos Aires
            </address>
          </div>

          <div className="w-full flex justify-center">
            <img src={logo} alt="Logo" className="w-32 h-32 md:w-40 md:h-40" />
          </div>

          <div className=" flex flex-col justify-center ml-20">
            <p className="text-lg font-semibold ">Contactate con nosotros</p>
            <div className="flex gap-4">
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
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-700">
        <div className="text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Alejandro Monaldi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;