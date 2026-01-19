import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

import { SkillTag } from '../../../reusable/skillTag/SkillTag'
import { SkillItem } from './skills.data'

interface SkillsAccordionItemProps {
  value: string
  title: string
  skills: SkillItem[]
}

export function SkillsAccordionItem({
  value,
  title,
  skills,
}: SkillsAccordionItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-slate-800">
      <AccordionTrigger className="flex items-center justify-between py-5 text-left text-sm sm:text-base font-normal text-gray-400 hover:text-cyan-400 transition-colors">
        <span>{title}</span>
      </AccordionTrigger>

      <AccordionContent className="pb-5 text-gray-400 text-sm leading-relaxed">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillTag
              key={skill.label}
              label={skill.label}
              href={skill.href}
              tooltip={skill.tooltip}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
