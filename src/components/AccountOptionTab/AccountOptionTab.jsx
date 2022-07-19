import React from 'react'
import { Link } from 'react-router-dom'

const AccountOptionTab = ({opt}) => {
  return (
    <div>
        <Link to='/edit-profile' className={opt===1?'edit-profile-active edit-prof-link-nav':"edit-prof-link-nav"} >Profile Information</Link>
        <Link to='/profile-images' className={opt===2?'edit-profile-active edit-prof-link-nav':"edit-prof-link-nav"}>Profile Images</Link>
        <Link to='/verify-profile' className={opt===3?'edit-profile-active edit-prof-link-nav':"edit-prof-link-nav"}>Verify Profile</Link>
    </div>
  )
}

export default AccountOptionTab