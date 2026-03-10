import 'server-only'
import { type GithubRepo } from '@/app/components/homeSections/gitPinned/types'

const GITHUB_API = 'https://api.github.com'

export async function fetchGithubRepos(
  username: string,
): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN

  const response = await fetch(
    `${GITHUB_API}/users/${username}/repos?sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.mercy-preview+json', // topics habilitado
      },
      // A chave para o Next usar ISR:
      next: { revalidate: 60 * 60 }, // 1h
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos = await response.json()

  return repos.map((repo: any) => ({
    id: String(repo.id),
    name: repo.name,
    description: repo.description || null,
    url: repo.html_url,
    homepageUrl: repo.homepage || null,
    primaryLanguage: repo.language || null,
    languages: repo.language ? [repo.language] : [],
    topics: repo.topics || [], // 👈 ADICIONADO
    socialImage: repo.open_graph_image_url || null, // 👈 ADICIONADO
  }))
}
