// components/Navbar/NavbarHome.tsx
'use client'

import { useState } from 'react'
import { MenuToggle } from './MenuToggle'
import { SideMenu } from './SideMenu'

export function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleNavigate = (target: string) => {
    const section = document.getElementById(target)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6 lg:p-12 text-white">
      {/* Logo */}
      <h2 className="font-extralight text-2xl tracking-tighter text-quaternary hover:text-text-high transition-colors duration-300">
        &#123;...caioGuimaraes.<span className="text-brand-primary">dev</span>
        &#125;
      </h2>

      {/* Menu toggle */}
      <MenuToggle isOpen={isOpen} onToggle={handleToggle} />

      {/* Side menu */}
      <SideMenu isOpen={isOpen} onNavigate={handleNavigate} />
    </nav>
  )
}
