import React from 'react';
import './EditProfileCont.css';

const EditProfileCont = () => {
  return (
    <div className='edit-profile-center-content-wrapper'>
        <div className='edit-profile-center-content'>
            <div></div>
            <div>
                <div className='edit-prof-next-page-wrapper'>
                    <div className='edit-prof-inputs-container'>
    
                        <div className='edit-prof-input-wrapper'>
                            <label htmlFor="">Language</label>
                            <input type="text" placeholder='Language' />
                        </div>

                        <div className='edit-prof-input-wrapper'>
                            <label htmlFor="">About You</label>
                            <textarea rows={'7'}  type="text" placeholder='About You' />
                        </div>
                    </div>

                    <div className='check-option-container'>
                        <div>
                            <div className='edit-prof-mobile-check-wrapper'>
                                <input type="checkbox" />
                                <div>Profile visibility to QuickDate users</div>
                            </div>
                            <div>I hereby agree that my profile is visible and accessible to all users of the Ohlala services. 
                                    This agreement can be revoked at any time. 
                                    Further information can be found in our privacy statement *
                                </div>
                        </div>

                        <div>
                            <div className='edit-prof-mobile-check-wrapper'>
                                <input type="checkbox" />
                                <div>Payment Method</div>
                            </div>
                            <div>
                                I hereby agree that my preferred payment method is saved for recurring payments. 
                                This agreement can be changed at any time. Simply turn on or off this profile section.
                            </div>
                        </div>
                    </div>

                    <button className='edit-prof-submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfileCont