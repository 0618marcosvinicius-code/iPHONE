import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15161A] border-t border-white/5 pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-10 text-white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Assistência técnica especializada em iPhone em João Pessoa. Diagnóstico rápido, peça de qualidade e garantia por escrito.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B0B0D] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0B0B0D] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nós</a>
              </li>
              <li>
                <a href="#serviços" className="text-gray-400 hover:text-white transition-colors text-sm">Nossos Serviços</a>
              </li>
              <li>
                <a href="#avaliações" className="text-gray-400 hover:text-white transition-colors text-sm">Avaliações</a>
              </li>
              <li>
                <a href="#localizacao" className="text-gray-400 hover:text-white transition-colors text-sm">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Troca de Tela</li>
              <li className="text-gray-400 text-sm">Substituição de Bateria</li>
              <li className="text-gray-400 text-sm">Reparo em Placa</li>
              <li className="text-gray-400 text-sm">Desoxidação</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Esperança, 1234 - Manaíra<br />
                  João Pessoa - PB
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(83) 8604-4833</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@casadophone.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Casa do Phone. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
