import React from "react";
import "./SettingsTabMobile.css";

const SettingsTabMobile =({opt, currentTab, tabList}) => {
    return (
        <div className="settings-tab-mobile">
            {tabList.map((tab, key) => <button key={key} className={`${opt === key? 'active': 'regular'}`} onClick={()=> currentTab(key)}>{tab.value}</button>)}
            {/* <button className={`${opt === 1? 'active': 'regular'}`} onClick={()=> currentTab(1)}>KYC</button> */}
            {/* <button className={`${opt === 2? 'active': 'regular'}`} onClick={()=> currentTab(2)}>Voucher</button> */}
        </div>
    )
}

export default SettingsTabMobile;