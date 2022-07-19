import React from "react";

// Sidebar images
import "./Sidebar.css";
import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import com from "../../assets/images/community.svg";
import com_2 from "../../assets/images/community-dark.svg";
import post from "../../assets/images/postIcon.svg";
import post_dark from "../../assets/images/post-dark.png";
import date from "../../assets/images/dating.svg";
import date_dark from "../../assets/images/date-dark.svg";
import chat from "../../assets/images/chat-white.svg";
import chat_dark from "../../assets/images/chat-dark.svg";
import token from "../../assets/images/buy-tokens.svg";
import logout from "../../assets/images/logout.svg";
import location from "../../assets/images/location.png";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ activeLink }) => {
    const navigate = useNavigate();
    const logoutUser = () => console.log('log out user');
    return (
        <div className="navprofile w-25 d-flex flex-column justify-content-start align-items-center">
            <div onClick={()=> navigate('/personal-profile')}><img src={sidenav_profile} alt="my profile" /></div>
            <h3>Makayla <sup>30</sup></h3>
            <span className="mb-4"><img className="location" src={location} alt="location" /><span>Location, Nigeria</span></span>
            <div className="sideNavBtns">
                <button className={`inactive-side-nav ${activeLink === 'community' ? 'active-side-nav' : ''}`} onClick={() => navigate('/community')}>
                    {
                        activeLink === 'community' ?
                            <img className={`communityIcon`} alt="community" src={com} />
                            :
                            <img className={`communityIcon`} alt="community" src={com_2} />
                    }
                    Community
                </button>
                <button className={`inactive-side-nav ${activeLink === 'post' ? 'active-side-nav' : ''}`} onClick={() => navigate('/post')}>
                    {
                        activeLink !== 'post' ?
                            <img className={`communityIcon`} alt="community" src={post} />
                            :
                            <img className={`communityIcon`} alt="community" src={post_dark} />
                    }
                    Post
                </button>
                <button className={`inactive-side-nav ${activeLink === 'dates' ? 'active-side-nav' : ''}`} onClick={() => navigate('/dates')}> 
                {
                        activeLink !== 'dates' ?
                            <img className={`communityIcon`} alt="community" src={date} />
                            :
                            <img className={`communityIcon`} alt="community" src={date_dark} />
                    }
                    Dating
                </button>
                <button className={`inactive-side-nav ${activeLink === 'chats' ? 'active-side-nav' : ''}`} onClick={() => navigate('/chats')}>
                     {
                        activeLink === 'chats' ?
                            <img className={`communityIcon`} alt="community" src={chat} />
                            :
                            <img className={`communityIcon`} alt="community" src={chat_dark} />
                    }
                     Chats
                </button>
                <button className={`inactive-side-nav ${activeLink === 'buy-token' ? 'active-side-nav' : ''}`} onClick={() => navigate('/buy-token')}> <img className="buy-tokenIcon" alt="token" src={token} /> Buy Tokens</button>
                <button className={`inactive-side-nav ${activeLink === 'logout' ? 'active-side-nav' : ''}`} onClick={() => logoutUser()}> <img className="logoutIcon" alt="logout" src={logout} /> Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;