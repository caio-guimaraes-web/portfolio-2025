//(Toggle on/off + Redes Sociais)
import { ArrowDown } from 'lucide-react'
import { HeroAudienceToggle } from '../../reusable/heroAudienceToggle'
import { socialMediaLinks } from '@/data/socialMediaLinks.data'
import { SocialMediaLink } from '@/app/components/reusable/socialMediaIconComp/SocialMediaLink'

export function HeroFooter() {
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-end text-white pb-8">
      {/* Área Esquerda: Botão de Toggle (Visível apenas em Desktop no design original, mas útil em ambos) */}
      <div className="hidden lg:flex flex-col gap-2 opacity-0">
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
      <div className="hidden lg:flex flex-col items-end text-right gap-6 max-w-xs">
        <HeroAudienceToggle />

        {/* social icons */}
        <div className="flex gap-6">
          {socialMediaLinks.map(({ name, Icon, url }) => (
            <SocialMediaLink key={name} Icon={Icon} url={url} />
          ))}
        </div>
      </div>
    </div>
  )
}
