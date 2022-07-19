import React, { useEffect, useState } from "react";
// import Header from "../../components/Header/Header";
import './Login.css';
import './LoginMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';

import LoginEmailInput from "../../components/LoginEmailInput/LoginEmailInput";
import { BiEnvelope } from 'react-icons/bi';
import { BsArrowLeft, BsPhone } from 'react-icons/bs'
import LoginPhoneInput from "../../components/LoginPhoneInput/LoginPhoneInput";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
// import { useDispatch} from "react-redux";


const Login = () => {
    const pathname = useLocation();
    // const dispatch = useDispatch();
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) => {
        setToggleState(tab)
    }

    return (
        <div className="login-container">
            <Header />
            <div className="login-content-wrapper">
                <img className="login-left-img" src={LoginImg} alt="" />
                <img className="login-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">
                        <div onClick={() => navigate('/')}><BsArrowLeft className='back-arrow-login' /></div>
                        <div className="login-input-container">
                            <div className="login-heading">Login</div>

                            <div className={toggleState === 1 ? "input-option-tab em-selected" : "input-option-tab"}>
                                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "login-tab-active" : ""} ><BiEnvelope size={'20px'} /></div>
                                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "login-tab-active" : ""}><BsPhone size={'20px'} /></div>
                            </div>

                            {
                                toggleState === 1
                                    ?
                                    <LoginEmailInput />
                                    :
                                    <LoginPhoneInput />

                            }

                            <div className="ext-link-wrapper">
                                <div>Don't have an account yet?</div>
                                <div onClick={()=>navigate('/signup')}>Sign up for free</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img className="login-btm-right-img" src={LoginBtmRightImg} alt="" />
        </div>
    )
}

export default Login;