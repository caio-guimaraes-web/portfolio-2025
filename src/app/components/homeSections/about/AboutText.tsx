import React from 'react'
import { aboutData } from '@/data/homepage/about.data'

export function AboutText() {
  const { text } = aboutData

  return (
    <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-md">
      {text.paragraph}
    </p>
  )
}
