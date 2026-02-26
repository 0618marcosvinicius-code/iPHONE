import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function LocationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Troca na hora?',
      answer: 'Sim, a maioria dos serviços como troca de bateria e tela são realizados em até 40 minutos, enquanto você aguarda em nosso espaço confortável.'
    },
    {
      question: 'Perco meus dados?',
      answer: 'Não. Em 99% dos casos, como trocas de tela, bateria ou conectores, seus dados permanecem intactos. Recomendamos o backup apenas por precaução.'
    },
    {
      question: 'Tem garantia?',
      answer: 'Sim! Oferecemos garantia formal por escrito em todos os nossos reparos, garantindo a qualidade da peça e do serviço prestado.'
    },
    {
      question: 'Quanto custa?',
      answer: 'O valor depende do modelo do seu iPhone e do tipo de reparo. Fale conosco no WhatsApp para receber um orçamento rápido, transparente e sem compromisso.'
    }
  ];

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-[#15161A] border-t border-white/5" id="localizacao">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* SEO Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Assistência técnica de iPhone em João Pessoa.
            </h2>
            <div className="prose prose-lg text-gray-400 leading-relaxed">
              <p className="mb-6 text-lg md:text-xl">
                Se você pesquisou por conserto de iPhone em João Pessoa, troca de tela, bateria ou reparo rápido, a Casa do Phone está pronta para atender.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-8">
              Perguntas Frequentes
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-white/5 rounded-2xl overflow-hidden bg-[#0B0B0D] transition-colors hover:border-white/20"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none min-h-[60px]"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
