import React, { useEffect } from 'react';
import './PersonalProfile.css';
import './PersonalProfileMobile.css';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BsArrowLeft } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';



import sidenav_profile from "../../assets/images/sidenav-profile.svg";

import HotpicksHolder from '../../components/HotpicksHolder/HotpicksHolder';

import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import mobile_profile from "../../assets/images/profile_placeholder_one.png";
import testPic from "../../assets/images/test.png";
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import { useLocation, useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

const PersonalProfile = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const navigate = useNavigate();
    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, 
                        { image: hookup2, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, { image: hookup2, id: 1, rate: true, verified: false }]
  return (
    <div>
        <LoggedInHeader />

        <div className="d-flex mr-2 ml-2 ">
            <Sidebar />
            <div className='personal-profile-center-content-wrapper w-75'>

                <div className='personal-prof-heading-nav-container'>
                    <div className='personal-profile-sect-heading-nav'>
                        <BsArrowLeft className='back-arrow' />
                        <div className='personal-profile-heading'>Profile</div>
                    </div>

                    <div className='personal-profile-toggle-wrapper'>
                        
                        <ToggleSwitch />
                        <div>Stealth mode</div>
                    </div>
                </div>

                <div className='personal-profile-center-content'>
                    <div>
                        <div className='personal-profile-top-card'>

                            <div className='personal-profile-mobile-bg-img'>
                                <img src={mobile_profile} alt="" />
                            </div>

                            <div className='personal-profile-and-name-container'>
                                <div className='personal-profile-img-container'>
                                    <img className='personal-profile-img' src={sidenav_profile} alt="" />
                                </div>

                                <div className='profile-name-and-location'>
                                    <div className='profile-user-name'>Elena</div>
                                    <div className='location-det'>
                                        <MdLocationPin className='location-icon' />
                                        <div>Lagos, Nigeria</div>
                                    </div>
                                </div>
                            </div>

                            <div className='profile-name-details'>
                                <div className='pers-profile-btn-container'>
                                    <button className='profile-nots-btn' onClick={()=> navigate('/edit-profile')}>Edit Profile</button>
                                    <button className='profile-nots-btn-two'>Share</button>
                                </div>
                            </div>
                        </div>

                        <ProfileBio />

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
        </div>
        <SidebarMobile />
    </div>
  )
}

export default PersonalProfile