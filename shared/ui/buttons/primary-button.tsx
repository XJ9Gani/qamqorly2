import { Button } from '@/components/ui/button'
import clsx from 'clsx'

interface PrimaryButtonProps {
  text: string
  variant?: string
  className?: string
}

const PrimaryButton = ({ text, variant, className }: PrimaryButtonProps) => {
  return (
    <button
      className={clsx(
        'px-7 py-2 rounded-full w-fit font-medium',
        variant === 'outlined'
          ? 'text-[#784F33] border-2 border-[#784F33]'
          : 'text-white border-none bg-[#784F33]'
      )}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
