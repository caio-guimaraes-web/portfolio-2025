// GithubPinnedSection.tsx
import React, { Suspense } from 'react'
import { GithubPinnedList } from './GithubPinnedList'
import { GithubPinnedScrollSkeleton } from './GithubPinnedScrollSkeleton'

export function GithubPinnedSection() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden text-white"
    >
      {/* Agora o container interno assume o padding original */}
      <div className="z-10 flex flex-col items-center">
        <Suspense fallback={<GithubPinnedScrollSkeleton />}>
          <GithubPinnedList username="caio-guimaraes-web" />
        </Suspense>
      </div>
    </section>
  )
}
