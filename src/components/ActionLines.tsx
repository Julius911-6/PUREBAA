import { AlertTriangle, MessagesSquare, FileText } from 'lucide-react';

export const ActionLines: React.FC = () => {
  const actions = [
    {
      icon: <AlertTriangle size={32} className="text-brand-accent" />,
      title: "Denuncia de Violaciones",
      description: "Documentamos y denunciamos formalmente casos de violaciones a los derechos humanos ante las instancias nacionales e internacionales correspondientes. Proveemos acompañamiento y visibilidad a las víctimas para asegurar que ninguna transgresión quede impune."
    },
    {
      icon: <MessagesSquare size={32} className="text-brand-accent" />,
      title: "Establecimiento de Diálogos",
      description: "Generamos y participamos en espacios de diálogo con actores estatales, incluyendo instancias políticas y militares. Creemos que la transformación estructural requiere comunicación directa para construir entendimiento y garantizar el respeto institucional a los derechos fundamentales."
    },
    {
      icon: <FileText size={32} className="text-brand-accent" />,
      title: "Presentación de Propuestas",
      description: "Desarrollamos investigaciones y formulamos propuestas de políticas públicas y normativas orientadas al Estado boliviano. Nuestro objetivo es aportar herramientas técnicas y jurídicas que fortalezcan el marco de protección de los derechos humanos en el país."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-brand-primary text-brand-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Líneas de Acción</h1>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Nuestro trabajo se estructura en tres ejes fundamentales para lograr un impacto real e integral.
          </p>
        </div>
      </section>

      {/* Action Lines Content */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-brand-white p-8 md:p-10 rounded-xl shadow-sm border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-primary/5 p-5 rounded-xl border border-brand-primary/10 shrink-0">
                  {action.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-primary mb-4">{action.title}</h2>
                  <p className="text-brand-secondary/90 leading-relaxed text-lg">
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Work Methodology Note */}
          <div className="mt-16 bg-brand-secondary text-brand-white p-8 rounded-xl border-l-4 border-brand-accent">
            <h3 className="text-xl font-bold mb-3">Nuestra Metodología</h3>
            <p className="text-brand-light/90 leading-relaxed">
              La consigna estratégica de "Descolonizar los Derechos Humanos" atraviesa transversalmente todas nuestras líneas de acción. Esto implica abordar cada caso y cada propuesta desde una perspectiva que reconoce la pluralidad y las realidades históricas del Estado Plurinacional de Bolivia, evitando visiones hegemónicas y centrando la atención en la dignidad comunitaria e individual.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
