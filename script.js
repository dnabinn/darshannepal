/* ================================================================
   DARSHAN NEPAL RESTAURANT — Main Script
   Slider · Navigation · i18n (EN/PT) · Cookie Banner · Scroll FX
================================================================ */

'use strict';

/* ----------------------------------------------------------------
   TRANSLATIONS
---------------------------------------------------------------- */
const translations = {
  en: {
    nav_logo_sub:         'Restaurant',
    nav_menu:             'Menu',
    nav_about:            'About',
    nav_chef:             'Chef',
    nav_blog:             'Blog',
    nav_contact:          'Contact',
    nav_reserve:          'Reserve',

    cookie_text:          'We use cookies to improve your experience. By continuing to browse, you accept our use of cookies in accordance with our privacy policy.',
    cookie_decline:       'Decline',
    cookie_accept:        'Accept All',

    slide1_pre:           'Kathmandu · Lisbon',
    slide1_title:         'A Feast for<br>the Senses',
    slide1_sub:           'Authentic Nepali &amp; Indian cuisine,<br>cooked with soul and tradition.',
    slide2_pre:           'From the Tandoor',
    slide2_title:         'Cooked with<br>Fire &amp; Tradition',
    slide2_sub:           "Chef Yekindra Hamal's recipes,<br>rooted in Himalayan heritage.",
    slide3_pre:           'A Warm Welcome',
    slide3_title:         'Where Nepal<br>Meets Lisbon',
    slide3_sub:           'A journey through spice, story,<br>and the warmth of the Himalayas.',
    slide_reserve:        'Reserve a Table',
    slide_menu:           'Explore Menu',
    slide_chef:           'Meet the Chef',
    slide_story:          'Our Story',

    scroll_down:          'Scroll',

    trust_tripadvisor:    'Excellent on TripAdvisor',
    trust_hours:          'Open Every Day · 12:00 – 23:30',
    trust_authentic:      '100% Authentic Nepali &amp; Indian',

    about_label:          'Our Story',
    about_title:          'The Soul of the<br>Himalayas, in Lisbon',
    about_p1:             'At Darshan Nepal, we bring the heart of the Himalayas to the streets of Lisbon. Our kitchen is guided by a simple philosophy: authentic food is born from patience, the finest ingredients, and the wisdom passed down through generations.',
    about_p2:             "Every dish on our menu tells a story — of mountain villages where dal bhat is life's anchor, of festival tables laden with slow-cooked curries, of tandoor fires that have burned for centuries across South Asia. We honour these traditions with every plate we serve.",
    about_badge_line1:    'Authentic',
    about_badge_line2:    'Himalayan',
    about_badge_line3:    'Cuisine',
    pillar_1:             'Himalayan Recipes',
    pillar_2:             'Fresh Spices Daily',
    pillar_3:             'Tandoor Cooking',
    about_cta:            'Discover the Menu',

    menu_label:           'Signature Dishes',
    menu_title:           'A Journey of Flavour',
    menu_sub:             "Each dish is a chapter in Nepal's culinary story — crafted with centuries-old recipes and the finest Himalayan spices.",
    dish_cat_starter:     'Starter',
    dish_cat_main:        'Main Course',
    dish_cat_nepali:      'Nepali Classic',
    dish_cat_veg:         'Vegetarian',
    dish1_desc:           'Tender chicken marinated overnight in Himalayan spices and yogurt, char-grilled in the tandoor until perfectly smoky and golden.',
    dish2_desc:           'Slow-cooked chicken in a velvety tomato and cream sauce, gently spiced and finished with hand-ground masala and fresh coriander.',
    dish3_desc:           "Nepal's soul food — yellow lentil dal, steamed rice, seasonal vegetable tarkari and house achaar pickle. The heartbeat of Nepali cooking.",
    dish4_desc:           'Traditional Nepali steamed dumplings with a spiced filling, served with our house tomato-sesame chutney. A legend of the Kathmandu streets.',
    dish5_desc:           'Fragrant basmati rice slow-cooked with meat and whole spices — cinnamon, cardamom, star anise — in the traditional dum style.',
    dish6_desc:           'House-made cottage cheese in a silky spinach sauce, enriched with cumin, garlic and cream. A vegetarian dish of extraordinary depth.',
    tag_veg:              'Veg',
    menu_note:            'Mains from <strong>€10</strong> · Full menu available in the restaurant',
    menu_reserve:         'Book Your Table',

    gallery_label:        'Our Space',
    gallery_title:        'Warm, Vibrant &amp; Welcoming',
    gallery_cap1:         'The Feast',
    gallery_cap2:         'The Dining Room',
    gallery_cap3:         'The Bar',
    gallery_cap4:         'The Flavour',

    chef_label:           'Behind the Stove',
    chef_title:           'Chef Yekindra Hamal',
    chef_p1:              'Chef Yekindra Hamal brings the authentic flavours of Nepal to every plate with quiet mastery and deep reverence for tradition. His culinary path is rooted in the rich cooking culture of Nepal — a land where meals are not simply prepared, but crafted with intention and love.',
    chef_p2:              'At Darshan Nepal, Chef Yekindra applies time-honoured techniques — the slow reduction of spices, the art of the tandoor, the patient preparation of dal — to create dishes that are simultaneously familiar and revelatory. Every bite carries the warmth of Himalayan hospitality.',
    chef_sig_role:        'Head Chef &amp; Co-founder',
    chef_quote:           '“Food is our most direct connection to home. Every spice I use carries a memory of the Himalayas.”',

    order_label:          'Order Online',
    order_title:          'Darshan Nepal,<br>Delivered to You',
    order_sub:            "Can't make it in? Bring the flavours of the Himalayas to your home.",
    order_now:            'Order Now',

    reviews_text:         'Loved by locals and travellers from around the world',
    reviews_ta:           'Read on TripAdvisor',
    reviews_google:       'Review on Google',

    contact_label:        'Find Us',
    contact_title:        'Visit Darshan Nepal',
    contact_address_label:'Address',
    contact_phone_label:  'Phone &amp; Reservations',
    contact_email_label:  'Email',
    contact_hours_label:  'Opening Hours',
    contact_hours:        'Every day · 12:00 – 23:30',
    contact_reserve_text: 'Reserve your table online or by phone:',
    contact_reserve_btn:  'Book on Damesa',
    contact_call_btn:     'Call Us',

    blog_label:           'Stories &amp; Flavours',
    blog_title:           'Discover Nepali Culture',
    blog_sub:             'Explore the rich history, spices and traditions behind our cuisine.',
    blog_cat_spice:       'Spice &amp; Culture',
    blog_cat_history:     'History',
    blog_cat_dishes:      'Dishes',
    blog1_title:          'The Sacred Spices of Nepal',
    blog1_excerpt:        'Timur, jimbu, asafoetida — discover the unique Himalayan spices that define Nepali cooking.',
    blog2_title:          'A History of Nepali Cuisine',
    blog2_excerpt:        "From ancient trade routes to royal kitchens — how Nepal's food culture was shaped over centuries.",
    blog3_title:          "Dal Bhat: Nepal's Soul Food",
    blog3_excerpt:        "Why Nepal's national dish is more than food — it's a philosophy of sustenance and community.",
    blog_read:            'Read More →',
    blog_all:             'View All Articles',

    footer_tagline:       'Authentic Nepali &amp; Indian Cuisine<br>in the heart of Lisbon.',
    footer_nav_title:     'Navigation',
    footer_order_title:   'Order Online',
    footer_contact_title: 'Contact',
    footer_hours:         'Every day<br>12:00 – 23:30',
    footer_rights:        'All rights reserved.',
  },

  pt: {
    nav_logo_sub:         'Restaurante',
    nav_menu:             'Menu',
    nav_about:            'Sobre Nós',
    nav_chef:             'Chef',
    nav_blog:             'Blog',
    nav_contact:          'Contacto',
    nav_reserve:          'Reservar',

    cookie_text:          'Utilizamos cookies para melhorar a sua experiência. Ao continuar a navegar, aceita o uso de cookies de acordo com a nossa política de privacidade.',
    cookie_decline:       'Recusar',
    cookie_accept:        'Aceitar Todos',

    slide1_pre:           'Catmandu · Lisboa',
    slide1_title:         'Uma Festa para<br>os Sentidos',
    slide1_sub:           'Culinária Nepalesa &amp; Indiana autêntica,<br>preparada com alma e tradição.',
    slide2_pre:           'Do Tandoor',
    slide2_title:         'Cozinhado com<br>Fogo &amp; Tradição',
    slide2_sub:           'As receitas do Chef Yekindra Hamal,<br>enraizadas na herança Himalaia.',
    slide3_pre:           'Uma Recepção Calorosa',
    slide3_title:         'Onde o Nepal<br>Encontra Lisboa',
    slide3_sub:           'Uma viagem através de especiarias,<br>histórias e o calor do Himalaia.',
    slide_reserve:        'Reservar Mesa',
    slide_menu:           'Explorar Menu',
    slide_chef:           'Conhecer o Chef',
    slide_story:          'A Nossa História',

    scroll_down:          'Scroll',

    trust_tripadvisor:    'Excelente no TripAdvisor',
    trust_hours:          'Aberto Todos os Dias · 12:00 – 23:30',
    trust_authentic:      '100% Autêntico Nepalese &amp; Indiano',

    about_label:          'A Nossa História',
    about_title:          'A Alma do<br>Himalaia, em Lisboa',
    about_p1:             'No Darshan Nepal, trazemos o coração do Himalaia para as ruas de Lisboa. A nossa cozinha guia-se por uma filosofia simples: a comida autêntica nasce da paciência, dos melhores ingredientes e da sabedoria transmitida de geração em geração.',
    about_p2:             'Cada prato no nosso menu conta uma história — de aldeias de montanha onde o dal bhat é o sustento da vida, de mesas de festa repletas de caril de cozedura lenta, de fornos tandoor que queimam há séculos. Honramos estas tradições em cada prato que servimos.',
    about_badge_line1:    'Autêntica',
    about_badge_line2:    'Culinária',
    about_badge_line3:    'Himalaia',
    pillar_1:             'Receitas Himalaia',
    pillar_2:             'Especiarias Frescas',
    pillar_3:             'Cozinha Tandoor',
    about_cta:            'Descobrir o Menu',

    menu_label:           'Pratos Especiais',
    menu_title:           'Uma Viagem de Sabores',
    menu_sub:             'Cada prato é um capítulo da história culinária do Nepal — elaborado com receitas centenares e as melhores especiarias do Himalaia.',
    dish_cat_starter:     'Entrada',
    dish_cat_main:        'Prato Principal',
    dish_cat_nepali:      'Clássico Nepalese',
    dish_cat_veg:         'Vegetariano',
    dish1_desc:           'Frango tenro marinado de um dia para o outro em especiarias do Himalaia e iogurte, grelhado no tandoor até ficar perfeitamente fumado e dourado.',
    dish2_desc:           'Frango cozinhado lentamente num molho aveludado de tomate e natas, levemente temperado e acabado com masala moída à mão e coentros frescos.',
    dish3_desc:           'A alma da comida nepalesa — dal de lentilhas amarelas, arroz cozido a vapor, tarkari de legumes da época e achaar caseiro. O coração da cozinha nepalesa.',
    dish4_desc:           'Tradicionais dumplings nepaleses cozidos a vapor com recheio temperado, servidos com o nosso chutney caseiro de tomate e sésamo. Uma lenda das ruas de Catmandu.',
    dish5_desc:           'Arroz basmati perfumado cozinhado lentamente com carne e especiarias inteiras — canela, cardamomo, anis estrelado — ao estilo tradicional dum.',
    dish6_desc:           'Queijo cottage caseiro num molho sedoso de espinafres, enriquecido com cominho, alho e natas. Um prato vegetariano de profundidade extraordinária.',
    tag_veg:              'Veg',
    menu_note:            'Pratos principais a partir de <strong>€10</strong> · Menu completo disponível no restaurante',
    menu_reserve:         'Reservar Mesa',

    gallery_label:        'O Nosso Espaço',
    gallery_title:        'Acolhedor, Vibrante &amp; Convidativo',
    gallery_cap1:         'O Festim',
    gallery_cap2:         'A Sala',
    gallery_cap3:         'O Bar',
    gallery_cap4:         'O Sabor',

    chef_label:           'Por Detrás do Fogão',
    chef_title:           'Chef Yekindra Hamal',
    chef_p1:              'O Chef Yekindra Hamal traz os sabores autênticos do Nepal a cada prato com mestria discreta e profundo respeito pela tradição. O seu percurso culinário está enraizado na rica cultura gastronómica do Nepal — uma terra onde as refeições não são apenas preparadas, mas criadas com intenção e amor.',
    chef_p2:              'No Darshan Nepal, o Chef Yekindra aplica técnicas milenares — a redução lenta de especiarias, a arte do tandoor, a preparação paciente do dal — para criar pratos simultaneamente familiares e reveladores. Cada bocão traz o calor da hospitalidade himalaia.',
    chef_sig_role:        'Chef Principal &amp; Co-fundador',
    chef_quote:           '“A comida é a nossa conexão mais direta com o lar. Cada especiaria que uso traz uma memória do Himalaia.”',

    order_label:          'Encomendar Online',
    order_title:          'Darshan Nepal,<br>Entregue em Casa',
    order_sub:            'Não pode vir? Leve os sabores do Himalaia para a sua casa.',
    order_now:            'Encomendar Agora',

    reviews_text:         'Amado por locais e viajantes de todo o mundo',
    reviews_ta:           'Ver no TripAdvisor',
    reviews_google:       'Avaliar no Google',

    contact_label:        'Encontre-nos',
    contact_title:        'Visite o Darshan Nepal',
    contact_address_label:'Morada',
    contact_phone_label:  'Telefone &amp; Reservas',
    contact_email_label:  'Email',
    contact_hours_label:  'Horário de Funcionamento',
    contact_hours:        'Todos os dias · 12:00 – 23:30',
    contact_reserve_text: 'Reserve a sua mesa online ou por telefone:',
    contact_reserve_btn:  'Reservar no Damesa',
    contact_call_btn:     'Ligar',

    blog_label:           'Histórias &amp; Sabores',
    blog_title:           'Descubra a Cultura Nepalesa',
    blog_sub:             'Explore a rica história, especiarias e tradições por detrás da nossa culinária.',
    blog_cat_spice:       'Especiarias &amp; Cultura',
    blog_cat_history:     'História',
    blog_cat_dishes:      'Pratos',
    blog1_title:          'As Especiarias Sagradas do Nepal',
    blog1_excerpt:        'Timur, jimbu, asafétida — descubra as especiarias himalaianas que definem a cozinha nepalesa.',
    blog2_title:          'Uma História da Culinária Nepalesa',
    blog2_excerpt:        "Das antigas rotas comerciais às cozinhas reais — como a cultura gastronómica do Nepal se formou ao longo dos séculos.",
    blog3_title:          'Dal Bhat: A Alma do Nepal',
    blog3_excerpt:        'Porque o prato nacional do Nepal é muito mais do que comida — é uma filosofia de sustento e comunidade.',
    blog_read:            'Ler Mais →',
    blog_all:             'Ver Todos os Artigos',

    footer_tagline:       'Culinária Nepalesa &amp; Indiana Autêntica<br>no coração de Lisboa.',
    footer_nav_title:     'Navegação',
    footer_order_title:   'Encomendar Online',
    footer_contact_title: 'Contacto',
    footer_hours:         'Todos os dias<br>12:00 – 23:30',
    footer_rights:        'Todos os direitos reservados.',
  }
};

