'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useHomepageData } from '@/hooks/useHomepageData'

type Audience = 'recruiter' | 'client'

export function HeroAudienceToggle({ className }: { className?: string }) {
  const { heroAudience } = useHomepageData()

  const [audience, setAudience] = useState<Audience>('recruiter')

  const isRecruiter = audience === 'recruiter'

  function handleToggle() {
    setAudience((prev) => (prev === 'recruiter' ? 'client' : 'recruiter'))
  }

  return (
    <div
      className={cn('flex items-start gap-4 text-sm text-gray-400', className)}
    >
      <button
        onClick={handleToggle}
        aria-label="Toggle audience message"
        className={cn(
          'transition-transform duration-300 ease-out',
          isRecruiter ? 'rotate-0' : 'rotate-180',
        )}
      >
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

      <div className="relative overflow-hidden">
        <p
          className={cn(
            'max-w-[420px] text-sm leading-relaxed transition-all duration-300',
            isRecruiter
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 absolute',
          )}
        >
          {heroAudience.recruiter}
        </p>

        <p
          className={cn(
            'max-w-[420px] text-sm leading-relaxed transition-all duration-300',
            !isRecruiter
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 absolute',
          )}
        >
          {heroAudience.client}
        </p>
      </div>
    </div>
  )
}
