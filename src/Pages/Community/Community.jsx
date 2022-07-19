import React, { useEffect, useState } from "react";
import "./Community.css";

// hookup images around this section
import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";
import arrow_left from "../../assets/images/arrow-left.png";

// member section here
import filter from "../../assets/images/filter.svg"
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import HotpicksHolder from "../../components/HotpicksHolder/HotpicksHolder";
import Status from "../../components/Status/Status";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import { useLocation } from "react-router-dom";

const Community = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }]
    const members = [{ image: testPic, id: 1, rate: false, verified: true }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }]
    const [showMoreHotpicks, setShowMoreHotpicks] = useState(false);
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={'community'} />
                <div className="w-75 left-content community-holder">
                    <Status />
                    {/* hot pics below here */}
                    <section className="hot-picks-title">
                        <div className="d-flex justify-content-center gap-2 align-items-baseline">
                            {showMoreHotpicks ? <img src={arrow_left} alt={'back'} onClick={() => setShowMoreHotpicks(!showMoreHotpicks)} /> : null}
                            <h3 className="hpicks">Hot Picks</h3>
                            <p className="genderbackgd"><b>Gender</b>: Female</p>
                        </div>
                        <p className="viewall" onClick={() => setShowMoreHotpicks(!showMoreHotpicks)}> {!showMoreHotpicks ? 'View All' : 'Close List'} </p>
                    </section>
                    {/* hotpicks images */}
                    <div className="allhookpicksimages">
                        {hotPicks.map((user, userID) =>
                            <div key={userID}>{showMoreHotpicks || userID < 4 ? <HotpicksHolder userData={user} /> : null}</div>
                        )}
                    </div>

                    {/*member head section */}
                    {!showMoreHotpicks?
                        <div>
                            <section className="hot-picks-title member-block">
                                <div className="d-flex justify-content-center item-one gap-2 align-items-baseline">
                                    <h3 className="hpicks">Members</h3>
                                    <p className="genderbackgd"><b>Gender</b>: Female</p>
                                </div>
                                <span className="searchusers"><input className="usersearchbox" placeholder="search members" type="text" /></span>
                                <img className="filter" src={filter} alt="filter.svg" />
                            </section>
                            <div className="allhookpicksimages">
                                {members.map((user, userID) =>
                                    <div key={userID}><HotpicksHolder userData={user} /></div>
                                )}
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
            <SidebarMobile />
        </div>
    )
}

export default Community;