/* ----------------------------------------------------------------
   i18n — Language Toggle
---------------------------------------------------------------- */
let currentLang = localStorage.getItem('dn_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('dn_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang-opt') === lang);
  });
}

/* ----------------------------------------------------------------
   HERO SLIDER
---------------------------------------------------------------- */
class HeroSlider {
  constructor() {
    this.el     = document.getElementById('heroSlider');
    if (!this.el) return;
    this.slides  = this.el.querySelectorAll('.slide');
    this.dots    = this.el.querySelectorAll('.slider__dot');
    this.bar     = document.getElementById('sliderProgress');
    this.current = 0;
    this.total   = this.slides.length;
    this.delay   = 6000;
    this.timer   = null;
    this.paused  = false;
    this.init();
  }

  init() {
    this.goTo(0);
    this.startTimer();
    this.bindEvents();
  }

  goTo(index) {
    this.slides[this.current].classList.remove('active');
    this.dots[this.current].classList.remove('active');
    this.current = (index + this.total) % this.total;
    this.slides[this.current].classList.add('active');
    this.dots[this.current].classList.add('active');
    this.resetBar();
  }

  next() { this.goTo(this.current + 1); }
  prev() { this.goTo(this.current - 1); }

  startTimer() {
    this.timer = setInterval(() => { if (!this.paused) this.next(); }, this.delay);
  }

