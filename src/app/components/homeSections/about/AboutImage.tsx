//AboutImage.tsx
import React from 'react'
import Image from 'next/image'
import profileImg from '@/assets/homeSections/aboutSection/profile.png'

export function AboutImage() {
  return (
    <div className="relative w-full lg:w-[40%] h-[360px] lg:h-[520px] flex items-center justify-end">
      {/* Imagem */}
      <Image
        src={profileImg}
        alt="Photo of Caio Guimarães"
        className="w-auto h-full object-cover rounded-xl"
      />
    </div>
  )
}
