import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da Casa do Phone. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é o assistente virtual da Casa do Phone, uma assistência técnica especializada em iPhone em João Pessoa.
Seu objetivo é sanar dúvidas frequentes de forma clara, educada e direta.
Informações importantes:
- Endereço: Av. Esperança, 1234 - Manaíra, João Pessoa - PB.
- Horário: Segunda a Sexta das 09h às 18h, Sábado das 09h às 13h.
- Serviços: Troca de tela, bateria, conector de carga, reparo em placa, desoxidação, software.
- Diferenciais: Orçamento rápido pelo WhatsApp, reparo rápido, garantia por escrito (+7 anos de experiência, +5k aparelhos reparados).
- Contato: WhatsApp (83) 8604-4833.
Sempre incentive o cliente a chamar no WhatsApp para orçamentos exatos. Seja conciso e amigável.`,
        },
      });

      // Send previous context if needed, but for simplicity we can just send the new message
      // To maintain history, we can pass the history to the chat creation, but the SDK handles it if we reuse the chat instance.
      // Wait, we need to keep the chat instance outside or recreate it with history.
      // Let's just send the message to a new content generation with history, or keep a chat instance in a ref.
      
      // Actually, let's keep the chat instance in a ref.
      if (!chatRef.current) {
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `Você é o assistente virtual da Casa do Phone, uma assistência técnica especializada em iPhone em João Pessoa.
Seu objetivo é sanar dúvidas frequentes de forma clara, educada e direta.
Informações importantes:
- Endereço: Av. Esperança, 1234 - Manaíra, João Pessoa - PB.
- Horário: Segunda a Sexta das 09h às 18h, Sábado das 09h às 13h.
- Serviços: Troca de tela, bateria, conector de carga, reparo em placa, desoxidação, software.
- Diferenciais: Orçamento rápido pelo WhatsApp, reparo rápido, garantia por escrito (+7 anos de experiência, +5k aparelhos reparados).
- Contato: WhatsApp (83) 8604-4833.
Sempre incentive o cliente a chamar no WhatsApp para orçamentos exatos. Seja conciso e amigável.`,
          },
        });
      }

      const response = await chatRef.current.sendMessage({ message: userMessage });
      
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Desculpe, não consegui processar sua mensagem.' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro ao tentar responder. Por favor, tente novamente ou chame no WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatRef = useRef<any>(null);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 md:bottom-6 right-6 z-40 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-gray-900/30 hover:bg-gray-800 transition-transform active:scale-95 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat de dúvidas"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full md:w-[380px] h-[100dvh] md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-10 md:slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <MessageSquare size={16} />
              </div>
              <div>
                <h3 className="font-medium text-sm">Assistente Virtual</h3>
                <p className="text-xs text-gray-400">Tire suas dúvidas agora</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-gray-900 text-white rounded-tr-sm' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-gray-400" />
                  <span className="text-xs text-gray-500">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