  resetTimer() { clearInterval(this.timer); this.startTimer(); }

  resetBar() {
    if (!this.bar) return;
    this.bar.style.transition = 'none';
    this.bar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.bar.style.transition = `width ${this.delay}ms linear`;
      this.bar.style.width = '100%';
    }));
  }

  bindEvents() {
    document.getElementById('sliderNext')?.addEventListener('click', () => { this.next(); this.resetTimer(); });
    document.getElementById('sliderPrev')?.addEventListener('click', () => { this.prev(); this.resetTimer(); });

    this.dots.forEach((dot, i) => dot.addEventListener('click', () => { this.goTo(i); this.resetTimer(); }));

    this.el.addEventListener('mouseenter', () => { this.paused = true; });
    this.el.addEventListener('mouseleave', () => { this.paused = false; });

    let tx = 0;
    this.el.addEventListener('touchstart', e => { tx = e.changedTouches[0].clientX; }, { passive: true });
    this.el.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) { dx < 0 ? this.next() : this.prev(); this.resetTimer(); }
    }, { passive: true });
  }
}

/* ----------------------------------------------------------------
   NAVIGATION
---------------------------------------------------------------- */
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.classList.remove('open');
    document.body.style.overflow = '';
  }));

  document.addEventListener('click', e => {
    if (links?.classList.contains('open') && !links.contains(e.target) && !toggle?.contains(e.target)) {
      links.classList.remove('open');
      toggle?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ----------------------------------------------------------------
   LANGUAGE TOGGLE
---------------------------------------------------------------- */
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => applyLang(currentLang === 'en' ? 'pt' : 'en'));

  const urlLang = new URLSearchParams(window.location.search).get('lang');
  applyLang((urlLang === 'pt' || urlLang === 'en') ? urlLang : currentLang);
}

/* ----------------------------------------------------------------
   COOKIE BANNER
---------------------------------------------------------------- */
function initCookieBanner() {
  const banner  = document.getElementById('cookieBanner');
  const accept  = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  if (!banner || localStorage.getItem('dn_cookies')) return;

  setTimeout(() => banner.classList.add('visible'), 1400);

  const dismiss = () => {
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 600);
  };

  accept?.addEventListener('click',  () => { localStorage.setItem('dn_cookies', 'accepted');  dismiss(); });
  decline?.addEventListener('click', () => { localStorage.setItem('dn_cookies', 'declined'); dismiss(); });
}

/* ----------------------------------------------------------------
   SCROLL REVEAL
---------------------------------------------------------------- */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length || !window.IntersectionObserver) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------------
   INIT
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangToggle();
  initCookieBanner();
  initScrollReveal();
  new HeroSlider();
});
