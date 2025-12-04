//(Toggle on/off + Redes Sociais)
import { Github, Linkedin, ArrowDown } from 'lucide-react'
// Ícones genéricos do lucide. Depois podemos trocar pelos SVGs específicos se você tiver.

export function HeroFooter() {
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-end text-white pb-8">
      {/* Área Esquerda: Botão de Toggle (Visível apenas em Desktop no design original, mas útil em ambos) */}
      <div className="hidden lg:flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gray-600"></div>
          </div>
          <span>ON</span>
        </div>
      </div>

      {/* Seta Mobile (Centralizada) */}
      <div className="lg:hidden w-full flex justify-center animate-bounce">
        <ArrowDown className="w-8 h-8 text-gray-500" />
      </div>

      {/* Área Direita: Abas e Redes Sociais */}
      <div className="hidden lg:flex flex-col items-end text-right gap-6 max-w-md">
        {/* Texto descritivo / Abas */}
        <div className="text-sm text-gray-400 leading-relaxed space-y-2">
          <p>
            I&apos;m looking for opportunities to join teams that build fast,
            scalable, and easy-to-use web applications with modern JavaScript
            frameworks.
          </p>
          <p>
            I combine React on the front end with robust server-side solutions
            using Node.js.
          </p>
        </div>

        {/* Ícones Sociais */}
        <div className="flex gap-6">
          {/* Trocando cor para o Ciano da marca no hover */}
          <Github className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
          <Linkedin className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
          <div className="font-bold text-xl hover:text-cyan-400 cursor-pointer transition-colors">
            Be
          </div>{' '}
          {/* Behance placeholder */}
        </div>
      </div>
    </div>
  )
}
