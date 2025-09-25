<template>
  <section id="contact" class="section-padding relative overflow-hidden">
    <!-- semi-transparent background layer -->
    <div class="absolute inset-0 bg-accent-100/60 dark:bg-dark-900/70"></div>
    <div class="container-max relative z-10">
      <div class="fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:bg-gradient-to-r dark:from-primary-400 dark:to-primary-600 dark:bg-clip-text dark:text-transparent">
          {{ t('contact.title') }}
        </h2>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="fade-in-up text-center mb-12">
          <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {{ t('contact.intro.p1') }} 
            {{ t('contact.intro.p2') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8">
          <!-- Contact Information -->
          <div class="fade-in-up">
            <div class="rounded-2xl p-8 bg-white/70 backdrop-blur-sm border border-accent-200 dark:bg-dark-800/70 dark:backdrop-blur-sm dark:border-dark-700">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.card.title') }}</h3>
              
              <div class="space-y-6">
                <!-- Telegram -->
                <a 
                  href="https://t.me/dersaky2" 
                  target="_blank"
                  class="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm hover:bg-white/80 border border-accent-200 hover:border-accent-400 rounded-xl transition-all duration-300 transform hover:scale-105 group dark:bg-dark-700/70 dark:backdrop-blur-sm dark:hover:bg-dark-700/80 dark:border-dark-600 dark:hover:border-primary-600"
                >
                  <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.225 8.385l-1.956 9.229c-.146.662-.545.822-1.104.512l-3.06-2.258-1.478 1.423c-.163.163-.3.3-.614.3l.22-3.135 5.705-5.153c.247-.22-.054-.343-.382-.124l-7.043 4.433-3.03-.946c-.658-.206-.67-.658.137-.972l11.845-4.568c.545-.2 1.024.124.846.958z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 group-hover:text-accent-700 transition-colors duration-300 dark:text-white dark:group-hover:text-primary-400">{{ t('contact.telegram') }}</h4>
                    <p class="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 dark:text-gray-400 dark:group-hover:text-gray-300">@dersaky2</p>
                  </div>
                  <div class="ml-auto">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-accent-500 dark:group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </a>
                
                <!-- GitHub -->
                <a 
                  href="https://github.com/dersaky" 
                  target="_blank"
                  class="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm hover:bg-white/80 border border-accent-200 hover:border-accent-400 rounded-xl transition-all duration-300 transform hover:scale-105 group dark:bg-dark-700/70 dark:backdrop-blur-sm dark:hover:bg-dark-700/80 dark:border-dark-600 dark:hover:border-primary-600"
                >
                  <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 group-hover:text-accent-700 transition-colors duration-300 dark:text-white dark:group-hover:text-primary-400">{{ t('contact.github') }}</h4>
                    <p class="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 dark:text-gray-400 dark:group-hover:text-gray-300">@dersaky</p>
                  </div>
                  <div class="ml-auto">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </a>
                
                <!-- Email -->
                <a 
                  href="mailto:dimagagarin2010@gmail.com" 
                  class="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm hover:bg-white/80 border border-accent-200 hover:border-accent-400 rounded-xl transition-all duration-300 transform hover:scale-105 group dark:bg-dark-700/70 dark:backdrop-blur-sm dark:hover:bg-dark-700/80 dark:border-dark-600 dark:hover:border-primary-600"
                >
                  <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 group-hover:text-accent-700 transition-colors duration-300 dark:text-white dark:group-hover:text-primary-400">{{ t('contact.email') }}</h4>
                    <p class="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 dark:text-gray-400 dark:group-hover:text-gray-300">dimagagarin2010@gmail.com</p>
                  </div>
                  <div class="ml-auto">
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </a>
              </div>
              
              <!-- Quick Stats -->
              <div class="mt-8 pt-6 border-t border-accent-200 dark:border-dark-600">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-accent-600 dark:text-primary-400">3+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('contact.stats.years') }}</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-accent-600 dark:text-primary-400">50+</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ t('contact.stats.projects') }}</div>
                  </div>
                </div>
              </div>
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
