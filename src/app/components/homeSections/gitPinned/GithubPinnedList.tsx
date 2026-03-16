import { fetchGithubRepos } from '@/lib/github/fetchGithubRepos'
import { GithubPinnedScroll } from './GithubPinnedScroll'

interface Props {
  username: string
}

export async function GithubPinnedList({ username }: Props) {
  const repos = await fetchGithubRepos(username)
  return <GithubPinnedScroll repos={repos} />
}
