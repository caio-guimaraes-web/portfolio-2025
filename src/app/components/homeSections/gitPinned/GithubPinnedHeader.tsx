// GithubPinnedHeader.tsx

import React from 'react'
import { HomeSectionsTitle } from '../../reusable/homeSectionsTitles/HomeSectionsTitle'
import { homepageData } from '@/data/homepage'

export function GithubPinnedHeader() {
  const { gitPinned } = homepageData

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <HomeSectionsTitle text={gitPinned.title} classes="text-center" />

      <p className="text-gray-400 text-center text-base sm:text-lg leading-relaxed">
        {gitPinned.description}
      </p>
    </div>
  )
}
