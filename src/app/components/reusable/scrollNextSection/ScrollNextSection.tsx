'use client'

import React from 'react'
import { ChevronsDown } from 'lucide-react'

type ScrollNextSectionProps = {
  anchorId?: string
}

export function ScrollNextSection({ anchorId }: ScrollNextSectionProps) {
  const handleClick = () => {
    if (anchorId) {
      const el = document.getElementById(anchorId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center gap-1 text-gray-500 animate-bounce cursor-pointer"
    >
      <ChevronsDown
        size={24}
        className="transition-colors duration-200 hover:text-cyan-400"
      />
    </div>
  )
}
