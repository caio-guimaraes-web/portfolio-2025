// SkillsText.tsx
import React from 'react'
import { homepageData } from '@/data/homepage'

export function SkillText() {
  return (
    <p className="text-sm lg:text-base text-gray-400 text-right leading-relaxed max-w-md">
      {homepageData.skills.intro.text}
    </p>
  )
}
