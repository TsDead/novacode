const translations = {
  ru: {
    'brand': 'NOVACODE',
    'nav.services': 'Услуги', 'nav.projects': 'Проекты', 'nav.faq': 'FAQ',
    'nav.reviews': 'Отзывы', 'nav.contact': 'Контакты', 'nav.cta': 'Связаться',
    'hero.badge': 'Открыт для проектов · 2025',
    'hero.title1': 'Превращаю идеи', 'hero.title2': 'в AI-продукты',
    'hero.title3': 'за дни, не месяцы',
    'hero.subtitle': 'Telegram-боты с AI, лендинги под ключ, генераторы контента. Полный цикл: от идеи до запуска.',
    'hero.cta1': 'Смотреть кейсы', 'hero.cta2': 'Написать в Telegram',
    'hero.stat1Label': 'проектов сдано', 'hero.stat2Label': 'довольных клиентов', 'hero.stat3Label': 'средний срок',
    'hero.scroll': 'Scroll',
    'services.eyebrow': '// Что я делаю',
    'services.title': 'Превращаю рутину<br>в <span class="text-accent">автоматизацию</span>',
    'services.lead': 'Создаю интеллектуальные решения для бизнеса',
    'services.s1Title': 'AI-боты для бизнеса', 'services.s1Text': 'Запись клиентов, поддержка 24/7, интеграция с Google Sheets и CRM.',
    'services.s2Title': 'Лендинги под ключ', 'services.s2Text': 'Премиум-сайты с анимациями, адаптивом, мультиязычностью.',
    'services.s3Title': 'AI-генераторы контента', 'services.s3Text': 'Десктопные приложения для маркетплейсов.',
    'projects.eyebrow': '// Портфолио',
    'projects.title': 'Избранные <span class="text-accent">кейсы</span>',
    'projects.lead': 'Готовые решения для бизнеса',
    'projects.priceLabel': 'под ключ', 'projects.buyBtn': 'Купить', 'projects.orderBtn': 'Заказать такой же',
    'projects.p1Status': 'Готов к продаже', 'projects.p1Meta1': 'Telegram Bot',
    'projects.p1Title': 'Telegram-бот для барбершопа', 'projects.p1Text': 'Готовый бот для записи клиентов.',
    'projects.p1F1': 'Запись клиентов 24/7', 'projects.p1F2': 'Интеграция с Google Sheets', 'projects.p1F3': 'FSM (машина состояний)', 'projects.p1F4': 'Календарь без библиотек', 'projects.p1F5': 'Админ-панель',
    'projects.p2Status': 'Готов к продаже', 'projects.p2Meta1': 'Desktop App',
    'projects.p2Title': 'AI-генератор для маркетплейсов', 'projects.p2Text': 'Готовый AI-инструмент, создаёт за 5 секунд:',
    'projects.p2F1': 'Продающее название', 'projects.p2F2': 'Полное SEO-описание', 'projects.p2F3': 'Характеристики', 'projects.p2F4': 'Ключевые слова', 'projects.p2F5': 'Ответы на отзывы',
    'projects.p3Status': 'Live', 'projects.p3Link': 'Открыть в новой вкладке',
    'projects.p3Loading': 'Загрузка превью...',
    'projects.p3Meta1': 'Landing Page', 'projects.p3Meta2': 'Премиум',
    'projects.p3Title': 'Лендинг «Ремонт квартир под ключ»',
    'projects.p3Text': 'Премиум-лендинг с калькулятором стоимости, мультиязычностью и реальными фото интерьеров.',
    'projects.p3H1Label': 'блоков', 'projects.p3H2Label': 'языка', 'projects.p3H3Label': 'адаптив', 'projects.p3H4Label': 'калькулятор',
    'projects.p3F1': 'Интерактивный калькулятор цены за м²', 'projects.p3F2': 'Переключатель RU/EN с автосохранением', 'projects.p3F3': 'Реальные фото интерьеров с анимациями', 'projects.p3F4': 'Маска телефона + форма заявки', 'projects.p3F5': 'Mobile-first, адаптив',
    'projects.p3Price': 'По запросу', 'projects.p3PriceLabel': 'индивидуальный кейс',
    'faq.eyebrow': '// FAQ',
    'faq.title': 'Частые <span class="text-accent">вопросы</span>', 'faq.lead': 'Ответы на то, что спрашивают чаще всего',
    'faq.q1': 'Сколько стоит Telegram-бот?', 'faq.a1': 'Готовые — от 3 500 ₽. Уникальный — от 15 000 ₽.',
    'faq.q2': 'Сроки разработки лендинга?', 'faq.a2': 'Простой — 3-5 дней. Премиум — 5-10 дней.',
    'faq.q3': 'Можно доработать готового бота?', 'faq.a3': 'Да. Любая сложность.',
    'faq.q4': 'Как происходит оплата?', 'faq.a4': '50% до начала, 50% после сдачи.',
    'faq.q5': 'Поддержка после сдачи?', 'faq.a5': '14 дней бесплатно.',
    'faq.q6': 'Покажете примеры?', 'faq.a6': 'Конечно. В разделе «Проекты».',
    'reviews.eyebrow': '// Отзывы',
    'reviews.title': 'Что говорят <span class="text-accent">клиенты</span>', 'reviews.lead': 'Отзывы реальных людей',
    'reviews.r1Text': '"Бот окупился за неделю."', 'reviews.r1Name': 'Владелец барбершопа', 'reviews.r1City': 'Москва',
    'reviews.r2Text': '"Сэкономил 20 часов в месяц."', 'reviews.r2Name': 'Продавец на Ozon', 'reviews.r2City': 'СПб',
    'reviews.r3Text': '"Оперативно и с душой."', 'reviews.r3Name': 'Руководитель отдела', 'reviews.r3City': 'Екатеринбург',
    'contact.eyebrow': '// Контакты',
    'contact.title': 'Обсудим <span class="text-accent">ваш проект?</span>', 'contact.lead': 'Отвечаю в течение дня.',
    'contact.tgLabel': 'Написать в Telegram', 'contact.phoneLabel': 'Позвонить', 'contact.emailLabel': 'Email',
    'contact.formTitle': 'Или оставьте заявку',
    'contact.formName': 'Имя', 'contact.formContact': 'Телефон или Telegram', 'contact.formMessage': 'О проекте',
    'contact.formSubmit': 'Отправить заявку', 'contact.formNote': 'Отвечу в течение дня · Без спама',
    'footer.about': 'AI-разработка для бизнеса. Telegram-боты, лендинги, автоматизация.',
    'footer.servicesTitle': 'Услуги', 'footer.s1': 'AI-боты', 'footer.s2': 'Лендинги', 'footer.s3': 'AI-генераторы',
    'footer.contactTitle': 'Связь', 'footer.copy': '© 2025 NOVACODE.', 'footer.made': 'Сделано с ❤ в NOVACODE',
    'popup.title': 'Подождите! У меня подарок для вас',
    'popup.text': 'Получите бесплатную консультацию по вашему проекту + чек-лист «10 ошибок при заказе бота»',
    'popup.namePlaceholder': 'Ваше имя', 'popup.contactPlaceholder': 'Telegram или телефон',
    'popup.cta': 'Получить подарок', 'popup.skip': 'Нет, спасибо', 'popup.note': 'Без спама · Отвечу в течение дня',
    'widget.tooltip': 'Написать в Telegram'
  },
  en: {
    'brand': 'NOVACODE',
    'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.faq': 'FAQ',
    'nav.reviews': 'Reviews', 'nav.contact': 'Contact', 'nav.cta': 'Get in touch',
    'hero.badge': 'Available for projects · 2025',
    'hero.title1': 'I turn ideas', 'hero.title2': 'into AI products',
    'hero.title3': 'in days, not months',
    'hero.subtitle': 'Telegram bots with AI, turnkey landing pages, content generators. Full cycle: from idea to launch.',
    'hero.cta1': 'View cases', 'hero.cta2': 'Message on Telegram',
    'hero.stat1Label': 'projects delivered', 'hero.stat2Label': 'happy clients', 'hero.stat3Label': 'average time',
    'hero.scroll': 'Scroll',
    'services.eyebrow': '// What I do',
    'services.title': 'I turn routine<br>into <span class="text-accent">automation</span>',
    'services.lead': 'Building intelligent solutions for business',
    'services.s1Title': 'AI bots for business', 'services.s1Text': 'Client booking, 24/7 support, Google Sheets and CRM integration.',
    'services.s2Title': 'Turnkey landing pages', 'services.s2Text': 'Premium sites with animations, responsive, multilingual.',
    'services.s3Title': 'AI content generators', 'services.s3Text': 'Desktop apps for marketplaces.',
    'projects.eyebrow': '// Portfolio',
    'projects.title': 'Featured <span class="text-accent">cases</span>', 'projects.lead': 'Ready solutions for business',
    'projects.priceLabel': 'turnkey', 'projects.buyBtn': 'Buy', 'projects.orderBtn': 'Order similar',
    'projects.p1Status': 'Ready to ship', 'projects.p1Meta1': 'Telegram Bot',
    'projects.p1Title': 'Telegram bot for barbershop', 'projects.p1Text': 'Ready-made client booking bot.',
    'projects.p1F1': '24/7 client booking', 'projects.p1F2': 'Google Sheets integration', 'projects.p1F3': 'FSM', 'projects.p1F4': 'Calendar without libs', 'projects.p1F5': 'Admin panel',
    'projects.p2Status': 'Ready to ship', 'projects.p2Meta1': 'Desktop App',
    'projects.p2Title': 'AI generator for marketplaces', 'projects.p2Text': 'Ready AI tool that creates in 5 seconds:',
    'projects.p2F1': 'Selling title', 'projects.p2F2': 'Full SEO description', 'projects.p2F3': 'Specifications', 'projects.p2F4': 'Keywords', 'projects.p2F5': 'Review replies',
    'projects.p3Status': 'Live', 'projects.p3Link': 'Open in new tab',
    'projects.p3Loading': 'Loading preview...',
    'projects.p3Meta1': 'Landing Page', 'projects.p3Meta2': 'Premium',
    'projects.p3Title': 'Landing "Turnkey Apartment Renovation"',
    'projects.p3Text': 'Premium landing with interactive calculator, multilingual support and real interior photos.',
    'projects.p3H1Label': 'sections', 'projects.p3H2Label': 'languages', 'projects.p3H3Label': 'responsive', 'projects.p3H4Label': 'calculator',
    'projects.p3F1': 'Interactive per-m² price calculator', 'projects.p3F2': 'RU/EN toggle with autosave', 'projects.p3F3': 'Real interior photos with animations', 'projects.p3F4': 'Phone mask + lead form', 'projects.p3F5': 'Mobile-first, responsive',
    'projects.p3Price': 'On request', 'projects.p3PriceLabel': 'custom case',
    'projects.p4Status': 'Live · Bot online', 'projects.p4Link': 'Open demo bot',
    'projects.p4Meta1': 'Full-Stack Project', 'projects.p4Meta2': 'Telegram Bot + Landing + Backend',
    'projects.p4Title': 'BarBot — SaaS for barbershops',
    'projects.p4Text': 'Full product: landing page with tariff calculator, Telegram booking bot, Express backend with Google Sheets integration and admin notifications.',
    'projects.p4H1Label': 'plans', 'projects.p4H2Label': 'booking steps', 'projects.p4H3Label': 'bot uptime', 'projects.p4H4Label': 'automation',
    'projects.p4Col1Title': '🤖 Telegram Bot', 'projects.p4Col2Title': '🖥️ Backend',
    'projects.p4F1': '3-click booking', 'projects.p4F2': 'View, edit, cancel', 'projects.p4F3': 'Auto reminders 24h & 2h', 'projects.p4F4': 'FSM 5 states',
    'projects.p4F5': 'Express.js REST API', 'projects.p4F6': 'Google Sheets as DB', 'projects.p4F7': 'Telegram admin notifications', 'projects.p4F8': 'Rate-limit + validation',
    'projects.p4Price': 'from ₽25,000', 'projects.p4PriceLabel': 'turnkey · 5 days',
    'faq.eyebrow': '// FAQ',
    'faq.title': 'Frequently asked <span class="text-accent">questions</span>', 'faq.lead': 'Answers to common questions',
    'faq.q1': 'How much does a Telegram bot cost?', 'faq.a1': 'Ready-made — from ₽3,500. Custom — from ₽15,000.',
    'faq.q2': 'How long does a landing take?', 'faq.a2': 'Simple — 3-5 days. Premium — 5-10 days.',
    'faq.q3': 'Can I modify an existing bot?', 'faq.a3': 'Yes. Any complexity.',
    'faq.q4': 'How does payment work?', 'faq.a4': '50% upfront, 50% after delivery.',
    'faq.q5': 'Post-delivery support?', 'faq.a5': '14 days free.',
    'faq.q6': 'Can I see examples?', 'faq.a6': 'Of course. In the "Projects" section.',
    'reviews.eyebrow': '// Reviews',
    'reviews.title': 'What <span class="text-accent">clients</span> say', 'reviews.lead': 'Reviews from real people',
    'reviews.r1Text': '"The bot paid for itself in a week."', 'reviews.r1Name': 'Barbershop owner', 'reviews.r1City': 'Moscow',
    'reviews.r2Text': '"Saved 20 hours per month."', 'reviews.r2Name': 'Ozon seller', 'reviews.r2City': 'SPb',
    'reviews.r3Text': '"Fast and with soul."', 'reviews.r3Name': 'Head of Sales', 'reviews.r3City': 'Yekaterinburg',
    'contact.eyebrow': '// Contact',
    'contact.title': 'Let\'s discuss <span class="text-accent">your project?</span>', 'contact.lead': 'I reply within a day.',
    'contact.tgLabel': 'Message on Telegram', 'contact.phoneLabel': 'Call', 'contact.emailLabel': 'Email',
    'contact.formTitle': 'Or submit a request',
    'contact.formName': 'Name', 'contact.formContact': 'Phone or Telegram', 'contact.formMessage': 'About project',
    'contact.formSubmit': 'Send request', 'contact.formNote': 'I reply within a day · No spam',
    'footer.about': 'AI development for business. Telegram bots, landing pages, automation.',
    'footer.servicesTitle': 'Services', 'footer.s1': 'AI bots', 'footer.s2': 'Landing pages', 'footer.s3': 'AI generators',
    'footer.contactTitle': 'Contact', 'footer.copy': '© 2025 NOVACODE.', 'footer.made': 'Made with ❤ by NOVACODE',
    'popup.title': 'Wait! I have a gift for you',
    'popup.text': 'Get a free consultation on your project + checklist "10 mistakes when ordering a bot"',
    'popup.namePlaceholder': 'Your name', 'popup.contactPlaceholder': 'Telegram or phone',
    'popup.cta': 'Get the gift', 'popup.skip': 'No, thanks', 'popup.note': 'No spam · Reply within a day',
    'widget.tooltip': 'Message on Telegram'
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.title = 'NOVACODE | AI Developer Portfolio';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  try { localStorage.setItem('preferred-lang', lang); } catch (e) {}
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('lang-switch__btn--active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
  btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
});
try {
  const saved = localStorage.getItem('preferred-lang');
  if (saved && translations[saved]) applyTranslations(saved);
} catch (e) {}

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.aosDelay || 0);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('[data-aos]').forEach((el) => io.observe(el));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#' || targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const percent = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    scrollProgress.style.width = percent + '%';
  }, { passive: true });
}

