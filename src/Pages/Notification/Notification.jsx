import React, { useEffect, useState } from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import "./Notification.css";
import chev1 from "../../assets/images/chevleft.svg";
import mark from "../../assets/images/markasread.svg";
import lock from "../../assets/images/lock.svg";
import { useLocation } from "react-router-dom";


const Notification = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    const [currentNotification, setCurrentNotification] = useState(0); 
    let notificationsArray = [
        {text: 'Your password has been successfully changed', time: 'August 25, 2022 10:45pm'}, 
        {text: 'You have received a welcome gift of 100 Token.', time: 'August 25, 2022 10:45pm'},
        {text: 'Your password has been successfully changed', time: 'August 25, 2022 10:45pm'},
    ]
    return (
        // navbar
        <div>
            <LoggedInHeader />
            {/* side nav */}
            <div className="d-flex">
                <Sidebar />
                <div className="notification-container">
                    <div className="notification-title d-flex justify-content-between align-items-baseline">
                        <div className="d-flex align-items-baseline">
                            <img className="chevleft" src={chev1} alt="navigate left" />
                            <p className="thenotitext1">
                                Notification
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="markicon" src={mark} alt="navigate left" />
                            <p className="thenotitext2">
                                Mark as read
                            </p>
                        </div>

                    </div>
                    {/* next */}
                    {notificationsArray.map((notification, key) =>
                    <div key={key} className={`container notisection ${currentNotification===key ? 'active-note' : 'inactive-note'}`} onClick={() => setCurrentNotification(key)}>
                        <div className="">
                            <div className="">
                                <ul className="">
                                    <li>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="w-75">
                                                <p>{notification.text}</p>
                                                <p>{notification.time}</p>
                                            </div>
                                            <div className="w-25 noti-icon">
                                                <img src={lock} alt="icon" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <SidebarMobile /> 
        </div>
    )
}

export default Notification;