import { Accordion } from '@/components/ui/accordion'

import { SkillsAccordionItem } from './SkillsAccordionItem'

import { SkillTag } from '@/app/components/reusable/skillTag/SkillTag'

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

      <SkillTag label="React" />
      <SkillTag label="TypeScript" />
      <SkillTag label="Tailwind CSS" tooltip="Utility-first CSS framework" />
      <SkillTag
        label="Storybook"
        href="https://storybook.js.org"
        tooltip="Component documentation"
      />
    </Accordion>
  )
}
