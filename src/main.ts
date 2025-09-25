import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Ensure theme class is applied before mount (fallback to index.html inline script)
try {
  const saved = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  if (saved === 'dark') document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
} catch (e) {
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
