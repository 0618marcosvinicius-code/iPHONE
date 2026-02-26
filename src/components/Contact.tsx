import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#0B0B0D] border-t border-white/5" id="contato">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Map and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-10 md:mb-12">
              Venha tomar um café com a gente.
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#15161A] rounded-2xl flex items-center justify-center text-white shadow-sm border border-white/10 flex-shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Av. Esperança, 1234 - Manaíra<br />
                    João Pessoa - PB, 58038-280
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#15161A] rounded-2xl flex items-center justify-center text-white shadow-sm border border-white/10 flex-shrink-0">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Segunda a Sexta: 09h às 18h<br />
                    Sábado: 09h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-[#15161A]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.22693536904!2d-34.83401862416805!3d-7.099684669608115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81155555555%3A0x5555555555555555!2sMana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Casa do Phone"
              className="absolute inset-0 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 invert-[.9] hue-rotate-180"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
