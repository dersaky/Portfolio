<template>
  <section id="projects" class="section-padding relative">
    <div class="container-max">
      <div class="fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:bg-gradient-to-r dark:from-primary-400 dark:to-primary-600 dark:bg-clip-text dark:text-transparent">
          {{ t('projects.title') }}
        </h2>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="fade-in-up group"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-white/70 backdrop-blur-sm border border-slate-200 hover:border-slate-300 hover:shadow-slate-400/10 dark:bg-dark-700/70 dark:backdrop-blur-sm dark:border-dark-600 dark:hover:border-primary-600 dark:hover:shadow-primary-600/20">
            <!-- Project Image/Icon -->
            <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center relative overflow-hidden">
              <div class="text-6xl">{{ project.icon }}</div>
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 dark:text-white dark:group-hover:text-primary-400">
                {{ t(project.titleKey) }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed dark:text-gray-300">
                {{ t(project.descKey) }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-1 mb-0">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-primary-500/10 text-primary-700 rounded-full text-xs border border-slate-300 dark:bg-primary-600/20 dark:text-primary-300 dark:border-primary-600/30"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Project Links removed -->
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="fade-in-up mt-16 text-center">
        <div class="bg-white/80 border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto dark:from-primary-600/10 dark:to-primary-800/10 dark:border-primary-600/30">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 dark:text-white">{{ t('projects.cta.title') }}</h3>
          <p class="text-gray-700 mb-6 leading-relaxed dark:text-gray-300">
            {{ t('projects.cta.p1') }} 
            {{ t('projects.cta.p2') }}
          </p>
          <a href="#projects" class="btn-primary inline-flex items-center">
            <span>{{ t('projects.cta.button') }}</span>
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const t = inject('t') as (key: string) => string

interface Project {
  id: number
  titleKey: string
  descKey: string
  icon: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    titleKey: 'projects.items.1.title',
    descKey: 'projects.items.1.desc',
    icon: '🛒',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Docker'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    titleKey: 'projects.items.2.title',
    descKey: 'projects.items.2.desc',
    icon: '🤖',
    technologies: ['Python', 'Telegram API', 'SQLite', 'OpenWeather API'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    titleKey: 'projects.items.3.title',
    descKey: 'projects.items.3.desc',
    icon: '⚙️',
    technologies: ['n8n', 'REST APIs', 'Webhooks', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    titleKey: 'projects.items.4.title',
    descKey: 'projects.items.4.desc',
    icon: '💬',
    technologies: ['Vue.js', 'Socket.io', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    titleKey: 'projects.items.5.title',
    descKey: 'projects.items.5.desc',
    icon: '📊',
    technologies: ['Vue.js', 'Chart.js', 'FastAPI', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    titleKey: 'projects.items.6.title',
    descKey: 'projects.items.6.desc',
    icon: '📋',
    technologies: ['TypeScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  }
])
</script>
