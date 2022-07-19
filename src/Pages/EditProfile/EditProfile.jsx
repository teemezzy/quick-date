import React, { useEffect, useState } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './EditProfile.css';
import './EditProfileMobile.css';
import {BsImageFill} from 'react-icons/bs';

import edit_profile_img from "../../assets/images/sidenav-profile.svg";

import EditProfileCont from './EditProfileCont';
import ProfileStatusCard from '../../components/ProfileStatusCard/ProfileStatusCard';
import AccountOptionTab from '../../components/AccountOptionTab/AccountOptionTab';
import { useLocation } from 'react-router-dom';


const EditProfile = () => {
  const [toggle, setToggle] = useState(1);
  // const [perc, setPerc] = useState(46);
  const [selectedProfileImg, setSelectedProfileImg] = useState('');


  // const progPercOne = useRef(null);
  // const progPercTwo = useRef(null);
  // const progPercThree = useRef(null);

  const togglePage = (v) => {
    setToggle(v)
  }




  const encodeFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

const handleProfileImgUpload = (e) => {
  if(e.target.files){
          encodeFileToBase64(e.target.files[0])
          .then(result =>{
              setSelectedProfileImg(result)
          })
  }
}
const pathname = useLocation();

useEffect(() => {
  window.scrollTo(0, 0)
}, [pathname])


  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar />
            
            <div className='edit-profile-center-content-wrapper w-75'>
                <div className='edit-profile-heading'>Account</div>

                <div className='edit-profile-center-content'>
                  
                  {/* <div>
                    <div className='edit-profile-active' >Profile Information</div>
                    <div>Profile Images</div>
                    <div>Verify Profile</div>
                  </div> */}

                  <AccountOptionTab opt={1} />


                  {
                    toggle === 1 ? (
                      <div>
                      <ProfileStatusCard />
  
                      <div className='edit-prof-img-section'>
  
                        <div className='edit-second-sect-heading'>Profile Picture</div>
  
                        <div className='edit-prof-img-section-card'>
                          {
                            selectedProfileImg  !== '' ?(
                              <img src={selectedProfileImg} alt="card" className='profile-img-holder' />
                            ) :(
                              <img src={edit_profile_img} alt="card" className='profile-img-holder' />
                            )
                          }
  
  
                          <div>
                            <input accept="image/png, image/jpeg, image/jpg" onChange={handleProfileImgUpload} type="file" className='edit-prof-upload-input' id="edit-prof-upload" />
                            <label className='edit-prof-upload-btn' htmlFor="edit-prof-upload">
                              <BsImageFill className='edit-prof-upload-icon' />
                              <span>Upload Profile Picture</span>
                            </label>
  
                          </div>
                        </div>
  
                      </div>
  
                      <div className='edit-profile-detail-section'>
  
                        <div className='edit-prof-details-heading'>Profile Details</div>
  
                        <div className='edit-prof-overall-form-container'>
                          
                          {/* div one */}
                          <div className='edit-prof-top-form-container'>
  
                            <div className='edit-prof-inputs-container'>
  
                              <div className='edit-prof-input-wrapper'>
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='username' />
                              </div>
  
                              <div className='edit-prof-input-wrapper'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Email' />
                              </div>
  
                              <div className='edit-prof-input-wrapper'>
                                <label htmlFor="">Location</label>
                                <input type="text" placeholder='Location' />
                              </div>
  
                              <div className='edit-prof-input-wrapper'>
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder='Country' />
                              </div>
  
                            </div>
  
                            <button onClick={()=>{ togglePage(2)}} className='edit-prof-continue-btn'>Continue</button>
                          </div>
  
                          {/* div two */}
                          <div className='edit-prof-bottom-form-container'>
  
                              <div className='edit-prof-inputs-container'>
  
                                <div className='edit-prof-input-wrapper'>
                                  <label htmlFor="">City</label>
                                  <input type="text" placeholder='City' />
                                </div>
  
                                <div className='edit-input-double-input-wrapper'>
  
                                  <div className='the-input-wrapper'>
                                    <label htmlFor="">Age</label>
                                    <input type="text" placeholder='Age' />
                                  </div>
  
                                  <div className='the-input-wrapper'>
                                    <label htmlFor="">Height</label>
                                    <input type="text" placeholder='Height' />
                                  </div>
  
                                </div>  
  
                                <div className='edit-prof-input-wrapper'>
                                  <label htmlFor="">Body Type</label>
                                  <input type="text" placeholder='Body Type' />
                                </div>
  
                                <div className='edit-prof-input-wrapper'>
                                  <label htmlFor="">Profession</label>
                                  <input type="text" placeholder='Profession' />
                                </div>
  
                                <div className='edit-prof-input-wrapper'>
                                  <label htmlFor="">Language</label>
                                  <input type="text" placeholder='Language' />
                                </div>
  
                                <div className='edit-prof-input-wrapper'>
                                  <label htmlFor="">About You</label>
                                  <textarea rows={'7'}  type="text" placeholder='About You' />
                                </div>
                                
                              </div>
  
                          </div>
  
                        </div>
  
                      </div>
  
                    </div>
                    ):(
                      <EditProfileCont />
                    )
                  }

                  {/* ennding here */}

                </div>
            </div>


            <SidebarMobile />
        </div>
    </div>
    
  )
}

export default EditProfile