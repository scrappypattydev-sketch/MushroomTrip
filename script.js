// =======================
// I18N
// =======================
const i18n = {
    it: {
        'heading-trama': 'Trama',
        'heading-gameplay': 'Gameplay & Meccaniche',
        'heading-media': 'Media & Concept',
        'heading-credits': 'Team & Contatti',
        'heading-roadmap': 'Roadmap di Sviluppo',
        'heading-faq': 'Domande Frequenti',
        'heading-newsletter': 'Iscriviti alla Newsletter',
        'heading-demo': 'Demo',

        'cta-scopri-gioco': 'Scopri il Gioco',
        'cta-play-demo': 'Play Demo',
        'cta-wishlist': 'Wishlist su Steam',
        'cta-contact': 'Contattaci',

        'trama-text': 'Dopo un rave illegale e un’overdose di psichedelici, ti risvegli nel Paese degli Allucinotteri come un piccolo fungo antropomorfo. Per tornare alla realtà, devi affrontare il Percorso Proibito e spezzare la maledizione musicale che tormenta il villaggio.',

        'gameplay-sanity-title': 'Gestione Sanità Mentale',
        'gameplay-sanity-desc': 'Ogni Power-Up ha un malus. Usali con attenzione!',
        'gameplay-platform-title': 'Platforming Preciso',
        'gameplay-platform-desc': 'Salti calibrati, puzzle ambientali e trappole dinamiche.',
        'gameplay-npc-title': 'NPC e Bonus Permanenti',
        'gameplay-npc-desc': 'Guaritrice, Ipnotista e Mercante ti aiuteranno (forse).',

        'demo-text': ' Puoi scaricare la demo giocabile direttamente da itch.io.',
        'demo-download': 'Scarica la Demo su itch.io',

        'credits-role-gd': 'Game Design',
        'credits-role-prog': 'Programming',
        'credits-role-3d': '3D Art',
        'credits-role-concept': 'Concept Art',
        'credits-role-sound': 'Sound Design',
        'credits-role-sp': 'Aiuti Esterni',

        'faq-q1': 'Quali sono i requisiti di sistema?',
        'faq-a1': 'Windows 10 64-bit, CPU dual-core, 8 GB RAM, GPU compatibile DirectX 11 e 2 GB VRAM.',
        'faq-q2': 'Come salvo i progressi?',
        'faq-a2': 'Il gioco salva automaticamente alla fine di ogni livello. Puoi anche salvare manualmente dal menu principale.',
        'faq-q3': 'Ci sarà il supporto al controller?',
        'faq-a3': 'Sì, supportiamo XBox, PlayStation e generic USB controller via API SDL2.',

        'roadmap-jan-label': 'Gennaio / Febbraio 2025',
        'roadmap-mar-label': 'Marzo / Aprile 2025',
        'roadmap-may-label': 'Maggio / Giugno 2025',
        'roadmap-jul-label': 'Luglio / Agosto 2025',
        'roadmap-sep-label': 'Settembre / Ottobre 2025',
        'roadmap-nov-label': 'Novembre / Dicembre 2025',
        'roadmap-jan2-label': 'Gennaio / Febbraio 2026',
        'roadmap-apr-label': 'Marzo / Aprile 2026',

        'roadmap-jan': 'Pre-produzione, definizione concept & lore.',
        'roadmap-mar': 'Inizio produzione con meccaniche di base.',
        'roadmap-may': 'Prime build giocabili & creazione del tutorial.',
        'roadmap-jul': 'Sviluppo asset di gioco & risoluzione bug.',
        'roadmap-sep': 'Revisione documentazione & aggiornamento funzionalità.',
        'roadmap-nov': 'Produzione Hub Centrale & nuove funzionalità di gioco.',
        'roadmap-jan2': 'Implementazione asset e sistemi & revisione percorso platform.',
        'roadmap-apr': 'Bilanciamento completo & pubblicazione prototipo su Steam.',

        'roadmap-status-completed': 'Completato',
        'roadmap-status-wip': 'In corso',

        'heading-discord': 'Unisciti alla Community',
        'discord-text': 'Entra nel server Discord di Mushroom Trip per seguire lo sviluppo, lasciare feedback, trovare altri giocatori e partecipare ai playtest della community.',
        'discord-button': 'Entra nel server Discord',

        'newsletter-text': 'Ricevi aggiornamenti su demo, beta e novità direttamente nella tua casella.',
        'newsletter-button': 'Iscriviti',
        'newsletter-success': 'Grazie! Controlla la tua email per confermare l’iscrizione.',

        'footer-text': '© 2025 Mushroom Trip. Tutti i diritti riservati.'
    },

    en: {
        'heading-trama': 'Story',
        'heading-gameplay': 'Gameplay & Mechanics',
        'heading-media': 'Media & Concept',
        'heading-credits': 'Team & Contacts',
        'heading-roadmap': 'Development Roadmap',
        'heading-faq': 'FAQ',
        'heading-newsletter': 'Join the Newsletter',
        'heading-demo': 'Demo',

        'cta-scopri-gioco': 'Discover the Game',
        'cta-play-demo': 'Play Demo',
        'cta-wishlist': 'Wishlist on Steam',
        'cta-contact': 'Contact us',

        'trama-text': 'After an illegal rave and an overdose of psychedelics, you wake up in the Land of the Hallucinotteri as a small anthropomorphic mushroom. To return to reality, you must face the Forbidden Path and break the musical curse haunting the village.',

        'gameplay-sanity-title': 'Sanity Management',
        'gameplay-sanity-desc': 'Every power-up has a drawback. Use them carefully!',
        'gameplay-platform-title': 'Precise Platforming',
        'gameplay-platform-desc': 'Tight jumps, environmental puzzles and dynamic traps.',
        'gameplay-npc-title': 'NPCs & Permanent Bonuses',
        'gameplay-npc-desc': 'The Healer, Hypnotist and Merchant will help you… maybe.',

        'demo-text': ' You can download the playable demo directly from itch.io.',
        'demo-download': 'Download the Demo on itch.io',


        'credits-role-gd': 'Game Design',
        'credits-role-prog': 'Programming',
        'credits-role-3d': '3D Art',
        'credits-role-concept': 'Concept Art',
        'credits-role-sound': 'Sound Design',
        'credits-role-sp': 'External Support',

        'faq-q1': 'What are the system requirements?',
        'faq-a1': 'Windows 10 64-bit, dual-core CPU, 8 GB RAM, DirectX 11 compatible GPU and 2 GB VRAM.',
        'faq-q2': 'How do I save my progress?',
        'faq-a2': 'The game auto-saves at the end of each level. You can also save manually from the main menu.',
        'faq-q3': 'Will there be controller support?',
        'faq-a3': 'Yes, we support Xbox, PlayStation and generic USB controllers via SDL2.',

        'roadmap-jan-label': 'January / February 2025',
        'roadmap-mar-label': 'March / April 2025',
        'roadmap-may-label': 'May / June 2025',
        'roadmap-jul-label': 'July / August 2025',
        'roadmap-sep-label': 'September / October 2025',
        'roadmap-nov-label': 'November / December 2025',
        'roadmap-jan2-label': 'January / February 2026',
        'roadmap-apr-label': 'March / April 2026',

        'roadmap-jan': 'Pre-production, concept definition & lore creation.',
        'roadmap-mar': 'Start of production with core mechanics.',
        'roadmap-may': 'First playable builds & tutorial development.',
        'roadmap-jul': 'Game asset development & bug fixing.',
        'roadmap-sep': 'Documentation revision & feature updates.',
        'roadmap-nov': 'Central Hub production & new gameplay systems.',
        'roadmap-jan2': 'Asset and system implementation & platforming path overhaul.',
        'roadmap-apr': 'Full balancing phase & Steam prototype release.',

        'roadmap-status-completed': 'Completed',
        'roadmap-status-wip': 'In Progress',

        'heading-discord': 'Join the Community',
        'discord-text': 'Join the Mushroom Trip Discord server to follow development, give feedback, find other players and take part in community playtests.',
        'discord-button': 'Join the Discord server',

        'newsletter-text': 'Get updates about demo, beta and news directly in your inbox.',
        'newsletter-button': 'Subscribe',
        'newsletter-success': 'Thanks! Check your inbox to confirm your subscription.',

        'footer-text': '© 2025 Mushroom Trip. All rights reserved.'
    }
};

