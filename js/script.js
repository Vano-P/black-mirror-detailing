'use strict'
const translations = {
  ru: {
    'form.name': 'Ваше имя',
    'form.phone': 'Телефон +7 000 000 00 00',
    title: 'Black Mirror Detailing | Премиальный уход за вашим авто в Москве',
    description: 'Black Mirror — премиальный детейлинг-центр в Москве. Профессиональная полировка кузова, нанесение керамики 9H, химчистка салона и бронирование пленкой. Гарантия качества на все работы.',
    keywords: 'детейлинг москва, полировка автомобиля, керамика на авто, химчистка салона москва, оклейка пленкой, детейлинг центр, защита кузова',
    ogTitle: 'Black Mirror — Детейлинг премиум-класса',
    ogDescription: 'Вернем вашему автомобилю заводской блеск. Запишитесь на бесплатную консультацию!',
    'nav.services': 'Услуги',
    'nav.advantages': 'О нас',
    'nav.portfolio': 'Портфолио',
    'nav.booking': 'Прайс',
    'order.call': 'Заказать звонок',
    'hero.title': 'Твое <span class="hero__title-accent">авто</span> — наше <span class="hero__title-accent">отражение</span>',
    'hero.description': 'Премиальный детейлинг в Москве — от бережной мойки до глубокой полировки и керамической защиты.',
    'hero.btn.primary': 'Записаться на сервис',
    'hero.btn.secondary': 'Наши работы',
    'services.title': 'Профессиональный <span class="accent">сервис</span>',
    'services.subtitle': 'Работаем с автомобилями любого класса, используя только премиальную автохимию',
    'services.01.title': 'Детейлинг мойка',
    'services.02.title': 'Керамика 9H',
    'services.03.title': 'Химчистка салона',
    'services.04.title': 'Бронирование',
    'services.05.title': 'Полировка фар',
    'services.06.title': 'Антидождь',
    'services.01.text': 'Бережное очищение кузова и дисков по 3-х фазной технологии.',
    'services.02.text': 'Глубокий блеск и мощная защита кузова от химии и мелких царапин.',
    'services.03.text': 'Полная дезинфекция и восстановление первозданного вида интерьера.',
    'services.04.text': 'Защита капота и фар от сколов и гравия прозрачным полиуретаном.',
    'services.05.text': 'Вернем прозрачность вашей оптике и защитим её от помутнения специальным лаком.',
    'services.06.text': 'Специальное покрытие для стекол: вода и грязь просто слетают при движении.',
    'services.01.price': 'от 3 500 ₽',
    'services.02.price': 'от 25 000 ₽',
    'services.03.price': 'от 12 000 ₽',
    'services.04.price': 'от 45 000 ₽',
    'services.05.price': 'от 3 000 ₽',
    'services.06.price': 'от 4 000 ₽',
    'services.download': '<span class="services__footer_downloadBtn-icon">📄</span> Скачать полный прайс-лист (.pdf)',
    'advantages.title': 'Почему <span class="accent">Black Mirror?</span>',
    'advantages.subtitle': 'Мы не просто моем машины, мы сохраняем их историю и ценность.',
    'advantages.01.title': 'Гарантия качества',
    'advantages.02.title': 'Премиальные материалы',
    'advantages.03.title': 'Опытные мастера',
    'advantages.01.text': 'Даем официальную гарантию на все защитные покрытия до 5 лет.',
    'advantages.02.text': 'Используем химию только от проверенных брендов из Германии и США.',
    'advantages.03.text': 'Наши специалисты прошли сертификацию в лучших центрах Европы.',
    'portfolio.title': 'Результаты <span class="accent">работы</span>',
    'filter.btn.all': 'Все',
    'filter.btn.1': 'Полировка',
    'filter.btn.2': 'Химчистка',
    'filter.btn.3': 'Пленка',
    'filter.btn.4': 'Керамика',
    'portfolio.item.01': 'Керамическое покрытие',
    'portfolio.item.02': 'Керамика 9H (3 слоя)',
    'portfolio.item.03': 'Матовый полиуретан (оклейка)',
    'portfolio.item.04': 'Детейлинг химчистка салона',
    'portfolio.item.05': 'Комплексная защита кузова',
    'portfolio.item.06': 'Легкая полировка и блеск',
    'booking.title': 'Прайс-<span class="accent">лист</span>',
    'price.name.01': 'Детейлинг мойка',
    'price.name.02': 'Полировка кузова',
    'price.name.03': 'Керамика (2 слоя)',
    'price.name.04': 'Химчистка салона',
    'price.name.05': 'Защитная пленка',
    'price.value.01': 'от 3 500 ₽',
    'price.value.02': 'от 15 000 ₽',
    'price.value.03': 'от 25 000 ₽',
    'price.value.04': 'от 10 000 ₽',
    'price.value.05': 'от 45 000 ₽',
    'booking.address': '📍 Москва, ул. Автозаводская, 23 корп. 2',
    'booking.number': '📞 +7 (999) 000-00-00',
    'contacts.title': 'Оставить заявку',
    'custom.select': 'Выберите услугу',
    'custom.item.01': 'Керамическое покрытие',
    'custom.item.02': 'Матовый полиуретан',
    'custom.item.03': 'Керамика 9H',
    'custom.item.04': 'Детейлинг химчистка салона',
    'custom.item.05': 'Комплексная защита кузова',
    'custom.item.06': 'Легкая полировка и блеск',
    'submit': 'Отправить заявку',
    'footer.text': 'Премиальный детейлинг в Москве. Мы создаем безупречный вид вашего автомобиля с 2015 года.',
    'footer.language': 'Языки',
    'footer.nav': 'Навигация',
    'footer.services': 'Услуги',
    'footer.advantages': 'О нас',
    'footer.portfolio': 'Портфолио',
    'footer.booking': 'Прайс-лист',
    'footer.soc': 'Мы в сети',
    'copyright': '&copy; 2025 Black Mirror Detailing. Все права защищены.',
    'form.hint': 'Свяжемся с вами в течение <strong>15 минут</strong>'
  },

  en: {
    'form.name': 'Your name',
    'form.phone': 'Phone number +7 000 000 00 00',
    title: 'Black Mirror Detailing | Premium Car Care in Moscow',
    description: 'Black Mirror is a premium car detailing studio in Moscow. Professional paint polishing, 9H ceramic coating, interior detailing, and paint protection film with quality guarantee.',
    keywords: 'car detailing moscow, paint polishing, ceramic coating, interior detailing, paint protection film, detailing studio',
    ogTitle: 'Black Mirror — Premium Car Detailing',
    ogDescription: 'Restore your vehicle’s factory shine. Book a free consultation today!',
    'nav.services': 'Services',
    'nav.advantages': 'About us',
    'nav.portfolio': 'Portfolio',
    'nav.booking': 'Pricing',
    'order.call': 'Order a Call',
    'hero.title': 'Your <span class="hero__title-accent">car</span> is our <span class="hero__title-accent">reflection</span>',
    'hero.description': 'Premium car detailing in Moscow — from careful washing to deep polishing and ceramic protection.',
    'hero.btn.primary': 'Book a Service',
    'hero.btn.secondary': 'View Our Work',
    'services.title': 'Professional <span class="accent">Service</span>',
    'services.subtitle': 'We work with vehicles of all classes using only premium car care products',
    'services.01.title': 'Detailing Wash',
    'services.02.title': '9H Ceramic Coating',
    'services.03.title': 'Interior Deep Cleaning',
    'services.04.title': 'Paint Protection Film (PPF)',
    'services.05.title': 'Headlight Restoration',
    'services.06.title': 'Rain Repellent Treatment',
    'services.01.text': 'Gentle body and wheel cleaning using a three-stage detailing process.',
    'services.02.text': 'Deep gloss and durable paint protection against chemicals and light scratches.',
    'services.03.text': 'Complete interior sanitation and restoration to its original condition.',
    'services.04.text': 'Hood and headlight protection from chips and gravel using clear polyurethane film.',
    'services.05.text': 'We restore clarity to your headlights and protect them with a special coating.',
    'services.06.text': 'A special glass coating that repels water and dirt while driving.',
    'services.01.price': 'From ₽3,500',
    'services.02.price': 'From ₽25,000',
    'services.03.price': 'From ₽12,000',
    'services.04.price': 'From ₽45,000',
    'services.05.price': 'From ₽3,000',
    'services.06.price': 'From ₽4,000',
    'services.download': '<span class="services__footer_downloadBtn-icon">📄</span> Download Full Price List (PDF)',
    'advantages.title': 'Why <span class="accent">Black Mirror?</span>',
    'advantages.subtitle': 'We don’t just clean cars — we preserve their history and value.',
    'advantages.01.title': 'Quality Guarantee',
    'advantages.02.title': 'Premium Materials',
    'advantages.03.title': 'Certified Specialists',
    'advantages.01.text': 'We provide an official warranty of up to 5 years on all protective coatings.',
    'advantages.02.text': 'We use only premium car care products from trusted brands in Germany and the USA.',
    'advantages.03.text': 'Our specialists are certified at leading training centers across Europe.',
    'portfolio.title': 'Our <span class="accent">Results</span>',
    'filter.btn.all': 'All',
    'filter.btn.1': 'Polishing',
    'filter.btn.2': 'Interior Cleaning',
    'filter.btn.3': 'Film Protection',
    'filter.btn.4': 'Ceramic Coating',
    'portfolio.item.01': 'Ceramic Coating',
    'portfolio.item.02': '9H Ceramic Coating (3 Layers)',
    'portfolio.item.03': 'Matte Polyurethane Film',
    'portfolio.item.04': 'Interior Detailing',
    'portfolio.item.05': 'Complete Paint Protection',
    'portfolio.item.06': 'Light Polishing & Gloss Enhancement',
    'booking.title': 'Price <span class="accent">List</span>',
    'price.name.01': 'Detailing Wash',
    'price.name.02': 'Paint Polishing',
    'price.name.03': 'Ceramic Coating (2 Layers)',
    'price.name.04': 'Interior Detailing',
    'price.name.05': 'Paint Protection Film',
    'price.value.01': 'From ₽3,500',
    'price.value.02': 'From ₽15,000',
    'price.value.03': 'From ₽25,000',
    'price.value.04': 'From ₽10,000',
    'price.value.05': 'From ₽45,000',
    'booking.address': '📍 Moscow, Avtozavodskaya St. 23, Bldg. 2',
    'booking.number': '📞 +7 (999) 000-00-00',
    'contacts.title': 'Request a Callback',
    'custom.select': 'Select a Service',
    'custom.item.01': 'Ceramic Coating',
    'custom.item.02': 'Matte Polyurethane Film',
    'custom.item.03': '9H Ceramic Coating',
    'custom.item.04': 'Interior Detailing',
    'custom.item.05': 'Complete Paint Protection',
    'custom.item.06': 'Light Polishing & Gloss Enhancement',
    'submit': 'Submit Request',
    'footer.text': 'Premium car detailing in Moscow. We have been creating flawless vehicle finishes since 2015.',
    'footer.language': 'Languages',
    'footer.nav': 'Navigation',
    'footer.services': 'Services',
    'footer.advantages': 'About Us',
    'footer.portfolio': 'Portfolio',
    'footer.booking': 'Price List',
    'footer.soc': 'Follow Us',
    'copyright': '© 2025 Black Mirror Detailing. All rights reserved.',
    'form.hint': 'We will contact you within <strong>15 minutes</strong>'
  }
}
/* =====================
   UTILITIES
===================== */
const delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

