'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroTextAnimation } from './HeroTextAnimation'
import { HeroFooter } from './HeroFooter'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    if (!section || !text) return

    if (window.innerWidth < 768) return

    const totalWidth = text.scrollWidth
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const scrollDistance = Math.max(0, totalWidth - viewportWidth)

    if (scrollDistance <= 0) return

    // 🔥 V6 — definir altura ANTES de criar ScrollTrigger
    const totalHeight = viewportHeight + scrollDistance
    section.style.height = `${totalHeight}px`

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: true, // 🔎 manter para validar
        },
      })

      tl.to(text, {
        x: -scrollDistance,
        ease: 'none',
      })

      // 🔥 V6 — forçar recalculo após layout estar pronto
      ScrollTrigger.refresh()
    }, section)

    return () => {
      section.style.height = ''
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden text-white"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[65vh] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="sticky top-0 h-screen flex flex-col justify-start">
        <div className="flex flex-col justify-center px-6 pt-32 lg:px-24">
          <div className="space-y-2 mb-4">
            <p className="text-xl lg:text-2xl text-gray-300 font-light flex items-center gap-2">
              Hello <span className="animate-pulse">👋</span>,
            </p>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              my name is Caio Guimarães.
            </p>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              I&apos;m a ...
            </p>
          </div>
        </div>

        <HeroTextAnimation textRef={textRef} />

        <div className="w-full px-6 lg:px-24">
          <p className="text-sm lg:text-lg tracking-[0.5em] text-gray-500 font-light mt-2 uppercase text-center w-full">
            Front-end Focused
          </p>
        </div>

        <div className="w-full px-6 lg:px-24 pb-10">
          <HeroFooter />
        </div>
      </div>
    </section>
  )
}
