'use client'

import { Skeleton } from '@/components/ui/skeleton'

export function GithubPinnedCardSkeleton() {
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
        animate-pulse
      "
    >
      {/* TITLE */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-6 w-1/2 bg-slate-700" />

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-full bg-slate-700" />
          <Skeleton className="h-3 w-5/6 bg-slate-700" />
          <Skeleton className="h-3 w-4/6 bg-slate-700" />
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 flex-wrap">
          <Skeleton className="h-5 w-16 bg-slate-700 rounded-full" />
          <Skeleton className="h-5 w-14 bg-slate-700 rounded-full" />
          <Skeleton className="h-5 w-20 bg-slate-700 rounded-full" />
        </div>

        <div className="hidden md:flex gap-3 flex-wrap">
          <Skeleton className="h-5 w-20 bg-slate-700 rounded-full" />
          <Skeleton className="h-5 w-24 bg-slate-700 rounded-full" />
          <Skeleton className="h-5 w-16 bg-slate-700 rounded-full" />
        </div>
      </div>

      {/* SOCIAL IMAGE */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[55%] rotate-[-8deg] translate-x-6 translate-y-4 rounded-xl overflow-hidden opacity-20">
        <Skeleton className="w-full h-full bg-slate-700" />
      </div>
    </article>
  )
}
