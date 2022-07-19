import React, { useState } from 'react';
import './ProfileAboutSection.css';
import './ProfileAboutSectionMobile.css';

const ProfileAboutSection = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (tab) =>{
        setToggleState(tab)
    }

  return (
    <div className='profile-abt-section-container'>
        <div className='profile-abt-info-tab-control'>
            <div onClick={()=> toggleTab(1)} className={toggleState === 1 ?"profile-tab-active": ""}>About</div>
            <div onClick={()=> toggleTab(2)} className={toggleState === 2 ?"profile-tab-active": ""}>Info</div>
        </div>

        {
            toggleState === 1 ?
            (
                <div className='profile-abt-section-info-container'></div>
            ):
            (
                <div className='profile-abt-section-info-container'>
                    
                    <div className='profile-abt-info-item'>
                        <div>CITY</div>
                        <div>Lagos</div>
                    </div>

                    <div className='profile-abt-info-item'>
                        <div>PROFESSION</div>
                        <div>Data Analyst</div>
                    </div>

                    <div className='profile-abt-info-item'>
                        <div>HOBBY</div>
                        <div>Music</div>
                    </div>

                    <div className='profile-abt-info-item'>
                        <div>AGE</div>
                        <div>30</div>
                    </div>

                    <div className='profile-abt-info-item'>
                        <div>LANGUAGE</div>
                        <div>English</div>
                    </div>

                    <div className='profile-abt-info-item'>
                        <div>HEIGHT(cm)</div>
                        <div>140</div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ProfileAboutSection