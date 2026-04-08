import { FLOW_PAGES } from '@/shared/constants'
import { CircleArrowLeft, FormInput } from 'lucide-react'
import CustomInput from '@/shared/ui/inputs/custom-input'
import { Checkbox } from '@mui/material'
import AuthButton from '@/shared/ui/buttons/auth-button'

interface RegistrationProps {
  setFlowPage: (flow: string) => void
}

const Registration = ({ setFlowPage }: RegistrationProps) => {
  const handleSetFlow = () => {
    setFlowPage(FLOW_PAGES.options)
  }

  return (
    <form className="h-fit py-10 px-5">
      <p onClick={handleSetFlow}
       className='absolute top-7 left-2 text-black hover:text-amber-300 md:cursor-pointer'>
        <CircleArrowLeft className='hover:rotate-360 duration-[0.5s]' />
      </p>
      <div className='flex flex-col gap-5'>
        <CustomInput label="Name" variant="outlined"/>
        <CustomInput label="Surname" variant="outlined"/>
        <CustomInput label="Email Adress" variant="outlined"/>
        <CustomInput label="Phone number" variant="outlined"/>
        <CustomInput label="Password" variant="outlined"/>

        <AuthButton text="Create Account" variant="outlined" />
      </div>
    </form>
  )
}

export default Registration
