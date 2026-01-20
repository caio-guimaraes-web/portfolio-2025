// card individual
// GithubPinnedCard.tsx

import React from 'react'

export function GithubPinnedCard() {
  return (
    <article
      className="
        relative
        w-[85vw] sm:w-[520px] lg:w-[560px]
        h-[420px]
        rounded-2xl
        bg-bg-alt
        border border-slate-800
        overflow-hidden
        flex flex-col justify-between
        p-6
      "
    >
      {/* TEXT CONTENT */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-space text-cyan-300">
          design-system-example-by-caio
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed">
          Primary Goal - Construction of a simple design system, documentation
          of components and use of appropriate tools.
        </p>
      </div>

      {/* TAGS */}
      <div className="flex gap-3 flex-wrap">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-600 text-slate-950">
          Storybook
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-600 text-slate-950">
          Design System
        </span>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div
        className="
          absolute bottom-0 right-0
          w-[60%] h-[55%]
          bg-gradient-to-br from-emerald-400 to-cyan-400
          opacity-80
          rotate-[-8deg]
          translate-x-10 translate-y-6
          rounded-xl
        "
      />
    </article>
  )
}
