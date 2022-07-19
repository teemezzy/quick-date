import React, { useEffect, useState } from 'react'
import './Post.css'
import './PostMobile.css'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BsArrowLeft } from 'react-icons/bs';


// import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import HotpicksHolder from '../../components/HotpicksHolder/HotpicksHolder';

import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";
import SidebarMobile from '../../components/Sidebar/SidebarMobile'
import RequestChatModal from '../../components/RequestChatModal/RequestChatModal'
import UserPostsGrid from '../../components/UserPostsGrid/UserPostsGrid'
import { useLocation } from 'react-router-dom'

const Post = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const [displayChatRequest, setDisplayChatRequest] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({ image: hookup1, id: 1, rate: true, verified: true, firstname: 'Elena' })
    }, [userData])


    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: false }]
    return (
        <div>
            <LoggedInHeader />

            <div className="d-flex">
                <Sidebar activeLink={'post'}/>
                <div className='user-profile-center-content-wrapper w-75'>
                    <div className='user-profile-sect-heading-nav'>
                        <BsArrowLeft className='back-arrow' />
                        <div className='user-profile-heading'>Posts</div>
                    </div>

                    <div className='user-profile-center-content'>
                        <div><UserPostsGrid /></div>
                        <div>

                            <div>Recommendations</div>

                            <div className='profile-recommended-section'>
                                {hotPicks.map((user, userID) =>
                                    <div key={userID}> <HotpicksHolder userData={user} /></div>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
                {
                    displayChatRequest ?
                        <RequestChatModal member={userData} closeModal={() => setDisplayChatRequest(false)} /> : null
                }

                <SidebarMobile />
            </div>

        </div>
    )
}

export default Post;