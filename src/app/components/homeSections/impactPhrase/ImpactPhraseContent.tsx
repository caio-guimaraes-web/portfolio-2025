// ImpactPhraseContent.tsx

import React from 'react'
import { homepageData } from '@/data/homepage'

export function ImpactPhraseContent() {
  const { phrase } = homepageData.impactPhrase

  return (
    <div className="max-w-4xl text-center group">
      <p className="font-space text-xl leading-relaxed sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-relaxed lg:text-4xl lg:leading-relaxed font-light text-cyan-300 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
        {phrase}
      </p>
    </div>
  )
}
