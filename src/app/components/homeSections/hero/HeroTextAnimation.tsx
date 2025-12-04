//(O componente GSAP isolado)
'use client'

import React from 'react'

export function HeroTextAnimation() {
  return (
    <div className="w-full py-10 overflow-hidden select-none">
      {/* H1 Gigante
        No mobile: quebra de linha natural ou ajustada.
        No desktop: será uma linha única que rola horizontalmente.
        
        Estilo Visual:
        - As primeiras letras "FULLSTACK" no design parecem ter apenas contorno (outline) em alguns momentos ou preenchimento sólido.
        - Vou fazer sólido branco por padrão conforme a imagem estática.
        - O texto "WEB DEVELO..." tem um efeito listrado (striped) na imagem.
        - Para simplificar nesta etapa 1, faremos branco sólido. O efeito listrado é CSS avançado (background-clip: text) que podemos adicionar no refinamento.
      */}
      <h1 className="text-[15vw] leading-[0.85] font-thin text-white whitespace-nowrap tracking-tighter">
        FULLSTACK{' '}
        <span className="text-cyan-400/20 font-extrabold">WEB DEVELOPER</span>
      </h1>

      {/* Nota: O texto real do design é muito longo para caber na tela sem scroll.
         O GSAP cuidará de mover isso. Por enquanto, vai 'cortar' na tela ou criar scroll horizontal se não tratarmos o overflow do pai.
         O 'overflow-hidden' na div pai previne a barra de rolagem indesejada na página.
      */}
    </div>
  )
}
