//AboutContent.tsx
import React from 'react'
import { AboutTitle } from './AboutTitle'
import { AboutText } from './AboutText'
import { AboutCTA } from './AboutCTA'

export function AboutContent() {
  return (
    <div className="w-full lg:w-[40%] flex flex-col items-start gap-6">
      <AboutTitle />
      <AboutText />
      <AboutCTA />
    </div>
  )
}
