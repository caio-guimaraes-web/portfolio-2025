// components/Navbar/MenuToggle.tsx
'use client'

interface MenuToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <button
      aria-label="Abrir menu"
      onClick={onToggle}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-2"
    >
      <span
        className={`block h-[1.5px] w-8 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}
      />
      <span
        className={`block h-[1.5px] w-8 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`block h-[1.5px] w-8 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
      />
    </button>
  )
}
