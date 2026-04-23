import React from 'react'
import { aboutData } from '@/data/homepage/about.data'

export function AboutCTA() {
  const { cta } = aboutData

  return (
    <button
      type="button"
      className="mt-4 px-8 py-4 rounded-full border border-cyan-400 text-cyan-300 text-sm tracking-wide hover:bg-cyan-300 hover:text-black transition-colors duration-300"
    >
      <span className="text-slate-600">{cta.prefix}</span>
      {cta.suffix}
    </button>
  )
}
