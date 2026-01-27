'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'

interface HomeBiggerCTAProps {
  subtext: string
  uppertext: string
  classes?: string
  href?: string
  onClick?: () => void
}

export function HomeBiggerCTA({
  subtext,
  uppertext,
  classes,
  href,
  onClick,
}: HomeBiggerCTAProps) {
  const baseClasses = `
    px-12 py-5 rounded-full
    border border-cyan-400
    text-cyan-300
    text-base md:text-lg
    tracking-wide
    hover:bg-cyan-300 hover:text-black
    transition-all duration-300
    inline-flex items-center justify-center
    backdrop-blur-sm
    `

  const content = (
    <>
      <span className="text-slate-500 mr-1">{subtext}</span>.{uppertext}
    </>
  )

  if (onClick && !href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={twMerge(clsx(baseClasses, classes))}
      >
        {content}
      </button>
    )
  }

  if (href && href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(clsx(baseClasses, classes))}
      >
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={twMerge(clsx(baseClasses, classes))}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={twMerge(clsx(baseClasses, classes))}>
      {content}
    </button>
  )
}
