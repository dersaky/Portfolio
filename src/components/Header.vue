<template>
  <section id="home" class="min-h-screen relative overflow-hidden">
    <!-- Unified semi-transparent background to match other sections -->
    <div class="absolute inset-0 z-10 bg-white/60 dark:bg-dark-900/70"></div>
    
    <!-- Animated background elements (kept under overlay) -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse bg-primary-500/10 dark:bg-primary-600/10"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 bg-primary-700/10 dark:bg-primary-800/10"></div>
    </div>
    
    <!-- Hero Section -->
    <div class="container-max px-6 pt-24 pb-16 relative z-20">
      <div class="text-center mb-20">
        <div class="fade-in-up">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:bg-gradient-to-r dark:from-white dark:via-gray-100 dark:to-gray-300 dark:bg-clip-text dark:text-transparent">
            Dmytro
          </h1>
          
          <div class="text-xl md:text-2xl text-gray-900 dark:text-primary-400 font-medium mb-8 animate-fade-in">
            {{ t('hero.title') }}
          </div>
          
          <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>
        </div>
      </div>
      
      <!-- About Content -->
      <div class="max-w-4xl mx-auto">
        <div class="fade-in-up mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:bg-gradient-to-r dark:from-primary-400 dark:to-primary-600 dark:bg-clip-text dark:text-transparent">
            {{ t('about.title') }}
          </h2>
        </div>
        
        <div class="fade-in-up">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {{ t('about.subheading') }}
            </h3>
            
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {{ t('about.paragraph') }}
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300 dark:bg-dark-800/70 dark:backdrop-blur-sm dark:border-dark-700 dark:hover:border-primary-600/50">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-600 dark:bg-primary-600">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t('about.cards.web.title') }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.cards.web.desc') }}</p>
            </div>
            
            <div class="text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300 dark:bg-dark-800/50 dark:border-dark-700 dark:hover:border-primary-600/50">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-600 dark:bg-primary-600">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t('about.cards.telegram.title') }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.cards.telegram.desc') }}</p>
            </div>
            
            <div class="text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300 dark:bg-dark-800/50 dark:border-dark-700 dark:hover:border-primary-600/50">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-600 dark:bg-primary-600">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ t('about.cards.automation.title') }}</h4>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.cards.automation.desc') }}</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const t = inject('t') as (key: string) => string
</script>