// =======================
// TYPEWRITER
// =======================
const typedTexts = {
    it: 'Un viaggio psichedelico tra droga, fallimento e redenzione.',
    en: 'A psychedelic journey through drugs, failure, and redemption.'
};

let typewriterEl = null;
let typeIdx = 0;
let currentTypedText = '';
let typewriterTimeout = null;

function startTypewriter(lang) {
    if (!typewriterEl) return;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    const text = typedTexts[lang] || typedTexts.it;
    currentTypedText = text;
    typeIdx = 0;
    typewriterEl.textContent = '';

    function step() {
        if (typeIdx < currentTypedText.length) {
            typewriterEl.textContent += currentTypedText[typeIdx++];
            typewriterTimeout = setTimeout(step, 50);
        }
    }
    step();
}

// =======================
// APPLY LANG
// =======================
function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const dict = i18n[lang];
        if (dict && dict[key]) {
            el.textContent = dict[key];
        }
    });

    startTypewriter(lang);
}

// =======================
// INIT
// =======================
document.addEventListener('DOMContentLoaded', () => {
    typewriterEl = document.getElementById('typewriter');

    // Lingua
    const select = document.getElementById('lang-select');
    const savedLang = (select && (localStorage.getItem('lang') || select.value)) || 'it';
    if (select) {
        select.value = savedLang;
        select.addEventListener('change', () => {
            const lang = select.value;
            localStorage.setItem('lang', lang);
            applyLang(lang);
        });
    }
    applyLang(savedLang);

    // Reveal on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // Espansione card gameplay: solo una aperta alla volta
    document.querySelectorAll('.card.expandable').forEach(card => {
        card.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');

            // Chiudo tutte le altre
            document.querySelectorAll('.card.expandable.open').forEach(other => {
                other.classList.remove('open');
            });

            // Se quella cliccata era chiusa, la riapro
            if (!isOpen) {
                card.classList.add('open');
            }
        });
    });


    // Effetto tilt sulle card
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.card'), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    // Particelle di sfondo
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load('tsparticles', {
            fpsLimit: 60,
            background: { color: 'transparent' },
            particles: {
                number: {
                    value: window.innerWidth < 768 ? 10 : 80
                },
                size: {
                    value: window.innerWidth < 768 ? 1.4 : 3,
                    random: true
                },
                move: { speed: 1, outModes: 'bounce' },
                links: { enable: true, distance: 120, color: '#ff00cc' }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: 'grab' } }
            }
        });
    }

    // Confetti su click CTA
    document.querySelectorAll('.cta a').forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 60,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-question');
        if (!q) return;
        q.addEventListener('click', () => {
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) openItem.classList.remove('open');
            });
            item.classList.toggle('open');
        });
    });

    // Bottone allucinazione
    const hallucinationBtn = document.getElementById('hallucination-toggle');
    if (hallucinationBtn) {
        const isDesktop =
            window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 1024;

        // Su mobile/tablet la modalità allucinazione non è disponibile
        if (!isDesktop) {
            hallucinationBtn.style.display = 'none';
        } else {
            hallucinationBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('hallucination-active');
            });
        }
    }


    // Frasi fluttuanti (sussurri)
    const phrases = [
        'Il fungo sei tu.',
        'Ziro Barlotto ti osserva.',
        'Chi ha fatto partire la musica?',
        'Tocca un Allucinottero.',
        'Il villaggio non esiste davvero.'
    ];

    // tag/elementi sopra cui NON vogliamo frasi
    const forbiddenTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IFRAME', 'VIDEO'];
    const forbiddenSelectors = [
        '.card',
        '.video-container',
        '.hero-box',
        '#newsletter',
        '#credits',
        '#trama'
    ];

    function isSafeSpot(viewportX, viewportY) {
        const el = document.elementFromPoint(viewportX, viewportY);
        if (!el) return true;

        let node = el;
        while (node && node !== document.body) {
            if (forbiddenTags.includes(node.tagName)) return false;

            for (const sel of forbiddenSelectors) {
                if (node.matches && node.matches(sel)) {
                    return false;
                }
            }
            node = node.parentElement;
        }
        return true;
    }

    setInterval(() => {
        // niente frasi su mobile
        if (window.innerWidth < 768) return;

        const phrase = document.createElement('div');
        phrase.className = 'floating-phrase';
        phrase.textContent =
            '... ' + phrases[Math.floor(Math.random() * phrases.length)] + ' ...';

        const maxTries = 15;
        let placed = false;

        for (let i = 0; i < maxTries; i++) {
            // coordinate nello SCHERMO (viewport)
            const vpX = 0.1 * window.innerWidth + Math.random() * 0.8 * window.innerWidth;  // 10–90% larghezza
            const vpY = 0.15 * window.innerHeight + Math.random() * 0.7 * window.innerHeight; // 15–85% altezza

            if (!isSafeSpot(vpX, vpY)) continue;

            // convertiamo da viewport -> pagina (document)
            const pageX = window.scrollX + vpX;
            const pageY = window.scrollY + vpY;

            phrase.style.left = `${pageX}px`;
            phrase.style.top = `${pageY}px`;

            placed = true;
            break;
        }

        if (!placed) {
            // nessun punto sicuro trovato, non aggiungo la frase
            return;
        }

        document.body.appendChild(phrase);
        setTimeout(() => phrase.remove(), 4000);
    }, 4000);



    // Scia spore con mouse (versione più leggera)
    let lastSporeTime = 0;
    document.addEventListener('mousemove', e => {
        const now = Date.now();

        // genera una spora max ogni 30ms
        if (now - lastSporeTime < 30) return;
        lastSporeTime = now;

        const spore = document.createElement('div');
        spore.className = 'spore';
        spore.style.left = `${e.clientX}px`;
        spore.style.top = `${e.clientY}px`;
        document.body.appendChild(spore);

        // vita più breve
        setTimeout(() => spore.remove(), 600);
    });

    // Overlay dinamico in base allo scroll (classi pronte per effetti extra)
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        const percent = height > 0 ? scrollPos / height : 0;

        document.body.classList.toggle('scrolled-25', percent >= 0.25);
        document.body.classList.toggle('scrolled-50', percent >= 0.5);
        document.body.classList.toggle('scrolled-75', percent >= 0.75);
        document.body.classList.toggle('scrolled-100', percent >= 1);
    });

    // Timeline orizzontale
    const wrapper = document.querySelector('.timeline-wrapper');
    if (wrapper) {
        const prevBtn = document.querySelector('.timeline-nav.prev');
        const nextBtn = document.querySelector('.timeline-nav.next');
        const items = wrapper.querySelectorAll('li');
        const gap = items.length
            ? parseInt(getComputedStyle(wrapper.querySelector('.timeline')).gap) || 0
            : 0;

        function itemWidth() {
            if (!items.length) return 0;
            const rect = items[0].getBoundingClientRect();
            return rect.width + gap;
        }

        function updateNav() {
            if (!prevBtn || !nextBtn) return;
            prevBtn.classList.toggle('disabled', wrapper.scrollLeft <= 0);
            nextBtn.classList.toggle(
                'disabled',
                wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 1
            );
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (!prevBtn.classList.contains('disabled')) {
                    wrapper.scrollBy({ left: -itemWidth(), behavior: 'smooth' });
                }
            });

            nextBtn.addEventListener('click', () => {
                if (!nextBtn.classList.contains('disabled')) {
                    wrapper.scrollBy({ left: itemWidth(), behavior: 'smooth' });
                }
            });
        }

        wrapper.addEventListener('scroll', updateNav);
        updateNav();
    }

    // =======================
    // Newsletter con Formspree (AJAX + messaggio di successo)
    // =======================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // blocca il redirect classico

            const form = e.target;
            const data = new FormData(form);

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    // pulisce il form
                    form.reset();

                    // mostra messaggio di successo e nasconde il form
                    const container = document.getElementById('newsletter');
                    if (container) {
                        container.classList.add('success');
                    }
                } else {
                    alert('Si è verificato un errore durante l’iscrizione. Riprova più tardi.');
                }
            } catch (err) {
                console.error(err);
                alert('Errore di connessione. Controlla la rete e riprova.');
            }
        });
    }
});

