import React from "react"
import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-great-vibes' })

export const metadata: Metadata = {
  title: 'Happy Valentine\'s Day',
  description: 'A special Valentine\'s Day surprise',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_greatVibes.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
