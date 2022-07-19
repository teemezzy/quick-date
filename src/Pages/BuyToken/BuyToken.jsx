import React, { useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './BuyToken.css';
import './BuyTokenMobile.css';

import WalletOptionTab from '../../components/WalletOptionTab/WalletOptionTab';
import { useLocation } from 'react-router-dom';


const BuyToken = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar activeLink={'buy-token'} />
            
            <div className='buy-token-center-content-wrapper w-75'>
                <div className='buy-token-heading'>Wallet</div>

                <div className='buy-token-center-content'>
                  
                  <WalletOptionTab opt={3} />

                  <div className='buy-token-other-half'>

                    <div className='buy-token-top-heading-wrapper'>
                      <div>Payment</div>
                    </div>


                    <div className='buy-token-input-section'>

                        <div className='buy-token-first-input-wrapper'>
                          <div className='buy-token-label'>Enter Token Amount</div>
                          <input type="text" className='buy-token-input' placeholder='enter'/>
                        </div>

                        <div className='buy-token-second-input-wrapper'>
                          <div>Token Value</div>
                          <div className='buy-token-input-box'>
                            <div className='buy-token-currency-label'>N</div>
                            <input type="text" className='buy-token-input-two' placeholder='value' />
                          </div>
                        </div>
                        
                        <button className='buy-token-btn'>Continue</button>
                    </div>



                  </div>

                </div>
            </div>

            <SidebarMobile />
        </div>
    </div>
    
  )
}

export default BuyToken