/* =====================
   LANGUAGE / I18N
===================== */
function detectLanguage() {
  return localStorage.getItem('lang')
      || (navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en')
}

function applyBodyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key]
    }
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder
    if (translations[lang]?.[key]) {
      el.setAttribute('placeholder', translations[lang][key])
    }
  })

}

function applyHeadTranslations(lang) {
  const t = translations[lang]
  if (!t) return

  document.title = t.title
  document.documentElement.lang = lang

  document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', t.keywords)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.ogTitle)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.ogDescription)
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang)
  applyBodyTranslations(lang)
  applyHeadTranslations(lang)

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })
}

/* =====================
   CUSTOM SELECT
===================== */
function initCustomSelect() {
  const select = document.querySelector('.custom-select')
  if (!select) return

  const header = select.querySelector('.custom-select__header')
  const current = select.querySelector('.custom-select__current')
  const items = select.querySelectorAll('.custom-select__item')
  const hiddenInput = document.querySelector('#selectedService')

  header.addEventListener('click', () => select.classList.toggle('is-active'))

  items.forEach(item => {
    item.addEventListener('click', () => {
      current.textContent = item.textContent
      current.style.color = '#fff'
      hiddenInput.value = item.dataset.value || ''
      select.classList.remove('is-active')
    })
  })

  document.addEventListener('click', e => {
    if (!select.contains(e.target)) select.classList.remove('is-active')
  })
}

