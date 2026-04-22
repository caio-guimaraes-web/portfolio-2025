// src/data/homepage/hero.data.ts

export interface HeroIntroData {
  greeting: string
  name: string
  rolePrefix: string
  bottomTag: string
}

export interface HeroAudienceData {
  recruiter: string
  client: string
}

export const heroIntroData: HeroIntroData = {
  greeting: 'Hello 👋,',
  name: 'my name is gostosão.',
  rolePrefix: "I'm a ...",
  bottomTag: 'Front-end Focused',
}

export const heroAudienceData: HeroAudienceData = {
  recruiter:
    'I build scalable, well-architected web solutions using modern technologies, focusing on performance, maintainability, and clean code standards.',
  client:
    'I help businesses and professionals transform ideas into high-quality digital products, combining design sensibility with robust technical execution.',
}
