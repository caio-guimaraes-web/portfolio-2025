// src/app/layout.tsx
import './globals.css'
import { Navbar } from './components/layout/Navbar'
import type { Metadata } from 'next'

// Importe as duas fontes
import {
  Inter as FontInter,
  Space_Grotesk as FontSpace,
} from 'next/font/google'

// Configuração das Fontes (variáveis CSS)
const inter = FontInter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = FontSpace({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Caio Guimarães Portfolio 2025',
  description: 'Fullstack Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 1. Injeta as variáveis de fonte no HTML
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {/* 2. Aplica as classes Tailwind (fundo e fonte padrão) */}
      <body className="font-inter bg-bg-main">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
