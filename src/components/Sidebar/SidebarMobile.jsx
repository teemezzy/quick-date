import React from "react";
import "./SidebarMobile.css";
// footer icons
import community from "../../assets/images/community-mobile.svg";
import post from "../../assets/images/post-mobileview.svg";
import adnotfoot from "../../assets/images/notificationfooter.svg";
import chats from "../../assets/images/chats-mobile-view.svg";
import date from "../../assets/images/dating-mobile-view.svg";
import { useNavigate } from "react-router-dom";

const SidebarMobile = () => {
    const navigate = useNavigate();
    return (
        <footer className="foot">
            <div className="footcontentsparent">
                <div className="text-center" onClick={() => navigate('/community')}><img className="comfoot" src={community} alt="community" /> <br /> <span className="small-mobile">Community</span> </div>
                <div onClick={() => navigate('/post')}><img className="postfoot" src={post} alt="posts" /> <br /> <span className="small-mobile">Post</span> </div>
                <div><img className="notfoot" src={adnotfoot} alt="noti" /> </div>
                <div onClick={() => navigate('/dates')}><img className="datefoot" src={date} alt="dating" /> <br /> <span className="small-mobile">Dating</span></div>
                <div onClick={() => navigate('/chats')}><img className="chatfoot" src={chats} alt="chats" /> <br /> <span className="small-mobile">Chats</span></div>
            </div>
        </footer>
    )
}

export default SidebarMobile;