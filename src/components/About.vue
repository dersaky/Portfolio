<template>
  <section id="about" class="section-padding bg-white dark:bg-dark-800">
    <div class="container-max">
      <div class="fade-in-up">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:bg-gradient-to-r dark:from-primary-400 dark:to-primary-600 dark:bg-clip-text dark:text-transparent">
          About Me
        </h2>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-in-up">
          <div class="relative">
            <div class="w-full max-w-md mx-auto">
              <div class="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-2xl p-1 shadow-2xl shadow-slate-400/10 dark:shadow-primary-600/30">
                <div class="w-full h-full bg-white/70 backdrop-blur-sm dark:bg-dark-700/70 dark:backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div class="text-6xl md:text-8xl font-bold text-gray-900 dark:text-primary-400">
                    &lt;/&gt;
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-pulse bg-primary-500 dark:bg-primary-500"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse delay-500 bg-primary-700 dark:bg-primary-700"></div>
          </div>
        </div>
        
        <div class="fade-in-up">
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer with a Passion for Innovation
            </h3>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in developing modern web applications that combine beautiful user interfaces with robust backend systems. My expertise spans across the entire development stack, from frontend frameworks to database design.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web Applications</h4>
                  <p class="text-gray-700 dark:text-gray-300">Creating responsive, user-friendly web applications using modern frameworks like Vue.js, React, and Node.js.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Telegram Bots</h4>
                  <p class="text-gray-700 dark:text-gray-300">Developing intelligent Telegram bots that automate tasks, provide customer support, and enhance user engagement.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Process Automation</h4>
                  <p class="text-gray-700 dark:text-gray-300">Streamlining workflows and automating repetitive tasks using n8n and custom solutions to improve efficiency.</p>
                </div>
              </div>
            </div>
            
            <div class="pt-6">
              <a href="#skills" class="btn-primary inline-flex items-center">
                <span>View My Skills</span>
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>
