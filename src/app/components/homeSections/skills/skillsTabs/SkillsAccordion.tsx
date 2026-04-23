// SkillsAccordion.tsx
import { Accordion } from '@/components/ui/accordion'
import { SkillsAccordionItem } from './SkillsAccordionItem'

import { homepageData } from '@/data/homepage'

export function SkillsAccordion() {
  const groups = homepageData.skills.groups

  return (
    <Accordion type="multiple" className="w-full flex flex-col gap-2">
      {groups.map((group) => (
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
