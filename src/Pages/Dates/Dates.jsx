import React, { useEffect, useState } from "react";
import "./Dates.css";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import DateApplications from "../../components/Dates/DateApplications/DateApplications";
import DateRequests from "../../components/Dates/DateRequests/DateRequests";
import Sidebar from "../../components/Sidebar/Sidebar";
import filter from "../../assets/images/filter.svg"
import location from "../../assets/images/carbon_location.svg";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import DateForm from "../../components/Dates/DateForm/DateForm";
import { useLocation } from "react-router-dom";

const Dates = () => {
    const [currentDateTab, setCurrentDateTab] = useState('apply-dates');
    const [showForm, setShowForm] = useState(false);
    const hideContent = () => {
        setShowForm(true);
    }
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'dates'} />
                <div className='date-content-wrapper w-75 p-2'>
                    {!showForm ?
                        <div>
                            <div className="nav-buttons">
                                <button className={`apply-date ${currentDateTab === 'apply-dates' ? 'current' : ''}`} onClick={() => setCurrentDateTab('apply-dates')} >Apply for Dates</button>
                                <button className={`apply-date ${currentDateTab !== 'apply-dates' ? 'current' : ''}`} onClick={() => setCurrentDateTab('')}>My Date Request</button>
                            </div>
                            {currentDateTab === "apply-dates" ?
                                <div className="nav-filter">
                                    <div className="input-container">
                                        <img src={location} alt="location" />
                                        <input placeholder="City, Country" />
                                    </div>
                                    <div><img src={filter} alt="filter" /></div>
                                </div>
                                : <p className="no-display-shadower"></p>
                            }
                            {
                                currentDateTab === "apply-dates" ?
                                    <DateApplications />
                                    :
                                    <DateRequests hideContent={() => hideContent()} />
                            }
                        </div>
                        :
                        <div className="p-2">
                            <DateForm />
                        </div>
                    }
                </div>
            </div>
            <SidebarMobile />
        </div>
    )
}

export default Dates;