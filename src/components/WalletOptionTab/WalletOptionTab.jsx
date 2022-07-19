import React from 'react'
import { Link } from 'react-router-dom'
import './WalletOptionTab.css'
import './WalletOptionTabMobile.css'

const WalletOptionTab = ({opt}) => {
  return (
    <div className='wallet-option-container'>
        <Link to='/wallet' className={opt===1?'wallet-option-active wallet-option-link-nav':"wallet-option-link-nav"} >My Wallet</Link>
        <Link to='/subscription' className={opt===2?'wallet-option-active wallet-option-link-nav':"wallet-option-link-nav"}>Subscription</Link>
        <Link to='/buy-token' className={opt===3?'wallet-option-active wallet-option-link-nav':"wallet-option-link-nav"}>Payment</Link>
    </div>
  )
}

export default WalletOptionTab