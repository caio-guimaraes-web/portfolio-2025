// LetsTalkCursor.tsx
'use client'

import { useEffect, forwardRef, useRef } from 'react'
import gsap from 'gsap'

export const LetsTalkCursor = forwardRef<HTMLDivElement>((_, ref) => {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.innerWidth < 1024) return

    const trailCount = 4
    const colors = ['#00ff6a', '#B6EF2E']
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

    window.addEventListener('mousemove', (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      animateParticle()
    })

    function animateParticle() {
      const el = particles[index % trailCount]

      gsap.killTweensOf(el)
      gsap.set(el, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        opacity: 1,
        scale: 0.6,
      })

      gsap.to(el, {
        y: mousePos.current.y - 20,
        duration: 0.1,
        ease: 'power1.out',
        onComplete: () => {
          gsap.to(el, {
            y: mousePos.current.y + 80,
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
