import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import logo from "../img/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
          <p className="text-sm font-semibold">Alejandro Monaldi</p>
          <address className="text-xs mt-2 not-italic">
            Calle 120 N° 188 e/ 530 y 531
            <br />
            La Plata, Buenos Aires
          </address>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <a
              href="/"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Alejandro Monaldi. Todos los
            derechos reservados.
          </p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacidad"
              className="text-xs hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
