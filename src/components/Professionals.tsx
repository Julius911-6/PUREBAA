
import { Star, ShieldCheck, Map, ChevronRight } from 'lucide-react';

const professionals = [
  {
    id: 1,
    name: "Carlos Cruz",
    role: "Conductor Experto & Guía",
    experience: "15 años",
    rating: 5.0,
    reviews: 142,
    languages: ["ES", "EN", "FR"],
    description: "Especialista en rutas de alta montaña y fotografía nocturna en el Salar. Conducción segura y conocimiento profundo de la flora y fauna local.",
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Luis Mamani",
    role: "Guía Bilingüe VIP",
    experience: "8 años",
    rating: 4.9,
    reviews: 98,
    languages: ["ES", "EN", "DE"],
    description: "Apasionado por la historia geológica de los desiertos bolivianos. Excelente atención al cliente y experto en primeros auxilios en zonas agrestes.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Roberto Cruz",
    role: "Conductor Jefe Expedición",
    experience: "25 años",
    rating: 5.0,
    reviews: 315,
    languages: ["ES", "EN"],
    description: "Tercera generación de la familia Cruz. Conoce cada rincón del Salar y los desiertos del Sur. Máxima seguridad y confort en cada viaje.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400&q=80"
  }
];

export const Professionals: React.FC = () => {
  return (
    <section id="professionals" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4 uppercase">
            Elige a tu <span className="text-brand-earth">Guía VIP</span>
          </h2>
          <div className="w-24 h-1 bg-brand-terracotta mx-auto mb-6"></div>
          <p className="text-brand-gray text-lg">
            A diferencia de las agencias tradicionales, aquí tú eliges con quién viajar. Conoce a nuestros expertos, revisa sus perfiles y selecciona a tu compañero de aventura ideal.
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {professionals.map((prof) => (
            <div key={prof.id} className="bg-brand-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">

              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img src={prof.image} alt={prof.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-brand-sand px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 border border-brand-sand/30">
                  <ShieldCheck size={16} /> Verificado
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">

                {/* Header info */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">{prof.name}</h3>
                    <p className="text-sm text-brand-terracotta font-medium">{prof.role}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex flex-col items-end">
                    <div className="flex items-center text-yellow-500 gap-1">
                      <Star size={16} fill="currentColor" />
                      <span className="font-bold text-brand-dark">{prof.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({prof.reviews} reviews)</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4 my-4 py-3 border-y border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Experiencia</span>
                    <span className="text-sm font-bold text-brand-dark flex items-center gap-1"><Map size={14} className="text-brand-earth"/> {prof.experience}</span>
                  </div>
                  <div className="flex flex-col border-l pl-4 border-gray-100">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Idiomas</span>
                    <div className="flex gap-1">
                      {prof.languages.map(lang => (
                        <span key={lang} className="text-xs font-bold bg-brand-sand/20 text-brand-earth px-1.5 py-0.5 rounded">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  "{prof.description}"
                </p>

                {/* Action */}
                <button className="mt-auto w-full bg-brand-dark hover:bg-brand-earth text-brand-white py-3 rounded font-bold transition-colors flex justify-center items-center gap-2 group">
                  Viaja conmigo
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};