/* ============================================
   SCROLL TO TOP
   ============================================ */
const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
  window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================
   IFRAME LAZY LOAD
   ============================================ */
const projectIframe = document.querySelector('.project-iframe-wrapper iframe');
if (projectIframe) {
  const realSrc = projectIframe.getAttribute('data-src');
  if (realSrc) {
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectIframe.src = realSrc;
          projectIframe.onload = () => projectIframe.classList.add('loaded');
          iframeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    iframeObserver.observe(projectIframe.closest('.project-card--featured'));
  } else {
    projectIframe.classList.add('loaded');
  }
}

/* ============================================
   EXIT POPUP — УМНАЯ ЛОГИКА
   ============================================ */
const exitPopup = document.getElementById('exitPopup');
const exitPopupClose = document.getElementById('exitPopupClose');
const exitPopupSkip = document.getElementById('exitPopupSkip');
const exitPopupBackdrop = document.getElementById('exitPopupBackdrop');
let popupShown = false;
let popupClosed = false;

function showPopup() {
  if (popupShown || popupClosed) return;
  popupShown = true;
  exitPopup.classList.add('active');
  if (typeof ym !== 'undefined') ym(XXXXXXXX, 'reachGoal', 'popup_view');
}
function closePopup() {
  exitPopup.classList.remove('active');
  popupClosed = true;
  try { localStorage.setItem('popup-closed', '1'); } catch (e) {}
}
try {
  if (localStorage.getItem('popup-closed') === '1') popupClosed = true;
} catch (e) {}

