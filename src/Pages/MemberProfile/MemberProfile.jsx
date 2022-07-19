import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const MemberProfile = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={''} />
                <div className="w-75 m-4 left-content">
                    Member Profile
                </div>
            </div>
        </div>
    )
}

export default MemberProfile;