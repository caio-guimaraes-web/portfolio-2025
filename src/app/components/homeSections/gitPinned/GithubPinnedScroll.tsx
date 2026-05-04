'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GithubPinnedCard } from './GithubPinnedCard'
import { GithubRepo } from './types'
import { GithubPinnedHeader } from './GithubPinnedHeader'
import { ScrollNextSection } from '../../reusable/scrollNextSection/ScrollNextSection'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  repos: GithubRepo[]
}

export function GithubPinnedScroll({ repos }: Props) {
  // 🔥 Novo: Uma ref para o gatilho pai e outra para a seção que vai ficar fixa
  const triggerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const trigger = triggerRef.current
    const section = sectionRef.current
    const wrapper = wrapperRef.current

    if (!trigger || !section || !wrapper || repos.length === 0) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px) and (hover: hover)', () => {
      const getScrollAmount = () => {
        const cardsWidth = wrapper.scrollWidth
        const viewportWidth = window.innerWidth
        return Math.max(cardsWidth - viewportWidth, 0)
      }

      if (getScrollAmount() <= 0) return

      const ctx = gsap.context(() => {
        gsap.to(wrapper, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: trigger, // 🔥 O gatilho agora é o contêiner Pai
            pin: section, // 🔥 Nós fixamos (pin) apenas o contêiner Filho
            start: 'top top',
            end: () => `+=${getScrollAmount()}`,
            scrub: 1,
            pinSpacing: true, // 🔥 Garante que o GSAP crie o espaço para empurrar a próxima seção para baixo
            invalidateOnRefresh: true,
          },
        })
      }, trigger)

      ScrollTrigger.refresh()

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [repos])

  return (
    <div ref={triggerRef} className="relative w-full">
      {/* 1. CONTÊINER PAI (Trigger): É ele que vai crescer invisivelmente para segurar a rolagem vertical */}

      {/* 2. CONTÊINER FILHO (Pinned): Fica com h-screen e fixo na tela enquanto o usuário dá o scroll */}
      <div
        ref={sectionRef}
        className="w-full h-screen flex flex-col justify-center overflow-hidden relative"
      >
        <div className="pb-10 w-full flex justify-center shrink-0">
          <GithubPinnedHeader />
        </div>

        <div
          ref={wrapperRef}
          className="flex w-max gap-8 md:gap-12 px-4 md:px-8 will-change-transform"
        >
          {repos.map((repo) => (
            <GithubPinnedCard key={repo.id} repo={repo} />
          ))}

          {/* 🔥 Bônus: Div fantasma para criar uma "margem de respiro" após o último card */}
          <div className="w-[5vw] shrink-0" />
        </div>

        <div className="z-10 w-full flex justify-center mt-12 shrink-0">
          <ScrollNextSection anchorId="impact" />
        </div>
      </div>
    </div>
  )
}
