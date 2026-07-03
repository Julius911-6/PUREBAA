
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-12 border-t-4 border-brand-earth">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.jpeg" alt="Tomas Cruz & Sons Logo" className="h-12 w-12 object-cover rounded-full bg-brand-white p-1" />
            <h2 className="text-xl font-bold tracking-wider text-brand-white uppercase">Tomas Cruz & Sons</h2>
          </div>
          <p className="text-sm text-brand-gray-300 mb-6 max-w-md leading-relaxed text-gray-400">
            Especialistas en expediciones VIP por el Salar de Uyuni y desiertos de Bolivia. Confianza, seguridad y exclusividad con 3 generaciones de experiencia.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-brand-light hover:text-brand-terracotta transition-colors">Facebook</a>
            <a href="#" className="text-brand-light hover:text-brand-terracotta transition-colors">Instagram</a>
            <a href="#" className="text-brand-light hover:text-brand-terracotta transition-colors">Twitter</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-sand">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#destinations" className="hover:text-brand-terracotta transition-colors">Nuestros Destinos</a></li>
            <li><a href="#professionals" className="hover:text-brand-terracotta transition-colors">Personal VIP</a></li>
            <li><a href="#about" className="hover:text-brand-terracotta transition-colors">Sobre Nosotros</a></li>
            <li><a href="#book" className="hover:text-brand-terracotta transition-colors">Reservas</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-sand">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-brand-terracotta flex-shrink-0 mt-0.5" />
              <span>Av. Ferroviaria, Uyuni, Bolivia</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-brand-terracotta flex-shrink-0" />
              <span>+591 7123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-brand-terracotta flex-shrink-0" />
              <span>vip@tomascruz.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-brand-gray text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Tomas Cruz & Sons - Expediciones VIP. Todos los derechos reservados.
      </div>
    </footer>
  );
};