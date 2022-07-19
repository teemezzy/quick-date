import React, { useEffect } from "react";
// import Header from "../../components/Header/Header";
import './OtpVerification.css';
import './OtpVerificationMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';

import {AiOutlineArrowLeft} from 'react-icons/ai';
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";

const OtpVerification =()=>{
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);
    return(
        <div className="otp-ver-container">
            <Header />
            <div className="otp-ver-content-wrapper">
                <img className="otp-ver-left-img" src={LoginImg} alt="" />
                <img className="otp-ver-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">
                        <AiOutlineArrowLeft />

                        <div className="otp-ver-input-container">
                            <div className="otp-ver-heading-container">
                                <div className="otp-ver-heading-one">OTP Verification</div>
                                <div className="otp-ver-heading-two">Enter OTP sent to verify your email address</div>
                            </div>

                            <form className='otp-ver-input-form' action="">
                                <div className='otp-ver-input-wrapper'>
                                    <label htmlFor="username">Enter OTP</label>

                                    <div className="otp-inputs-wrapper">
                                        <input type="tel" />                                        
                                        <input type="tel" />                                        
                                        <input type="tel" />                                        
                                        <input type="tel" />                                        
                                        <input type="tel" />                                        
                                        <input type="tel" />                                        
                                    </div>
                                </div>


                                <button>Continue</button>
                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
            <img className="otp-ver-btm-right-img" src={LoginBtmRightImg} alt="" />
        </div>
    )
}

export default OtpVerification;