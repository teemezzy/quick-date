import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quick_date from "../../assets/images/quick_date.png";
import sm_screen_one from "../../assets/images/sm_screen_one.svg";
import sm_screen_two from "../../assets/images/sm_screen_two.svg";
import sm_screen_three from "../../assets/images/sm_screen_three.svg";
import sm_screen_four from "../../assets/images/sm_screen_four.png";
import sm_screen_five from "../../assets/images/sm_screen_five.png";

import "./Header.css";

const Header = () => {
    const navigate = useNavigate()
    const linkToLogin = () => navigate('/login');
    const linkToSignUp = () => navigate('/signup');
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="d-flex justify-content-between  align-items-baseline bg-white header-container">
            <div><img src={quick_date} alt="quick-date" /></div>
            <div className="d-flex align-items-baseline">
                <div>
                    {!showNav ?
                        <div className='toggle' onClick={() => setShowNav(!showNav)}></div>
                        : 
                        <div className="closeToggle" onClick={() => setShowNav(!showNav)}></div>
                    }
                </div>
                <div className="nav-content">
                    <button className="border-0 bg-transparent m-2" onClick={linkToSignUp}>Don't have an Account?</button>
                    <button className="border border-danger rounded-pill bg-white pl-4 pr-4 add-pad" onClick={linkToLogin}>
                        Login
                    </button>
                </div>
                {
                    showNav ?
                        <div className="smaller-screen-header">
                            <div className="d-flex justify-content-center align-items-center"><img src={sm_screen_one} alt="one" /></div>
                            <div className="d-flex m-4 justify-content-between align-items-center">
                                <img src={sm_screen_two} alt="two" />
                                <img src={sm_screen_three} alt="three" />
                            </div>
                            <div><button className="linker mt-4 mb-4" onClick={linkToLogin}>Login</button></div>
                            <div ><button className="linker" onClick={linkToSignUp}>Create an Account</button></div>
                            <div className="d-flex m-4 justify-content-center align-items-center">
                                <div>
                                    <img src={sm_screen_four} className="p-4" alt="four" />
                                    <img src={sm_screen_five} alt="five" />
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Header;