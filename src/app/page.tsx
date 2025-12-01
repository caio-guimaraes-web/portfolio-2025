import { HeroSection } from '@/app/components/homeSections/hero/HeroSection'

// Futuramente importaremos as outras seções aqui:
// import { AboutSection } from "@/components/sections/about/AboutSection";
// import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";

export default function Home() {
  return (
    // O elemento <main> é o wrapper semântico do conteúdo principal
    // flex-col garante que as seções fiquem uma abaixo da outra
    <main className="flex flex-col w-full min-h-screen bg-black">
      {/* Seção 1 */}
      <HeroSection />

      {/* Abaixo virão as próximas seções.
        Como exemplo, uma div vazia para testar o scroll e o comportamento 'fixed' do menu
      */}
      <section className="h-screen w-full bg-zinc-900 flex items-center justify-center text-zinc-500">
        (Espaço reservado para a Seção 2)
      </section>
    </main>
  )
}
