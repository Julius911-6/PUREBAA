import { BookOpen, Award, Scale } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-brand-light">
      {/* Page Header */}
      <section className="bg-brand-primary text-brand-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Quiénes Somos</h1>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Conoce nuestra historia, nuestra dirección y los valores que nos impulsan.
          </p>
        </div>
      </section>

      {/* History and Foundation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-brand-white p-8 md:p-12 rounded-xl shadow-sm border border-brand-border mb-12">
            <div className="flex items-start gap-6">
              <div className="bg-brand-primary/10 p-4 rounded-full hidden sm:block text-brand-primary">
                <BookOpen size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4">Nuestra Historia</h2>
                <p className="text-brand-secondary/90 leading-relaxed mb-4">
                  PRODEHBOL surgió en el año 2019 como una iniciativa urgente y necesaria de apoyo a personas en situación de vulnerabilidad, buscando dar respuesta inmediata y estructural a las violaciones de derechos humanos en el país.
                </p>
                <p className="text-brand-secondary/90 leading-relaxed">
                  Desde nuestros inicios, hemos entendido que la labor de defensa de los derechos humanos debe ir de la mano con la construcción de propuestas y el establecimiento de canales de diálogo con todas las instancias de la sociedad y el Estado Plurinacional.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Director Profile */}
          <div className="bg-brand-white p-8 md:p-12 rounded-xl shadow-sm border border-brand-border mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                 {/* Placeholder for Director Photo */}
                <div className="w-48 h-48 bg-brand-secondary/10 rounded-full mb-4 border-4 border-brand-light flex items-center justify-center">
                  <span className="text-brand-secondary/40 font-serif text-xl">Fotografía</span>
                </div>
                <h3 className="text-xl font-bold text-brand-primary">Abogada Nadesdha Guevara Oropeza</h3>
                <p className="text-brand-accent font-medium mt-1">Miembro Fundadora y Directora Ejecutiva</p>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4 flex items-center gap-2">
                  <Award className="text-brand-accent" size={24} />
                  Dirección Ejecutiva
                </h2>
                <p className="text-brand-secondary/90 leading-relaxed">
                  Bajo la dirección de la Abogada Nadesdha Guevara Oropeza, PRODEHBOL ha consolidado su enfoque de "Descolonizar los Derechos Humanos". Su liderazgo ha sido fundamental para establecer una organización que no solo señala las injusticias, sino que trabaja activamente en la formulación de políticas y mecanismos de diálogo con las altas esferas del estado y las fuerzas armadas.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-brand-secondary text-brand-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Scale className="text-brand-accent" size={32} />
              <h2 className="text-2xl font-serif font-bold">Valores Constitucionales</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-lg mb-2">Transparencia</h4>
                <p className="text-brand-light/80 text-sm leading-relaxed">Actuamos con total claridad en nuestras acciones, procesos y gestión institucional.</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-lg mb-2">Compromiso Social</h4>
                <p className="text-brand-light/80 text-sm leading-relaxed">Nuestra labor está dedicada inquebrantablemente a la protección de los más vulnerables.</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-lg mb-2">Independencia</h4>
                <p className="text-brand-light/80 text-sm leading-relaxed">Mantenemos una postura crítica y constructiva, guiada únicamente por la defensa de los derechos.</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-lg mb-2">Respeto Constitucional</h4>
                <p className="text-brand-light/80 text-sm leading-relaxed">Todas nuestras acciones se enmarcan en los preceptos de la Constitución Política del Estado.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
