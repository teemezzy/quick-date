import React from "react";
import stat_sm from "../../assets/images/stat-sm.svg";

import './Stat.css';

const Stat = () => {
    return (
        <div>
            <div>
                <div className="w-100"><img className="w-100" src={stat_sm} alt="stat star" /></div>
            </div>
        </div>
    )
}

export default Stat;