<template>
  <div class="min-h-screen relative">
    <!-- Global Particle Background -->
    <ParticleBackground />
    <!-- Global overlay to unify background tone across sections (below particles, below content) -->
    <div class="fixed inset-0 z-0 pointer-events-none bg-accent-100/60 dark:bg-dark-900/70"></div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b bg-white/80 border-accent-200 dark:bg-dark-900/90 dark:border-dark-800">
      <div class="container-max px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold text-gray-900 dark:text-primary-400">Dmytro</div>
          <div class="hidden md:flex items-center space-x-6">
            <a href="#home" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.home') }}</a>
            <a href="#skills" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.skills') }}</a>
            <a href="#projects" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.projects') }}</a>
            <a href="#contact" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.contact') }}</a>
            <!-- Language Switcher -->
            <div class="flex items-center space-x-2 ml-2">
              <button @click="setLocale('uk')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'uk' ? 'bg-accent-500/20 text-accent-700 border-accent-500 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-accent-300 hover:border-accent-500 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                UA
              </button>
              <button @click="setLocale('en')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'en' ? 'bg-accent-500/20 text-accent-700 border-accent-500 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-accent-300 hover:border-accent-500 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                EN
              </button>
              <!-- Theme Toggle: pill switch (refined) -->
              <button @click="toggleTheme" :aria-pressed="theme === 'dark'" class="ml-2 relative inline-flex items-center rounded-full transition-colors duration-300 select-none w-32 h-10 border bg-accent-100/80 border-accent-200 text-accent-700 dark:bg-dark-800 dark:border-dark-700 dark:text-gray-200">
                <!-- Labels -->
                <span class="absolute left-4 text-sm font-semibold pointer-events-none select-none" :class="theme === 'dark' ? 'text-gray-400' : 'text-accent-700'">DAY</span>
                <span class="absolute right-4 text-sm font-semibold pointer-events-none select-none" :class="theme === 'dark' ? 'text-primary-300' : 'text-gray-500'">NIGHT</span>
                <!-- Knob -->
                <span class="absolute top-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                      :class="theme === 'dark' ? 'right-1 bg-dark-900 text-primary-300 shadow-[0_0_0_2px_rgba(30,41,59,0.9),0_4px_10px_rgba(0,0,0,0.35)]' : 'left-1 bg-white text-accent-500 shadow-[0_0_0_2px_rgba(252,211,77,0),0_4px_10px_rgba(0,0,0,0.15)]'">
                  <svg v-if="theme === 'dark'" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </span>
              </button>
            </div>
          </div>
          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t pt-4 border-accent-200 dark:border-dark-800">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-gray-600 text-sm dark:text-gray-400">{{ t('nav.language') }}:</span>
              <button @click="setLocale('uk')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'uk' ? 'bg-accent-500/20 text-accent-700 border-accent-500 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-accent-300 hover:border-accent-500 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                UA
              </button>
              <button @click="setLocale('en')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'en' ? 'bg-accent-500/20 text-accent-700 border-accent-500 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-accent-300 hover:border-accent-500 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                EN
              </button>
              <!-- Theme toggle in mobile (compact pill) -->
              <button @click="toggleTheme" :aria-pressed="theme === 'dark'" class="ml-2 relative inline-flex items-center rounded-full transition-colors duration-300 select-none w-24 h-9 border bg-accent-100/80 border-accent-200 text-accent-700 dark:bg-dark-800 dark:border-dark-700 dark:text-gray-200">
                <span class="absolute left-3 text-xs font-semibold pointer-events-none select-none" :class="theme === 'dark' ? 'text-gray-400' : 'text-accent-700'">DAY</span>
                <span class="absolute right-3 text-xs font-semibold pointer-events-none select-none" :class="theme === 'dark' ? 'text-primary-300' : 'text-gray-500'">NIGHT</span>
                <span class="absolute top-1 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                      :class="theme === 'dark' ? 'right-1 bg-dark-900 text-primary-300 shadow-[0_0_0_2px_rgba(30,41,59,0.9),0_4px_10px_rgba(0,0,0,0.35)]' : 'left-1 bg-white text-accent-500 shadow-[0_0_0_2px_rgba(252,211,77,0),0_4px_10px_rgba(0,0,0,0.15)]'">
                  <svg v-if="theme === 'dark'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </span>
              </button>
            </div>
            <a href="#home" @click="closeMobileMenu" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.home') }}</a>
            <a href="#skills" @click="closeMobileMenu" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.skills') }}</a>
            <a href="#projects" @click="closeMobileMenu" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.projects') }}</a>
            <a href="#contact" @click="closeMobileMenu" class="text-gray-700 hover:text-accent-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.contact') }}</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-20">
      <Header />
      <Skills />
      <Projects />
      <Contacts />
    </main>

    <!-- Footer -->
    <footer class="py-8 relative z-10 bg-accent-100 border-t border-accent-200 dark:bg-dark-800 dark:border-dark-700">
      <div class="container-max px-6 text-center">
        <p class="text-gray-600 dark:text-gray-400">© 2024 Dmytro. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue'
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import Contacts from './components/Contacts.vue'

