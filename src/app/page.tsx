import { HeroSection } from '@/app/components/homeSections/hero/HeroSection'
import { AboutMeSection } from '@/app/components/homeSections/about/AboutMeSection'
import { MySkillsSection } from './components/homeSections/skills/MySkillsSection'
import { GithubPinnedSection } from './components/homeSections/gitPinned/GithubPinnedSection'
import { ImpactPhraseSection } from './components/homeSections/impactPhrase/ImpactPhraseSection'
import { LetsTalkSection } from './components/homeSections/letstalk/LetsTalkSection'

export default function Home() {
  return (
    // O elemento <main> é o wrapper semântico do conteúdo principal
    // flex-col garante que as seções fiquem uma abaixo da outra
    <main className="flex flex-col w-full min-h-screen">
      {/* Seção 1 */}
      <HeroSection />

      {/* Seção 2 */}
      <AboutMeSection />

      {/* Seção 3 */}
      <MySkillsSection />

      {/* Seção 4 */}
      <GithubPinnedSection />

      {/* Seção 5 */}
      <ImpactPhraseSection />

      {/* Seção 6 */}
      <LetsTalkSection />

      {/* Abaixo virão as próximas seções.
        Como exemplo, uma div vazia para testar o scroll e o comportamento 'fixed' do menu
      */}
      <section className="h-screen w-full bg-zinc-900 flex items-center justify-center text-zinc-500">
        (Espaço reservado para próxima seção)
      </section>
    </main>
  )
}
