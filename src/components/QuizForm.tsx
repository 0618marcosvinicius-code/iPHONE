import React, { useState } from 'react';
import { ArrowRight, Smartphone, Battery, Cable, Cpu, Droplets, Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';

export function QuizForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    model: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    { id: 'Troca de Tela', icon: <Smartphone size={24} />, label: 'Troca de Tela' },
    { id: 'Troca de Bateria', icon: <Battery size={24} />, label: 'Troca de Bateria' },
    { id: 'Conector de Carga', icon: <Cable size={24} />, label: 'Conector de Carga' },
    { id: 'Reparo em Placa', icon: <Cpu size={24} />, label: 'Reparo em Placa' },
    { id: 'Desoxidação (Molhou)', icon: <Droplets size={24} />, label: 'Desoxidação' },
    { id: 'Outro', icon: <Wrench size={24} />, label: 'Outro Serviço' },
  ];

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setStep(2);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2 && formData.model.trim() !== '') {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de um orçamento.%0A%0A*Serviço:* ${formData.service}%0A*Modelo:* ${formData.model}%0A%0A*Meus Dados:*%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*WhatsApp:* ${formData.phone}`;
    
    window.open(`https://wa.me/558386044833?text=${message}`, '_blank');
  };

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white border-t border-gray-100" id="orcamento">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Descubra o valor do seu reparo
          </h2>
          <p className="text-lg text-gray-500">
            Responda rápido e receba seu orçamento direto no WhatsApp.
          </p>
        </div>

        <div className="bg-[#F5F6F8] rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gray-900 rounded-full -z-10 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= num ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > num ? <CheckCircle2 size={16} /> : num}
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Qual serviço você precisa?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all text-left group"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <span className="font-medium text-gray-900">{service.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Device Model */}
          {step === 2 && (
            <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Qual o modelo do seu aparelho?
              </h3>
              <div className="mb-8">
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                  Modelo (Ex: iPhone 13 Pro)
                </label>
                <input
                  type="text"
                  id="model"
                  required
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all text-lg"
                  placeholder="Digite o modelo..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={!formData.model.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próximo passo
                  <ChevronRight size={20} />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Para onde enviamos o orçamento?
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-4 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  Receber Orçamento no WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
