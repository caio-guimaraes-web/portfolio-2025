'use client'

import { GithubPinnedCardSkeleton } from './GithubPinnedCardSkeleton'

export function GithubPinnedScrollSkeleton() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-12 w-max px-2">
        <GithubPinnedCardSkeleton />
        <GithubPinnedCardSkeleton />
        <GithubPinnedCardSkeleton />
      </div>
    </div>
  )
}
