export interface SkillItem {
  label: string
  href?: string
  tooltip?: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: SkillItem[]
}

export const skillsData: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Front-end · Client Side Development',
    skills: [
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'JavaScript (ES6+)' },
      { label: 'TypeScript' },
      { label: 'React.js' },
      { label: 'Next.js' },
      { label: 'Tailwind CSS' },
      {
        label: 'Styled Components',
        tooltip: 'CSS-in-JS styling solution',
      },
      {
        label: 'Storybook',
        href: 'https://storybook.js.org',
        tooltip: 'Component documentation',
      },
    ],
  },
  {
    id: 'ui',
    title: 'User Interface & Design Systems',
    skills: [
      { label: 'Figma' },
      { label: 'Design Systems' },
      { label: 'UI/UX Principles' },
      { label: 'Componentization' },
      { label: 'Responsive Design' },
      { label: 'Accessibility (a11y)' },
    ],
  },
  {
    id: 'backend',
    title: 'Back-end · Server Side Development',
    skills: [
      { label: 'Node.js' },
      { label: 'Express.js' },
      { label: 'REST APIs' },
      { label: 'SQL' },
      { label: 'SQLite' },
      { label: 'PostgreSQL' },
    ],
  },
  {
    id: 'devops',
    title: 'A Little Bit of DevOps',
    skills: [
      { label: 'Git & GitHub' },
      { label: 'CI/CD (basics)' },
      { label: 'Vercel' },
      { label: 'Environment Variables' },
    ],
  },
  {
    id: 'product',
    title: 'Product & Business',
    skills: [
      { label: 'Product Thinking' },
      { label: 'Agile / Scrum' },
      { label: 'MVP Planning' },
      { label: 'Business Rules' },
    ],
  },
]
