import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getData } from '../../store/feature/LoginSlice';
import Modal from '../ToastrModal/Modal';
import ToastrMessage from '../ToastrModal/ToastrMessage';

const LoginEmailInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  // Toastr dependencies
  const [showToastr, setShowToastr] = useState(false);
  const [toastrMsg, setToastrMsg] = useState('');
  const [status, setStatus] = useState(true);
  const { message, resStatus } = useSelector(state => state.login);

  useEffect(() => {
    if (message === "User login successfully.") {
      setToastrMsg(message);
      setStatus(true);
      setShowToastr(true);
      
      setTimeout(() => {
        navigate('/community');
      }, 2000);
    }

    if(resStatus==='failed'){
      setToastrMsg(message);
      setStatus(false);
      setShowToastr(true);
    }
  }, [message, resStatus, navigate])

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'password') {
      setPassword(value);
      setError({ ...error, password: false })
    } else if (name === 'email') {
      setEmail(value);
      setError({ ...error, email: false })
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let stepOne = { email, password };
    let submit = [];

    Object.keys(stepOne).forEach((field) => {
      if (field === 'password' && (stepOne[`${field}`].length < 6 || !stepOne[`${field}`])) {
        setError(prev => ({ ...prev, password: true, c_password: true }));
        submit.push(field);
      }
      if (!emailFormat.test(email)) {
        setError(prev => ({ ...prev, email: true }));
        submit.push(field);
      }
    });
    if (submit.length === 0 && email && password) {
      dispatch(getData({ password, loginId: email }));
      // navigate('/login');
    } else {
      setToastrMsg('Invalid Field(s)');
      setStatus(false);
      setShowToastr(true);
    }
  }
  return (
    <>
      <div className='login-input-form'>
        <div className='login-input-wrapper'>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' className={`${error.email ? 'input-error' : 'login-input'} `} placeholder='Enter email address' onChange={handleInputChange} />
        </div>

        <div className='login-input-wrapper'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter password' name='password' className={`${error.password ? 'input-error' : 'login-input'} `} onChange={handleInputChange} />
        </div>

        <div className='forgot-pword'>Forgot password?</div>

        <button onClick={() => handleSubmit()} disabled={resStatus === 'loading'} >{resStatus==='loading'? 'please wait':'Submit'}</button>
      </div>
      <Modal open={showToastr} onClose={() => setShowToastr(false)}>
        <ToastrMessage onClose={() => {
          setShowToastr(false);
        }}
          toastrMsg={toastrMsg}
          status={status} />
      </Modal>
    </>
  )
}

export default LoginEmailInput