import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: string
}

const AuthButton = ({ text, variant, ...props }: AuthButtonProps) => {
  return (
    <button
      className={clsx(
        'px-7 py-2 rounded-full font-medium w-full',
        variant === 'outlined'
          ? 'text-[#D0A144] border-2 border-[#D0A144]'
          : 'text-white border-none bg-[#D0A144]'
      )}
      {...props}
    >
      {text}
    </button>
  )
}

export default AuthButton
