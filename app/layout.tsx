import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
