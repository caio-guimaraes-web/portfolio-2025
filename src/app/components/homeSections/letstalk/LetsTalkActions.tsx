// LetsTalkActions.tsx
'use client'

import { HomeBiggerCTA } from '@/app/components/reusable/homeBiggerCTA/HomeBiggerCTA'

export function LetsTalkActions() {
  return (
    <div
      className="
        flex flex-col md:flex-row
        gap-6 justify-center
        relative z-10
      "
    >
      {/* CTA 1 */}
      <div
        className="group"
        data-cta="services"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <HomeBiggerCTA subtext="goTo" uppertext="SERVICES" href="/services" />
      </div>

      {/* CTA 2 */}
      <div
        className="group"
        data-cta="talk"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <HomeBiggerCTA
          subtext="let’s"
          uppertext="TALK"
          href="https://calendly.com/seu-link"
        />
      </div>
    </div>
  )
}
