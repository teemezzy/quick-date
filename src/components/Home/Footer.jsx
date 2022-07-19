import React from "react";
import "./Footer.css";
import footer_quick_date from "../../assets/images/footer_quick_date.svg";
import { useNavigate } from "react-router-dom";

const Footer =()=>{
    const navigate = useNavigate();
    const linkToSignUp =()=> navigate('/signup');

    return (
        <div className="footer-container">
            <div className="footer-item-one">
                <div className="f-title">
                    <div><img src={footer_quick_date} alt="quick dates" className="footer-main-img" /></div>
                    <button onClick={linkToSignUp} className="footer-signup-btn mt-4 mb-4 p-4 border-0 rounded-pill">Create an Account</button>
                </div>
                <div className="footer-link-socials">
                    <div>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>Support</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                        <p className="change-content"><span>Terms and Conditions</span></p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <p>Privacy</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <p>Twitter</p>
                        <p>Snapchat</p>
                        <p>TikTok</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4 mb-4">&copy; 2022 all Right Reserved</p>
        </div>
    )
}

export default Footer;