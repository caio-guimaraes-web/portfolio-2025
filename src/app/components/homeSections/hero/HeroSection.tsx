//(O Container principal da seção)
import React from 'react'

export function HeroSection() {
  return (
    // Container Principal da Hero
    // h-screen garante que ocupe 100% da altura da viewport
    // flex-col prepara para os elementos internos (Texto, Toggle, Footer)
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a] text-white px-4 lg:px-20 py-10">
      {/* Placeholder visual central só pra sabermos que é a Hero */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <p className="text-gray-400 mb-4">Hello 👋, my name is Caio...</p>
        <h1 className="text-6xl md:text-8xl font-bold border border-dashed border-gray-700 p-4 w-full text-center opacity-50">
          [ ÁREA DO H1 ANIMADO ]
        </h1>
      </div>

      {/* Placeholder do Footer da seção */}
      <div className="hidden lg:flex justify-between items-end border-t border-gray-800 pt-4 w-full">
        <span>Toggle Animation (Off)</span>
        <span>Social Links Area</span>
      </div>
    </section>
  )
}
