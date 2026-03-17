'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubPinnedCard } from './GithubPinnedCard'
import { GithubRepo } from './types'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  repos: GithubRepo[]
}

export function GithubPinnedScroll({ repos }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const wrapper = wrapperRef.current
    if (!section || !wrapper) return

    // Desabilita em mobile/touch
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const cardsWidth = wrapper.scrollWidth
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const scrollDistance = Math.max(cardsWidth - viewportWidth, 0)

    if (scrollDistance <= 0) return

    // 🔥 cálculo do offset real entre a seção pai (#projects) e o container interno
    const parentSection = document.getElementById('projects')
    const parentTop = parentSection?.getBoundingClientRect().top ?? 0
    const innerTop = section.getBoundingClientRect().top
    const offset = innerTop - parentTop

    const totalHeight = viewportHeight + scrollDistance
    section.style.height = `${totalHeight}px`

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: `-${offset}px top`, // 🔥 start corrigido sem mover lógica
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
      })

      ScrollTrigger.refresh()
    }, section)

    return () => {
      section.style.height = ''
      ctx.revert()
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Wrapper horizontal agora SEM px, SEM margin, SEM gaps que afetam o cálculo */}
      <div ref={wrapperRef} className="flex w-max gap-12 will-change-transform">
        {repos.map((repo) => (
          <GithubPinnedCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}
