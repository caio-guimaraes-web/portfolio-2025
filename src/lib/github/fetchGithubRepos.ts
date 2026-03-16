import 'server-only'
import { type GithubRepo } from '@/app/components/homeSections/gitPinned/types'

const GITHUB_API = 'https://api.github.com'

export async function fetchGithubRepos(
  username: string,
): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN

  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=200`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.mercy-preview+json', // topics OK
      },
      next: { revalidate: 60 * 60 },
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos = await response.json()

  return (
    repos
      // ⭐ Apenas repos marcados como "pinned"
      .filter((repo: any) => repo.topics?.includes('pinned'))

      // ⭐ Transformação final
      .map((repo: any) => {
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

          // 🔥 Usamos a chave já existente nos tipos e nos cards:
          socialImage: repo.open_graph_image_url || socialFallback,
        }
      })
  )
}
