import { Accordion } from '@/components/ui/accordion'

import { SkillsAccordionItem } from './SkillsAccordionItem'

import { skillsData } from './skills.data'

export function SkillsAccordion() {
  return (
    <Accordion type="multiple" className="w-full flex flex-col gap-2">
      {skillsData.map((group) => (
        <SkillsAccordionItem
          key={group.id}
          value={group.id}
          title={group.title}
          skills={group.skills}
        />
      ))}
    </Accordion>
  )
}
