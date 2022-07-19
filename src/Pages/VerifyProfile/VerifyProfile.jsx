import React, { useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './VerifyProfile.css';
import './VerifyProfileMobile.css';

import verify_placeholder from '../../assets/images/verify_image_placeholder.png'

import ProfileStatusCard from '../../components/ProfileStatusCard/ProfileStatusCard';
import AccountOptionTab from '../../components/AccountOptionTab/AccountOptionTab';
import { useLocation } from 'react-router-dom';


const VerifyProfile = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar />
            
            <div className='edit-profile-center-content-wrapper w-75'>
                <div className='edit-profile-heading'>Account</div>

                <div className='edit-profile-center-content'>
                  
                  <AccountOptionTab opt={3} />

                      <div>
                      <ProfileStatusCard />
  
                      <div className='edit-prof-img-section'>
  
                        <div className='edit-second-sect-heading'>Verify Profile</div>
  
                        <div className='verify-profile-center-card'>
                          <div className='verify-prof-heading'>How to Verify your Profile</div>

                          <div className='verify-prof-text-detail'>
                            <div>Profile Verification is important for the safety of our community</div>
                            <div>Take a moment to verify yourself, please.</div>
                          </div>

                          <img src={verify_placeholder} alt="placeholder" className='ver-prof-image' />

                          <button className='verify-prof-btn'>Verify me</button>
                        </div>

                      </div>
                    </div>
                </div>
            </div>

            <SidebarMobile />
        </div>
    </div>
    
  )
}

export default VerifyProfile