const mobileMenuOpen = ref(false)

// i18n minimal setup
type Locale = 'en' | 'uk'
const stored = (typeof window !== 'undefined' && window.localStorage.getItem('locale')) as Locale | null
const locale = ref<Locale>(stored ?? 'uk')

const messages = {
  en: {
    // nav
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    // hero/about (in Header.vue)
    'hero.title': 'Full Stack Web Middle Developer',
    'hero.subtitle': 'Passionate about creating innovative web solutions, Telegram bots, and automating processes to make life easier.',
    'about.title': 'About Me',
    'about.subheading': 'Full Stack Developer with a Passion for Innovation',
    'about.paragraph': 'I specialize in developing modern web applications that combine beautiful user interfaces with robust backend systems. My expertise spans across the entire development stack, from frontend frameworks to database design.',
    'about.cards.web.title': 'Web Applications',
    'about.cards.web.desc': 'Creating responsive, user-friendly web applications using modern frameworks like Vue.js, React, and Node.js.',
    'about.cards.telegram.title': 'Telegram Bots',
    'about.cards.telegram.desc': 'Developing intelligent Telegram bots that automate tasks, provide customer support, and enhance user engagement.',
    'about.cards.automation.title': 'Process Automation',
    'about.cards.automation.desc': 'Streamlining workflows and automating repetitive tasks using n8n and custom solutions to improve efficiency.',
    // skills
    'skills.title': 'Skills & Technologies',
    'skills.alwaysLearning.title': 'Always Learning',
    'skills.alwaysLearning.p1': "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.",
    'skills.alwaysLearning.p2': 'I regularly explore new frameworks, tools, and methodologies to deliver cutting-edge solutions.',
    'skills.interests.ai': 'AI/ML Integration',
    'skills.interests.microservices': 'Microservices',
    'skills.interests.graphql': 'GraphQL',
    'skills.interests.rust': 'Rust',
    'skills.interests.k8s': 'Kubernetes',
    'skills.interests.web3': 'Web3',
    'skills.interests.serverless': 'Serverless',
    'skills.interests.pwa': 'PWA',
    // projects
    'projects.title': 'Featured Projects',
    'projects.cta.title': 'Interested in Working Together?',
    'projects.cta.p1': "I'm always excited to take on new challenges and create innovative solutions.",
    'projects.cta.p2': "Let's discuss how we can bring your ideas to life.",
    'projects.cta.button': 'Start a Project',
    'projects.items.1.title': 'E-Commerce Platform',
    'projects.items.1.desc': 'Full-stack e-commerce solution with Vue.js frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, and admin dashboard.',
    'projects.items.2.title': 'Telegram Bot Assistant',
    'projects.items.2.desc': 'Intelligent Telegram bot that helps users manage tasks, set reminders, and get weather updates. Built with Python and integrated with various APIs.',
    'projects.items.3.title': 'Workflow Automation',
    'projects.items.3.desc': 'Custom n8n workflows that automate business processes, including data synchronization between different platforms and automated reporting.',
    'projects.items.4.title': 'Real-time Chat App',
    'projects.items.4.desc': 'Modern chat application with real-time messaging, file sharing, and group conversations. Built with Vue.js and Socket.io.',
    'projects.items.5.title': 'Analytics Dashboard',
    'projects.items.5.desc': 'Interactive dashboard for data visualization and analytics with real-time charts, filters, and export functionality.',
    'projects.items.6.title': 'Task Management System',
    'projects.items.6.desc': 'Comprehensive project management tool with kanban boards, time tracking, and team collaboration features.',
    // contacts
    'contact.title': 'Get In Touch',
    'contact.intro.p1': "Ready to start your next project? I'm always interested in discussing new opportunities",
    'contact.intro.p2': 'and innovative ideas. Let\'s connect and create something amazing together.',
    'contact.card.title': "Let's Connect",
    'contact.telegram': 'Telegram',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.stats.years': 'Years Experience',
    'contact.stats.projects': 'Projects Completed',
  },
  uk: {
    // nav
    'nav.home': 'Головна',
    'nav.skills': 'Навички',
    'nav.projects': 'Проєкти',
    'nav.contact': 'Контакти',
    'nav.language': 'Мова',
    // hero/about (in Header.vue)
    'hero.title': 'Middle Full Stack Веб Розробник',
    'hero.subtitle': 'Захоплююся створенням інноваційних веб‑рішень, Telegram‑ботів та автоматизацією процесів, щоб робити життя простішим.',
    'about.title': 'Про мене',
    'about.subheading': 'Full Stack розробник із пристрастю до інновацій',
    'about.paragraph': 'Я спеціалізуюся на розробці сучасних веб‑додатків, що поєднують красивий інтерфейс із надійним бекендом. Мій досвід охоплює весь стек — від фронтенду до проєктування баз даних.',
    'about.cards.web.title': 'Веб‑додатки',
    'about.cards.web.desc': 'Створення адаптивних, зручних веб‑додатків із сучасними фреймворками, як‑от Vue.js, React та Node.js.',
    'about.cards.telegram.title': 'Telegram‑боти',
    'about.cards.telegram.desc': 'Розробка розумних Telegram‑ботів для автоматизації задач, підтримки користувачів та підвищення залученості.',
    'about.cards.automation.title': 'Автоматизація процесів',
    'about.cards.automation.desc': 'Оптимізація робочих процесів і автоматизація рутинних задач за допомогою n8n і кастомних рішень.',
    // skills
    'skills.title': 'Навички та технології',
    'skills.alwaysLearning.title': 'Постійно навчаюсь',
    'skills.alwaysLearning.p1': 'Технології швидко розвиваються, і я постійно стежу за трендами та найкращими практиками.',
    'skills.alwaysLearning.p2': 'Регулярно досліджую нові фреймворки, інструменти й методології, щоб створювати сучасні рішення.',
    'skills.interests.ai': 'Інтеграція AI/ML',
    'skills.interests.microservices': 'Мікросервіси',
    'skills.interests.graphql': 'GraphQL',
    'skills.interests.rust': 'Rust',
    'skills.interests.k8s': 'Kubernetes',
    'skills.interests.web3': 'Web3',
    'skills.interests.serverless': 'Serverless',
    'skills.interests.pwa': 'PWA',
    // projects
    'projects.title': 'Обрані проєкти',
    'projects.cta.title': 'Цікавить співпраця?',
    'projects.cta.p1': 'Я завжди радий новим викликам і створенню інноваційних рішень.',
    'projects.cta.p2': 'Давайте обговоримо, як втілити ваші ідеї у життя.',
    'projects.cta.button': 'Почати проєкт',
    'projects.items.1.title': 'Платформа e‑commerce',
    'projects.items.1.desc': 'Повноцінне e‑commerce рішення: фронтенд на Vue.js, бекенд на Node.js, БД PostgreSQL. Фічі: автентифікація, оплати, адмін‑панель.',
    'projects.items.2.title': 'Telegram‑бот помічник',
    'projects.items.2.desc': 'Розумний Telegram‑бот для задач, нагадувань і погоди. Побудований на Python та інтегрований з різними API.',
    'projects.items.3.title': 'Автоматизація робочих процесів',
    'projects.items.3.desc': 'Кастомні сценарії n8n для автоматизації бізнес‑процесів: синхронізація даних і автоматична звітність.',
    'projects.items.4.title': 'Чат у реальному часі',
    'projects.items.4.desc': 'Сучасний чат із миттєвими повідомленнями, файлами та групами. Побудований на Vue.js і Socket.io.',
    'projects.items.5.title': 'Аналітична панель',
    'projects.items.5.desc': 'Інтерактивна панель для візуалізації даних: графіки в реальному часі, фільтри, експорт.',
    'projects.items.6.title': 'Система керування задачами',
    'projects.items.6.desc': 'Інструмент для менеджменту проєктів: канбан, трекінг часу, командна співпраця.',
    // contacts
    'contact.title': 'Звʼяжіться зі мною',
    'contact.intro.p1': 'Готові розпочати наступний проєкт? Мені цікаві нові можливості',
    'contact.intro.p2': 'та інноваційні ідеї. Давайте створимо щось круте разом.',
    'contact.card.title': 'Давайте зв\'яжемося',
    'contact.telegram': 'Telegram',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.stats.years': 'Років досвіду',
    'contact.stats.projects': 'Завершених проєктів',
  }
} as const

const t = (key: keyof typeof messages['en']): string => {
  return (messages as any)[locale.value][key] ?? String(key)
}

const setLocale = (l: Locale) => {
  locale.value = l
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('locale', l)
  }
}

// provide to children
provide('t', t)
provide('locale', locale)

// Theme toggle
type Theme = 'light' | 'dark'
const theme = ref<Theme>('dark')

const applyTheme = (value: Theme) => {
  const root = document.documentElement
  if (value === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

const loadTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  const saved = window.localStorage.getItem('theme') as Theme | null
  return saved ?? 'dark'
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  if (typeof window !== 'undefined') window.localStorage.setItem('theme', theme.value)
  applyTheme(theme.value)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Intersection Observer for animations
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const elements = document.querySelectorAll('.fade-in-up')
  elements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  // init theme
  theme.value = loadTheme()
  applyTheme(theme.value)
  setTimeout(observeElements, 100)
})

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('nav') && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
