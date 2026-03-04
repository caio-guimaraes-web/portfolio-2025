import React from 'react'
import { fetchGithubRepos } from '@/lib/github/fetchGithubRepos'

import { GithubPinnedHeader } from './GithubPinnedHeader'
import { GithubPinnedScroll } from './GithubPinnedScroll'
import { ScrollNextSection } from '../../reusable/scrollNextSection/ScrollNextSection'

export async function GithubPinnedSection() {
  const repos = await fetchGithubRepos('caio-guimaraes-web')

  return (
    <section
      id="projects"
      className="
        relative min-h-screen w-full
        flex flex-col justify-between
        overflow-hidden
        text-white
        pt-32 pb-10
      "
    >
      <div className="absolute top-[-30%] right-[-20%] w-[50vw] h-[60vh] bg-lime-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center gap-20">
        <GithubPinnedHeader />
        <GithubPinnedScroll repos={repos} />
      </div>

      <div className="z-10 w-full flex justify-center mt-16">
        <ScrollNextSection />
      </div>
    </section>
  )
}
