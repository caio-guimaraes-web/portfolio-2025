// Container principal da seção My Skills

import React from 'react'

import { SkillContent } from './SkillContent'

import { VerticalDivider } from '../../reusable/verticalDivider/VerticalDivider'
import { ScrollNextSection } from '../../reusable/scrollNextSection/ScrollNextSection'

export function MySkillsSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-white px-6 lg:px-24 pt-32 pb-10"
    >
      {/* BG Effects -  Glow sutil verde-ciano, decidir depois se será animado */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[60vh] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none" />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="z-10 flex-1 w-full flex lg:flex-row items-center gap-4 sm:gap-12 lg:gap-20">
        {/* CONTEÚDO TEXTUAL */}
        <SkillContent />

        {/* DIVISOR */}
        <div className="z-10">
          <VerticalDivider />
        </div>

        {/* SKILLS TABS */}
        <div>SKILLS TABS</div>
      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="z-10 w-full flex justify-center mt-12">
        <ScrollNextSection />
      </div>
    </section>
  )
}
