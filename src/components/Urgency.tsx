import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Urgency() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#16181D] border-t border-gray-900">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl shadow-sm border border-white/10 mb-8">
          <AlertTriangle size={32} className="text-white" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-8">
          Seu iPhone não pode parar.
        </h2>
        
        <div className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12 space-y-6">
          <p>
            Tela quebrada, bateria acabando rápido, celular que não carrega ou molhou.<br className="hidden md:block" />
            <strong className="font-medium text-white">Quanto mais você espera, maior pode ser o dano.</strong>
          </p>
          <p>
            Aqui o diagnóstico é preciso e o reparo é feito com padrão profissional.
          </p>
        </div>

        <a 
          href="https://wa.me/558386044833"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition-all shadow-lg shadow-black/20 min-h-[56px] w-full sm:w-auto"
        >
          Resolver agora
        </a>
      </div>
    </section>
  );
}
