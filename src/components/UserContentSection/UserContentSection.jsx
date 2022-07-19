import React, { useState } from 'react';
import UsersPicturesGrid from '../UserPicturesGrid/UsersPicturesGrid';
import UserPostsGrid from '../UserPostsGrid/UserPostsGrid';
import './UserContentSection.css';
import './UserContentSectionMobile.css';

const UserContentSection = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

  return (
    <div className='user-content-section-container'>
        <div className='profile-user-content-tab-control'>
            <div onClick={()=> toggleTab(1)} className={toggleState === 1 ?"profile-user-content-tab-active": ""}>Post</div>
            <div onClick={()=> toggleTab(2)} className={toggleState === 2 ?"profile-user-content-tab-active": ""}>Pictures</div>
            <div onClick={()=> toggleTab(3)} className={toggleState === 3 ?"profile-user-content-tab-active": ""}>Videos</div>
        </div>

        {
            toggleState === 1?(
               <UserPostsGrid />
            ): toggleState === 2 ?(
                <UsersPicturesGrid />
            ):(
                <UsersPicturesGrid />
            )
        }
    </div>
  )
}

export default UserContentSection