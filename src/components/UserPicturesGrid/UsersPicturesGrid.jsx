import React from 'react';
import  './UsersPicturesGrid.css';
import  './UsersPicturesGridMobile.css';
import image_placeholder from '../../assets/images/image_placeholder.png'


const UsersPicturesGrid = () => {
  return (
    <div className='user-pictures-grid'>
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
    </div>
  )
}

export default UsersPicturesGrid