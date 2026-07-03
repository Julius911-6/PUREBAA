
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Professionals } from './components/Professionals';
import { Destinations } from './components/Destinations';
import { Search, Compass, Shield, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&w=1920&q=80"
            alt="Salar de Uyuni 4x4 Expedition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <span className="text-brand-sand font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
            Tomas Cruz & Sons
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-white mb-6 leading-tight drop-shadow-lg uppercase">
            3 Generaciones <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sand to-brand-white">de Experiencia</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md">
            Expediciones exclusivas por el Salar de Uyuni y desiertos de Bolivia. Confianza, Seguridad y Servicio VIP.
          </p>

          {/* Quick Search Bar */}
          <div className="bg-brand-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row gap-2 w-full max-w-4xl">
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Destino</label>
              <select className="w-full bg-transparent text-brand-dark font-medium focus:outline-none cursor-pointer">
                <option>Salar de Uyuni</option>
                <option>Desierto de Siloli</option>
                <option>Lagunas Mayores</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Duración</label>
              <select className="w-full bg-transparent text-brand-dark font-medium focus:outline-none cursor-pointer">
                <option>Full Day (1 Día)</option>
                <option>Clásico (3 Días / 2 Noches)</option>
                <option>Expedición VIP (4 Días)</option>
              </select>
            </div>
            <button className="bg-brand-earth hover:bg-brand-dark text-brand-white px-8 py-4 rounded-md font-bold transition-colors flex items-center justify-center gap-2">
              <Search size={20} /> Buscar Ruta
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-brand-dark text-brand-white border-b-4 border-brand-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <Shield size={48} className="text-brand-sand mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase">Confianza & Seguridad</h3>
              <p className="text-gray-400 text-sm">Vehículos 4x4 equipados y mantenidos rigurosamente para los terrenos más hostiles.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Award size={48} className="text-brand-sand mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase">Servicio VIP</h3>
              <p className="text-gray-400 text-sm">Atención personalizada, menús gourmet en medio del desierto y confort en cada detalle.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Compass size={48} className="text-brand-sand mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase">Expertos Locales</h3>
              <p className="text-gray-400 text-sm">Nuestra familia conoce el salar desde hace 3 generaciones. Rutas exclusivas lejos de las multitudes.</p>
            </div>
          </div>
        </div>
      </section>

      <Destinations />
      <Professionals />

      {/* About Teaser */}
      <section id="about" className="py-24 bg-brand-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <img src="/logo.jpeg" alt="Tomas Cruz & Sons Heritage" className="w-full max-w-md mx-auto rounded-full shadow-2xl border-8 border-brand-light" />
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-brand-dark text-brand-white p-6 rounded-lg shadow-xl max-w-xs border border-brand-earth">
              <p className="font-serif font-bold text-lg mb-1">"Nuestra historia es el Salar"</p>
              <p className="text-xs text-brand-sand">- Familia Cruz</p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 uppercase">Sobre Nosotros</h2>
            <p className="text-brand-gray text-lg mb-6 leading-relaxed">
              Tomas Cruz & Sons no es solo una agencia, es el legado de una familia boliviana profundamente conectada con el Altiplano. Durante tres generaciones, hemos guiado a viajeros de todo el mundo a través de los paisajes más impresionantes de los Andes.
            </p>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Nuestro compromiso es ofrecer expediciones donde la seguridad, el confort VIP y el profundo respeto por la naturaleza se unen para crear recuerdos que durarán toda la vida.
            </p>
            <button className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-white px-8 py-3 font-bold transition-colors">
              Conoce nuestra historia
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;