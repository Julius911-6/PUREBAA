import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-12 border-t-4 border-brand-accent mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-brand-white text-brand-dark font-bold text-xl h-10 w-10 flex items-center justify-center rounded">
              PD
            </div>
            <h2 className="text-xl font-bold tracking-wider text-brand-white">PRODEHBOL</h2>
          </div>
          <p className="text-sm text-brand-border mb-6 leading-relaxed">
            Asociación civil sin fines de lucro conformada por ciudadanos comprometidos con la promoción, defensa y vigencia de los derechos humanos en el Estado Plurinacional de Bolivia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-accent border-b border-brand-secondary inline-block pb-1">Enlaces</h3>
          <ul className="space-y-2 text-sm text-brand-border">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-brand-accent transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/lineas-de-accion" className="hover:text-brand-accent transition-colors">Líneas de Acción</Link></li>
            <li><Link to="/contacto" className="hover:text-brand-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-brand-accent border-b border-brand-secondary inline-block pb-1">Contacto</h3>
          <ul className="space-y-3 text-sm text-brand-border">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-accent flex-shrink-0 mt-0.5" />
              <span>Calle Donoso Torrez # 3,<br />Zona Bajo San Isidro<br />La Paz, Bolivia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent flex-shrink-0" />
              <span>+591 (Aquí número de contacto)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent flex-shrink-0" />
              <span>contacto@prodehbol.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-brand-secondary text-center text-xs text-brand-border">
        &copy; {new Date().getFullYear()} PRODEHBOL - Pro Derechos Humanos Bolivia. Todos los derechos reservados.
      </div>
    </footer>
  );
};
