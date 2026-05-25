//AboutImage.tsx
import React from 'react'
import Image from 'next/image'

export function AboutImage() {
  return (
    <div className="relative w-full">
      {/* Imagem */}
      <Image
        src="/images/home/profile.png"
        alt="Photo of Caio Guimarães"
        width={500}
        height={591}
        className="w-auto h-full object-cover rounded-xl opacity-50"
      />
    </div>
  )
}
