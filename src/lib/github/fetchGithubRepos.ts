import 'server-only'
import { GithubRepo } from '@/app/components/homeSections/gitPinned/types'

export async function fetchGithubRepos(
  username: string,
): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    throw new Error('GITHUB_TOKEN não definido.')
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
      },
      next: {
        revalidate: 3600,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const data = await response.json()

  // 🔥 Adaptando REST para seu formato
  return data.map((repo: any) => ({
    id: repo.id.toString(),
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    homepageUrl: repo.homepage,
    primaryLanguage: repo.language,
    languages: repo.language ? [repo.language] : [],
    socialImage: null, // REST não traz fácil — depois podemos melhorar via GraphQL
  }))
}
