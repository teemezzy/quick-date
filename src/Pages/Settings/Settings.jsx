import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import "./Settings.css";
import SettingsTab from "../../components/Settings/SettingsTab/SettingsTab";
import SettingsPassword from "../../components/Settings/SettingsPassword/SettingsPassword";
import SettingsKyc from "../../components/Settings/SettingsKyc/SettingsKyc";
import SettingsVoucher from "../../components/Settings/SettingsVoucher/SettingsVoucher";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import SettingsTabMobile from "../../components/Settings/SettingsTab/SettingsTabMobile";
import { useLocation } from "react-router-dom";

const Settings = () => {
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const [opt, setOpt] = useState(0);
    const tabList = [{ value: 'Password' }, { value: 'KYC' }, { value: 'Voucher' }];
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={''} />
                <div className='edit-profile-center-content-wrapper w-75'>
                    <SettingsTabMobile tabList={tabList}  opt={opt} currentTab={(a) => setOpt(a)}/>
                    <div className='edit-profile-center-content'>
                        <SettingsTab title={'Settings'} opt={opt} tabList={tabList} currentTab={(a) => setOpt(a)} />

                        {opt === 0 ?
                            <SettingsPassword /> :
                            opt === 1 ?
                                <SettingsKyc /> :
                                <SettingsVoucher />}
                    </div>
                </div>
            </div>
            <SidebarMobile />
        </div>
        // </div>
    );
}
export default Settings;