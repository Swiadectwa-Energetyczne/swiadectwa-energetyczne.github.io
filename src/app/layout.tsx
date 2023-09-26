import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: "--display-font", })

export const metadata: Metadata = {
  title: 'Świadectwa Charakterystyki Energetycznej',
  description: 'Monika Zamroczyńska - Świadectwa Charakterystyki Energetycznej',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} font-display`}>{children}</body>
    </html>
  )
}
