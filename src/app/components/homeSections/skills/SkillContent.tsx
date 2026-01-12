import React from 'react'
import { HomeSectionsTitle } from '../homeSectionsTitles/HomeSectionsTitle'
import { SkillText } from './SkillText'
import { HomeBigCTA } from '../homeBigCTA/HomeBigCTA'

export function SkillContent() {
  return (
    <div className="w-full lg:w-[40%] flex flex-col items-end gap-6">
      <HomeSectionsTitle text="Skills" />
      <SkillText />
      <HomeBigCTA subtext="skills" uppertext="MORE" href="/skills" />
    </div>
  )
}
