import { HomeBiggerCTA } from '@/app/components/reusable/homeBiggerCTA/HomeBiggerCTA'

export function LetsTalkActions() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <HomeBiggerCTA subtext="goTo" uppertext="SERVICES" href="/services" />

      <HomeBiggerCTA
        subtext="let’s"
        uppertext="TALK"
        href="https://calendly.com/seu-link"
      />
    </div>
  )
}
