import React from 'react'
import { GithubRepo } from './types'

interface Props {
  repo: GithubRepo
}

export function GithubPinnedCard({ repo }: Props) {
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
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-space text-cyan-300">{repo.name}</h3>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {repo.description ?? 'No description provided.'}
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        {repo.languages.map((lang) => (
          <span
            key={lang}
            className="px-3 py-1 text-xs rounded-full bg-cyan-600 text-slate-950"
          >
            {lang}
          </span>
        ))}
      </div>

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
