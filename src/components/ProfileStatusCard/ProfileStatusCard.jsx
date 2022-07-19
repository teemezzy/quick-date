import React, { useEffect, useRef, useState } from 'react'
import {IoIosCheckmark} from 'react-icons/io'
import './ProfileStatusCard.css';
import './ProfileStatusCardMobile.css';

const ProfileStatusCard = () => {
    const [perc, ] = useState(46);
    const progPercOne = useRef(null);
    const progPercTwo = useRef(null);
    const progPercThree = useRef(null);

    useEffect(()=> {
        progPercTwo.current.style.width=perc + '%';
        progPercThree.current.style.left= `calc(${perc}% - 30px)`;
      },[perc])

  return (
        <div className='profile-status-card'>
            <div>
                <div className='edit-desc-wrapper'>
                    <div>Profile Information</div>
                    <div><span>Profile Completion Status:</span> <span ref={progPercOne}>{perc}%</span></div>
                </div>
                <button>Save Profile</button>
                </div>

                <div>
                <div className='edit-profile-progress-bar'>
                    <div className='edit-prof-progressing' ref={progPercTwo}></div>
                    <span className='circle-with-mark' ref={progPercThree}>
                        <IoIosCheckmark className='edit-profile-mark' />
                    </span>
                </div>
            </div>
        </div>
  )
}

export default ProfileStatusCard