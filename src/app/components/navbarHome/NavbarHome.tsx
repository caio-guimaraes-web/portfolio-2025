// components/NavbarHome/NavbarHome.tsx
'use client'

import { useState, useEffect } from 'react'
import { MenuToggle } from './MenuToggle'
import { SideMenu } from './SideMenu'
import { navItems } from './navItems'

export function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleNavigate = (target: string) => {
    const section = document.getElementById(target)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6 lg:p-12 text-white">
      {/* Logo */}
      <h2 className="font-extralight text-2xl tracking-tighter text-quaternary hover:text-text-high transition-colors duration-300">
        &#123;...caioGuimaraes.<span className="text-brand-primary">dev</span>
        &#125;
      </h2>

      <MenuToggle isOpen={isOpen} onToggle={handleToggle} />

      <SideMenu
        isOpen={isOpen}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />
    </nav>
  )
}
