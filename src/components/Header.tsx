
import { Globe, Menu, User, Calendar, MapPin, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark text-brand-light sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Tomas Cruz & Sons Logo" className="h-16 w-16 object-cover rounded-full bg-brand-white p-1" />
          <div>
            <h1 className="text-xl font-bold tracking-wider text-brand-white uppercase">Tomas Cruz & Sons</h1>
            <p className="text-xs text-brand-sand tracking-widest uppercase hidden md:block">3 Generaciones de Experiencia</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#destinations" className="hover:text-brand-terracotta transition-colors flex items-center gap-1"><MapPin size={16}/> Destinos</a>
          <a href="#professionals" className="hover:text-brand-terracotta transition-colors flex items-center gap-1"><User size={16}/> Guias VIP</a>
          <a href="#about" className="hover:text-brand-terracotta transition-colors">Nosotros</a>
        </nav>

        {/* Actions & Language */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-brand-sand transition-colors">
            <Globe size={18} />
            <span className="text-sm font-medium">ES</span>
            <ChevronDown size={14} />
          </div>
          <a href="#book" className="hidden md:flex bg-brand-earth hover:bg-brand-sand text-brand-white px-5 py-2 rounded-sm font-bold transition-colors items-center gap-2">
            <Calendar size={18} />
            Reserva VIP
          </a>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
