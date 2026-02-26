import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';

export function Reviews() {
  const [currentImage, setCurrentImage] = useState(0);

  const reviews = [
    {
      name: 'Mariana Silva',
      text: 'Serviço impecável! Meu iPhone 13 caiu na água e achei que tinha perdido tudo. Eles recuperaram a placa e o aparelho voltou a funcionar perfeitamente. Atendimento super transparente.',
      date: 'há 2 semanas',
    },
    {
      name: 'Carlos Eduardo',
      text: 'Troquei a bateria do meu iPhone 11 e parece que comprei um celular novo. Fizeram na hora, em menos de 40 minutos. Recomendo de olhos fechados!',
      date: 'há 1 mês',
    },
    {
      name: 'Fernanda Costa',
      text: 'A melhor assistência de João Pessoa. Levei para trocar a tela e o True Tone continuou funcionando perfeitamente. Ambiente limpo e profissionais muito educados.',
      date: 'há 2 meses',
    }
  ];

  const photos = [
    {
      url: 'https://smartback.com.br/upload/service/KbTSc7KLJCgYVaJX4UITiGM2cRdk20koTiBAM9in.jpeg',
      caption: 'Nossa bancada técnica com equipamentos de precisão',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
      caption: 'Microsoldagem avançada em placa lógica',
    },
    {
      url: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop',
      caption: 'Antes e Depois: Troca de vidro traseiro',
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#0E0E11] border-t border-gray-900" id="avaliações">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Quem já trouxe, recomenda.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
            A satisfação dos nossos clientes é a nossa maior garantia. Veja o que dizem sobre o nosso trabalho e conheça nossa estrutura.
          </p>
          
          {/* Visual Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-[#16181D] px-5 py-2.5 rounded-full border border-white/5 shadow-sm w-full sm:w-auto justify-center">
              <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-200">+5.000 aparelhos reparados</span>
            </div>
            <div className="flex items-center gap-2 bg-[#16181D] px-5 py-2.5 rounded-full border border-white/5 shadow-sm w-full sm:w-auto justify-center">
              <MapPin size={18} className="text-blue-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-200">7 anos atendendo João Pessoa</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Reviews & Google Embed Placeholder */}
          <div className="flex flex-col gap-8">
            {/* Google Embed Placeholder */}
            <div className="bg-[#16181D] p-6 md:p-8 rounded-3xl shadow-sm border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">5.0</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-400">
                  Baseado em mais de 300 avaliações no Google
                </p>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-colors whitespace-nowrap min-h-[44px]">
                Avaliar no Google
              </button>
            </div>

            {/* Review Cards */}
            <div className="grid gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-[#16181D] p-6 md:p-8 rounded-3xl shadow-lg shadow-black/20 border border-white/5">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://wa.me/558386044833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition-all shadow-lg shadow-black/20 w-full sm:w-auto min-h-[56px]"
              >
                Quero meu orçamento
              </a>
            </div>
          </div>

          {/* Right Column: Photo Carousel */}
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#16181D] shadow-2xl shadow-black/50 group border border-white/5">
              {/* Images */}
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-white text-base md:text-lg font-medium tracking-wide">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30 min-h-[44px] min-w-[44px]"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30 min-h-[44px] min-w-[44px]"
                aria-label="Próxima foto"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>

              {/* Indicators */}
              <div className="absolute top-6 left-0 right-0 z-20 flex justify-center gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                      index === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  >
                    <span className="sr-only">Foto {index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
