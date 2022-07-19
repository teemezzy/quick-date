import React, { useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './Subscription.css';
import './SubscriptionMobile.css';
import {ImCheckmark} from 'react-icons/im';


import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'

import WalletOptionTab from '../../components/WalletOptionTab/WalletOptionTab';
import { useLocation } from 'react-router-dom';


const Subscription = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar activeLink={'buy-token'} />
            
            <div className='subscription-center-content-wrapper w-75'>
                <div className='subscription-heading'>Wallet</div>

                <div className='subscription-center-content'>
                  
                  <WalletOptionTab opt={2} />

                  <div className='subscription-other-half'>

                    <div className='sub-top-heading-wrapper'>
                      <div>Subscription</div>

                      <div className='second-item-in-top-heading'>
                        <div className='bill-monthly'>Bill Monthly</div>
                        <ToggleSwitch />
                        <div className='bill-annually'>Bill Annually</div>
                      </div>

                    </div>

                    <div className='subscription-option-cards-container'>

                        <div className='subscription-card'>
                          <div className='card-title-wrapper'>
                            <div className='card-title'>Basic</div>
                          </div>


                          <div className='card-list'>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Hot Picks Ranking</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Explore Community</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Limited Media Upload</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Limited Date Applications</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>25 Tokens</div></div>
                          </div>

                          <div className='card-standalone-value'>500 Tokens</div>

                          <button className='card-button'>Choose</button>
                        </div>

                        <div className='subscription-card middle-card'>
                          <div className='card-title-wrapper'>
                              <div className='card-title'>Gold</div>
                              <span className='bonus-badge'>Save $40</span>
                            </div>

                            <div className='card-list'>
                              <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Hot Picks Ranking</div></div>
                              <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Recommendations</div></div>
                              <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Unlimited Media Upload</div></div>
                              <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Unlimited Date Applications</div></div>
                              <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>100 Tokens</div></div>
                            </div>

                            <div className='card-standalone-value'>1000 Tokens</div>

                            <button className='card-button'>Choose</button>
                        </div>

                        <div className='subscription-card'>
                          <div className='card-title-wrapper'>
                            <div className='card-title'>Premium</div>
                            <span className='bonus-badge'>Save $40</span>
                          </div>


                          <div className='card-list'>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Hot Picks Ranking</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Recommendations</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Stealth Mode</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>Unlimited Date Applications</div></div>
                            <div className='card-list-item'><ImCheckmark className='card-tick-icon' /> <div>100 Tokens</div></div>
                          </div>

                          <div className='card-standalone-value'>1500 Tokens</div>

                          <button className='card-button'>Choose</button>
                        </div>
                    </div>

                    <div className='subscription-auto-renew-option-section'>
                      <div className='enable-auto-renew-wrapper'>
                        <div>Enable auto renew</div>
                        <ToggleSwitch />
                      </div>
                      <div>This action if checked would renew the subscription when it expires.</div>
                    </div>


                    <div className='subscription-table-section'>

                      <div className='sub-table-heading'>
                        <div>Date</div>
                        <div>Details</div>
                        <div>Amount</div>
                      </div>

                      <div className='sub-table-body'>
                        <div className='sub-table-row'>
                          <div>12/02/2022</div>
                          <div>Subscriptions for beginners</div>
                          <div>N 20</div>
                        </div>

                        <div className='sub-table-row'>
                          <div>12/02/2022</div>
                          <div>Subscriptions for premium membership</div>
                          <div>N 20</div>
                        </div>

                        <div className='sub-table-row'>
                          <div>12/02/2022</div>
                          <div>Subscriptions for beginners</div>
                          <div>N 20</div>
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

export default Subscription