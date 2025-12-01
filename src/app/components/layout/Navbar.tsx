//(Lógica da Logo + Menu Hamburguer)
'use client'

import { Menu } from 'lucide-react' // Ícone padrão que geralmente vem com shadcn/lucide
// Futuramente importaremos o Sheet, SheetContent, SheetTrigger do shadcn aqui

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 lg:p-12 mix-blend-difference text-white transition-all duration-300">
      {/* Área da Logo 
        Lógica futura: opacity-0 inicialmente, mudando para opacity-100 
        quando o scroll passar da altura da tela (window.innerHeight).
      */}
      <div className="opacity-1 transition-opacity duration-500 font-bold text-xl tracking-tighter">
        CAIO GUIMARÃES
      </div>

      {/* Área do Menu Hamburguer 
        Aqui entrará o componente <Sheet> do ShadcnUI.
        Por enquanto, um botão visual representando o trigger.
      */}
      <button
        aria-label="Abrir menu"
        className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
      >
        <Menu
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          strokeWidth={1.5}
        />
      </button>
    </nav>
  )
}
