// GithubPinnedScroll.tsx

import React from 'react'
import { GithubPinnedCard } from './GithubPinnedCard'

export function GithubPinnedScroll() {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      {/* Scroll Track */}
      <div
        className="
          flex gap-12
          w-max
          px-2
        "
      >
        {/* Cards estáticos temporários */}
        <GithubPinnedCard />
        <GithubPinnedCard />
        <GithubPinnedCard />
        <GithubPinnedCard />
        <GithubPinnedCard />
        <GithubPinnedCard />
      </div>
    </div>
  )
}
