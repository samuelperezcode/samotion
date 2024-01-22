'use client'

import Image from 'next/image'
import { poppins } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export function Logo () {
  const { resolvedTheme } = useTheme()
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={resolvedTheme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
        alt="Samotion logo"
        width={40}
        height={40}
      />
      <p className={cn(
        'font-semibold text-xl antialiased',
        poppins.className
      )}>
        Samotion
      </p>
    </div>
  )
}
