import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPhoneInput = () => {
    const navigate = useNavigate();
  return (
      <form className='login-input-form'>
          <div className='login-input-wrapper'>
              <label htmlFor="phone">Phone Number</label>
              <input type="number" placeholder='Enter phone number' />
          </div>

          <div className='login-input-wrapper'>
              <label htmlFor="phone">Enter password</label>
              <input type="password" placeholder='Enter password' />
          </div>

          <div className='forgot-pword'>Forgot password?</div>

          <button onClick={()=> navigate('/community')}>Login</button>
      </form>
  )
}

export default LoginPhoneInput