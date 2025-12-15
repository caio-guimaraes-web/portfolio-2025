'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils' // clsx + tw-merge

type Audience = 'recruiter' | 'client'

interface HeroAudienceToggleProps {
  className?: string
}

export function HeroAudienceToggle({ className }: HeroAudienceToggleProps) {
  const [audience, setAudience] = useState<Audience>('recruiter')

  const isRecruiter = audience === 'recruiter'

  function handleToggle() {
    setAudience((prev) => (prev === 'recruiter' ? 'client' : 'recruiter'))
  }

  return (
    <div
      className={cn('flex items-start gap-4 text-sm text-gray-400', className)}
    >
      {/* Toggle Icon */}
      <button
        onClick={handleToggle}
        aria-label="Toggle audience message"
        className={cn(
          'transition-transform duration-300 ease-out',
          isRecruiter ? 'rotate-0' : 'rotate-180'
        )}
      >
        {/* SVG Arrow */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="stroke-current"
          fill="none"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>

      {/* Text Content */}
      <div className="relative overflow-hidden">
        <p
          className={cn(
            'max-w-[420px] text-sm leading-relaxed transition-all duration-300',
            isRecruiter
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 absolute'
          )}
        >
          I build scalable, well-architected web solutions using modern
          technologies, focusing on performance, maintainability, and clean code
          standards.
        </p>

        <p
          className={cn(
            'max-w-[420px] text-sm leading-relaxed transition-all duration-300',
            !isRecruiter
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 absolute'
          )}
        >
          I help businesses and professionals transform ideas into high-quality
          digital products, combining design sensibility with robust technical
          execution.
        </p>
      </div>
    </div>
  )
}
