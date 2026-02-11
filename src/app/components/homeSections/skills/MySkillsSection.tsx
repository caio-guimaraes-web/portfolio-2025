// Container principal da seção My Skills

import React from 'react'

import { SkillContent } from './SkillContent'

import { VerticalDivider } from '../../reusable/verticalDivider/VerticalDivider'
import { ScrollNextSection } from '../../reusable/scrollNextSection/ScrollNextSection'
import { SkillsTabs } from './skillsTabs/SkillsTabs'

export function MySkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-white px-6 lg:px-24 pt-32 pb-10"
    >
      {/* BG Effects -  Glow sutil verde-ciano, decidir depois se será animado */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[60vh] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none" />

      {/* CONTEÚDO PRINCIPAL */}
      <div
        className="z-10 flex-1 w-full flex flex-col sm:flex-row items-center
          gap-8 sm:gap-12 lg:gap-20 pr-4 sm:pr-0
          relative
          after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[2px]
          after:bg-gradient-to-b after:from-cyan-300 after:to-lime-400 after:opacity-80
          sm:after:hidden"
      >
        {/* CONTEÚDO TEXTUAL */}
        <SkillContent />

        {/* DIVISOR */}
        <div className="z-10 hidden sm:block">
          <VerticalDivider />
        </div>

        {/* SKILLS TABS */}
        <SkillsTabs />
      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="z-10 w-full flex justify-center mt-12">
        <ScrollNextSection />
      </div>
    </section>
  )
}
