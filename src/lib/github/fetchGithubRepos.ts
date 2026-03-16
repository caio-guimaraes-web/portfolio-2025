import 'server-only'
import { GithubRepo } from '@/app/components/homeSections/gitPinned/types'

const GITHUB_API = 'https://api.github.com'

interface GithubApiRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics?: string[]
  open_graph_image_url?: string
}

export async function fetchGithubRepos(
  username: string,
): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN

  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=200`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.mercy-preview+json',
      },
      cache: 'force-cache',
      next: { revalidate: 3600 },
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos: GithubApiRepo[] = await response.json()

  return repos
    .filter((repo) => repo.topics?.includes('pinned'))
    .map((repo) => {
      const socialFallback = `https://opengraph.githubassets.com/1/${username}/${repo.name}`

      return {
        id: String(repo.id),
        name: repo.name,
        description: repo.description || null,
        url: repo.html_url,
        homepageUrl: repo.homepage || null,
        primaryLanguage: repo.language || null,
        languages: repo.language ? [repo.language] : [],
        topics: repo.topics || [],
        socialImage: repo.open_graph_image_url || socialFallback,
      }
    })
}
