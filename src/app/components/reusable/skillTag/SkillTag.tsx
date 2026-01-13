import * as React from 'react'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { SkillTagProps } from './types'

const skillTagVariants = cva(
  `
  inline-flex items-center
  w-fit
  rounded-full
  border border-slate-700
  px-3 py-1.5
  text-xs sm:text-sm
  text-slate-700
  transition-all
  hover:border-cyan-400/40
  hover:text-cyan-400
  hover:bg-cyan-400/5
  `
)

function TagElement({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        className={cn(skillTagVariants(), className)}
      >
        {children}
      </Link>
    )
  }

  return <span className={cn(skillTagVariants(), className)}>{children}</span>
}

export function SkillTag({ label, href, tooltip, className }: SkillTagProps) {
  const tag = (
    <TagElement href={href} className={className}>
      {label}
    </TagElement>
  )

  if (!tooltip) return tag

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{tag}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
