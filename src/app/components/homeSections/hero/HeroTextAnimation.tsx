'use client'

import React from 'react'

interface HeroTextAnimationProps {
  textRef: React.RefObject<HTMLHeadingElement | null> // ✅ v6.1 fix
}

export function HeroTextAnimation({ textRef }: HeroTextAnimationProps) {
  return (
    <div className="w-full overflow-hidden select-none">
      <h1
        ref={textRef}
        className="text-[15vw] leading-[0.85] font-thin whitespace-nowrap tracking-tighter inline-block will-change-transform"
      >
        FULLSTACK{' '}
        <span className="text-cyan-400/20 font-extrabold">WEB DEVELOPER</span>
      </h1>
    </div>
  )
}
