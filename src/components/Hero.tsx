import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        <img
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
          alt="iPhone 15 Pro"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
      </div>

      {/* Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/80 to-purple-50/80 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-left md:text-center flex flex-col items-start md:items-center py-14 md:py-20">
        <div className="max-w-[680px] mx-auto flex flex-col items-start md:items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6 text-left md:text-center">
            Quebrou? Não carrega?<br />
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 drop-shadow-sm">A gente resolve hoje.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-500 mb-10 leading-[1.6] font-normal text-left md:text-center">
            Assistência técnica especializada em iPhone em João Pessoa.<br className="hidden sm:block" />
            Diagnóstico rápido, peça de qualidade e garantia por escrito.
          </p>

          {/* Bullets */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-8 mb-12 w-full md:w-fit md:mx-auto">
            {[
              'Orçamento pelo WhatsApp em minutos',
              'Reparo rápido',
              'Garantia real'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600 font-medium text-sm sm:text-base">
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" strokeWidth={2.5} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start md:justify-center gap-4 w-full sm:w-auto">
            <a 
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-base font-semibold hover:shadow-lg hover:shadow-black/10 transition-all flex items-center justify-center min-h-[56px]"
            >
              Solicitar orçamento agora
            </a>
            <a 
              href="https://wa.me/558386044833"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 border border-gray-200 rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-2 min-h-[56px]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Falar direto no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
