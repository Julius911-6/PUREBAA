
import { Clock, Mountain, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 'uyuni',
    title: 'Salar de Uyuni',
    subtitle: 'El espejo del mundo',
    image: 'https://images.unsplash.com/photo-1533087222409-5a639b752945?auto=format&fit=crop&w=800&q=80',
    description: 'Recorre la planicie de sal más grande y alta del mundo. Experimenta atardeceres surrealistas y perspectivas únicas en un mar blanco infinito.',
    duration: '1 a 3 Días',
    altitude: '3,656 msnm'
  },
  {
    id: 'siloli',
    title: 'Desierto de Siloli',
    subtitle: 'Paisajes marcianos',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'Explora uno de los desiertos más áridos del mundo, famoso por sus formaciones rocosas esculpidas por el viento, como el icónico Árbol de Piedra.',
    duration: 'Circuito Sur',
    altitude: '4,500 msnm'
  },
  {
    id: 'lagunas',
    title: 'Lagunas Mayores',
    subtitle: 'Colorada y Verde',
    image: 'https://images.unsplash.com/photo-1582206748455-70339d2ec1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Maravíllate con las aguas carmesí de la Laguna Colorada, hogar de miles de flamencos, y el vibrante tono esmeralda de la Laguna Verde a los pies del volcán Licancabur.',
    duration: 'Circuito Sur',
    altitude: '4,278 - 4,300 msnm'
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4 uppercase">
              Descubre lo <span className="text-brand-andeanBlue">Inexplorado</span>
            </h2>
            <div className="w-24 h-1 bg-brand-terracotta mb-6"></div>
            <p className="text-brand-gray text-lg">
              Expediciones diseñadas para los espíritus aventureros que buscan exclusividad y confort en los paisajes más extremos y hermosos de Bolivia.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-earth hover:text-brand-terracotta font-bold transition-colors">
            Ver todas las rutas <ArrowRight size={20} />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              {/* Image Box */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent z-10"></div>
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Image Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <p className="text-brand-sand font-bold text-sm tracking-widest uppercase mb-1">{dest.subtitle}</p>
                  <h3 className="text-2xl font-bold text-brand-white">{dest.title}</h3>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-brand-white p-6 border-x border-b border-gray-100">
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {dest.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                    <Clock size={16} className="text-brand-terracotta" />
                    {dest.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                    <Mountain size={16} className="text-brand-terracotta" />
                    {dest.altitude}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden mt-10 w-full flex justify-center items-center gap-2 text-brand-earth font-bold border-2 border-brand-earth py-3 rounded-md">
          Ver todas las rutas <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
};