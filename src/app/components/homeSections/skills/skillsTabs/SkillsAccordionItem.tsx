import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

import { ChevronDown } from 'lucide-react'

interface SkillsAccordionItemProps {
  value: string
  title: string
}

export function SkillsAccordionItem({
  value,
  title,
}: SkillsAccordionItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-white/10">
      <AccordionTrigger
        className="
          flex items-center justify-between
          py-5 text-left
          text-sm sm:text-base
          text-white/80
          hover:text-cyan-400
          transition-colors
        "
      >
        <span>{title}</span>

        <ChevronDown
          className="
            h-5 w-5
            shrink-0
            text-white/40
            transition-transform duration-300
            data-[state=open]:rotate-180
          "
        />
      </AccordionTrigger>

      <AccordionContent
        className="
          pb-5
          text-white/60
          text-sm
          leading-relaxed
        "
      >
        {/* Conteúdo virá aqui depois */}
        <div className="h-4" />
      </AccordionContent>
    </AccordionItem>
  )
}
