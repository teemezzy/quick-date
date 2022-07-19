import React, { useEffect, useState } from "react";
import './AccountSetup.css';
import './AccountSetupMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';
import { createUser } from "../../store/feature/SignupSlice";
import {BsGenderFemale, BsGenderMale} from 'react-icons/bs'
import Header from "../../components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import ToastrMessage from "../../components/ToastrModal/ToastrMessage";
import Modal from "../../components/ToastrModal/Modal";
import { addGenderPreference } from "../../store/feature/SignupSlice";
import { useDispatch, useSelector } from "react-redux";

const AccountSetup = ()=>{
    const pathname = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createUserStatus = useSelector(state => state.signup);
    const {userData} = useSelector(state => state.signup)
    const [gender, setGender] = useState('');
    const [preference, setPreference] = useState('');
    // Toastr dependencies
    const [showToastr, setShowToastr] = useState(false);
    const [toastrMsg, setToastrMsg] = useState('');
    const [status, setStatus] = useState(true);


    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        if(Object.entries(userData).length === 0) navigate('/signup');
      }, [userData, navigate])

    useEffect(() => {
        if(createUserStatus?.createUserStatus === 'failed'){
            setToastrMsg(createUserStatus.createUserError);
            setStatus(false);
            setShowToastr(true);
        }
        if(createUserStatus?.createUserStatus === 'success' && createUserStatus.userData.message === "Account created successfully."){
            setToastrMsg(createUserStatus.userData.message);
            setStatus(true);
            setShowToastr(true);

            navigate('/login');
        }
        if(createUserStatus?.createUserStatus === 'success'){
            setToastrMsg(createUserStatus.userData.message);
            setStatus(true);
            setShowToastr(true);
        }  
    }, [createUserStatus, navigate])
    const handleSubmit = ()=>{
        if(gender && preference){
            dispatch(addGenderPreference({gender, preference}));
            // Build post body
            let payload = {
                email: userData.email,
                gender: gender,
                gender_interest: preference,
                country: userData.countryCity? userData.countryCity.split('/')[0] : '',
                city: userData.countryCity? userData.countryCity.split('/')[1] : '',
                country_code: '+234',
                phone: userData.phone.substring(1),
                password: userData.password
            }
            dispatch(createUser(payload));
        }else{
            setToastrMsg('Set Gender and Preference');
            setStatus(false);
            setShowToastr(true);
        }
    }
    return(
        <div className="acct-setup-container">
            <Header />
            <div className="acct-setup-content-wrapper">
                <img className="acct-setup-left-img" src={LoginImg} alt="" />
                <img className="acct-setup-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">
                        {/* <AiOutlineArrowLeft /> */}

                        <div className="acct-setup-input-container">
                            <div className="acct-setup-heading-container">
                                <div className="acct-setup-heading-one">Account Set Up</div>
                                <div className="acct-setup-heading-two">Kindly provide the required details to set up your account</div>
                            </div>

                            <div className='acct-setup-input-form'>

                                <div className='acct-setup-input-wrapper'>
                                    <div className="label-wrapper">
                                        <div><b>1. Gender</b></div>
                                        <div>Check one option that reflects your gender</div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <div className={`field ${gender==='man'? 'field-focus' : ''}`} onClick={()=>setGender('man')}>I am a Man</div>
                                        <div className={`input-icon-wrapper ${gender==='man'? 'icon-focus' : ''}`}>
                                            <BsGenderMale className="input-icon" />
                                        </div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <div className={`field ${gender==='woman'? 'field-focus' : ''}`} onClick={()=>setGender('woman')}>I am a Woman</div>
                                        <div className={`input-icon-wrapper ${gender==='woman'? 'icon-focus' : ''}`}>
                                            <BsGenderFemale className="input-icon" />
                                        </div>
                                    </div>

                                </div>

                                <div className='acct-setup-input-wrapper'>
                                    <div className="label-wrapper">
                                        <div><b>2. Preference</b></div>
                                        <div>Who are you looking for?</div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <div className={`field ${preference==='man'? 'field-focus' : ''}`} onClick={()=>setPreference('man')}>Man</div>
                                        <div className={`input-icon-wrapper ${preference==='man'? 'icon-focus' : ''}`}>
                                            <BsGenderMale className="input-icon" />
                                        </div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <div className={`field ${preference==='woman'? 'field-focus' : ''}`} onClick={()=>setPreference('woman')}>Woman</div>
                                        <div className={`input-icon-wrapper ${preference==='woman'? 'icon-focus' : ''}`}>
                                            <BsGenderFemale className="input-icon" />
                                        </div>
                                    </div>

                                </div>
                                <button onClick={()=> handleSubmit()} disabled={createUserStatus?.createUserStatus === 'loading'}>{createUserStatus?.createUserStatus!== 'loading' ?'Continue' : 'Please Wait'}</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="acct-setup-btm-right-img" src={LoginBtmRightImg} alt="" />
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

export default AccountSetup;