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
        topics: ['react', 'design-system'],
        open_graph_image_url: 'https://fakeimage.com/og.png',
      },
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockJson,
    }) as any

    const result = await fetchGithubRepos('caio-guimaraes-web')

    expect(result.length).toBe(1)

    const r = result[0]

    expect(r.id).toBe('123')
    expect(r.name).toBe('repo-example')
    expect(r.languages).toEqual(['TypeScript'])
    expect(r.topics).toEqual(['react', 'design-system']) // <- NOVO
    expect(r.socialImage).toBe('https://fakeimage.com/og.png') // <- NOVO
  })

  it('usa fallback correto quando topics e socialImage não existem', async () => {
    const mockJson = [
      {
        id: 555,
        name: 'fallback-example',
        description: null,
        html_url: 'https://github.com/fallback',
        homepage: null,
        language: null,
        // sem topics
        // sem open_graph_image_url
      },
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockJson,
    }) as any

    const result = await fetchGithubRepos('caio-guimaraes-web')
    const r = result[0]

    expect(r.topics).toEqual([]) // <- fallback
    expect(r.socialImage).toBe(null) // <- fallback
    expect(r.languages).toEqual([]) // <- fallback para linguagens
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
