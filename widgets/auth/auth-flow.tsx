'use client'

import { useState } from 'react'
import { FLOW_PAGES } from '@/shared/constants'
import AuthOptions from './auth-options'
import Registration from './registration'
import Login from './login'
import Link from 'next/link'
import { Eye } from 'lucide-react'

const AuthFlow = () => {
  const [flowPage, setFlowPage] = useState<string>(FLOW_PAGES.options)

  const renderContent = (page: string) => {
    switch (page) {
      case FLOW_PAGES.options:
        return <AuthOptions setFlowPage={setFlowPage} />
      case FLOW_PAGES.registration:
        return <Registration setFlowPage={setFlowPage} />
      case FLOW_PAGES.login:
        return <Login setFlowPage={setFlowPage} />
    }
  }

  return <div className='py-5'>
    {renderContent(flowPage)}
    <Link href='/' className='m-auto w-fit text-sm text-gray-400 hover:text-gray-500 flex'>
      <Eye/>
      View as guest
      </Link>
    </div>
}

export default AuthFlow
