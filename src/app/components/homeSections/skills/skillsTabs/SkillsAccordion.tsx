import { Accordion } from '@/components/ui/accordion'

import { SkillsAccordionItem } from './SkillsAccordionItem'

export function SkillsAccordion() {
  return (
    <Accordion type="multiple" className="w-full flex flex-col gap-2">
      <SkillsAccordionItem
        value="frontend"
        title="Front-end - client side development"
      />

      <SkillsAccordionItem value="ui" title="User Interface" />

      <SkillsAccordionItem
        value="backend"
        title="Back-end - server side development"
      />

      <SkillsAccordionItem value="devops" title="A little bit of DevOps" />

      <SkillsAccordionItem value="product" title="Product and Business" />
    </Accordion>
  )
}
