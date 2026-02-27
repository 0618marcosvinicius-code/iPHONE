// Initialize Lucide Icons
lucide.createIcons();

// --- Header Scroll State ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('border-gray-100', 'shadow-sm');
        header.classList.remove('border-transparent');
    } else {
        header.classList.add('border-transparent');
        header.classList.remove('border-gray-100', 'shadow-sm');
    }
});

// --- Mobile Menu ---
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'unset';
}

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuBackdrop.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// --- Services Carousel ---
const servicesContainer = document.getElementById('services-carousel');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

if (btnPrev && btnNext && servicesContainer) {
    btnPrev.addEventListener('click', () => {
        servicesContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
        servicesContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });
}

// --- Reviews Carousel ---
const reviewPhotos = document.querySelectorAll('.review-photo');
const reviewIndicators = document.querySelectorAll('.review-indicator');
const btnReviewPrev = document.getElementById('btn-review-prev');
const btnReviewNext = document.getElementById('btn-review-next');
let currentReviewIndex = 0;

function showReview(index) {
    reviewPhotos.forEach((photo, i) => {
        if (i === index) {
            photo.classList.remove('opacity-0', 'z-0');
            photo.classList.add('opacity-100', 'z-10');
        } else {
            photo.classList.add('opacity-0', 'z-0');
            photo.classList.remove('opacity-100', 'z-10');
        }
    });

    reviewIndicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.remove('w-2', 'bg-white/50');
            indicator.classList.add('w-8', 'bg-white');
        } else {
            indicator.classList.add('w-2', 'bg-white/50');
            indicator.classList.remove('w-8', 'bg-white');
        }
    });
}

if (btnReviewPrev && btnReviewNext) {
    btnReviewPrev.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex - 1 + reviewPhotos.length) % reviewPhotos.length;
        showReview(currentReviewIndex);
    });

    btnReviewNext.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex + 1) % reviewPhotos.length;
        showReview(currentReviewIndex);
    });

    reviewIndicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentReviewIndex = i;
            showReview(currentReviewIndex);
        });
    });
}

// --- FAQ Toggle ---
const faqButtons = document.querySelectorAll('.faq-btn');
faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        
        // Close others
        faqButtons.forEach(otherBtn => {
            if (otherBtn !== btn) {
                const otherContent = otherBtn.nextElementSibling;
                const otherIcon = otherBtn.querySelector('.faq-icon');
                otherContent.style.maxHeight = null;
                otherContent.classList.remove('opacity-100', 'pb-5');
                otherContent.classList.add('opacity-0');
                otherIcon.classList.remove('rotate-180');
            }
        });

        // Toggle current
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove('opacity-100', 'pb-5');
            content.classList.add('opacity-0');
            icon.classList.remove('rotate-180');
        } else {
            content.style.maxHeight = content.scrollHeight + 20 + "px";
            content.classList.add('opacity-100', 'pb-5');
            content.classList.remove('opacity-0');
            icon.classList.add('rotate-180');
        }
    });
});

// --- Quiz Form ---
let currentStep = 1;
const formData = { service: '', model: '', name: '', email: '', phone: '' };

const step1 = document.getElementById('quiz-step-1');
const step2 = document.getElementById('quiz-step-2');
const step3 = document.getElementById('quiz-step-3');
const progressBar = document.getElementById('quiz-progress');
const progressIndicators = document.querySelectorAll('.quiz-indicator');

function updateProgress() {
    progressBar.style.width = `${((currentStep - 1) / 2) * 100}%`;
    progressIndicators.forEach((indicator, i) => {
        const num = i + 1;
        if (currentStep > num) {
            indicator.innerHTML = '<i data-lucide="check-circle-2" class="w-4 h-4"></i>';
            indicator.classList.add('bg-gray-900', 'text-white');
            indicator.classList.remove('bg-gray-200', 'text-gray-500');
        } else if (currentStep === num) {
            indicator.innerHTML = num;
            indicator.classList.add('bg-gray-900', 'text-white');
            indicator.classList.remove('bg-gray-200', 'text-gray-500');
        } else {
            indicator.innerHTML = num;
            indicator.classList.remove('bg-gray-900', 'text-white');
            indicator.classList.add('bg-gray-200', 'text-gray-500');
        }
    });
    lucide.createIcons();
}

function showStep(step) {
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');
    
    if (step === 1) step1.classList.remove('hidden');
    if (step === 2) step2.classList.remove('hidden');
    if (step === 3) step3.classList.remove('hidden');
    
    currentStep = step;
    updateProgress();
}

// Service Selection
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        formData.service = btn.dataset.service;
        showStep(2);
    });
});

// Step 2 Form
const formStep2 = document.getElementById('form-step-2');
const modelInput = document.getElementById('model-input');
const btnNextStep = document.getElementById('btn-next-step');

