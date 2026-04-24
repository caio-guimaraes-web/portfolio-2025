// FooterTitle.tsx

import { homepageData } from '@/data/homepage'

export function FooterTitle() {
  const { title } = homepageData.footer

  return (
    <h2 className="text-white text-2xl md:text-3xl font-space">
      {title.line1} <br />
      <span className="text-cyan-300">{title.highlight}</span>
    </h2>
  )
}
