import React from 'react'
import { HeroTextAnimation } from './HeroTextAnimation'
import { HeroFooter } from './HeroFooter'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden text-white px-6 lg:px-24 pt-32 pb-10"
    >
      {/* BACKGROUND EFFECTS */}
      {/* Luz/Gradiente Verde-Ciano no topo direito (efeito de spot light) */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[65vh] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* CONTEÚDO SUPERIOR 
        Alinhamento do Hello e Intro
      */}
      <div className="flex-1 flex flex-col justify-center z-10">
        <div className="space-y-2 mb-4 lg:mb-0">
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

        {/* COMPONENTE DO TEXTO GIGANTE */}
        <HeroTextAnimation />

        {/* SUBTÍTULO COMPLEMENTAR */}
        <p className="text-sm lg:text-lg tracking-[0.5em] text-gray-500 font-light mt-2 uppercase text-center lg:text-center w-full">
          Front-end Focused
        </p>
      </div>

      {/* RODAPÉ DA SEÇÃO (Toggle, Infos, Redes) */}
      <div className="z-10 w-full">
        <HeroFooter />
      </div>
    </section>
  )
}
