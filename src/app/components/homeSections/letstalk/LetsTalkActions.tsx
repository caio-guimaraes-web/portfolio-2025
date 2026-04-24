// LetsTalkActions.tsx
'use client'

import { HomeBiggerCTA } from '@/app/components/reusable/homeBiggerCTA/HomeBiggerCTA'
import { homepageData } from '@/data/homepage'

export function LetsTalkActions() {
  const { ctas } = homepageData.letsTalk

  return (
    <div
      className="
        flex flex-col md:flex-row
        gap-6 justify-center
        relative z-10
      "
    >
      {ctas.map((cta) => (
        <div key={cta.id} className="group" data-cta={cta.id}>
          <HomeBiggerCTA
            classes={
              cta.disabled
                ? 'cursor-not-allowed pointer-events-none opacity-20'
                : ''
            }
            subtext={cta.subtext}
            uppertext={cta.uppertext}
            href={cta.href}
          />
        </div>
      ))}
    </div>
  )
}
