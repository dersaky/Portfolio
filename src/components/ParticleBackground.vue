<template>
  <canvas 
    ref="canvasRef" 
    class="particles-canvas"
  ></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()
let animationId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) {
    console.error('Canvas not found')
    return
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    console.error('Canvas context not available')
    return
  }

  // Set canvas size
  const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
  const RESOLUTION_SCALE = 0.7 // render at 70% resolution for performance
  const resizeCanvas = () => {
    // Lower internal resolution to reduce fill and stroke cost
    canvas.width = Math.max(1, Math.floor(window.innerWidth * RESOLUTION_SCALE * (dpr > 1 ? 1 : 1)))
    canvas.height = Math.max(1, Math.floor(window.innerHeight * RESOLUTION_SCALE * (dpr > 1 ? 1 : 1)))
  }
  
  resizeCanvas()
  // console.log('Canvas initialized:', canvas.width, 'x', canvas.height)

  // Theme-aware colors
  const isDark = () => document.documentElement.classList.contains('dark')
  let particleColor = 'rgba(249, 115, 22, 0.9)' // accent-500 (orange) in light
  let glowColor = 'rgba(249, 115, 22, 0.4)'
  let lineColorBase = '249, 115, 22'

  const applyPalette = () => {
    if (isDark()) {
      // blue palette for dark
      particleColor = 'rgba(59, 130, 246, 0.9)'
      glowColor = 'rgba(59, 130, 246, 0.4)'
      lineColorBase = '59, 130, 246'
    } else {
      // orange palette for light
      particleColor = 'rgba(249, 115, 22, 0.9)'
      glowColor = 'rgba(249, 115, 22, 0.4)'
      lineColorBase = '249, 115, 22'
    }
  }

  applyPalette()

  // Observe theme changes
  const mo = new MutationObserver(() => applyPalette())
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  // Create particles
  const particles: Particle[] = []
  // Scale particle count with viewport area for consistent density (further reduced for perf)
  const targetCount = Math.min(120, Math.max(60, Math.floor((canvas.width * canvas.height) / 16000)))
  for (let i = 0; i < targetCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2, // faster motion
      vy: (Math.random() - 0.5) * 1.2,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.4
    })
  }

  // console.log('Created', particles.length, 'particles')

  // Mouse interaction
  let mousePos: { x: number; y: number } | null = null
  const onMouseMove = (e: MouseEvent) => {
    // Map window coords to canvas internal coords (canvas is fixed at 0,0)
    mousePos = {
      x: e.clientX * RESOLUTION_SCALE,
      y: e.clientY * RESOLUTION_SCALE,
    }
  }
  const onMouseLeave = () => { mousePos = null }
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)

  // Animation loop
  // Cap FPS to reduce CPU/GPU load
  let lastTs = 0
  const frameInterval = 1000 / 24 // ~24 FPS
  const animate = (ts: number = 0) => {
    if (ts - lastTs < frameInterval) {
      animationId = requestAnimationFrame(animate)
      return
    }
    lastTs = ts
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Spatial grid to limit neighbor checks to nearby cells
    const connectionDistance = 90
    const maxConnectionsPerParticle = 3
    let remainingLines = 140 // global per-frame line budget
    const cellSize = connectionDistance
    const grid = new Map<string, number[]>()

    for (let idx = 0; idx < particles.length; idx++) {
      const p = particles[idx]
      const cx = Math.floor(p.x / cellSize)
      const cy = Math.floor(p.y / cellSize)
      const key = `${cx},${cy}`
      let arr = grid.get(key)
      if (!arr) {
        arr = []
        grid.set(key, arr)
      }
      arr.push(idx)
    }

    // Draw particles and connections
    particles.forEach((particle, i) => {
      // Mouse repulsion (stronger radius and force)
      if (mousePos) {
        const dxm = mousePos.x - particle.x
        const dym = mousePos.y - particle.y
        const distm = Math.hypot(dxm, dym)
        const influenceRadius = 220 * RESOLUTION_SCALE
        if (distm > 0 && distm < influenceRadius) {
          const strength = 0.12 * (1 - distm / influenceRadius)
          // Apply force away from the cursor (repulsion)
          particle.vx -= (dxm / distm) * strength
          particle.vy -= (dym / distm) * strength
        }
      }

      // Clamp speed for stability
      const maxSpeed = 2.4
      const speed = Math.hypot(particle.vx, particle.vy)
      if (speed > maxSpeed) {
        particle.vx = (particle.vx / speed) * maxSpeed
        particle.vy = (particle.vy / speed) * maxSpeed
      }

      // Update position after velocity changes
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particleColor
      ctx.fill()
      
      // Add subtle glow effect (reduced)
      ctx.shadowColor = glowColor
      ctx.shadowBlur = 6
      ctx.fill()
      ctx.shadowBlur = 0

      // Draw connections to nearby particles using spatial grid
      const cx = Math.floor(particle.x / cellSize)
      const cy = Math.floor(particle.y / cellSize)
      let connections = 0
      for (let gx = -1; gx <= 1; gx++) {
        for (let gy = -1; gy <= 1; gy++) {
          const key = `${cx + gx},${cy + gy}`
          const bucket = grid.get(key)
          if (!bucket) continue
          for (let b = 0; b < bucket.length; b++) {
            const j = bucket[b]
            if (j <= i) continue // avoid duplicate lines
            const other = particles[j]
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < connectionDistance && remainingLines > 0) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              // Simpler, thinner lines (no glow) for better performance
              const opacity = 0.85 * (1 - distance / connectionDistance)
              ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity})`
              ctx.lineWidth = 1.4
              ctx.stroke()
              connections++
              remainingLines--
              if (connections >= maxConnectionsPerParticle) break
            }
          }
          if (connections >= maxConnectionsPerParticle || remainingLines <= 0) break
        }
        if (connections >= maxConnectionsPerParticle || remainingLines <= 0) break
      }
    })

    animationId = requestAnimationFrame(animate)
  }

  // Start animation
  animate()

  // Handle window resize
  const handleResize = () => {
    resizeCanvas()
  }

  window.addEventListener('resize', handleResize)

  // Cleanup function
  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
  })
})
</script>

<style scoped>
.particles-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3; /* below global overlay (z-5), above page background */
  pointer-events: none;
  display: block;
}
</style>
