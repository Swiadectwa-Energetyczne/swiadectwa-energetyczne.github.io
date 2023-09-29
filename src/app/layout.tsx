import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--display-font', })

export const metadata: Metadata = {
  title: 'Świadectwa Charakterystyki Energetycznej',
  description: 'Specjalistyczne przygotowanie Świadectw Charakterystyki Energetycznej dla budynków i nieruchomości. Skrzoystaj z moich usług, eksperskiej wiedzy i podejścia pełnego pasji.',
  applicationName: 'Świadectwa Charakterystyki Energetycznej',
  authors: {url: 'https://www.linkedin.com/in/dominik-rolewski-01bba9155/', name: 'Dominik Rolewski'},
  creator: 'Dominik Rolewski',
  other: {'instagram': 'TBD', 'facebook': 'TBD'},
  publisher: 'Github Pages',
  keywords: ['Świadectwa Charakterystyki Energetycznej', 'Ekologia', 'Eko', 'Świadectwa', 'Certyfikaty', 'fotowoltaika', 'Energia', 'swiadectwa-eko', 'SCE', 'efektywność energetyczna', 'budynki', 'ekspert energetyczny', 'inwentaryzacje'],
  category: 'Ekologia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body className={`${montserrat.variable} font-display`}>{children}</body>
    </html>
  )
}
