import React, { useEffect, useState } from "react";
// import Header from "../../components/Header/Header";
import './Signup.css';
import './SignupMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../store/feature/SignupSlice";
import Modal from "../../components/ToastrModal/Modal";
import ToastrMessage from "../../components/ToastrModal/ToastrMessage";


const Signup = () => {
    const pathname = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const otpRequestStatus = useSelector(state => state.signup);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, set_c_password] = useState('');
    const [countryCity, setCountryCity] = useState('');
    const [guarantee, setGuarantee] = useState(false);
    const [policy, setPolicy] = useState(false);
    const [error, setError] = useState({});

    // Toastr dependencies
    const [showToastr, setShowToastr] = useState(false);
    const [toastrMsg, setToastrMsg] = useState('');
    const [status, setStatus] = useState(true);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    const handleCheckBox = (e) => {
        const name = e.target.name;
        const check = e.target.checked;

        return name === 'policy' ? setPolicy(check) : setGuarantee(check);
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let stepOne = { email, phone, username, countryCity, c_password, password };
        let submit = [];

        Object.keys(stepOne).forEach((field) => {
            if (field === 'username' && (stepOne[`${field}`].length < 3 || !stepOne[`${field}`])) {
                setError(prev => ({ ...prev, username: true }));
                submit.push(field);
            }
            if (field === 'countryCity' && (stepOne[`${field}`].length < 3 || !stepOne[`${field}`] || !stepOne[`${field}`].includes('/'))) {
                setError(prev => ({ ...prev, countryCity: true }));
                submit.push(field);
            }
            if (field === 'password' && (stepOne[`${field}`].length < 6 || !stepOne[`${field}`] || stepOne[`${field}`] !== stepOne[`c_password`])) {
                setError(prev => ({ ...prev, password: true, c_password: true }));
                submit.push(field);
            }
            if (phone.length !== 11 || !stepOne[`${field}`]) {
                setError(prev => ({ ...prev, phone: true }));
                submit.push(field);
            }
            if (!emailFormat.test(email)) {
                setError(prev => ({ ...prev, email: true }));
                submit.push(field);
            }
        });
        if (submit.length === 0 && email && phone && username && countryCity && password && c_password) {
            if (guarantee && policy) {
                dispatch(addUserData({ username, countryCity, password, email, phone }));
                navigate('/acct-setup');
            } else {
                setToastrMsg('Check the guarantee/policy box');
                setStatus(false);
                setShowToastr(true);
            }

        } else {
            setToastrMsg('Invalid Field(s)');
            setStatus(false);
            setShowToastr(true);
        }
    }
    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'phone') {
            setPhone(value);
            setError({ ...error, phone: false })
        } else if (name === 'password') {
            setPassword(value);
            setError({ ...error, password: false })
        } else if (name === 'username') {
            setUsername(value);
            setError({ ...error, username: false })
        } else if (name === 'countryCity') {
            setCountryCity(value);
            setError({ ...error, countryCity: false })
        } else if (name === 'email') {
            setEmail(value);
            setError({ ...error, email: false })
        } else if (name === 'c_password') {
            set_c_password(value);
            setError({ ...error, c_password: false })
        }
    }

    return (
        <div className="signup-container">
            <Header />
            <div className="signup-content-wrapper">
                <img className="signup-left-img" src={LoginImg} alt="" />
                <img className="signup-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">

                        <div className="signup-input-container">
                            <div className="signup-heading-container">
                                <div className="signup-heading-one">Let’s Get You Started</div>
                                <div className="signup-heading-two">Please enter the details to verify your identity</div>
                            </div>

                            <div className='signup-input-form'>
                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className={`${error.username ? 'input-error' : 'field'} `} placeholder='Enter Username' name='username' onChange={handleInputChange} />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Country/City</label>
                                    <input type="text" className={`${error.countryCity ? 'input-error' : 'field'} `} placeholder='Enter Country/city name' name='countryCity' onChange={handleInputChange} />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className={`${error.email ? 'input-error' : 'field'} `} placeholder='Enter your email address' name='email' onChange={handleInputChange} />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="password">Password</label>
                                    <input className={`${error.password ? 'input-error' : 'field'} `} type="password" placeholder='Enter your password' name='password' onChange={handleInputChange} />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="c_password">Confirm Password</label>
                                    <input type="password" className={`${error.c_password ? 'input-error' : 'field'} `} placeholder='Enter your password' name='c_password' onChange={handleInputChange} />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" className={`${error.phone ? 'input-error' : 'field'} `} placeholder='Phone 0803000000' name='phone' onChange={handleInputChange} />
                                </div>

                                <div className='signup-check-inputs'>
                                    <div className="signup-checkbox-wrapper">
                                        <input type="checkbox" name="guarantee" onChange={handleCheckBox} />
                                        <div>I guarantee that I am at least 18 years old.</div>
                                    </div>

                                    <div className="signup-checkbox-wrapper">
                                        <input type="checkbox" name="policy" onChange={handleCheckBox} />
                                        <div>I have read and accept the privacy policy and the general terms and conditions.</div>
                                    </div>
                                </div>

                                <button onClick={() => handleSubmit()} disabled={otpRequestStatus.status === 'loading'}>{otpRequestStatus.status === 'loading' ? 'loading' : 'Submit'}</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <img className="signup-btm-right-img" src={LoginBtmRightImg} alt="" />
            <Modal open={showToastr} onClose={() => setShowToastr(false)}>
                <ToastrMessage onClose={() => {
                    setShowToastr(false);
                }}
                    toastrMsg={toastrMsg}
                    status={status} />
            </Modal>
        </div>
    )
}

export default Signup;