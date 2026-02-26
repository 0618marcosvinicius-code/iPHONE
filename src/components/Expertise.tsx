import React from 'react';

export function Expertise() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#F5F6F8] border-t border-gray-100" id="sobre">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
          Especialistas em iPhone em João Pessoa.
        </h2>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-16 md:mb-20 max-w-3xl mx-auto">
          Trabalhamos exclusivamente com dispositivos Apple, oferecendo diagnóstico técnico preciso, transparência no orçamento e reparos realizados com padrão profissional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Block 1 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-gray-900 mb-4">
              +5k
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">
              Aparelhos Reparados
            </span>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-gray-900 mb-4">
              +7
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">
              Anos de Experiência
            </span>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-gray-900 mb-4">
              100%
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">
              Garantia por Escrito
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
