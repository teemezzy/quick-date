import React, { useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './Wallet.css';
import './WalletMobile.css';

import {IoIosAddCircle} from 'react-icons/io';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {GrUpload} from 'react-icons/gr';
import {MdOutlineFileUpload} from 'react-icons/md';

import wallet_card_icon from '../../assets/images/wallet_card_icon.png';


import WalletOptionTab from '../../components/WalletOptionTab/WalletOptionTab';
import { useLocation } from 'react-router-dom';


const Wallet = () => {
  const pathname = useLocation();

  const tableStatus = 'successful';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar />
            
            <div className='wallet-center-content-wrapper w-75'>
                <div className='wallet-heading'>Wallet</div>

                <div className='wallet-center-content'>
                  
                  <WalletOptionTab opt={1} />

                  <div className='wallet-other-half'>

                    <div className='wallet-top-heading-wrapper'>
                      <div>My Wallet</div>
                    </div>

                    <div className='wallet-card-container'>

                      <div className='wallet-card-one'>
                        <div className='card-one-left-side'>
                          <img src={wallet_card_icon} alt="icon" className='card-one-icon' />
                          
                          <div>
                            <div className='card-one-value'>5000</div>
                            <div className='card-one-value-desc'><span>Token Balance</span><AiOutlineEyeInvisible /></div>
                          </div>
                        </div>

                        <IoIosAddCircle  color='#fff' className='card-one-add-more'/>
                      </div>

                      <div className='wallet-card-two'>
                        <GrUpload className='card-two-icon' />
                        <div>Token Topup</div>
                      </div>

                      <div className='wallet-card-three'>
                        <MdOutlineFileUpload className='card-three-icon' color='#fff' />
                        <div>Transfer Tokens</div>
                      </div>

                    </div>

                    <div className='wallet-txns-table-container'>
                      <div className='wallet-txns-table-title'>My Transactions</div>

                      <div className='wallet-txns-table'>

                        <div className='wallet-txns-table-heading'>
                          <div>Date</div>
                          <div>Action</div>
                          <div>Username</div>
                          <div>Amount</div>
                          <div>Status</div>
                        </div>

                        <div className='wallet-txns-table-body'>
                          <div className='wallet-txns-body-row'>
                            <div>03/01/22</div>
                            <div>Token Top Up</div>
                            <div>Self</div>
                            <div>500</div>
                            <div 
                              className={tableStatus === 'successful'
                                ? 'wallet-success' : tableStatus === 'pending' 
                                ? 'wallet-pending':'wallet-failed'  }>Successful</div>
                          </div>

                          <div className='wallet-txns-body-row'>
                            <div>03/01/22</div>
                            <div>Token Top Up</div>
                            <div>Self</div>
                            <div>500</div>
                            <div 
                              className={tableStatus === 'successful'
                                ? 'wallet-success' : tableStatus === 'pending' 
                                ? 'wallet-pending':'wallet-failed'  }>Successful</div>
                          </div>

                          <div className='wallet-txns-body-row'>
                            <div>03/01/22</div>
                            <div>Token Top Up</div>
                            <div>Self</div>
                            <div>500</div>
                            <div 
                              className={tableStatus === 'successful'
                                ? 'wallet-success' : tableStatus === 'pending' 
                                ? 'wallet-pending':'wallet-failed'  }>Successful</div>
                          </div>

                          <div className='wallet-txns-body-row'>
                            <div>03/01/22</div>
                            <div>Token Top Up</div>
                            <div>Self</div>
                            <div>500</div>
                            <div 
                              className={tableStatus === 'successful'
                                ? 'wallet-success' : tableStatus === 'pending' 
                                ? 'wallet-pending':'wallet-failed'  }>Successful</div>
                          </div>
                        </div>
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

export default Wallet