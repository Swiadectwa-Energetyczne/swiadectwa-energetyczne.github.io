import './globals.css'
import type {Metadata} from 'next'
import {Analytics} from '@vercel/analytics/react';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin'], variable: '--display-font',})

export const metadata: Metadata = {
  title: 'Świadectwa Charakterystyki Energetycznej',
  description: 'Specjalistyczne przygotowanie Świadectw Charakterystyki Energetycznej dla budynków i nieruchomości. Skrzoystaj z moich usług, eksperskiej wiedzy i podejścia pełnego pasji.',
  applicationName: 'Świadectwa Charakterystyki Energetycznej',
  authors: {url: 'https://www.linkedin.com/in/dominik-rolewski-01bba9155/', name: 'Dominik Rolewski'},
  creator: 'Dominik Rolewski',
  other: {'instagram': 'https://www.instagram.com/swiadectwa_eko/', 'facebook': 'https://www.facebook.com/profile.php?id=61551862124461'},
  publisher: 'Vercel',
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
    <body className={`${inter.variable} font-display`}>
    {children}
    <Analytics/>
    </body>
    </html>
  )
}
