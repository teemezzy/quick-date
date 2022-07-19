import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Support.css";

const Support = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar />
                <div className='referrals-wrapper w-75 p-2'>
                    <div className='content'>
                        <BsArrowLeft className='back-arrow' />
                        <div className="well">
                            <p className="heading">Support</p>
                            <div className="support-input-container">
                                <p className="label">Subject</p>
                                <input />
                            </div>
                            <div>
                                <p className="label">Your message</p>
                                <textarea rows={6}></textarea>
                            </div>
                            <div><button className="send">Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Support;