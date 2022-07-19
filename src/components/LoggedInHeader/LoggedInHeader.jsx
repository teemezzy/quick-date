import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import caret from "../../assets/images/caret.svg";
import logo from "../../assets/images/Logo.svg";
import testPic from "../../assets/images/hookup2.svg";
import ProfileOptionsModal from "../ProfileOptionsModal/ProfileOptionsModal";


const LoggedInHeader = () => {
    const navigate = useNavigate();
    const navigateToNotification = ()=> navigate('/notification');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }

    },[isOpen])

    const closeSuccessModal = () =>{
        setIsOpen(false);
    }

    return (
        <header>
            <nav className="shadow-sm p-4 mb-4 bg-white topNav">
                <div className="h-contents d-flex justify-content-between">
                    {/* header logo */}
                    <img className="logo" src={logo} alt="Logo.svg" />
                    {/* profile pics and notifications icon */}
                    <div className=" h-contents d-flex justify-content-between align-items-center">
                        <div onClick={navigateToNotification}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell noti" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </div>
                        <div className="profilePicsHeader" onClick={()=> navigate('/personal-profile')}><img src={testPic} width="40px" height="40px" alt="user-profile" /></div>
                        <img onClick={()=>setIsOpen(true)} className="caret" src={caret} alt="caret.svg" />
                    </div>
                </div>
            </nav>
            <ProfileOptionsModal  open={isOpen} onClose={closeSuccessModal} />
        </header>
    )
}

export default LoggedInHeader;