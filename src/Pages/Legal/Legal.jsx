import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import "./Legal.css";
import SettingsTabMobile from "../../components/Settings/SettingsTab/SettingsTabMobile";
import SettingsTab from "../../components/Settings/SettingsTab/SettingsTab";
import Terms from "../../components/Legal/Terms/Terms";
import Privacy from "../../components/Legal/Privacy/Privacy";
import Imprint from "../../components/Legal/Imprint/Imprint";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import { useLocation } from "react-router-dom";


const Legal = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const [opt, setOpt] = useState(0);
    const tabList = [{ value: 'Terms' }, { value: 'Privacy' }, { value: 'Imprint' }];

    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={''} />
                <div className='edit-profile-center-content-wrapper w-75'>
                    <SettingsTabMobile opt={opt} tabList={tabList} currentTab={(a) => setOpt(a)}/>
                    <div className='edit-profile-center-content'>
                        <SettingsTab title={'Legal'} opt={opt} tabList={tabList} currentTab={(a) => setOpt(a)} />

                        {opt === 0 ?
                            <Terms /> :
                            opt === 1 ?
                                <Privacy /> :
                                <Imprint />}
                    </div>
                </div>
            </div>
            <SidebarMobile />
        </div>
    )
}

export default Legal;