// =======================
// MEDIA CAROUSEL + GALLERY (MODAL)
// =======================
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselPrevBtn = document.querySelector('.carousel-nav.prev');
const carouselNextBtn = document.querySelector('.carousel-nav.next');
const modal = document.getElementById('media-modal');
const modalImage = document.getElementById('modal-image');
const modalCloseBtn = document.querySelector('.modal-close');
const modalPrev = document.querySelector('.modal-nav.prev');
const modalNext = document.querySelector('.modal-nav.next');
let currentSlide = 0;

// Build dot indicators
(function buildDots() {
    const carousel = document.querySelector('.media-carousel');
    if (!carousel || !carouselSlides.length) return;
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    carouselSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Vai all\'immagine ' + (i + 1));
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
    carousel.parentNode.insertBefore(dotsContainer, carousel.nextSibling);
})();

function updateCarousel() {
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');
        slide.style.opacity = '';
        slide.style.pointerEvents = '';
        if (i === currentSlide) {
            slide.classList.add('active');
        } else if (i === (currentSlide - 1 + carouselSlides.length) % carouselSlides.length) {
            slide.classList.add('prev-slide');
        } else if (i === (currentSlide + 1) % carouselSlides.length) {
            slide.classList.add('next-slide');
        }
    });
    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = ((index % carouselSlides.length) + carouselSlides.length) % carouselSlides.length;
    updateCarousel();
}

