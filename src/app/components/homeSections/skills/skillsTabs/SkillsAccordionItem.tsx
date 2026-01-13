import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface SkillsAccordionItemProps {
  value: string
  title: string
}

export function SkillsAccordionItem({
  value,
  title,
}: SkillsAccordionItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-slate-800">
      <AccordionTrigger
        className="
          flex items-center justify-between
          py-5 text-left
          text-sm sm:text-base font-normal
          text-gray-400
          hover:text-cyan-400
          transition-colors
        "
      >
        <span>{title}</span>
      </AccordionTrigger>

      <AccordionContent
        className="
          pb-5
          text-gray-400
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
