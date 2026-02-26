import React from 'react';
import { MessageCircle, Search, ShieldCheck } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      title: 'Você chama no WhatsApp',
      description: 'Nosso atendimento é rápido e direto. Relate o problema do seu iPhone e tire suas dúvidas.',
    },
    {
      icon: <Search size={32} strokeWidth={1.5} />,
      title: 'Recebe diagnóstico e valor',
      description: 'Avaliamos a situação e passamos o orçamento completo, sem letras miúdas ou surpresas.',
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: 'Reparo + teste + garantia',
      description: 'Executamos o serviço, testamos todas as funções e entregamos com garantia por escrito.',
    },
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-t border-gray-100" id="processo">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Sem complicação.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Transparência total antes de qualquer serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative h-full">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 mb-8 shadow-sm border border-gray-100 relative z-10">
                {step.icon}
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a 
            href="https://wa.me/558386044833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-full text-base font-medium hover:shadow-lg hover:shadow-black/10 transition-all w-full sm:w-auto min-h-[56px]"
          >
            Falar com técnico agora
          </a>
        </div>
      </div>
    </section>
  );
}
