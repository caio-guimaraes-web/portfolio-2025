'use client'

import React from 'react'
import { GithubPinnedCard } from './GithubPinnedCard'
import { GithubRepo } from './types'

interface Props {
  repos: GithubRepo[]
}

export function GithubPinnedScroll({ repos }: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-12 w-max px-2">
        {repos.map((repo) => (
          <GithubPinnedCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}
