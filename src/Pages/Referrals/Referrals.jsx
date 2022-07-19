import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Referrals.css";

const Referrals = () => {
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
                        <div>
                            <p className="heading">Referrals</p>
                            <div className='refer-title'>
                                <p><b>Invite a friend and get $15</b></p>
                                <p>Give a friend promo code on $15 and you'll get $15 off your next  subscription</p>
                            </div>
                            <div className="share-section mb-4">
                                <div className="share-code">Geeevdkdfvd fdd <span>Copy</span></div>
                                <button className="share-btn">Share</button>
                            </div>
                            <div>
                                <p className="text-center mt-4"><b>Referral Earnings</b></p>
                                <div className="earnings">
                                    <div>
                                        <p>from: Thomas Woodrow Wilson</p>
                                        <p className="c-grey">Reward for an invite</p>
                                    </div>
                                    <div>
                                        <p>N15</p>
                                        <p className="c-grey">01.15.22 15:43</p>
                                    </div>
                                </div>
                                <div className="earnings">
                                    <div>
                                        <p>from: Thomas Woodrow Wilson</p>
                                        <p className="c-grey">Reward for an invite</p>
                                    </div>
                                    <div>
                                        <p>N15</p>
                                        <p className="c-grey">01.15.22 15:43</p>
                                    </div>
                                </div>
                                <div className="earnings">
                                    <div>
                                        <p>from: Thomas Woodrow Wilson</p>
                                        <p className="c-grey">Reward for an invite</p>
                                    </div>
                                    <div>
                                        <p>N15</p>
                                        <p className="c-grey">01.15.22 15:43</p>
                                    </div>
                                </div>
                                <div className="earnings">
                                    <div>
                                        <p>from: Thomas Woodrow Wilson</p>
                                        <p className="c-grey">Reward for an invite</p>
                                    </div>
                                    <div>
                                        <p>N15</p>
                                        <p className="c-grey">01.15.22 15:43</p>
                                    </div>
                                </div>
                                <div className="earnings">
                                    <div>
                                        <p>from: Thomas Woodrow Wilson</p>
                                        <p className="c-grey">Reward for an invite</p>
                                    </div>
                                    <div>
                                        <p>N15</p>
                                        <p className="c-grey">01.15.22 15:43</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referrals;