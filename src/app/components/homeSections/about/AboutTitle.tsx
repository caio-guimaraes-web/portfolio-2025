import React from 'react'
import { aboutData } from '@/data/homepage/about.data'

export function AboutTitle() {
  const { title } = aboutData

  return (
    <h3 className="text-2xl lg:text-3xl font-space font-light tracking-wide">
      <span className="text-lime-400">{title.let}</span>{' '}
      <span className="text-lime-400">{title.equal}</span>{' '}
      <span className="text-white">{title.variable}</span>
      <span className="text-lime-400">{title.end}</span>
    </h3>
  )
}
