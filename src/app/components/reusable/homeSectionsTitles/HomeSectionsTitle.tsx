// components/homeSections/homeSectionsTitles/HomeSectionsTitle.tsx
import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface HomeSectionsTitleProps {
  /** Texto do título da seção */
  text: string
  /** Classes extras do Tailwind para customização */
  classes?: string
}

export function HomeSectionsTitle({ text, classes }: HomeSectionsTitleProps) {
  return (
    <h3
      className={twMerge(
        clsx(
          'text-2xl lg:text-3xl font-space font-light tracking-wide',
          classes
        )
      )}
    >
      <span className="text-lime-400">let</span>{' '}
      <span className="text-lime-400">=</span>{' '}
      <span className="text-white">{text}</span>
      <span className="text-lime-400">;</span>
    </h3>
  )
}
