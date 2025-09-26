<template>
  <div class="min-h-screen relative">
    <!-- Global Particle Background -->
    <ParticleBackground />
    <!-- Global overlay to unify background tone across sections (below particles, below content) -->
    <div class="fixed inset-0 z-0 pointer-events-none bg-white/60 dark:bg-dark-900/70"></div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b bg-white/80 border-slate-200 dark:bg-dark-900/90 dark:border-dark-800">
      <div class="container-max px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold text-gray-900 dark:text-primary-400">Dmytro</div>
          <div class="hidden md:flex items-center space-x-6">
            <a href="#home" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.home') }}</a>
            <a href="#skills" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.skills') }}</a>
            <a href="#projects" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.projects') }}</a>
            <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.contact') }}</a>
            <!-- Language Switcher -->
            <div class="flex items-center space-x-2 ml-2">
              <button @click="setLocale('uk')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'uk' ? 'bg-primary-500/10 text-primary-700 border-primary-400 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-slate-300 hover:border-slate-400 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                UA
              </button>
              <button @click="setLocale('en')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'en' ? 'bg-primary-500/10 text-primary-700 border-primary-400 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-slate-300 hover:border-slate-400 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                EN
              </button>
              <!-- Modern Theme Toggle -->
              <button 
                @click="toggleTheme" 
                :aria-pressed="theme === 'dark'"
                :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
                class="ml-4 relative inline-flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-500"
                :class="theme === 'dark' ? 'bg-dark-700 hover:bg-dark-600' : 'bg-slate-100 hover:bg-slate-200'"
              >
                <!-- Track -->
                <div class="absolute inset-0 flex items-center justify-between px-1.5">
                  <!-- Sun Icon (always present but changes opacity) -->
                  <svg 
                    class="w-4 h-4 transition-opacity duration-300"
                    :class="theme === 'dark' ? 'opacity-40 text-primary-300' : 'opacity-100 text-amber-500'"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    <path d="M12 1v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M12 21v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M21 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  
                  <!-- Moon Icon (always present but changes opacity) -->
                  <svg 
                    class="w-3.5 h-3.5 transition-opacity duration-300"
                    :class="theme === 'dark' ? 'opacity-100 text-primary-300' : 'opacity-40 text-blue-900'"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
                
                <!-- Thumb -->
                <span 
                  class="absolute left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center"
                  :class="theme === 'dark' ? 'translate-x-6' : 'translate-x-0'"
                >
                  <svg 
                    v-if="theme === 'dark'" 
                    class="w-3.5 h-3.5 text-primary-500" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <svg 
                    v-else 
                    class="w-4 h-4 text-amber-500" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <button 
            @click="toggleMobileMenu"
            class="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t pt-4 border-slate-200 dark:border-dark-800">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-gray-600 text-sm dark:text-gray-400">{{ t('nav.language') }}:</span>
              <button @click="setLocale('uk')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'uk' ? 'bg-primary-500/10 text-primary-700 border-primary-400 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-slate-300 hover:border-slate-400 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                UA
              </button>
              <button @click="setLocale('en')"
                      :class="['px-3 py-1 rounded-md text-sm border transition-colors', locale === 'en' ? 'bg-primary-500/10 text-primary-700 border-primary-400 dark:bg-primary-600/30 dark:text-primary-200 dark:border-primary-600' : 'bg-white text-gray-700 border-slate-300 hover:border-slate-400 dark:bg-dark-800 dark:text-gray-300 dark:border-dark-700 dark:hover:border-primary-600/60']">
                EN
              </button>
              <!-- Theme toggle in mobile (modern compact design) -->
              <button @click="toggleTheme" :aria-pressed="theme === 'dark'"
                      class="ml-2 relative inline-flex items-center rounded-full transition-all duration-500 select-none w-12 h-6 border-2 overflow-hidden group hover:scale-105"
                      :class="theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500 shadow-lg shadow-purple-500/30'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-400 border-orange-400 shadow-lg shadow-orange-500/30'">
                <div class="absolute inset-0 rounded-full transition-all duration-500"
                     :class="theme === 'dark'
                       ? 'bg-gradient-to-r from-blue-600 to-purple-600 opacity-100'
                       : 'bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0'"></div>
                <div class="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-500 z-10 flex items-center justify-center"
                     :class="theme === 'dark'
                       ? 'left-5 bg-white shadow-md'
                       : 'left-0.5 bg-white shadow-md'">
                  <svg v-if="theme === 'dark'" class="w-2.5 h-2.5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <svg v-else class="w-2.5 h-2.5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  </svg>
                </div>
                <div class="absolute inset-0 rounded-full transition-all duration-500"
                     :class="theme === 'dark'
                       ? 'shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                       : 'shadow-[0_0_15px_rgba(251,146,60,0.4)]'"></div>
              </button>
            </div>
            <a href="#home" @click="closeMobileMenu" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.home') }}</a>
            <a href="#skills" @click="closeMobileMenu" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.skills') }}</a>
            <a href="#projects" @click="closeMobileMenu" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.projects') }}</a>
            <a href="#contact" @click="closeMobileMenu" class="text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">{{ t('nav.contact') }}</a>
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
    <footer class="py-8 relative z-10 bg-slate-100 border-t border-slate-200 dark:bg-dark-800 dark:border-dark-700">
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
