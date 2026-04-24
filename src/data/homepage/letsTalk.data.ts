// src/data/homepage/letsTalk.data.ts

export interface LetsTalkCTA {
  id: string
  subtext: string
  uppertext: string
  href: string
  disabled?: boolean
}

export interface LetsTalkData {
  title: {
    line1: string
    highlight: string
  }
  ctas: LetsTalkCTA[]
}

export const letsTalkData: LetsTalkData = {
  title: {
    line1: 'Shall we talk about',
    highlight: 'your projects?',
  },

  ctas: [
    {
      id: 'services',
      subtext: 'goTo',
      uppertext: 'SERVICES',
      href: '#',
      disabled: true,
    },
    {
      id: 'talk',
      subtext: 'let’s',
      uppertext: 'TALK',
      href: 'https://calendly.com/seu-link',
      disabled: false,
    },
  ],
}
