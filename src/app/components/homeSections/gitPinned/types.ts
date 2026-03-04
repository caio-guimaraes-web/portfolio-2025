// tipagem dos dados
// types.ts

export interface GithubRepo {
  id: string
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  primaryLanguage: string | null
  languages: string[]
  socialImage: string | null
}
