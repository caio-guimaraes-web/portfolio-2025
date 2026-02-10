'use client'

import { FooterWaves } from '../footerWaves/FooterWaves'
import { FooterTitle } from './FooterTitle'
import { FooterSocialLinks } from './FooterSocialLinks'
import { FooterSignature } from './FooterSignature'
import { FooterCopyright } from './FooterCopyright'

export function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Waves visual layer */}
      <FooterWaves />

      {/* Real footer content */}
      <section className="relative z-10 bg-slate-800 pt-32 pb-12">
        <div className="flex flex-col items-center text-center px-6 gap-12 mb-32">
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
