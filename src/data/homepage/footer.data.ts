// src/data/homepage/footer.data.ts

export interface FooterData {
  title: {
    line1: string
    highlight: string
  }
  copyright: string
}

export const footerData: FooterData = {
  title: {
    line1: 'Appreciate your visit –',
    highlight: 'let’s connect!',
  },

  copyright: '© 2026 Caio Guimarães Portfolio – all rights reserved',
}
