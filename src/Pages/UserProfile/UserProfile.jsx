import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import './UserProfileMobile.css'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BsArrowLeft, BsCameraVideo } from 'react-icons/bs';
import { MdLocationPin, MdOutlineMessage } from 'react-icons/md';
import { VscDeviceCamera } from 'react-icons/vsc';
import midImgOne from '../../assets/images/prof-placeholder-one.png'
import midImgTwo from '../../assets/images/prof-placeholder-two.png'


// import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import ProfileAboutSection from '../../components/ProfileAboutSection/ProfileAboutSection';
import UserContentSection from '../../components/UserContentSection/UserContentSection';
import HotpicksHolder from '../../components/HotpicksHolder/HotpicksHolder';

import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";
import SidebarMobile from '../../components/Sidebar/SidebarMobile'
import RequestChatModal from '../../components/RequestChatModal/RequestChatModal'
import { useLocation } from 'react-router-dom'

const UserProfile = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const [displayChatRequest, setDisplayChatRequest] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({ image: hookup1, id: 1, rate: true, verified: true, firstname: 'Elena' })
    }, [userData])
    

    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: false }]
    return (
        <div>
            <LoggedInHeader />

            <div className="d-flex">
                <Sidebar />
                <div className='user-profile-center-content-wrapper w-75'>
                    <div className='user-profile-sect-heading-nav'>
                        <BsArrowLeft className='back-arrow' />
                        <div className='user-profile-heading'>Profile</div>
                    </div>

                    <div className='user-profile-center-content'>
                        <div>
                            <div className='user-profile-top-card'>

                                <div className='user-profile-mobile-bg-img'>
                                    <img src={hookup1} alt="" />
                                </div>

                                <BsArrowLeft className='back-arrow-two' />

                                <div className='user-profile-img-container'>
                                    <img className='user-profile-img' src={hookup1} alt="" />
                                </div>

                                <div className='profile-name-details'>
                                    <div className='profile-name-and-location'>
                                        <div className='profile-user-name'>Elena</div>
                                        <div className='location-det'>
                                            <MdLocationPin className='location-icon' />
                                            <div>Lagos, Nigeria</div>
                                        </div>
                                    </div>

                                    <div className='nots-container'>
                                        <div className='nots-mini-icon-wrapper'>
                                            <VscDeviceCamera className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>

                                        <div className='nots-mini-icon-wrapper'>
                                            <BsCameraVideo className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>

                                        <div className='nots-mini-icon-wrapper'>
                                            <MdOutlineMessage className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <button className='profile-nots-btn' onClick={() => setDisplayChatRequest(true)}>Open Chat</button>
                                    <div className='nots-container-mobile'>
                                        <div className='nots-mini-icon-wrapper'>
                                            <VscDeviceCamera className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>

                                        <div className='nots-mini-icon-wrapper'>
                                            <BsCameraVideo className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>

                                        <div className='nots-mini-icon-wrapper'>
                                            <MdOutlineMessage className='nots-mini-icon' />
                                            <div>10</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='user-profile-middle-second-section'>
                                <div className='mid-heading'>
                                    <div>Profile Image</div>
                                    <div>2</div>
                                </div>

                                <div className='mid-images-container'>
                                    <img src={midImgOne} alt="" />
                                    <img src={midImgTwo} alt="" />
                                    <img src={midImgTwo} alt="" />
                                </div>

                            </div>

                            <ProfileAboutSection />

                            <UserContentSection />

                        </div>


                        <div>

                            <div>Recommendations</div>

                            <div className='profile-recommended-section'>
                                {hotPicks.map((user, userID) =>
                                    <div key={userID}> <HotpicksHolder userData={user} /></div>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
                {
                    displayChatRequest ?
                    <RequestChatModal member={userData} closeModal={()=>setDisplayChatRequest(false)} /> : null
                }

                <SidebarMobile />
            </div>

        </div>
    )
}

export default UserProfile