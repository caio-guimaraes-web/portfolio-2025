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
        {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="#6C7C8C">
          <path d="M12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4ZM12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM13.2 12V7.2H10.8V12H7.2L12 16.8L16.8 12L13.2 12Z" />
        </svg> */}
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
