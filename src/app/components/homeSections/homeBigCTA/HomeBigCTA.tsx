'use client'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'

interface HomeBigCTAProps {
  subtext: string
  uppertext: string
  classes?: string
  href?: string
  onClick?: () => void
}

export function HomeBigCTA({
  subtext,
  uppertext,
  classes,
  href,
  onClick,
}: HomeBigCTAProps) {
  const baseClasses =
    'mt-4 px-8 py-4 rounded-full border border-cyan-400 text-cyan-300 text-sm tracking-wide hover:bg-cyan-300 hover:text-black transition-colors duration-300 inline-block'

  if (onClick && !href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={twMerge(clsx(baseClasses, classes))}
      >
        <span className="text-slate-600">{subtext}</span>.{uppertext}
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
        <span className="text-slate-600">{subtext}</span>.{uppertext}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={twMerge(clsx(baseClasses, classes))}>
        <span className="text-slate-600">{subtext}</span>.{uppertext}
      </Link>
    )
  }

  return (
    <button type="button" className={twMerge(clsx(baseClasses, classes))}>
      <span className="text-slate-600">{subtext}</span>.{uppertext}
    </button>
  )
}
