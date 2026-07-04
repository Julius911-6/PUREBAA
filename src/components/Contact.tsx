import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend server.
    alert('Mensaje enviado. Nos pondremos en contacto a la brevedad.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full bg-brand-light">
      {/* Page Header */}
      <section className="bg-brand-primary text-brand-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Contacto</h1>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto">
            Estamos a su disposición para consultas, denuncias o propuestas. Comuníquese con nosotros.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-brand-white p-8 rounded-xl shadow-sm border border-brand-border h-full">
                <h2 className="text-2xl font-serif font-bold text-brand-primary mb-6 border-b border-brand-border pb-4">Sede Principal</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0 mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-1">Dirección</h4>
                      <p className="text-brand-secondary/80 text-sm leading-relaxed">
                        Calle Donoso Torrez # 3,<br />
                        Zona Bajo San Isidro<br />
                        La Paz, Bolivia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-1">Teléfono</h4>
                      <p className="text-brand-secondary/80 text-sm">
                        +591 (Número de contacto)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0 mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-1">Correo Electrónico</h4>
                      <p className="text-brand-secondary/80 text-sm break-all">
                        contacto@prodehbol.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0 mt-1">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary mb-1">Horario de Atención</h4>
                      <p className="text-brand-secondary/80 text-sm">
                        Lunes a Viernes:<br />
                        08:30 - 12:30<br />
                        14:30 - 18:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-brand-white p-8 md:p-10 rounded-xl shadow-sm border border-brand-border">
                <h2 className="text-2xl font-serif font-bold text-brand-primary mb-6">Formulario de Comunicación</h2>
                <p className="text-brand-secondary/80 mb-8">
                  Utilice el siguiente formulario para enviarnos un mensaje directo. Si se trata de una denuncia de carácter urgente, le sugerimos comunicarse telefónicamente o acudir a nuestras oficinas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-brand-secondary mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-brand-secondary mb-2">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-brand-secondary mb-2">Asunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange as any}
                      required
                      className="w-full px-4 py-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow bg-white"
                    >
                      <option value="" disabled>Seleccione un asunto</option>
                      <option value="Consulta General">Consulta General</option>
                      <option value="Denuncia">Denuncia de Violación de DDHH</option>
                      <option value="Propuesta Institucional">Propuesta Institucional</option>
                      <option value="Prensa/Medios">Prensa / Medios de Comunicación</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-brand-secondary mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow resize-y"
                      placeholder="Escriba su mensaje aquí de forma clara y detallada..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-brand-primary hover:bg-brand-secondary text-brand-white px-8 py-3 rounded-md font-bold transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
                  >
                    <Send size={18} /> Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
