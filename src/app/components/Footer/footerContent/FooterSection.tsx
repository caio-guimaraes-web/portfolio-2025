// FooterSection.tsx
'use client'
import { useRef } from 'react'
import { FooterTitle } from './FooterTitle'
import { FooterSocialLinks } from './FooterSocialLinks'
import { FooterSignature } from './FooterSignature'
import { FooterCopyright } from './FooterCopyright'
import { CurveSwipe } from '../curveSwipe/CurveSwipe'

export function FooterSection() {
  const footerRef = useRef<HTMLElement>(null)

  return (
    // Adicionamos a ref aqui para ser o trigger da animação
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* Passamos a ref do pai para o componente de animação saber quando começar */}
      <CurveSwipe triggerRef={footerRef} />

      <section className="relative z-10 pt-32 pb-12">
        <div className="flex flex-col items-center text-center px-6 gap-12 mb-64">
          <FooterTitle />
          <FooterSocialLinks />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between px-6 gap-12">
          <FooterCopyright />
          <FooterSignature />
        </div>
      </section>
    </footer>
  )
}
