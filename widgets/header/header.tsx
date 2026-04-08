'use client'

import { usePathname } from 'next/navigation'
import NavBar from './navbar'
import clsx from 'clsx'
import UsersIcon from '@/shared/ui/icons/users-icon'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const pathname = usePathname()
  const [user, setUser] = useState(null)

  return (
    <header
      className={clsx(
        'bg-white/10 backdrop-blur-[3px] shadow-xs fixed top-0 left-0 px-20 h-20 flex justify-between items-center w-full z-50',
        pathname === '/auth/' ? 'hidden' : 'fixed'
      )}
    >
      <h1 className="text-[#D0A144] text-2xl">Qamqorly</h1>
      {user ? (
        <NavBar />
      ) : (
        <Link href="/auth/">
          <UsersIcon />
        </Link>
      )}
    </header>
  )
}

export default Header