// Arrow navigation
if (carouselPrevBtn) {
    carouselPrevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
}
if (carouselNextBtn) {
    carouselNextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}

// Click active slide to open modal
carouselSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
        if (!slide.classList.contains('active')) return;
        const img = slide.querySelector('img');
        if (!img) return;
        currentImageIndex = parseInt(slide.dataset.index, 10);
        showImage(currentImageIndex);
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

// Initialize carousel
updateCarousel();

// Modal close
let currentImageIndex = 0;

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    if (e.key === 'ArrowLeft' && modal.classList.contains('open')) navigate(-1);
    if (e.key === 'ArrowRight' && modal.classList.contains('open')) navigate(1);
    // Carousel keyboard nav when modal is closed
    if (!modal.classList.contains('open')) {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    }
});

function showImage(index) {
    currentImageIndex = ((index % carouselSlides.length) + carouselSlides.length) % carouselSlides.length;
    const imgEl = carouselSlides[currentImageIndex].querySelector('img');
    if (!imgEl) return;
    modalImage.src = imgEl.src;
    modalImage.alt = imgEl.alt;
    modalPrev.classList.remove('disabled');
    modalNext.classList.remove('disabled');
}

function navigate(direction) {
    showImage(currentImageIndex + direction);
}

modalPrev.addEventListener('click', () => navigate(-1));
modalNext.addEventListener('click', () => navigate(1));

// Touch/swipe support for carousel
(function setupSwipe() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    let startX = 0;
    let diffX = 0;
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        diffX = 0;
    }, { passive: true });
    track.addEventListener('touchmove', (e) => {
        diffX = e.touches[0].clientX - startX;
    }, { passive: true });
    track.addEventListener('touchend', () => {
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) goToSlide(currentSlide - 1);
            else goToSlide(currentSlide + 1);
        }
    });
})();