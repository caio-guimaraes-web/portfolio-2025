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
        topics: ['react', 'design-system', 'pinned'],
        open_graph_image_url: 'https://fakeimage.com/og.png',
      },
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockJson,
    }) as unknown as typeof fetch

    const result = await fetchGithubRepos('caio-guimaraes-web')
    const r = result[0]

    expect(result.length).toBe(1)
    expect(r.id).toBe('123')
    expect(r.name).toBe('repo-example')
    expect(r.languages).toEqual(['TypeScript'])
    expect(r.topics).toEqual(['react', 'design-system', 'pinned'])
    expect(r.socialImage).toBe('https://fakeimage.com/og.png')
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
        topics: ['pinned'], // ← necessário para passar pelo filtro
        open_graph_image_url: null,
      },
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockJson,
    }) as unknown as typeof fetch

    const result = await fetchGithubRepos('caio-guimaraes-web')
    const r = result[0]

    expect(r.topics).toEqual(['pinned'])
    expect(r.languages).toEqual([])

    const expectedFallback =
      'https://opengraph.githubassets.com/1/caio-guimaraes-web/fallback-example'

    expect(r.socialImage).toBe(expectedFallback)
  })

  it('lança erro quando API retorna status inválido', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    }) as unknown as typeof fetch

    await expect(fetchGithubRepos('caio-guimaraes-web')).rejects.toThrow(
      'GitHub API error: 404',
    )
  })
})