/* =====================
   FORM VALIDATION
===================== */
function initFormValidation() {
  const form = document.querySelector('.contacts-form__body')
  if (!form) return

  const nameInput = form.querySelector('input[type="text"]')
  const phoneInput = form.querySelector('input[type="tel"]')

  const showError = input => {
    input.classList.add('error', 'shake')
    delay(300).then(() => input.classList.remove('shake'))
  }

  const clearError = input => input.classList.remove('error')

  form.addEventListener('submit', e => {
    e.preventDefault()
    let valid = true

    if (!/^[a-zA-Zа-яА-ЯёЁ\s]{2,30}$/.test(nameInput.value)) {
      showError(nameInput)
      valid = false
    } else clearError(nameInput)

    if (!/^[\d\s+\-()]{10,18}$/.test(phoneInput.value)) {
      showError(phoneInput)
      valid = false
    } else clearError(phoneInput)

    if (valid) {
      alert('Заявка успешно отправлена! Мы свяжемся с вами.')
      form.reset()
    }
  })

  ;[ nameInput, phoneInput ].forEach(input =>
      input.addEventListener('input', () => clearError(input))
  )
}

/* =====================
   PORTFOLIO FILTER
===================== */
function initPortfolioFilter() {
  const buttons = document.querySelectorAll('.filter-btn')
  const items = document.querySelectorAll('.portfolio__item')

  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const filter = btn.dataset.filter

      for (const item of items) {
        const match = filter === 'all' || item.dataset.category?.includes(filter)
        item.style.opacity = match ? '1' : '0'
        await delay(200)
        item.style.display = match ? 'block' : 'none'
      }
    })
  })
}

/* =====================
   SCROLL / NAV
===================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]')
  const links = document.querySelectorAll('.nav__link')

  window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop - 120) current = sec.id
    })

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${ current }`)
    })
  })
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' })
    })
  })
}

/* =====================
   BURGER MENU
===================== */
function initBurgerMenu() {
  const burger = document.getElementById('burger')
  const menu = document.getElementById('navMenu')
  if (!burger || !menu) return

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
  })

  menu.querySelectorAll('.nav__link').forEach(link =>
      link.addEventListener('click', () => {
        burger.classList.remove('active')
        menu.classList.remove('active')
        document.body.classList.remove('no-scroll')
      })
  )
}

/* =====================
   INIT
===================== */
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage()
  setLanguage(lang)

  document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
  )

  initCustomSelect()
  initFormValidation()
  initPortfolioFilter()
  initScrollSpy()
  initSmoothScroll()
  initBurgerMenu()
})
