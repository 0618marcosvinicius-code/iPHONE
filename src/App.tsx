import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Process } from './components/Process';
import { Warranty } from './components/Warranty';
import { QuizForm } from './components/QuizForm';
import { LocationFAQ } from './components/LocationFAQ';
import { Urgency } from './components/Urgency';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main>
        <Hero />
        <Expertise />
        <Services />
        <Urgency />
        <Process />
        <Reviews />
        <Warranty />
        <QuizForm />
        <LocationFAQ />
        <Contact />
      </main>

      <Footer />
      <Chatbot />

      {/* Fixed WhatsApp Button for Mobile */}
      <a
        href="https://wa.me/5583999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] transition-transform active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}