if (exitPopup && !popupClosed) {
  // Срабатывает когда курсор уходит за пределы страницы вверх
  document.addEventListener('mouseout', (e) => {
    if (e.clientY <= 0 && !popupShown) showPopup();
  });
  // Срабатывает через 60 секунд если пользователь остался
  setTimeout(showPopup, 60000);

  if (exitPopupClose) exitPopupClose.addEventListener('click', closePopup);
  if (exitPopupSkip) exitPopupSkip.addEventListener('click', closePopup);
  if (exitPopupBackdrop) exitPopupBackdrop.addEventListener('click', closePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupShown) closePopup();
  });
}

/* ============================================
   EXIT POPUP FORM
   ============================================ */
const exitPopupForm = document.getElementById('exitPopupForm');
if (exitPopupForm) {
  exitPopupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = exitPopupForm.querySelector('button');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = '...';
    if (typeof ym !== 'undefined') ym(XXXXXXXX, 'reachGoal', 'popup_submit');
    try {
      await fetch('https://formspree.io/f/xnjknbdw', {
        method: 'POST',
        body: new FormData(exitPopupForm),
        headers: { 'Accept': 'application/json' }
      });
    } catch (err) {}
    btn.innerHTML = '✓ Отправлено!';
    btn.style.background = 'var(--success)';
    exitPopupForm.reset();
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = orig;
      btn.style.background = '';
      closePopup();
    }, 2500);
  });
}

/* ============================================
   MAIN FORM
   ============================================ */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
if (form && submitBtn) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const orig = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.textContent = '...';
    if (typeof ym !== 'undefined') ym(XXXXXXXX, 'reachGoal', 'form_submit');
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        submitBtn.innerHTML = '✓ Отправлено!';
        submitBtn.style.background = 'var(--success)';
        form.reset();
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = orig;
          submitBtn.style.background = '';
        }, 3000);
      } else throw new Error();
    } catch (err) {
      submitBtn.innerHTML = 'Ошибка';
      submitBtn.style.background = '#ff4444';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
        submitBtn.style.background = '';
      }, 3000);
    }
  });
}

document.querySelectorAll('[data-ym]').forEach((el) => {
  el.addEventListener('click', () => {
    if (typeof ym !== 'undefined') ym(XXXXXXXX, 'reachGoal', el.getAttribute('data-ym'));
  });
});
