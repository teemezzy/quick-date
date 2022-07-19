import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import hookup1 from "../../assets/images/hookup1.svg";
import post_placeholder_img from "../../assets/images/post_placeholder_img.png";

import './UserSinglePost.css';

const UserSinglePost = () => {
  return (
    <div className='user-single-post-container'>

        <div className='post-top-section'>
            <div className='profile-image-part'>
                <img className='' src={hookup1} alt="" />

                <div className='user-single-post-name-and-location'>
                    <div>Elena</div>
                    <div>
                        <MdLocationPin />
                        <div>Lagos, Nigeria</div>
                    </div>
                </div>

            </div>

            <div>3 days ago</div>    
        </div>

        <div>I love how my tits look through this open top.</div>

        <img src={post_placeholder_img} alt="" />
    </div>
  )
}

export default UserSinglePost