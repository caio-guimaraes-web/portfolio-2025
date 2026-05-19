'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface CurveSwipeProps {
  triggerRef: React.RefObject<HTMLElement | null>
}

export function CurveSwipe({ triggerRef }: CurveSwipeProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!pathRef.current || !triggerRef.current) return

    // 1. Criamos a Timeline baseada em progresso (0 a 1)
    //const start = 'M0 100 Q50 100 100 100 V100 H0 Z'
    const curve = 'M0 50 Q50 -20 100 50 V100 H0 Z'
    const end = 'M0 0 Q50 0 100 0 V100 H0 Z'

    const tl = gsap.timeline({ paused: true }) // Começa pausada, nós controlamos o progresso

    tl.to(pathRef.current, {
      attr: { d: curve },
      duration: 0.6,
      ease: 'power1.in',
    }).to(pathRef.current, {
      attr: { d: end },
      duration: 0.4,
      ease: 'power1.out',
    })

    timelineRef.current = tl

    // 2. Função que calcula o progresso baseado na visibilidade real
    const handleScroll = (): void => {
      if (!triggerRef.current || !timelineRef.current) return

      const rect = triggerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calcula quanto do elemento já entrou na tela (de 0 a 1)
      const distanceVisible = windowHeight - rect.top
      const progress = Math.max(0, Math.min(1, distanceVisible / rect.height))

      // Aplicamos o progresso à timeline com uma suavização (lerp)
      gsap.to(timelineRef.current, {
        progress: progress,
        duration: 0.5, // Esse tempo cria o efeito de "inércia" do scrub
        ease: 'power2.out',
      })
    }

    // 3. Intersection Observer apenas para ligar/desligar o listener de scroll (Performance!)
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll)
          handleScroll() // Executa uma vez ao entrar
        } else {
          window.removeEventListener('scroll', handleScroll)
        }
      },
      { threshold: 0 },
    )

    observer.observe(triggerRef.current)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [triggerRef])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible -z-10">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          <linearGradient
            id="footer-grad-v4-1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f161e" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="url(#footer-grad-v4-1)"
          d="M0 100 Q50 100 100 100 V100 H0 Z"
        />
      </svg>
    </div>
  )
}
