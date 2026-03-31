// LetsTalkCursor.tsx
'use client'

import { useEffect, forwardRef } from 'react'
import gsap from 'gsap'

export const LetsTalkCursor = forwardRef<HTMLDivElement>((_, ref) => {
  useEffect(() => {
    if (window.innerWidth < 1024) return // desabilita em mobile

    const trailCount = 4
    const colors = ['#00ff6a', '#B6EF2E'] // azul e verde
    const container = document.createElement('div')
    container.className =
      'pointer-events-none fixed top-0 left-0 w-full h-full z-50'
    document.body.appendChild(container)

    const particles: HTMLSpanElement[] = []
    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement('span')
      el.className = 'absolute w-3 h-3 rounded-full mix-blend-screen'
      el.style.backgroundColor = colors[i % colors.length]
      container.appendChild(el)
      particles.push(el)
    }

    let index = 0
    let mousePos = { x: 0, y: 0 }

    window.addEventListener('mousemove', (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
      animateParticle()
    })

    function animateParticle() {
      const el = particles[index % trailCount]
      gsap.killTweensOf(el)
      gsap.set(el, {
        x: mousePos.x,
        y: mousePos.y,
        opacity: 1,
        scale: 0.6,
      })
      gsap.to(el, {
        y: mousePos.y - 20, // sobe um pouco
        duration: 0.1,
        ease: 'power1.out',
        onComplete: () => {
          gsap.to(el, {
            y: mousePos.y + 80, // depois cai
            opacity: 0,
            scale: 1.9,
            duration: 0.8,
            ease: 'back.in(1.2)',
          })
        },
      })
      index++
    }

    return () => {
      container.remove()
    }
  }, [])

  return (
    <div
      ref={ref}
      className="
        fixed top-10 left-0 z-50
        w-12 h-12
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none outline-none
        hidden lg:flex items-center justify-center
      "
    />
  )
})

LetsTalkCursor.displayName = 'LetsTalkCursor'
