// components/Navbar/SideMenu.tsx
'use client'

import { navItems } from './navItems'

interface SideMenuProps {
  isOpen: boolean
  onNavigate: (target: string) => void
}

export function SideMenu({ isOpen, onNavigate }: SideMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Painel lateral */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-bg-alt
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        z-40 flex items-center`}
      >
        <nav className="flex w-full flex-col gap-8 px-8">
          {navItems.map((item, index) => (
            <button
              key={item.target}
              onClick={() => onNavigate(item.target)}
              className="group text-left"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="block text-3xl font-extralight tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
