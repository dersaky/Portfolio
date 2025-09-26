<template>
  <section id="skills" class="section-padding relative">
    <div class="container-max">
      <div class="fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:bg-gradient-to-r dark:from-primary-400 dark:to-primary-600 dark:bg-clip-text dark:text-transparent">
          {{ t('skills.title') }}
        </h2>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          class="fade-in-up skill-card"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-slate-400/10 dark:shadow-primary-600/30">
              {{ skill.icon }}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ skill.category }}</p>
            
          </div>
        </div>
      </div>
      
      <!-- Additional info -->
      <div class="fade-in-up mt-16 text-center">
        <div class="rounded-2xl p-8 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-slate-200 dark:bg-dark-800/70 dark:backdrop-blur-sm dark:border-dark-700">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('skills.alwaysLearning.title') }}</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {{ t('skills.alwaysLearning.p1') }} 
            {{ t('skills.alwaysLearning.p2') }}
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="key in interestKeys" :key="key" 
                  class="px-4 py-2 bg-primary-500/10 text-primary-700 rounded-full text-sm border border-slate-300 dark:bg-primary-600/20 dark:text-primary-300 dark:border-primary-600/30">
              {{ t(key) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
const t = inject('t') as (key: string) => string

interface Skill {
  name: string
  icon: string
  category: string
  level: number
}

const skills = ref<Skill[]>([
  { name: 'Python', icon: '🐍', category: 'Backend', level: 90 },
  { name: 'Git', icon: '📝', category: 'Tools', level: 85 },
  { name: 'n8n', icon: '🔗', category: 'Automation', level: 85 },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 80 },
  { name: 'Docker', icon: '🐳', category: 'DevOps', level: 75 },
  { name: 'Vue.js', icon: '💚', category: 'Frontend', level: 85 },
  { name: 'TypeScript', icon: '📘', category: 'Language', level: 80 },
  { name: 'Node.js', icon: '🟢', category: 'Backend', level: 85 },
  { name: 'PHP', icon: '🐘', category: 'Backend', level: 70 }
])

// Use translation keys so the UI updates reactively when locale changes
const interestKeys = [
  'skills.interests.ai',
  'skills.interests.microservices',
  'skills.interests.graphql',
  'skills.interests.rust',
  'skills.interests.k8s',
  'skills.interests.web3',
  'skills.interests.serverless',
  'skills.interests.pwa'
] as const
</script>
