import { Shield, Users, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-brand-white py-24 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Abstract background pattern for serious/institutional feel */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-brand-accent uppercase mb-4">
            Pro Derechos Humanos Bolivia
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            "Descolonizar los <br />
            <span className="text-brand-accent">Derechos Humanos</span>"
          </h1>
          <p className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Promoviendo la dignidad, la libre determinación, la igualdad y la no discriminación en el Estado Plurinacional de Bolivia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quienes-somos" className="bg-brand-accent hover:bg-opacity-90 text-brand-white px-8 py-3 rounded font-bold transition-all shadow-lg flex items-center justify-center gap-2">
              Conocer más <ArrowRight size={20} />
            </Link>
            <Link to="/lineas-de-accion" className="border-2 border-brand-white hover:bg-brand-white hover:text-brand-primary text-brand-white px-8 py-3 rounded font-bold transition-all flex items-center justify-center">
              Nuestro Trabajo
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-primary mb-4">Nuestros Pilares</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-white p-8 rounded-lg shadow-sm border border-brand-border text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 p-4 rounded-full mb-6 text-brand-primary">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Dignidad Humana</h3>
              <p className="text-brand-secondary/80 leading-relaxed">
                Defendemos la dignidad intrínseca de todos los seres humanos como principio fundamental e inalienable.
              </p>
            </div>

            <div className="bg-brand-white p-8 rounded-lg shadow-sm border border-brand-border text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 p-4 rounded-full mb-6 text-brand-primary">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Libre Determinación</h3>
              <p className="text-brand-secondary/80 leading-relaxed">
                Apoyamos el derecho a la libre determinación de los pueblos, garantizado por nuestra Constitución.
              </p>
            </div>

            <div className="bg-brand-white p-8 rounded-lg shadow-sm border border-brand-border text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 p-4 rounded-full mb-6 text-brand-primary">
                <Scale size={40} />
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">Igualdad y No Discriminación</h3>
              <p className="text-brand-secondary/80 leading-relaxed">
                Trabajamos activamente para erradicar toda forma de discriminación y asegurar la igualdad ante la ley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mision Brief */}
      <section className="py-16 md:py-24 bg-brand-white border-t border-brand-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-brand-secondary text-brand-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Nuestra Misión Práctica</h2>
              <p className="text-brand-light/90 leading-relaxed mb-8">
                PRODEHBOL no se limita a la denuncia. Nuestro compromiso es generar impacto real relacionándonos con el Estado boliviano (instancias políticas y militares) para establecer mecanismos de diálogo y proponer soluciones estructurales.
              </p>
              <Link to="/lineas-de-accion" className="text-brand-accent font-bold hover:text-brand-white transition-colors flex items-center gap-2">
                Ver líneas de acción <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2 bg-brand-primary p-10 flex items-center justify-center relative overflow-hidden">
               {/* Decorative elements for the right side */}
               <Scale size={180} className="text-brand-white/10 absolute -right-10 -bottom-10" />
               <blockquote className="relative z-10 text-xl font-serif italic text-brand-light border-l-4 border-brand-accent pl-6">
                 "La defensa de los derechos humanos requiere tanto firmeza en la denuncia como voluntad para construir soluciones conjuntas."
               </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
