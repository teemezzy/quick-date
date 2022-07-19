import React from 'react'
import "./SettingsTab.css";
const SettingsTab = ({ opt, tabList, currentTab, title }) => {
    return (
        <div>
            <div className='settingsTabTitle'>{title}</div>
            {tabList.map((tab, key) =>
                <div key={key} onClick={() => currentTab(key)} className={opt === key ? 'edit-profile-active edit-prof-link-nav' : "edit-prof-link-nav"} >
                    {tab.value}
                </div>
            )}
        </div>
    )
}

export default SettingsTab;