if (modelInput) {
    modelInput.addEventListener('input', () => {
        btnNextStep.disabled = modelInput.value.trim() === '';
    });
}

if (formStep2) {
    formStep2.addEventListener('submit', (e) => {
        e.preventDefault();
        formData.model = modelInput.value;
        showStep(3);
    });
}

document.getElementById('btn-back-1')?.addEventListener('click', () => showStep(1));
document.getElementById('btn-back-2')?.addEventListener('click', () => showStep(2));

// Step 3 Form
const formStep3 = document.getElementById('form-step-3');
if (formStep3) {
    formStep3.addEventListener('submit', (e) => {
        e.preventDefault();
        formData.name = document.getElementById('name-input').value;
        formData.email = document.getElementById('email-input').value;
        formData.phone = document.getElementById('phone-input').value;
        
        const message = `Olá! Gostaria de um orçamento.%0A%0A*Serviço:* ${formData.service}%0A*Modelo:* ${formData.model}%0A%0A*Meus Dados:*%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*WhatsApp:* ${formData.phone}`;
        window.open(`https://wa.me/558386044833?text=${message}`, '_blank');
    });
}

// --- Chatbot ---
const chatBtn = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const closeChatBtn = document.getElementById('close-chat-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');
const chatTyping = document.getElementById('chat-typing');

// Replace with your actual Gemini API Key if you want it to work on static pages
// WARNING: Exposing API keys in frontend JS is a security risk.
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'; 

let chatHistory = [
    {
        role: "user",
        parts: [{ text: `Você é o assistente virtual da Casa do Phone, uma assistência técnica especializada em iPhone em João Pessoa.
Seu objetivo é sanar dúvidas frequentes de forma clara, educada e direta.
Informações importantes:
- Endereço: Av. Esperança, 1234 - Manaíra, João Pessoa - PB.
- Horário: Segunda a Sexta das 09h às 18h, Sábado das 09h às 13h.
- Serviços: Troca de tela, bateria, conector de carga, reparo em placa, desoxidação, software.
- Diferenciais: Orçamento rápido pelo WhatsApp, reparo rápido, garantia por escrito (+7 anos de experiência, +5k aparelhos reparados).
- Contato: WhatsApp (83) 8604-4833.
Sempre incentive o cliente a chamar no WhatsApp para orçamentos exatos. Seja conciso e amigável.` }]
    },
    {
        role: "model",
        parts: [{ text: "Entendido. Como posso ajudar?" }]
    }
];

if (chatBtn) {
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.remove('hidden');
        chatBtn.classList.add('hidden');
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        chatBtn.classList.remove('hidden');
    });

    function addMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`;
        
        const innerDiv = document.createElement('div');
        innerDiv.className = `max-w-[85%] p-3 rounded-2xl text-sm ${
            isUser 
                ? 'bg-gray-900 text-white rounded-tr-sm' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
        }`;
        innerDiv.textContent = text;
        
        div.appendChild(innerDiv);
        chatMessages.insertBefore(div, chatTyping);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleSendChat() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, true);
        chatInput.value = '';
        chatInput.disabled = true;
        sendChatBtn.disabled = true;
        chatTyping.classList.remove('hidden');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatHistory.push({ role: "user", parts: [{ text }] });

        try {
            if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
                // Mock response if no API key
                setTimeout(() => {
                    const responseText = "Para orçamentos exatos e atendimento rápido, por favor, chame nossa equipe no WhatsApp: (83) 8604-4833.";
                    addMessage(responseText, false);
                    chatHistory.push({ role: "model", parts: [{ text: responseText }] });
                    resetChatInput();
                }, 1000);
                return;
            }

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: chatHistory })
            });

            const data = await response.json();
            
            if (data.candidates && data.candidates[0].content.parts[0].text) {
                const responseText = data.candidates[0].content.parts[0].text;
                addMessage(responseText, false);
                chatHistory.push({ role: "model", parts: [{ text: responseText }] });
            } else {
                addMessage("Desculpe, não consegui processar sua mensagem.", false);
            }
        } catch (error) {
            console.error(error);
            addMessage("Desculpe, ocorreu um erro ao tentar responder. Por favor, tente novamente ou chame no WhatsApp.", false);
        } finally {
            resetChatInput();
        }
    }

    function resetChatInput() {
        chatInput.disabled = false;
        sendChatBtn.disabled = false;
        chatTyping.classList.add('hidden');
        chatInput.focus();
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendChatBtn.addEventListener('click', handleSendChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendChat();
    });
    chatInput.addEventListener('input', () => {
        sendChatBtn.disabled = chatInput.value.trim() === '';
    });
}

// --- Intersection Observer for Fade-in ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
