// FooterCopyright.tsx

import { homepageData } from '@/data/homepage'

export function FooterCopyright() {
  const { copyright } = homepageData.footer

  return <div className="text-center text-xs text-neutral-500">{copyright}</div>
}
