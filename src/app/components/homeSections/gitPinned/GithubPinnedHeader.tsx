// GithubPinnedHeader.tsx

import React from 'react'
import { HomeSectionsTitle } from '../../reusable/homeSectionsTitles/HomeSectionsTitle'

export function GithubPinnedHeader() {
  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <HomeSectionsTitle text="githubPinned" classes="text-center" />

      <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
        6 detached projects i’ve been studying, testing or building recently.
        Direct from my public GitHub repositories.
      </p>
    </div>
  )
}
