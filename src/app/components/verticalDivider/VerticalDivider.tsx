//VerticalDivider.tsx
import React from 'react'

export function VerticalDivider() {
  return (
    <div className="hidden lg:flex h-full items-center">
      <div className="w-[2px] h-[60%] bg-gradient-to-b from-cyan-400 via-cyan-500 to-green-400 opacity-80" />
    </div>
  )
}
