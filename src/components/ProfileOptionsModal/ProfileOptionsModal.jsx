import React from 'react';
import './ProfileOptionsModal.css';
import './ProfileOptionsModalMobile.css';
import ReactDom from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai'
import {BsChevronCompactDown} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import {BsGrid} from 'react-icons/bs';
import profile_menu_img from "../../assets/images/sidenav-profile.svg";


const ProfileOptionsModal = ({open,onClose}) => {

  

    if(!open) return null;
    return ReactDom.createPortal(
        <>
            <div onClick={onClose} className='profile-opt-modal-overlay'>
                <div onClick={(event)=> event.stopPropagation()} className='profile-opt-modal-card'>
                    <AiOutlineClose onClick={()=> onClose()} className='profile-menu-close' />
                    <div className='profile-opt-modal-content-container'>
                        <img className='profile-opt-img' src={profile_menu_img} alt="profile" />

                        <div className='profile-opt-name'>Makayla</div>

                        <div className='profile-opt-location-desc'><MdLocationOn /> <div>Lagos, Nigeria</div></div>
                    </div>

                    <button className='profile-opt-btn'><BsGrid className='profile-opt-btn-icon' /><span>Buy token</span></button>

                    <div className='profile-opt-options-container'>
                        <div className='profile-opt-item'><div>Account</div><BsChevronCompactDown /></div>
                        <div className='profile-opt-item'><div>Settings</div><BsChevronCompactDown /></div>
                        <div className='profile-opt-item'><div>Wallet</div><BsChevronCompactDown /></div>
                        <div className='profile-opt-item'><div>Referrals</div><BsChevronCompactDown /></div>
                        <div className='profile-opt-item'><div>Legal</div><BsChevronCompactDown /></div>
                        <div className='profile-opt-item'><div>Support</div><BsChevronCompactDown /></div>

                    </div>

                    <button className='profile-opt-logout-btn'>Logout</button>
                </div>
            </div>
        </>,
        document.getElementById('modal-portal')
    )
}

export default ProfileOptionsModal