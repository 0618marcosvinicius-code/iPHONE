import React, { useRef } from 'react';
import { Clock, AlertCircle, ChevronLeft, ChevronRight, Smartphone, Battery, Cable, Cpu, Droplets, RefreshCw } from 'lucide-react';

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Troca de Tela',
      icon: <Smartphone size={28} strokeWidth={1.5} />,
      symptoms: 'Vidro trincado, touch falhando, manchas ou listras na imagem.',
      time: '40 minutos',
    },
    {
      title: 'Substituição de Bateria',
      icon: <Battery size={28} strokeWidth={1.5} />,
      symptoms: 'Descarregando rápido, desligando sozinho, bateria estufada.',
      time: '30 minutos',
    },
    {
      title: 'Conector de Carga',
      icon: <Cable size={28} strokeWidth={1.5} />,
      symptoms: 'Não carrega, mau contato no cabo, acessório não suportado.',
      time: '45 minutos',
    },
    {
      title: 'Reparo em Placa',
      icon: <Cpu size={28} strokeWidth={1.5} />,
      symptoms: 'Aparelho não liga, sem sinal de rede, falha no áudio (Codec).',
      time: '1 a 3 dias',
    },
    {
      title: 'Desoxidação',
      icon: <Droplets size={28} strokeWidth={1.5} />,
      symptoms: 'Caiu na água ou líquidos, tela piscando, superaquecimento.',
      time: '1 a 2 dias',
    },
    {
      title: 'Atualização e Software',
      icon: <RefreshCw size={28} strokeWidth={1.5} />,
      symptoms: 'Travado na tela da maçã, loop infinito, erros de restauração.',
      time: '1 a 2 horas',
    },
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-t border-gray-100" id="serviços">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Soluções precisas para cada tipo de problema. Diagnóstico transparente e reparo com padrão de qualidade Apple.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons (Desktop) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`min-w-[85vw] sm:min-w-[350px] lg:min-w-[calc(33.333%-16px)] snap-center p-8 sm:p-10 rounded-3xl transition-all duration-300 group border border-gray-100 hover:border-gray-200 flex flex-col h-full bg-[#F5F6F8] hover:shadow-lg hover:shadow-gray-200/50`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-900 shadow-sm border border-gray-100 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  {service.title}
                </h3>
                
                <div className="space-y-6 mb-10 flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                      <AlertCircle size={16} className="text-gray-400" />
                      Sintomas
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {service.symptoms}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                      <Clock size={16} className="text-gray-400" />
                      Tempo Médio
                    </div>
                    <p className="text-gray-500">
                      {service.time}
                    </p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5583999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors mt-auto min-h-[44px]"
                >
                  Solicitar orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
