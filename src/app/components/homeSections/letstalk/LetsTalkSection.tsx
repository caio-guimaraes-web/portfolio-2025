// LetsTalkSection.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { LetsTalkBackground } from './LetsTalkBackground'
import { LetsTalkOverlay } from './LetsTalkOverlay'
import { LetsTalkCursor } from './LetsTalkCursor'
import { LetsTalkActions } from './LetsTalkActions'

import { homepageData } from '@/data/homepage'

gsap.registerPlugin(ScrollTrigger)

export function LetsTalkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const { title } = homepageData.letsTalk

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const cursor = cursorRef.current
      if (!section || !cursor) return

      // ============================
      // 🎯 1. Spotlight Animado (CSS Vars)
      // ============================
      window.addEventListener('mousemove', (e) => {
        section.style.setProperty('--x', `${e.clientX}px`)
        section.style.setProperty('--y', `${e.clientY}px`)
      })

      // ============================
      // 🎯 2. Cursor animado com quickTo()
      // ============================
      const moveX = gsap.quickTo(cursor, 'x', {
        duration: 0.35,
        ease: 'power3.out',
      })
      const moveY = gsap.quickTo(cursor, 'y', {
        duration: 0.35,
        ease: 'power3.out',
      })

      window.addEventListener('mousemove', (e) => {
        moveX(e.clientX)
        moveY(e.clientY)
      })

      // ============================
      // 🎯 3. Entrada suave da seção
      // ============================
      gsap.from(section.querySelector('.lt-title'), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })

      // ============================
      // 🎯 4. Entrada dos CTAs
      // ============================
      gsap.from(section.querySelector('.lt-actions'), {
        opacity: 0,
        y: 60,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="lets-talk"
      className="
        relative w-full h-screen
        flex items-center justify-center
        overflow-hidden
        pt-24 pb-24
      "
    >
      {/* Visual layers */}
      <LetsTalkBackground />
      <LetsTalkOverlay />
      <LetsTalkCursor ref={cursorRef} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="lt-title text-white text-4xl md:text-5xl uppercase font-black mb-16">
          {title.line1} <br />
          <span className="text-cyan-100">{title.highlight}</span>
        </h2>

        <div className="lt-actions">
          <LetsTalkActions />
        </div>
      </div>
    </section>
  )
}
