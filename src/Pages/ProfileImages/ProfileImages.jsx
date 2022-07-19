import React, { useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './ProfileImages.css';
import './ProfileImagesMobile.css';



import ProfileStatusCard from '../../components/ProfileStatusCard/ProfileStatusCard';
import AccountOptionTab from '../../components/AccountOptionTab/AccountOptionTab';
import { useLocation } from 'react-router-dom';


const ProfileImages = () => {
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
                  


                  <AccountOptionTab opt={2} />

                      <div>
                      <ProfileStatusCard />
  
                      <div className='edit-prof-img-section'>  
                        <div className='profile-images-heading-container'>
                          <div>Profile Images</div>
                          <div>Post at least 3 recent photos of yourself.</div>
                        </div>

                        <div className='profile-images-center-detail'>Drag and Drop your Images or <span>browse</span></div>
  
                        <div className='profile-images-button-container'>
                          <button className='prof-imges-add'>Add Profile Images</button>
                          <button className='prof-imges-save'>Save</button>
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

export default ProfileImages