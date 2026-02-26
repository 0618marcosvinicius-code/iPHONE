import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Warranty() {
  const highlights = [
    'Atendimento seguro',
    'Peças de qualidade',
    'Suporte pós-serviço'
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#F5F6F8] border-t border-gray-100" id="garantia">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
          <ShieldCheck size={32} className="text-gray-900" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
          Garantia real. Sem enrolação.
        </h2>
        
        <div className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12 space-y-2">
          <p>Você recebe garantia por escrito no reparo realizado.</p>
          <p>Transparência sobre peça e serviço.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700 font-medium bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm w-full sm:w-auto justify-center">
              <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <a 
          href="https://wa.me/558386044833"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-base font-medium hover:shadow-lg hover:shadow-black/10 transition-all min-h-[56px] w-full sm:w-auto"
        >
          Quero atendimento seguro
        </a>
      </div>
    </section>
  );
}
