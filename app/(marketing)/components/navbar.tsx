import { Button } from '@/components/ui/button'
import { Logo } from '.'
import { ModeToggle } from '@/components/mode-toggle'

export function Navbar () {
  return (
    <header className="z-50 bg-background fixed top-0 flex items-center w-full p-6 border-b shadow-sm">
      <Logo />
      <div className='w-full flex justify-between items-center gap-x-2 md:ml-auto md:justify-end'>
        <Button>
          Login
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}
