//container principal
'use client'

import { LetsTalkBackground } from './LetsTalkBackground'
import { LetsTalkOverlay } from './LetsTalkOverlay'
import { LetsTalkCursor } from './LetsTalkCursor'
import { LetsTalkActions } from './LetsTalkActions'

export function LetsTalkSection() {
  return (
    <section
      id="lets-talk"
      className="
        relative w-full min-h-[80vh]
        flex items-center justify-center
        overflow-hidden
        bg-neutral-950
        pt-24 pb-24
      "
    >
      {/* Visual layers */}
      <LetsTalkBackground />
      <LetsTalkOverlay />
      <LetsTalkCursor />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-white text-4xl md:text-5xl uppercase font-black mb-16">
          Shall we talk about <br />
          <span className="text-cyan-100">your projects?</span>
        </h2>

        <LetsTalkActions />
      </div>
    </section>
  )
}
