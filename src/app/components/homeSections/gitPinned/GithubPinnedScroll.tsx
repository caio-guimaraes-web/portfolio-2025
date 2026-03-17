'use client'

import React, { useEffect, useRef } from 'react'
import { GithubPinnedCard } from './GithubPinnedCard'
import { GithubRepo } from './types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  repos: GithubRepo[]
}

export function GithubPinnedScroll({ repos }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper) return

    // Desabilita em mobile/touch — comportamento natural
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const totalWidth = wrapper.scrollWidth
    const viewportWidth = container.offsetWidth
    const scrollDistance = totalWidth - viewportWidth

    if (scrollDistance <= 0) return

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: `+=${scrollDistance}`,
          scrub: 1.2,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        ref={wrapperRef}
        className="flex gap-12 w-max px-2 will-change-transform"
      >
        {repos.map((repo) => (
          <GithubPinnedCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}
