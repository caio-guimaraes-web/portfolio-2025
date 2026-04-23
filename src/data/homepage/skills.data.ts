// src/data/homepage/skills.data.ts

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

export interface SkillsData {
  intro: {
    text: string
  }
  groups: SkillGroup[]
}

export const skillsData = {
  intro: {
    text: `I combine solid JavaScript expertise with excellence in front‑end, design systems, back‑end, and familiarity with DevOps and business rules. My skills span front‑end frameworks, clean code, Git, and testing practices, ensuring value at every stage of product development.`,
  },

  groups: [
    {
      id: 'frontend',
      title: 'Front-end · Client Side Development',
      skills: [
        { label: 'HTML5', tooltip: 'Markup language' },
        { label: 'CSS3', tooltip: 'Style language' },
        {
          label: 'JavaScript (ES6+)',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          tooltip: 'Programming language',
        },
        {
          label: 'TypeScript',
          href: 'https://www.typescriptlang.org',
          tooltip: 'Typed superset of JS',
        },
        {
          label: 'React.js',
          href: 'https://react.dev',
          tooltip: 'UI library',
        },
        {
          label: 'Next.js',
          href: 'https://nextjs.org',
          tooltip: 'React framework (SSG, SSR, ISR)',
        },
        {
          label: 'Tailwind CSS',
          href: 'https://tailwindcss.com',
          tooltip: 'Utility-first CSS',
        },
        {
          label: 'Styled Components',
          href: 'https://styled-components.com',
          tooltip: 'CSS-in-JS styling solution',
        },
        {
          label: 'Storybook',
          href: 'https://storybook.js.org',
          tooltip: 'Component documentation',
        },
        {
          label: 'Vite.js',
          href: 'https://vitejs.dev',
          tooltip: 'Fast build tool',
        },
        {
          label: 'Web Performance',
          href: 'https://web.dev/fast',
          tooltip: 'Optimization practices',
        },
        { label: 'Manual UI Testing', tooltip: 'Browser-based testing' },
        {
          label: 'Jest',
          href: 'https://jestjs.io',
          tooltip: 'Unit testing framework',
        },
        {
          label: 'React Testing Library',
          href: 'https://testing-library.com/docs/react-testing-library/intro',
          tooltip: 'React unit tests',
        },
        {
          label: 'Cypress',
          href: 'https://www.cypress.io',
          tooltip: 'End-to-end testing',
        },
        {
          label: 'i18n / Internationalization',
          href: 'https://react.i18next.com',
          tooltip: 'Internationalization support',
        },
      ],
    },

    {
      id: 'ui',
      title: 'User Interface & Design Systems',
      skills: [
        {
          label: 'Figma',
          href: 'https://www.figma.com',
          tooltip: 'Design tool',
        },
        { label: 'Design Systems', tooltip: 'Reusable UI standards' },
        { label: 'UI/UX Principles', tooltip: 'User experience basics' },
        { label: 'Componentization', tooltip: 'Reusable components' },
        { label: 'Responsive Design', tooltip: 'Adaptive layouts' },
        { label: 'Accessibility (a11y)', tooltip: 'Inclusive design' },
      ],
    },

    {
      id: 'backend',
      title: 'Back-end · Server Side Development',
      skills: [
        { label: 'Node.js', href: 'https://nodejs.org', tooltip: 'JS runtime' },
        {
          label: 'Express.js',
          href: 'https://expressjs.com',
          tooltip: 'Web framework',
        },
        { label: 'REST APIs', tooltip: 'HTTP interfaces' },
        { label: 'SQL', tooltip: 'Database language' },
        {
          label: 'SQLite',
          href: 'https://www.sqlite.org',
          tooltip: 'Lightweight DB',
        },
        {
          label: 'PostgreSQL',
          href: 'https://www.postgresql.org',
          tooltip: 'Relational DB',
        },
        {
          label: 'PHP',
          href: 'https://www.php.net',
          tooltip: 'Server-side scripting',
        },
      ],
    },

    {
      id: 'devops',
      title: 'A Little Bit of DevOps',
      skills: [
        {
          label: 'Git & GitHub',
          href: 'https://github.com',
          tooltip: 'Version control',
        },
        { label: 'CI/CD (basics)', tooltip: 'Automated pipelines' },
        {
          label: 'Docker',
          href: 'https://www.docker.com',
          tooltip: 'Containerization',
        },
        {
          label: 'Vercel',
          href: 'https://vercel.com',
          tooltip: 'Deployment platform',
        },
        { label: 'Environment Variables', tooltip: 'Config management' },
      ],
    },

    {
      id: 'product',
      title: 'Product & Business',
      skills: [
        { label: 'Product Thinking', tooltip: 'Value-driven mindset' },
        { label: 'Agile / Scrum', tooltip: 'Iterative workflow' },
        { label: 'MVP Planning', tooltip: 'Lean product strategy' },
        { label: 'Business Rules', tooltip: 'Domain logic' },
        { label: 'Design Thinking', tooltip: 'Creative problem solving' },
        {
          label: 'SEO',
          href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
          tooltip: 'Search optimization',
        },
        {
          label: 'Analytics & Tagging',
          href: 'https://marketingplatform.google.com/about/tag-manager/',
          tooltip: 'User behavior tracking',
        },
      ],
    },
  ],
}
