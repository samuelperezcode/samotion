import Image from 'next/image'
import { poppins } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export function Logo () {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={'/logo.svg'}
        alt="Samotion logo"
        width={56}
        height={56}
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
