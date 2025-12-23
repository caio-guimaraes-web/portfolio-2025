// Container principal da seção About Me
import React from 'react'
import { AboutImage } from './AboutImage'
/* import { AboutDivider } from './AboutDivider' */
import { VerticalDivider } from '../../verticalDivider/VerticalDivider'

import { AboutContent } from './AboutContent'

/* import { AboutScrollIndicator } from './AboutScrollIndicator' */
import { ScrollNextSection } from '../../scrollNextSection/ScrollNextSection'

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-white px-6 lg:px-24 pt-32 pb-10"
    >
      {/* BACKGROUND EFFECTS */}
      {/* Glow sutil verde-ciano para manter identidade do Hero */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[60vh] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none" />

      {/* HEADLINE SUPERIOR */}
      <div className="z-10 w-full text-center mb-16">
        <h2 className="text-sm lg:text-lg tracking-[0.6em] text-gray-500 font-light uppercase">
          Aesthetic Sense
        </h2>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="z-10 flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* IMAGEM */}
        <AboutImage />

        {/* DIVISOR */}
        <VerticalDivider />

        {/* CONTEÚDO TEXTUAL */}
        <AboutContent />
      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="z-10 w-full flex justify-center mt-12">
        <ScrollNextSection />
      </div>
    </section>
  )
}
