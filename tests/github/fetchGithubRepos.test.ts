import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchGithubRepos } from '@/lib/github/fetchGithubRepos'

describe('fetchGithubRepos', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('transforma dados corretamente quando fetch retorna OK', async () => {
    const mockJson = [
      {
        id: 123,
        name: 'repo-example',
        description: 'desc',
        html_url: 'https://github.com/example',
        homepage: 'https://example.com',
        language: 'TypeScript',
      },
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockJson,
    }) as any

    const result = await fetchGithubRepos('caio-guimaraes-web')

    expect(result.length).toBe(1)
    expect(result[0].id).toBe('123')
    expect(result[0].name).toBe('repo-example')
    expect(result[0].languages).toEqual(['TypeScript'])
  })

  it('lança erro quando API retorna status inválido', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    }) as any

    await expect(fetchGithubRepos('caio-guimaraes-web')).rejects.toThrow(
      'GitHub API error: 404',
    )
  })
})
