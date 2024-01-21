import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Samotion',
  description: 'Best & Open Source Notion alternative',
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/logo.svg',
      href: '/logo.svg'
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/logo-dark.svg',
      href: '/logo-dark.svg'
    }
  ]
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
