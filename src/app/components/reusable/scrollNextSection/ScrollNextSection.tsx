//ScrollNextSection.tsx
import React from 'react'
import { ChevronsDown } from 'lucide-react'

export function ScrollNextSection() {
  return (
    <div className="flex flex-col items-center gap-1 text-gray-500 animate-bounce cursor-pointer">
      <ChevronsDown size={24} />
    </div>
  )
}
