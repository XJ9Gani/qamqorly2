import { FLOW_PAGES } from '@/shared/constants'
import AuthButton from '@/shared/ui/buttons/auth-button'
import CustomInput from '@/shared/ui/inputs/custom-input'
import { CircleArrowLeft } from 'lucide-react'

interface LoginProps {
  setFlowPage: (flow: string) => void
}

const Login = ({ setFlowPage }: LoginProps) => {
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

        <AuthButton text="Log in to account" variant="outlined" />
      </div>
    </form>
  )
}

export default Login
