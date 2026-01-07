//AboutImage.tsx
import React from 'react'
import Image from 'next/image'
import profileImg from '@/assets/homeSections/aboutSection/profile.png'

export function AboutImage() {
  return (
    <div className="relative w-full">
      {/* Imagem */}
      <Image
        src={profileImg}
        alt="Photo of Caio Guimarães"
        className="w-auto h-full object-cover rounded-xl"
      />
    </div>
  )
}
