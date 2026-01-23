// ImpactPhraseSection.tsx

import React from 'react'
import { ImpactPhraseContent } from './ImpactPhraseContent'
import { ScrollNextSection } from '../../reusable/scrollNextSection/ScrollNextSection'

export function ImpactPhraseSection() {
  return (
    <section
      id="impact"
      className="
        relative min-h-screen w-full
        flex flex-col justify-between
        bg-fixed bg-cover bg-center bg-no-repeat
        bg-[url('/images/impact/impact-bg.jpg')]
        text-white
        overflow-hidden
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <ImpactPhraseContent />
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center pb-10">
        <ScrollNextSection />
      </div>
    </section>
  )
}
