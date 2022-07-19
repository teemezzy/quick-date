import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

const Account = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            <Sidebar />
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default Account