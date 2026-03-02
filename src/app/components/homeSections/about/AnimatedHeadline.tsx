'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const words = ['Aesthetic Sense', 'Strategic Vision', 'Performance Mindset']

export function AnimatedHeadline() {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const animateWord = () => {
        const currentWord = words[indexRef.current]

        // Atualiza texto
        el.innerText = currentWord

        // Divide letras para micro-stagger sutil
        const letters = el.innerText.split('')
        el.innerHTML = letters
          .map(
            (letter) =>
              `<span class="inline-block">${letter === ' ' ? '&nbsp;' : letter}</span>`,
          )
          .join('')

        const spans = el.querySelectorAll('span')

        // Estado inicial
        gsap.set(spans, {
          opacity: 0,
          y: 8,
          filter: 'blur(6px)',
        })

        // Entrada
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.015, // extremamente sutil
        })

        // Saída depois de 2.2s
        gsap.to(spans, {
          opacity: 0,
          y: -8,
          filter: 'blur(6px)',
          duration: 0.5,
          ease: 'power2.in',
          delay: 2.2,
          onComplete: () => {
            indexRef.current = (indexRef.current + 1) % words.length
            animateWord()
          },
        })
      }

      animateWord()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <h2
      ref={containerRef}
      className="text-xl lg:text-2xl tracking-[0.6em] text-gray-500 font-light uppercase"
    />
  )
}
