'use client'

import { FooterWaves } from '../footerWaves/FooterWaves'
import { FooterTitle } from './FooterTitle'
import { FooterSocialLinks } from './FooterSocialLinks'
import { FooterSignature } from './FooterSignature'
import { FooterCopyright } from './FooterCopyright'

export function FooterSection() {
  return (
    <footer className="relative w-full bg-slate-900 overflow-hidden pt-32 pb-12">
      {/* Waves / visual layer (static for now) */}
      <FooterWaves />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-12 mb-32">
        <FooterTitle />
        <FooterSocialLinks />
      </div>

      {/* footer signatures */}
      <div className="relative z-10 flex flex-col-reverse sm:flex-row sm:justify-between px-6 gap-12">
        <FooterCopyright />
        <FooterSignature />
      </div>
    </footer>
  )
}
