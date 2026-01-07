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
      {/* BG Effects -  Glow sutil verde-ciano, decidir depois se será animado */}
      {/* <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[60vh] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none" /> */}

      <div className="absolute bottom-0 left-0 sm:left-1/4">
        <AboutImage />
      </div>

      {/* HEADLINE SUPERIOR */}
      <div className="z-10 w-full text-center mt-14">
        <h2 className="text-xl lg:text-2xl tracking-[0.6em] text-gray-500 font-light uppercase">
          Aesthetic Sense
        </h2>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="z-10 flex-1 w-full flex lg:flex-row items-center gap-4 sm:gap-12 lg:gap-20">
        {/* DIVISOR */}
        <div className="ml-[25%] sm:ml-[50%]">
          <VerticalDivider />
        </div>

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
