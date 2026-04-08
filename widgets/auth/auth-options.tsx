import React from 'react'
import AuthButton from '@/shared/ui/buttons/auth-button'
import { FLOW_PAGES } from '@/shared/constants'

interface AuthOptionProps {
  setFlowPage: (flow: string) => void
}

const AuthOptions = ({ setFlowPage }: AuthOptionProps) => {
  const handleSetOption = (value: string) => {
    setFlowPage(value)
  }

  return (
    <div className="p-5 flex flex-col items-center justify-center gap-5 mx-auto">
      <AuthButton
        text="Sing Up"
        onClick={() => {
          handleSetOption(FLOW_PAGES.registration)
        }}
      />
      <AuthButton
        text="Login"
        variant="outlined"
        onClick={() => {
          handleSetOption(FLOW_PAGES.login)
        }}
      />

      <p className="text-center">
        By signing up you agree to our Terms of Use and Privacy Policy.
      </p>
    </div>
  )
}

export default AuthOptions
