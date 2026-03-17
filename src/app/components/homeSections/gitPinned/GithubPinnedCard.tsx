import React from 'react'
import { GithubRepo } from './types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  repo: GithubRepo
}

export function GithubPinnedCard({ repo }: Props) {
  return (
    <Link
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open repository ${repo.name} on GitHub`}
      className="
        group
        block
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-cyan-400
        rounded-2xl
        will-change-transform
      "
    >
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
        transition-all duration-300
      group-hover:border-cyan-600"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-space text-cyan-300">{repo.name}</h3>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {repo.description ?? 'No description provided.'}
          </p>
        </div>

        <div>
          <div className="flex gap-3 flex-wrap mb-4">
            {repo.languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 text-xs rounded-full bg-cyan-600 text-slate-950"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* TOPICS - if exists */}
          {repo.topics.length > 0 && (
            <div className="hidden md:flex gap-3 flex-wrap">
              {repo.topics.map((topic) => (
                <span
                  key={topic}
                  className="
          px-3 py-1 text-xs rounded-full
          border border-cyan-800
          text-cyan-500
        "
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* SOCIAL IMAGE */}
        <div className="absolute bottom-0 right-0 w-[60%] h-[55%] pointer-events-none rotate-[-8deg] translate-x-6 translate-y-4 rounded-xl overflow-hidden shadow-lg shadow-black/40 opacity-20">
          {repo.socialImage ? (
            <Image
              src={repo.socialImage}
              alt={`${repo.name} social preview`}
              fill
              sizes="(max-width: 768px) 60vw,
             (max-width: 1200px) 45vw,
             30vw"
              className=" object-cover opacity-90"
              priority={false}
            />
          ) : (
            <div
              className="
        w-full h-full
        bg-gradient-to-br from-emerald-400/40 to-cyan-400/40
      "
            />
          )}
        </div>
      </article>
    </Link>
  )
}
