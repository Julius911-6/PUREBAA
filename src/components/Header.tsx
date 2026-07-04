import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Quiénes Somos' },
    { path: '/lineas-de-accion', label: 'Líneas de Acción' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-brand-primary text-brand-white sticky top-0 z-50 shadow-md border-b-4 border-brand-accent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-4">
          {/* A placeholder for the logo, using initials or a generic icon if no logo is provided. Using text based logo for now. */}
          <div className="bg-brand-white text-brand-primary font-bold text-2xl h-12 w-12 flex items-center justify-center rounded shadow">
            PD
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">PRODEHBOL</h1>
            <p className="text-xs text-brand-light tracking-wide hidden md:block">Pro Derechos Humanos Bolivia</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-brand-accent text-brand-white'
                  : 'text-brand-light hover:bg-brand-secondary hover:text-brand-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-brand-white focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary border-t border-brand-primary">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-accent text-brand-white'
                    : 'text-brand-light hover:bg-brand-primary hover:text-brand-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
